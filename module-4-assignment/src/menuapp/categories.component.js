(function() {

  angular
    .module('MenuApp')
    .component('categories', {
      templateUrl: '/src/menuapp/categories.component.html',
      bindings: {
        items: '<'
      }
    });

})();