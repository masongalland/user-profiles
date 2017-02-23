angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    var baseUrl = "/api/";
    

    this.login = function( user ) {

      return $http.post(baseUrl + "login", user )
    };

    this.getFriends = function() {
    	return $http.get(baseUrl + "profiles")
    };
  
});
