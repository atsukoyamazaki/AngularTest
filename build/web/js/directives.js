angular.module("Directives", []).directive("ngTodo", function(){
  return {
    restrict : "A",
    replace : true,
    scope : { todosscope : "=todosDirective" },
    template : "<div><input ng-model='text'><button>Add</button></div>",
    link : function(scope, element) {
      var button = angular.element(element.children()[1]);
      button.bind("click", function(){
        scope.todosscope.push({text : scope.text, done : false});
        console.log("addtext :" + scope.text);
        scope.text = "";
        scope.$apply();
      });
    }
  };
});
