angular.module('comment', [])
    .controller('mainctrl', [
        '$scope',
        function($scope) {
            $scope.comments = [];
            $scope.addComment = function() {
                var newcomment = { title: $scope.content, upvotes: 0 };
                $scope.content = '';
                $scope.comments.push(newcomment);
            };
            $scope.incrementVotes = function(comment) {
                comment.upvote += 1;
            };
        }
    ]);