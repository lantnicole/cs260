var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{ todoText: 'Frank Jones, Billy Jones, Millie Smith', done: false }];

    $scope.todoAdd = function() {
        if ($scope.todoInput) {
            $scope.todoList.push({ todoText: $scope.todoInput, done: false });

            $scope.todoInput = "";
            console.log("first")
        }
        if ($scope.todInput) {
            $scope.todoList.push({ todoText: $scope.todInput, done: false });
            $scope.todInput = "";
            console.log("wtf");
        }

        if ($scope.tdoInput) {
            $scope.todoList.push({ todoText: $scope.tdoInput, done: false });
            $scope.tdoInput = "";
            console.log("last")
        }


    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
