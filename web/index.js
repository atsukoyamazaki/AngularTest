var app = angular.module("Hello", []);
app.controller("HelloCtrl",["$scope", "$element", "$window",  "$document", "$location", function($scope, $element, $window , $document, $location){
  $element.append("<b>Hello</b>");
  $document.append("<b>Hello2</b>");
  $document.find("p").append("<b>Hello3</b>");
  $window.alert($document.hasClass("css"));
  $document.find("p").append($location.host());
}]);