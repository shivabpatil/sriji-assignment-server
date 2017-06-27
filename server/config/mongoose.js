var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(config){
  //connect to database string
	mongoose.connect(config.db );

  // establish the connection
	var db = mongoose.connection;

  // handle error
	db.on('error',console.error.bind(console,'connection error..'))

  // contection message
	db.once('open',function callback(){
		console.log('Database is rocking and connected....');
	});
}
