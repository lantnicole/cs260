var app = angular.module('myApp', []);
app.controller('myCtrl',
    function($scope, $http) {
        $scope.foodItems = [];
        $scope.onup = function(form) {
            console.log(form);
            var url = "https://www.food2fork.com/api/get?key=ee9f9b47f98d89aa1add7b8fb99c2dad&q=shredded%20chicken";
            
            $http.get(url).then(function(response) {
                console.log(response);
                $scope.recipe = response.data;
                
                $scope.foodItems = response.data.recipe.ingredients;
                
            });
            console.log("in onup");




        };

        

    });
