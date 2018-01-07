angular.module('jura.controllers')
.controller('NewsCtrl',['$scope', '$rootScope', '$stateParams', '$state', '$ionicLoading',
function($scope, $rootScope, $stateParams, $state, $ionicLoading) {

  console.log('Te encuentras en noticias;');
  $scope.goHome = function(){ $state.go('tab.dash'); };
}]);
