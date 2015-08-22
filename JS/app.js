var app = angular.module("webDemo", ['ngRoute']);

app.controller('loginDetails', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});
    
app.controller('AddUserController', function($scope) {     
    $scope.message = 'This is Add new user screen NEW !!!';
});
 
app.controller('ShowUsersController', function($scope) {
    $scope.message = 'This is Show users screen NEW !!!';
});    

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/adduser', {
        controller: 'AddUserController',
        templateUrl: 'templates/add-user.html'
      }).
      when('/showusers', {
        controller: 'ShowUsersController',
        templateUrl: 'templates/show-users.html'
      }).
      otherwise({
        redirectTo: '/adduser'
      });
}]);