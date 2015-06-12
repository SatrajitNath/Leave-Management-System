(function() {
	'use strict';
	
	angular
		.module('leaveApp')
		.factory('Leave', Leave);
	
	Leave.$inject = ['$http', 'BASE_URL'];
	
	function Leave($http, BASE_URL) {
		
		var leaveFactory = {};
		
		leaveFactory.create = function(leaveData) {
			return $http.post(BASE_URL + 'leave', leaveData);
		};
		
		leaveFactory.get = function(id) {
			return $http.get(BASE_URL + 'leave/' +id);
		};

		leaveFactory.getByEID = function(emp_id) {
			return $http.get(BASE_URL + 'leaveid/' +emp_id);
		};
		
		leaveFactory.all = function() {
			return $http.get(BASE_URL + 'leave');
		};

		leaveFactory.update = function(id, leaveData) {
			return $http.put(BASE_URL + 'leave/' +id, leaveData);
		};

		leaveFactory.del = function(id) {
			return $http.delete(BASE_URL + 'leave/' +id);
		};
		
		return leaveFactory;
		
	}	
	
})();