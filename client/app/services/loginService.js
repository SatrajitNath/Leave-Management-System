(function() {
	'use strict';
	
	angular
		.module('leaveApp')
		.service('LoginService', LoginService)
		.service('loggedInStatus', loggedInStatus);

		
	
	LoginService.$inject = ['$q', '$http', 'BASE_URL'];

	function LoginService($q, $http, BASE_URL) {
		return {
			loginUser: function(usr, pwd) {
				var deferred = $q.defer();
				var promise = deferred.promise;
				
				

				$http
					.post(BASE_URL + 'login/' + usr + '/' + pwd)
					.success(function(data) {
						

						if( data == 'false' ) {
							deferred.reject('Login incorrect. Please try again!');
						} else {
							deferred.resolve(data);
						}

					})
					.error(function() {
						deferred.reject('Error!');
					});
				
				promise.success = function(fn) {
					promise.then(fn);
					return promise;
				};
				
				promise.error = function(fn) {
					promise.then(null, fn);
					return promise;
				};
				
				return promise;
			}
		};
	}

	loggedInStatus.$inject = ['$localStorage'];
	function loggedInStatus($localStorage) {
		
		var user;

		return {
			getUser: function() {
				// return user;
				return $localStorage.info;
			},
			setUser: function(aUser) {
				user = aUser;
			},
			isLoggedIn: function() {
				
				if( $localStorage.info ) {
					return $localStorage.info['role'];
				} else {
					return 'no';
				}
			}
		};

	}

	


	
	
})();