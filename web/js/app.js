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
//app.controller("AppCtrl", function ($scope) {
//   $scope.title = "Main";
//});

angular.module("ToDo", ["ngRoute", "Controllers", "Directives"], ["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "MainCtrl",
    templateUrl : "partials/main.html"
  });
}]);
 
