var app = angular.module("Hello", []);
app.controller("HelloCtrl", ["$scope", "$http", function($scope, $http){
  $http({method : "GET", url : "hello.json"}).success(function(data, status, headers, config){
    console.log(data);
  }).error(function(data, status, headers, config){
    console.log(status);
  });
}]);


