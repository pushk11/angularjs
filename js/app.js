var app = angular.module('mainModule',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	  $routeProvider.when('/demo', {
			templateUrl: 'views/demo.html'
		})
		/*.when('/more', {
			templateUrl: 'views/demo2.html'
		}) */
		.otherwise({redirectTo: '/demo'});
	  
	}]);

app.controller("demoController1", ['$scope', function($scope) {

	$scope.areaOne = "Area One  for Lovekesh";
	$scope.arr = ["Tom", "Jony", "Jack", "Sony", "Giny", "Puma"];
	
}]);

app.controller("demoController2", ['$scope', function($scope) {
	$scope.arr = ["Mohan", "Smith", "Tod", "Lucy", "Alec", "Adidas"];
	$scope.areaTwo = "Area Two";
}]);