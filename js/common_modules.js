var commonApp = angular.module('commonModule',[]);

commonApp.factory("displayDate", [ '$http', function($http) {
	return {
		formatDate: function(dateStr) {
			// format date code goes here
			var formattedDate = dateStr;
			return "Today's Date: " + formattedDate;
		},
	}
}]);

commonApp.service("httpService", ['$http', function(http) {
		this.send = function(url,data,callback) {
			http({
				method:'POST',
				cache: false,
				url : url,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data : data,
				timeout : 30000
			})
			.success(function(data, status, headers, config){
				try{
					callback.success(data);
				}catch(e){
					callback.exception(e, data);
				}
				
			})
			.error(function(data, status, headers, config){
				try {
					callback.failure(data);
				}catch(e) {
					callback.exception(e, data);
				}
			});
		};
}]);