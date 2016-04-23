angular.module('userProfiles')
.factory('friendService', function( $http ) {
    return {

        login: function(user, password) {
          return $http({
              method: "POST",
              url: "/api/login",
              data: {
                  name: user,
                  password: password
              }
          })
          .then(function(response) {
              return response;
          });
        },

        getFriends: function() {
            console.log("get Friends");
            return $http({
                method: "GET",
                url: "/api/profiles"
            })
            .then(function(response) {
                return response;
            });
        }
    };
});
