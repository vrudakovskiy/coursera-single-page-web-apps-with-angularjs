(function (){
"use strict";

angular.module('public')
  .service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;

  var user = undefined;

  service.getUser = function() {
    return user;
  };

  service.signUp = function(firstName, lastName, email, phone, favouriteDish) {
    user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      favouriteDish: favouriteDish
    };
  };

}

})();