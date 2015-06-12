(function() {
	'use strict';

	angular
		.module('leaveApp')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$state', 'LoginService', '$scope', '$localStorage', 'loggedInStatus'];
	function LoginController($state, LoginService, $scope, $localStorage, loggedInStatus) {

		var vm = this;

		vm.data = {};

		vm.checkLogin = function() {
			
			LoginService.loginUser(vm.data.username, vm.data.password)
			.success(function(data) {
				console.log('success' + data);
				window.localStorage.setItem('l.id', data.id);
				window.localStorage.setItem('l.fname', data.first_name);
				window.localStorage.setItem('l.lname', data.last_name);
				window.localStorage.setItem('l.role', data.role);

				$scope.$storage = $localStorage;
				$localStorage.info = data;
				loggedInStatus.setUser($localStorage.info);

				$state.go('app.dashboard');
			})
			.error(function(data) {
				console.log('error');
				vm.success = false;
				vm.message=data;
			});
			

		};

	}

})();