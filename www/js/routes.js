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

  $urlRouterProvider.otherwise('/tab/dashboard');

});
