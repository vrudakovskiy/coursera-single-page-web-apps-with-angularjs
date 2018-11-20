(function(){

  angular
    .module('NarrowItDownApp', [])
    .service('MenuSearchService', MenuSearchService)
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItemsDirective);

  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    var service = this;

    service.getMatchedMenuItems = function(searchItem) {
      var deferred = $q.defer();

      service
        .getAllMenuItems()
        .then(function(response) {
          var searchItemLower = searchItem.toLowerCase();
          deferred.resolve(response.menu_items.filter(function(x) {
            return x.name.toLowerCase().includes(searchItemLower) ||
                   x.description.toLowerCase().includes(searchItemLower);
          }))
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    var allItemsDefered = null;
    service.getAllMenuItems = function() {
      if (!allItemsDefered) {
        allItemsDefered = $q.defer();

        var response = $http({
          method: 'GET',
          url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
        });
        response
          .then(function(response) {
            allItemsDefered.resolve(response.data);
          })
          .catch(function(error) {
            allItemsDefered.reject(error);
          });
      }

      return allItemsDefered.promise;
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.searchItem = '';
    ctrl.found = [];
    ctrl.isNothingFound = false;

    ctrl.search = function() {
      if (ctrl.searchItem === '') {
        ctrl.isNothingFound = true;
        return;
      }

      MenuSearchService
        .getMatchedMenuItems(ctrl.searchItem)
        .then(function(x) {
          ctrl.found = x;
          ctrl.isNothingFound = x.length === 0;
        });
    };

    ctrl.removeFoundItem = function(index) {
      ctrl.found.splice(index, 1);
    }
  }

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      scope: {
        items: '<items',
        remove: '&onRemove'
      },
      templateUrl: './foundItems.html'
    };

    return ddo;
  }
})();
