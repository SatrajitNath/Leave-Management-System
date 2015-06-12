(function() {
	'use strict';
	
	angular
		.module('leaveApp')
		.factory('Employee', Employee);
	
	Employee.$inject = ['$http', 'BASE_URL'];
	
	function Employee($http, BASE_URL) {
		
		var empFactory = {};
		
		empFactory.create = function(empData) {
			return $http.post(BASE_URL + 'employee', empData);
		};
		
		empFactory.get = function(id) {
			return $http.get(BASE_URL + 'employee/' +id);
		};
		
		empFactory.all = function() {
			return $http.get(BASE_URL + 'employee');
		};

		empFactory.update = function(id, empData) {
			return $http.put(BASE_URL + 'employee/' +id, empData);
		};

		empFactory.del = function(id) {
			return $http.delete(BASE_URL + 'employee/' +id);
		};
		
		return empFactory;
		
	}	
	
})();