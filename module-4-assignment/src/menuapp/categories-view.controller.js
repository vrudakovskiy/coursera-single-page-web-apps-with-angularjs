(function() {

  angular
    .module('MenuApp')
    .controller('CategoriesViewController', CategoriesViewController);

  CategoriesViewController.$inject = ['MenuDataService'];
  function CategoriesViewController(MenuDataService) {
    var ctrl = this;

    ctrl.categories = [];

    ctrl.$onInit = function() {
      MenuDataService.getAllCategories()
        .then(function(result) {
          ctrl.categories = result;
        });
    }
  }

})();