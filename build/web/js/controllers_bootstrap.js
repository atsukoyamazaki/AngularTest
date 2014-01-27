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
angular.module("Controllers", ["Services", "ngResource"]).controller("MainCtrl", ["$scope", "$resource", function($scope, $resource) {
        $scope.title = "Todo";
        $scope.todos = [
            {text: "study Angularjs", done: true},
            {text: "create  Angularjs", done: false}

        ];
        $scope.doneType = "line";

        var todoModel = $resource("/todos");
        $scope.save = function() {
            console.log($scope.todos);
            todoModel.save({type: "todo", todos: $scope.todos});
        };
        $scope.load = function() {
            $scope.todos = todoModel.query({type: "todo"});
        };
        $scope.remove = function() {
            todoModel.remove({type: "todo"});
            $scope.todos = [];
        };

    }]);
