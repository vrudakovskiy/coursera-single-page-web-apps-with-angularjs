(function() {

  angular
    .module('MenuApp')
    .component('categories', {
      templateUrl: 'src/menuapp/categories.component.html',
      controller: CategoriesComponentController,
      bindings: {
        items: '<'
      }
    });

  CategoriesComponentController.$inject = [];
  function CategoriesComponentController() {
    var ctrl = this;
  }

})();