const fs = require('fs');



exports.getRecipes = () => {
    var data = require('./db.json');
    return data.recipes;
}

exports.getProjects = () => {
    var data = require('./db.json');
    return data.projects;
}