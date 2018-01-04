angular.module('jura.controllers')
.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
 function($scope, $rootScope, $stateParams, $state) {

  $scope.news = 'Las noticias son...';
  $scope.reglamento = 'El reglamento es';
  $scope.tips = 'Encuentra tips aquí';
  $scope.about = 'Acerca de esta app';

  $scope.goToNews = function(){ $state.go('news'); };
  $scope.goToReglamento = function(){ $state.go('reglamento'); };

  }]);
