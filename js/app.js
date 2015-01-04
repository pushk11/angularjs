var app = angular.module('mainModule',['ngRoute','commonModule']);

app.config(['$routeProvider',function($routeProvider) {
	  $routeProvider.when('/demo', {
			templateUrl: 'views/demo.html'
		})
		/*.when('/more', {
			templateUrl: 'views/demo2.html'
		}) */
		.otherwise({redirectTo: '/demo'});
	  
	}]);

app.controller("demoController1", ['$scope', 'displayDate', 'httpService', function($scope, displayDate, http) {

	/*
	// Callback Format as per httpService defined in common_modules.js
	var callback = {
		success: function(response) {
			$scope.arr = response;
		},
		failure: function(response) {
			$scope.error = "Error Occured!!";
			console.log(response);
		},
		exception : function(e, data){
			console.log('Exception catched' + e);
			$scope.error = "Exception: " + e;
		}
	};*/
	
	$scope.todayDate = displayDate.formatDate(new Date());
	
	$scope.areaOne = "Search Keyword";
	$scope.arr = [{"Name" : "Tom", "Age" : "24"}, {"Name" : "Jony", "Age" : "24"}, {"Name" : "Jack", "Age" : "24"}, {"Name" : "Sony", "Age" : "35"}, {"Name" : "Giny", "Age" : "47"}, {"Name" : "Puma", "Age" : "44"}];
	
	// Uncomment the code of AJAX below - http with POST method
	/*var url = ""; // set Server URL
	var data = {}; // post data
	//console.log(jQuery.param(data)); // jQuery.param will create Query String
	http.send(url, jQuery.param(data), callback );
	*/

}]);

app.controller("demoController2", ['$scope', function($scope) {
	$scope.arr = ["Mohan", "Smith", "Tod", "Lucy", "Alec", "Adidas"];
	$scope.areaTwo = "Search Keyword";
}]);