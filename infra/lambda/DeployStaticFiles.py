import boto3 
import zipfile 
from io import BytesIO 

INPUT_BUCKET = "zjb-site-resources"
INPUT_KEY = "build/build.zip"

s3 = boto3.client('s3') 
codepipeline = boto3.client('codepipeline')


def get_user_params(job_data):
    return job_data['actionConfiguration']['configuration']['UserParameters']


def job_failure(job, message):
    codepipeline.put_job_failure_result(jobId=job, failureDetails={'message': message, 'type': 'JobFailed'})
    
def job_success(job, message):
    codepipeline.put_job_success_result(jobId=job)
    
    
def lambda_handler(event, context): 
    
    
    job_id = event['CodePipeline.job']['id']
    job_data = event['CodePipeline.job']['data']
    
    try:
        output_bucket = get_user_params(job_data)
        zip_buffer = BytesIO(s3.get_object(Bucket=INPUT_BUCKET, Key=INPUT_KEY)['Body'].read())
        
        z = zipfile.ZipFile(zip_buffer)
        
        for filename in z.namelist():

            s3.upload_fileobj(
                z.open(filename),
                Bucket=output_bucket,
                Key=f"{filename}",
                ExtraArgs={
                    'ContentDisposition': 'inline',
                    'ContentType': get_file_type(filename)
                })
                
        job_success(job_id, "files uploaded")
        print("Success")
        
    except Exception as e:
        
        job_failure(job_id, 'Funcion exception' + str(e))
        print(e)
    
    
    return "Complete."
    
    
def get_file_type(filename):
    
    type_mapping = {
        ".html" : "text/html",
        ".png" : "image/png",
        ".jpg" : "image/jpeg",
        ".js" : "application/javascript",
        ".ico" : "image/x-icon",
        ".svg" : "image/svg+xml",
        ".ttf" : "binary/octet-stream",
        ".txt" : "text/plain",
        ".pdf" : "application/pdf"
        }
    
    
    
    for key in type_mapping:
    
        if filename.endswith(key):
            return type_mapping[key]
            
    print("No mapping for ", filename)
    return "application"