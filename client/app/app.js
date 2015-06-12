(function() {
	'use strict';

	angular
		.module('leaveApp', [
			'ui.router',
			'angular-loading-bar',
			'ngAnimate',
			'ngStorage',
			'leave.templates'
		]);
	// 	.run(run);

	// run.$inject = ['$rootScope', '$location', 'Auth'];

	// function run($rootScope, $location, Auth) {
	// 	$rootScope.$on('$stateChangeStart', function(event) {
	// 		console.log('route change start');
	// 		if (!Auth.isLoggedIn()) {
	//             console.log('DENY');
	//             event.preventDefault();
	//             $location.path('/login');
	           
	//         }
	//         else {
	//             console.log('ALLOW');
	//             $location.path('/home');
	//         }
	// 	})
	// }

})();