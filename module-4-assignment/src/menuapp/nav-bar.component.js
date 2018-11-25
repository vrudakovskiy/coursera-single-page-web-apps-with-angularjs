(function() {

  angular
    .module('MenuApp')
    .component('navBar', {
      templateUrl: 'src/menuapp/nav-bar.template.html',
      controller: NavBarController
    });

  NavBarController.$inject = [];
  function NavBarController() {
  }

})();