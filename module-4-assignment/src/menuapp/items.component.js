(function() {

  angular
    .module('MenuApp')
    .component('items', {
      templateUrl: 'src/menuapp/items.template.html',
      controller: ItemsComponentController,
      bindings: {
        items: '<'
      }
    });

  ItemsComponentController.$inject = [];
  function ItemsComponentController() {
    var ctrl = this;
  }

})();