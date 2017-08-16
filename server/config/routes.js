var 	path = require ('path');
module.exports = function (app,config) {
  // Get all paths starting with partials and replace them with /public/app + given folder and file
	// app.get('/partials/*',function (req,res) {
	// 	console.log(req.params);
	// 	res.render('../../public/' + req.params[0]);
	// });

// all path other than defined paths are redirected to landing page
	app.get('*',function (req,res) {
		res.sendFile(path.join(config.rootPath, 'public/index.html'));
	});
}
