(function() {
	'use strict';

	angular
		.module('leaveApp')
		.controller('HeaderController', HeaderController)
		.controller('HomeController', HomeController);

	HeaderController.$inject = ['$state', '$scope', '$localStorage', 'loggedInStatus'];
	function HeaderController($state, $scope, $localStorage, loggedInStatus) {

		var vm = this;

		vm.usr = loggedInStatus.getUser();

		vm.login = loggedInStatus.isLoggedIn();

		vm.logOut = function() {
			$localStorage.$reset();
			$state.go('app.home');
		}

		
		
		
	}

	HomeController.$inject = ['$state', '$localStorage', 'loggedInStatus'];
	function HomeController($state, $localStorage, loggedInStatus) {

		var vm = this;

		vm.goToLogin = function() {
			$state.go('app.login');
		}

		vm.login = loggedInStatus.isLoggedIn();
		
		// vm.logOut = function() {
		// 	$localStorage.$reset();
		// 	$state.go('app.home');
		// }

	}

})();