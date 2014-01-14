//console.log('app:' + app.name);
//app.controller("MainCtrl", function($scope) {
//    $scope.title = "Todo";
//    $scope.todos = [
//        {text: "study Angularjs", done: true},
//        {text: "create  Angularjs", done: false}
//
//    ];
//});

//app.controller("MainCtrl", ["$scope", function($scope) {
//        $scope.title = "Todo";
//        $scope.todos = [
//            {text: "study Angularjs", done: true},
//            {text: "create  Angularjs", done: false}
//
//        ];
//    }]);
angular.module("Controllers", ["Services"]).controller("MainCtrl", ["$scope", "LocalStorage", function($scope, LocalStorage) {
        $scope.title = "Todo";
        $scope.todos = [
//            {text: "study Angularjs", done: true},
//            {text: "create  Angularjs", done: false}

        ];
        $scope.doneType = "line";

        $scope.save = function() {
            LocalStorage.save("todos", $scope.todos);
        };
        $scope.load = function() {
            $scope.todos = LocalStorage.get("todos");
        };
        $scope.remove = function() {
            LocalStorage.remove("todos");
        };


    }]);
