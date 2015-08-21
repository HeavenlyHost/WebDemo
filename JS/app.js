var app = angular.module("webDemo", ['ngRoute']);
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/adduser', {
        templateUrl: 'templates/add-user.html',
        controller: 'AddUserController'
      }).
      when('/showusers', {
        templateUrl: 'templates/show-users.html',
        controller: 'ShowUsersController'
      }).
      otherwise({
        redirectTo: '/adduser'
      });
  }]);    

app.controller('loginDetails', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
    
app.controller('AddUserController', function($scope) {
     
    $scope.message = 'This is Add new user screen';
     
});
 
app.controller('ShowUsersController', function($scope) {
 
    $scope.message = 'This is Show users screen';
 
})    
    
});