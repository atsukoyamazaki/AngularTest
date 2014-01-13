//angular.module("ToDo", ["Controllers"], ["$routeProvider", function($routeProvider){
//  $routeProvider.when("/", {
//    controller : "AppCtrl",
//    templateUrl : "partials/main.html"
//  });
//}]);
//
//var app = angular.module('ToDo',  ['ngRoute']);
//
//app.config(function ($routeProvider) {
//  $routeProvider
//    .when('/',
//    {
//      templateUrl : "partials/main.html",
//      controller: "MainCtrl"
//    }
//  )
//});


var app = angular.module("ToDo", ["Controllers", "ngRoute"], ["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "MainCtrl",
    templateUrl : "partials/main.html"
  });
}]);
 
//app.controller("AppCtrl", function ($scope) {
//   $scope.title = "Main";
//});

