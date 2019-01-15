var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    $scope.names = [];
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + '!';
        var newobj = {first:$scope.first,last:$scope.last};
        $scope.names.push(newobj);
    };

});
