'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.otherwise({redirectTo: '/employees'});
}]);
