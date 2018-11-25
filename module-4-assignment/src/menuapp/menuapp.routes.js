(function() {

  angular
    .module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/home-view.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/categories-view.template.html',
        controller: 'CategoriesViewController as ctrl'
      })
      .state('items', {
        url: '/items/{categoryId}',
        templateUrl: 'src/menuapp/items-view.template.html',
        controller: 'ItemsViewController as ctrl'
      });
  }

})();