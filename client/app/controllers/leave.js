(function() {
	'use strict';

	angular
		.module('leaveApp')
		.controller('AddLeaveController', AddLeaveController)
		.controller('LeaveListController', LeaveListController)
		.controller('LeaveManagementController', LeaveManagementController)
		.controller('EditLeaveController', EditLeaveController)
		.controller('DeleteLeaveController', DeleteLeaveController);
		

	AddLeaveController.$inject = ['$state', 'Leave', '$localStorage', 'loggedInStatus'];
	function AddLeaveController($state, Leave, $localStorage, loggedInStatus) {

		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		vm.saveLeave = function(isValid) {
			if(isValid) {
				
				Leave.create(vm.leaveData)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Add Leave Successful!";
					// vm.leaveData = {};
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Add Leave Fail!";
				});
			}
		}

	}

	LeaveListController.$inject = ['$stateParams', 'Leave', '$localStorage', 'loggedInStatus'];
	function LeaveListController($stateParams, Leave, $localStorage, loggedInStatus) {
		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Leave
			.getByEID(vm.usr['id'])
			.success(function(data) {
				vm.leaves = data;
			})
			.error(function(data) {
				console.log(data);
			});

	}

	LeaveManagementController.$inject = ['Leave', '$localStorage', 'loggedInStatus'];
	function LeaveManagementController(Leave, $localStorage, loggedInStatus) {
		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Leave
			.all()
			.success(function(data) {
				vm.leaves = data;
			})
			.error(function(data) {
				console.log(data);
			});

	}

	EditLeaveController.$inject = ['$state', '$stateParams', 'Leave', '$localStorage', 'loggedInStatus'];
	function EditLeaveController($state, $stateParams, Leave, $localStorage, loggedInStatus) {
		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Leave
			.get($stateParams.id)
			.success(function(data) {
				vm.leaveData = data;
			})
			.error(function(data) {
				console.log(data);
			});


		vm.updateLeave = function(isValid) {
			if(isValid) {
					console.log(vm.leaveData);
					// console.log($stateParams.id);
				Leave.update($stateParams.id, vm.leaveData)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Update Leave"+ data +" Successful!";
					vm.leaveData = {};
					$state.go('app.leave-management');
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Update Leave Fail!";
				});
			}
		}
	}

	DeleteLeaveController.$inject = ['$state', '$stateParams', 'Leave', '$localStorage', 'loggedInStatus'];
	function DeleteLeaveController($state, $stateParams, Leave, $localStorage, loggedInStatus) {
		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Leave
			.get($stateParams.id)
			.success(function(data) {
				vm.leaveData = data;
			})
			.error(function(data) {
				console.log(data);
			});

		vm.deleteLeave = function(isValid) {
			if(isValid) {
				Leave.del($stateParams.id)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Delete Leave Successful!";
					vm.leaveData = {};
					$state.go('app.leave-management');
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Delete Leave Fail!";
				});
			}
		}

	}
	

})();