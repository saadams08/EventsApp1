angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/Page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.events', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController.createEvent', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/createEvent.html',
        controller: 'createEventCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.myProfile', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('tabsController.event1', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/event1.html',
        controller: 'event1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.event2'
      2) Using $state.go programatically:
        $state.go('tabsController.event2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab3/page12
  */
  .state('tabsController.event2', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/event2.html',
        controller: 'event2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/event2.html',
        controller: 'event2Ctrl'
      }
    }
  })

  .state('tabsController.event12', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/event12.html',
        controller: 'event12Ctrl'
      }
    }
  })

  .state('tabsController.peterParker', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/peterParker.html',
        controller: 'peterParkerCtrl'
      }
    }
  })

  .state('tabsController.tonyStark', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/tonyStark.html',
        controller: 'tonyStarkCtrl'
      }
    }
  })

  .state('tabsController.bruceBanner', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/bruceBanner.html',
        controller: 'bruceBannerCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.bruceWayne'
      2) Using $state.go programatically:
        $state.go('tabsController.bruceWayne');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page17
      /page1/tab3/page17
  */
  .state('tabsController.bruceWayne', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/bruceWayne.html',
        controller: 'bruceWayneCtrl'
      },
      'tab3': {
        templateUrl: 'templates/bruceWayne.html',
        controller: 'bruceWayneCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Page5')

  

});