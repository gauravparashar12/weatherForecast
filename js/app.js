'use strict';

// App Creation
var testApp = angular.module('testApp', ['ngRoute']);

// Data Provider URL
testApp.constant('APP_URI', 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=14&APPID=9c9472d6ba86cadceccc8bdf5d75b5f0');

// Routing Configuration
testApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller : 'SearchController'
        })
        .otherwise({
            redirectTo: '/404',
            templateUrl: "templates/404.html"
        });
    }
]);