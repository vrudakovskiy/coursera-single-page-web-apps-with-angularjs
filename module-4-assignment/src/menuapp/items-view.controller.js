(function() {

  angular
    .module('MenuApp')
    .controller('ItemsViewController', ItemsViewController);

  ItemsViewController.$inject = ['MenuDataService', '$stateParams'];
  function ItemsViewController(MenuDataService, $stateParams) {
    var ctrl = this;

    ctrl.category = {};
    ctrl.items = [];

    ctrl.$onInit = function() {
      MenuDataService.getItemsForCategory($stateParams.categoryId)
        .then(function(result) {
          ctrl.category = result.category
          ctrl.items = result.menu_items;
        });
    }
  }

})();