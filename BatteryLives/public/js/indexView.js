
var app = angular.module("batteryLifeView", []);

app.controller("batteryLifeViewController", ["$scope", "$http", function ($scope, $http) {
        
        $scope.categories = [];
        $scope.brands = [];

        
        $http.get("/api/getCategories/")
            .then(function (result) {
            $scope.categories = result.data;
        }, function (err) {
            alert(err);
        });

        $http.get("/api/getBrands/")
            .then(function (result) {
            $scope.brands = result.data;
        }, function (err) {
            alert(err);
        });
    }
]);