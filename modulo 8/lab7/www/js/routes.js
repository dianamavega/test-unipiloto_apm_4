angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.network', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/network.html',
        controller: 'networkCtrl'
      }
    }
  })

  .state('menu.device', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/device.html',
        controller: 'deviceCtrl'
      }
    }
  })

  .state('menu.deviceMotion', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/deviceMotion.html',
        controller: 'deviceMotionCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.deviceOrientation', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/deviceOrientation.html',
        controller: 'deviceOrientationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});