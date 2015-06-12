(function() {
	'use strict';

	angular
		.module('leaveApp')
		.controller('AddEmployeeController', AddEmployeeController)
		.controller('EmployeeListController', EmployeeListController)
		.controller('EditEmployeeController', EditEmployeeController)
		.controller('MyProfileController', MyProfileController)
		.controller('DeleteEmployeeController', DeleteEmployeeController);
		

	AddEmployeeController.$inject = ['$state', 'Employee', '$localStorage', 'loggedInStatus'];
	function AddEmployeeController($state, Employee, $localStorage, loggedInStatus) {

		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();
		
		vm.saveEmployee = function(isValid) {
			if(isValid) {
				Employee.create(vm.empData)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Add Employee Successful!";
					vm.empData = {};
					$state.go('app.employee-list');
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Add Employee Fail!";
				});
			}
		}

	}

	EmployeeListController.$inject = ['Employee', '$localStorage', 'loggedInStatus'];
	function EmployeeListController(Employee, $localStorage, loggedInStatus) {
		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Employee
			.all()
			.success(function(data) {
				vm.employees = data;
			})
			.error(function(data) {
				console.log(data);
			});

	}

	EditEmployeeController.$inject = ['$state', '$stateParams', 'Employee', '$localStorage', 'loggedInStatus'];
	function EditEmployeeController($state, $stateParams, Employee, $localStorage, loggedInStatus) {
		var vm = this;

		vm.title = 'Edit Employee';

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Employee
			.get($stateParams.id)
			.success(function(data) {
				vm.empData = data;
			})
			.error(function(data) {
				console.log(data);
			});


		vm.updateEmployee = function(isValid) {
			if(isValid) {
				Employee.update($stateParams.id, vm.empData)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Update Employee Successful!";
					// vm.empData = {};
					// $state.go('app.employee-list');
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Update Employee Fail!";
				});
			}
		}
	}

	MyProfileController.$inject = ['$state', '$stateParams', 'Employee', '$localStorage', 'loggedInStatus'];
	function MyProfileController($state, $stateParams, Employee, $localStorage, loggedInStatus) {
		var vm = this;

		vm.title = 'My Profile';

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();

		Employee
			.get(vm.usr['id'])
			.success(function(data) {
				vm.empData = data;
			})
			.error(function(data) {
				console.log(data);
			});


		vm.updateEmployee = function(isValid) {
			if(isValid) {
				Employee.update(vm.usr['id'], vm.empData)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Update Profile Successful!";
					
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Update Profile Fail!";
				});
			}
		}
	}

	DeleteEmployeeController.$inject = ['$state', '$stateParams', 'Employee', '$localStorage', 'loggedInStatus'];
	function DeleteEmployeeController($state, $stateParams, Employee, $localStorage, loggedInStatus) {
		var vm = this;

		vm.usr = loggedInStatus.getUser();
		vm.login = loggedInStatus.isLoggedIn();
		
		Employee
			.get($stateParams.id)
			.success(function(data) {
				vm.empData = data;
			})
			.error(function(data) {
				console.log(data);
			});

		vm.deleteEmployee = function(isValid) {
			if(isValid) {
				Employee.del($stateParams.id)
				.success(function(data) {
					
					vm.success = true;
					vm.message="Delete Employee Successful!";
					vm.empData = {};
					$state.go('app.employee-list');
				})
				.error(function(data) {
					
					vm.success = false;
					vm.message="Delete Employee Fail!";
				});
			}
		};

	}
	

})();