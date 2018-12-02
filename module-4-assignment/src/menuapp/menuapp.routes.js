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
        templateUrl: 'src/menuapp/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/categories.template.html',
        controller: 'CategoriesController as ctrl',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryId}',
        templateUrl: 'src/menuapp/items.template.html',
        controller: 'ItemsController as ctrl',
        resolve: {
          categoryData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      });
  }

})();