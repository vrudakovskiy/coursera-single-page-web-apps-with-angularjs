(function() {
"use strict";

angular.module('public')
  .directive('validMenuItem', MenuItemDirective);

MenuItemDirective.$inject = ['MenuService', '$q'];
function MenuItemDirective(MenuService, $q) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.validMenuItem = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return $q.resolve();
        }

	var def = $q.defer();
        MenuService.getMenuItem(modelValue)
          .then(function(response) {
            def.resolve();
          })
          .catch(function(error) {
            def.reject();
          });

        return def.promise;
      };
    }
  };
}

})();