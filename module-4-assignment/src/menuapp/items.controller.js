(function() {

  angular
    .module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['categoryData'];
  function ItemsController(categoryData) {
    var ctrl = this;

    ctrl.category = categoryData.category
    ctrl.items = categoryData.menu_items;
  }

})();