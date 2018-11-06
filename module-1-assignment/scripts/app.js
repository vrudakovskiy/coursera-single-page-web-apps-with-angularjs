(function(){
  angular
    .module('Mod1App', [])
    .controller('LunchCheckerController', ['$scope', LunchCheckerController]);

  function LunchCheckerController($scope) {
      $scope.statusMessage = "\xA0";
      $scope.checkLunch = function() {
        var list = ($scope.list || '').split(',');
        list = list.filter(function(x) { return Boolean(x.trim()); });
        if (list.length == 0) {
          $scope.statusMessage = "Please enter data first";
          $scope.statusColor = "red";
          return;
        }

        $scope.statusColor = "green";
        $scope.statusMessage = (list.length > 3) ? "Too much!" : "Enjoy!";
      }
  }
})();
