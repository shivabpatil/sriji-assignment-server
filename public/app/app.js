angular.module('ambyaApp',['ngResource','ngRoute','ui.bootstrap']);

angular.module('ambyaApp').config(function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{templateUrl:'partials/main/main',controller:'ambyaMainCtrl'})
})
