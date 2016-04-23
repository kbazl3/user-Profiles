angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user, password ) {
		friendService.login(user, password).then(function( response ) {
			if (response.data.userFound) {
				alert('logged in!');
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	};

});
