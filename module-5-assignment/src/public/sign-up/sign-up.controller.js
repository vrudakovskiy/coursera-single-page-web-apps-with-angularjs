(function () {
"use strict";

angular.module('public')
  .controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService'];
function SignUpController(UserService) {
  var $ctrl = this;

  $ctrl.submit = function() {
    var user = $ctrl.user;
    UserService.signUp(user.firstName, user.lastName, user.email, user.phone, user.favouriteDish);

    $ctrl.saved = true;
  }
}

})();