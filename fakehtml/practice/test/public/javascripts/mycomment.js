angular.module('comment', [])
    .controller('mainctrl', [
        '$scope',
        function($scope) {
            $scope.comments = [];
            $scope.addComment = function(){
                var newComment = { title: $scope.content, upvotes: 0 };
                $scope.content='';
                $scope.comments.push(newComment);
            };
            $scope.incrementVotes = function(comment){
                comment.upvotes += 1;
            }

        }
    ])
