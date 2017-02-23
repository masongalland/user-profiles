angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	friendService.getFriends().then(function(results){
		$scope.currentUser = results.data.currentUser;
		$scope.friends = results.data.friends;
	})

});