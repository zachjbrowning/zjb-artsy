import axios from "axios";


let instance = axios.create({
  baseURL: `http://localhost:3000/api`,
  header: {
    "content-type": "application/json",
  },
});

export default instance;