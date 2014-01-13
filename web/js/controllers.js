//angular.module("Controllers", []).controller("MainCtrl", ["$scope", function($scope){
//  $scope.title = "Main";
//}]);

//console.log('app:' + app.name);
//app.controller("MainCtrl", function($scope) {
//    $scope.title = "Todo";
//    $scope.todos = [
//        {text: "study Angularjs", done: true},
//        {text: "create  Angularjs", done: false}
//
//    ];
//});

app.controller("MainCtrl" ,["$scope", function($scope){

    $scope.title = "Todo";
    $scope.todos = [
        {text: "study Angularjs", done: true},
        {text: "create  Angularjs", done: false}

    ];
}]);

//angular.module("Controllers", []).controller("MainCtrl", ["$scope",  function($scope) {
//    $scope.title = "Todo";
//    $scope.todos = [
//        {text: "study Angularjs", done: true},
//        {text: "create  Angularjs", done: false}
//
//    ];
//}]);
