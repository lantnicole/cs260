angular.module('comment', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.products = [];
            $scope.addProduct = function() {
                var newcomment = { title: $scope.formContent, upvotes: 0 };
                $scope.formContent = '';
                $http.post('/products', newcomment).success(function(data) {
                    $scope.products.push(data);
                });
            };
            $scope.incrementUpvotes = function(comment) {
                $http.put('/products/' + comment._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        comment.upvotes += 1;
                    });
            };
            $scope.getAll = function() {
                return $http.get('/products').success(function(data) {
                    angular.copy(data, $scope.products);
                });
            };
            $scope.delete = function(comment) {
                $http.delete('/products/' + comment._id)
                    .success(function(data) {
                        console.log("delete worked");
                    });
                $scope.getAll();
            };
            $scope.getAll();
        }
    ]);
