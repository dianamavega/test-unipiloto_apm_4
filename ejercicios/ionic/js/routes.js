angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.social', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/social.html',
        controller: 'socialCtrl'
      }
    }
  })

  .state('tabsController.film', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/film.html',
        controller: 'filmCtrl'
      }
    }
  })

  .state('tabsController.nutriciN', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/nutriciN.html',
        controller: 'nutriciNCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('list', {
    url: '/page5',
    templateUrl: 'templates/list.html',
    controller: 'listCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});