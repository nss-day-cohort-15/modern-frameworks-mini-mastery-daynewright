'use strict';

var app = angular.module('FlowerApp', ['ngRoute']);

app.config(($routeProvider)=> {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/flowers.html',
    controller: 'FlowerCtrl'
  });

});
