angular.module('voting', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.candidates = [];
            $scope.ballot = [];
            $scope.addCandidate = function() {
                var newcomment = { name: $scope.formContent, upvotes: 0 };
                $scope.formContent = '';
                $http.post('/candidates', newcomment).success(function(data) {
                    $scope.candidates.push(data);
                });
            };
            $scope.addMyVote = function() {
                angular.forEach($scope.candidates, function(value, key) {
                    if (value.selected) {
                        $scope.incrementUpvotes(value);
                        $scope.ballot.push(value);
                    }

                })
            }
            $scope.incrementUpvotes = function(comment) {
                $http.put('/candidates/' + comment._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        comment.upvotes += 1;
                    });
            };
            $scope.getAll = function() {
                return $http.get('/candidates').success(function(data) {
                    angular.copy(data, $scope.candidates);
                });
            };
            $scope.delete = function(candidate) {
                console.log(candidate)
                $http.delete('/candidates/' + candidate._id)
                    .success(function(data) {
                        console.log("delete worked");
                    });
                $scope.getAll();
            };
            $scope.getAll();
        }
    ]);
