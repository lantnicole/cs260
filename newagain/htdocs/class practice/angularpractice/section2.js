var app = angular.model('myApp',[])
app.controller('myCtrl', function($scope, $http) {
    $scope.cities =[];
    $scope.onup = function(form){
        console.log(form);
        url="http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+form;
        $http.get(url).then(function(response){
            console.log(response);
            $scope.cities = response.data;
        });
        url="https://api.github.com/users/mjcleme";
        $http.get(url).then(function(response){
            $scope.gitstuff=response;
        })
    }
});
