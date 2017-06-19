var path = require('path');

// get root directory
var rootPath = path.normalize(__dirname + '../../../');

//setup development and production environment
module.exports = {
  development:{
    db:'mongodb://localhost:27017/sportsdata',
    rootPath:rootPath,
    port:porcess.evn.PORT || 8000
  },
  production{}
}
