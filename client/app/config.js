(function() {
	'use strict';

	angular.
		module('leaveApp')
		.config(config);
		

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		

		$stateProvider
			.state('app', {
				url: '/',
				views: {
					'header': {
						templateUrl: 'client/templates/header.html',
						controller: 'HeaderController as vm'
					},
					'footer': {
						templateUrl: 'client/templates/footer.html'
					}
				}
			})

			.state('app.home', {
				url: 'home',
				views: {
					'header@': {
						templateUrl: 'client/templates/header.html',
						controller: 'HeaderController as vm'
					},
					'content@': {
						templateUrl: 'client/templates/home.html',
						controller: 'HomeController as vm'
					}
				}
			})

			.state('app.login', {
				url: 'login',
				views: {
					'content@': {
						templateUrl: 'client/templates/login.html',
						controller: 'LoginController as vm'
					}
				}
			})

			.state('app.dashboard', {
				url: 'dashboard',
				views: {
					'header@': {
						templateUrl: 'client/templates/header.html',
						controller: 'HeaderController as vm'
					},
					'content@': {
						templateUrl: 'client/templates/dashboard.html',
						controller: 'DashboardController as vm'
					}
				}
			})

			.state('app.add-employee', {
				url: 'add-employee',
				views: {
					'content@': {
						templateUrl: 'client/templates/add-employee.html',
						controller: 'AddEmployeeController as vm'
					}
				}
			})

			.state('app.edit-employee', {
				url: 'edit-employee/:id',
				views: {
					'content@': {
						templateUrl: 'client/templates/edit-employee.html',
						controller: 'EditEmployeeController as vm'
					}
				}
			})

			.state('app.myprofile', {
				url: 'myprofile',
				views: {
					'content@': {
						templateUrl: 'client/templates/my-profile.html',
						controller: 'MyProfileController as vm'
					}
				}
			})

			.state('app.delete-employee', {
				url: 'delete-employee/:id',
				views: {
					'content@': {
						templateUrl: 'client/templates/delete-employee.html',
						controller: 'DeleteEmployeeController as vm'
					}
				}
			})

			.state('app.employee-list', {
				url: 'employee-list',
				views: {
					'content@': {
						templateUrl: 'client/templates/employee-list.html',
						controller: 'EmployeeListController as vm'
					}
				}
			})

			.state('app.leave-management', {
				url: 'leave-management',
				views: {
					'content@': {
						templateUrl: 'client/templates/leave-management.html',
						controller: 'LeaveManagementController as vm'
					}
				}
			})

			.state('app.add-leave', {
				url: 'add-leave',
				views: {
					'content@': {
						templateUrl: 'client/templates/add-leave.html',
						controller: 'AddLeaveController as vm'
					}
				}
			})

			.state('app.edit-leave', {
				url: 'edit-leave/:id',
				views: {
					'content@': {
						templateUrl: 'client/templates/edit-leave.html',
						controller: 'EditLeaveController as vm'
					}
				}
			})

			.state('app.delete-leave', {
				url: 'delete-leave/:id',
				views: {
					'content@': {
						templateUrl: 'client/templates/delete-leave.html',
						controller: 'DeleteLeaveController as vm'
					}
				}
			})

			.state('app.leave-list', {
				url: 'leave-list',
				views: {
					'content@': {
						templateUrl: 'client/templates/leave-list.html',
						controller: 'LeaveListController as vm'
					}
				}
			});

		$urlRouterProvider.otherwise('home');

	}




})();