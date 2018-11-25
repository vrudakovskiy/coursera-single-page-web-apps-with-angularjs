(function(){

  angular
    .module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$q'];
  function MenuDataService($http, $q) {
    var service = this;

    service.getAllCategories = function() {
      var allCategoriesDefered = $q.defer();

      var response = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/categories.json')
      });

      response
        .then(function(response) {
          allCategoriesDefered.resolve(response.data);
        })
        .catch(function(error) {
          allCategoriesDefered.reject(error);
        });

      return allCategoriesDefered.promise;
    }

    service.getItemsForCategory = function(categoryShortName) {
      var itemsDefered = $q.defer();

      var response = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
      });

      response
        .then(function(response) {
          itemsDefered.resolve(response.data);
        })
        .catch(function(error) {
          itemsDefered.reject(error);
        });

      return itemsDefered.promise;
    }
  }

})();
