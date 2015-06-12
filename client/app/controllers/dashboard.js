(function() {
	'use strict';

	angular
		.module('leaveApp')
		.controller('DashboardController', DashboardController);
		

	DashboardController.$inject = ['$state', '$scope', '$localStorage', 'loggedInStatus'];
	function DashboardController($state, $scope, $localStorage, loggedInStatus) {

		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();
		
		vm.logOut = function() {
			
			$localStorage.$reset();
			
			$state.go('app.home');
		}

	}

	

})();