var app = angular.module('myApp', []);
app.controller('myPersonalFunction', function ($scope) {
    $scope.firstname = "Sid";
    $scope.lastname = "Rath";
    $scope.fullname = function () {
        return $scope.firstname + " " + $scope.lastname;
    }
});