(function() {

  angular
    .module('MenuApp')
    .component('items', {
      templateUrl: 'src/menuapp/items.component.html',
      bindings: {
        items: '<'
      }
    });

})();