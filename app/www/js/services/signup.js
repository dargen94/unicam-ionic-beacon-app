angular.module('app.services.signup',[])

.factory('Signup', function($http, MY_SERVER) {
  return {
    checkUsername: function(username) {
      return $http.post(MY_SERVER.get() + '/user/check_username',
      {
        username: username
      });
    },
    signup: function(user) {
      return $http.post(MY_SERVER.get() + '/user',
      {
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        password: user.password,
      }
    );
  }
};
});
