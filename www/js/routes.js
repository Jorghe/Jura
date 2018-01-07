angular.module('jura.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('news', {
    url: '/news',
    templateUrl: 'templates/news.html',
    controller: 'NewsCtrl'
  })
  .state('reglamento', {
    // views: {
    // 'main': { template: 'reglamento.html', controller: 'ReglamentoCtrl' },
    // 'detalle': { template: 'reglamento/detalle.html', controller: 'DetalleCtrl' },
    // //'porTemas': { template: { html: 'reglamento/porTemas-html' } },
    // //'foros': { template: { html: 'foros.html' } }
    // },
    url: '/reglamento',
    templateUrl: 'templates/reglamento.html',
    controller: 'ReglamentoCtrl'
  })
  .state('detalleReglamento', {
    url: '/reglamento/detalle',
    templateUrl: 'templates/reglamento/detalle.html',
    controller: 'ReglamentoCtrl'
  })
  .state('comoactuar', {
    url: '/reglamento/comoactuar',
    templateUrl: 'templates/reglamento/comoactuar.html',
    controller: 'WorkflowCtrl'
  })
  .state('therightpath', {
    url: '/therightpath',
    templateUrl: 'templates/therightpath.html',
    controller: 'RightpathCtrl'
  })
  // From default:
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');


  //$urlRouterProvider.otherwise('/tab/dashboard');

});
