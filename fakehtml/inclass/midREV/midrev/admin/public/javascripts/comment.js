angular.module('candidate', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.candidates = [];
            $scope.addCandidate = function() {
                var newcomment = { Name: $scope.formContent, upvotes: 0 };
                $scope.formContent = '';
                $http.post('/voting', newcomment).success(function(data) {
                    $scope.candidates.push(data);
                });
            };
            $scope.incrementUpvotes = function(candidate) {
                $http.put('/voting/' + candidate._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        candidate.upvotes += 1;
                    });
            };
            $scope.getAll = function() {
                return $http.get('/voting').success(function(data) {
                    angular.copy(data, $scope.candidates);
                });
            };
            $scope.delete = function(candidate) {
                $http.delete('/voting/' + candidate._id)
                    .success(function(data) {
                        console.log("delete worked");
                        $scope.getAll();

                    });
            };


            $scope.getAll();
        }
    ]);
