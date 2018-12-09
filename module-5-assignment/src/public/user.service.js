(function (){
"use strict";

angular.module('public')
  .service('UserService', UserService);

UserService.$inject = ['MenuService', '$q'];
function UserService(MenuService, $q) {
  var service = this;

  var user = undefined;

  service.getUser = function() {
    if (user === undefined) {
      return $q.resolve();
    }

    if (user.favouriteDish === undefined) {
      return $q.resolve(user);
    }

    var deferred = $q.defer();
    MenuService.getMenuItem(user.favouriteDish)
      .then(function(favouriteDishDetails) {
        var result = Object.create(user);
        result.favouriteDish = favouriteDishDetails;
        deferred.resolve(result);
      })
      .catch(function(error){
        deferred.reject(error);
      });

    return deferred.promise;
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