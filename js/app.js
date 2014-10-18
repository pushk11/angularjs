var app = angular.module('mainModule',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	  $routeProvider.when('/demo', {
			templateUrl: 'views/demo.html'
		})
		/*.when('/more', {
			templateUrl: 'views/demo2.html'
		}) */
		.otherwise({redirectTo: '/demo'});
	  
	}]);

app.controller("demoController1", ['$scope', function($scope) {

	$scope.areaOne = "Search Keyword";
	$scope.arr = [{"Name" : "Tom", "Age" : "24"}, {"Name" : "Jony", "Age" : "24"}, {"Name" : "Jack", "Age" : "24"}, {"Name" : "Sony", "Age" : "35"}, {"Name" : "Giny", "Age" : "47"}, {"Name" : "Puma", "Age" : "44"}];
	
}]);

app.controller("demoController2", ['$scope', function($scope) {
	$scope.arr = ["Mohan", "Smith", "Tod", "Lucy", "Alec", "Adidas"];
	$scope.areaTwo = "Search Keyword";
}]);