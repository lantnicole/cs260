angular.module('admin', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope) {
            $scope.candidates = [];
            $scope.addCandidate = function(){
                var newName = { name: $scope.name, votes: 0};
                $scope.name='';
                $scope.candidates.push(newName);
            };
            $scope.incrementVotes = function(number){
                number.votes += 1;
            }
        }
        
        ])