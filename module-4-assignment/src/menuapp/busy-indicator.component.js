(function() {

  angular
    .module('MenuApp')
    .component('busyIndicator', {
      templateUrl: 'src/menuapp/busy-indicator.component.html',
      controller: BusyIndicatorController
    });

  BusyIndicatorController.$inject = ['$rootScope'];
  function BusyIndicatorController($rootScope) {
    var ctrl = this;

    ctrl.visible = false;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
      ctrl.visible = true;
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {
      ctrl.visible = false;
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, options) {
      ctrl.visible = false;
    });
  }

})();