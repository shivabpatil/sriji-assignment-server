var express = require('express'),
	bodyParser = require('body-parser'),
	stylus = require('stylus'),
	cookieParser = require('cookie-parser'),
	logger =require('morgan'),
	mongoose = require('mongoose'),
	path = require ('path');

module.exports = function (app,config) {

  // return file from given location
	function compile(str,path) {
		return stylus(str).set('filename',path);
	}

  // set static routing
	app.set('views',config.rootPath + '/server/views');

  // set view engine
	app.set('view engine','jade');

  //set logger
	app.use(logger('dev'));

  // set url encoding and json parsing
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());

  // middleware to get the files
	app.use(stylus.middleware({
			src: config.rootPath + '/public',
			compile:compile
		}
	));

  // apply static routing
	app.use(express.static(path.join(config.rootPath + '/public')));

}
