var path = require('path');

// get root directory
var rootPath = path.normalize(__dirname + '/../..');
console.log(rootPath);

//setup development and production environment
module.exports = {

    development: {
        db: 'mongodb://localhost:27017/studentData',
        rootPath: rootPath,
        port: process.env.PORT || 8000
    },
    production: {
        db: 'mongodb://pnddev:13021991@ds033076.mlab.com:33076/pnddev/pnddevdata',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}