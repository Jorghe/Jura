angular.module('jura.controllers')
.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', '$state',
 function($scope, $rootScope, $stateParams, $state) {
   if(!$rootScope.appdata){
     // Trigger loading page
     $rootScope.$watch('appdata', function(nv, ov) {
    console.log($rootScope.appdata);
    $scope.appdata = $rootScope.appdata;
  });
   }


   $scope.data = {help:false};
  $scope.appdata = $rootScope.appdata;
  $scope.news = 'Las noticias son...';
  $scope.reglamento = 'El reglamento es';
  $scope.tips = 'Encuentra tips aquí';
  $scope.about = 'Acerca de esta app';

  $scope.goToNews = function(){ $state.go('news'); };
  $scope.goToReglamento = function(){ $state.go('reglamento'); };

  }]);
