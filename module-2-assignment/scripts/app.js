(function(){

  angular
    .module('Mod2App', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.items = ShoppingListCheckOffService.getToBuyItems();
    ctrl.bought = ShoppingListCheckOffService.bought;
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "cookies", quantity: 10, unit: "pack" },
      { name: "milk", quantity: 2, unit: "bottle" },
      { name: "water", quantity: 4, unit: "bottle" },
      { name: "apples", quantity: 1, unit: "kg" },
      { name: "potato", quantity: 2, unit: "kg" }
    ];

    var boughtItems = [];

    service.getToBuyItems = function() {
      return toBuyItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }

    service.bought = function(item) {
      var i = toBuyItems.indexOf(item);
      if (i < 0) {
        return;
      }

      toBuyItems.splice(i, 1);
      boughtItems.push(item);
    }
  }
})();
