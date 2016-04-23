angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = userInfo.data.currentUser;
	//
	console.log(userInfo);
	//
	$scope.friends = userInfo.data.friends;

});
