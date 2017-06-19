// import packages
var mongoose = require('mongoose'),
    express = require('express');

// set the default environment as development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//database connection
var db = mongoose.connection;

// create express app
var app = express();

//get config objetc
var config = require('./server/config/config')[env];
