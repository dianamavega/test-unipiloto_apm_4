angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('list', {
    url: '/page2',
    templateUrl: 'templates/list.html',
    controller: 'listCtrl'
  })

  .state('toggle', {
    url: '/page3',
    templateUrl: 'templates/toggle.html',
    controller: 'toggleCtrl'
  })

  .state('form', {
    url: '/page4',
    templateUrl: 'templates/form.html',
    controller: 'formCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});