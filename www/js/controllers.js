angular.module('jura.controllers', [])

.controller('DashCtrl', function($scope, $state) {
  $scope.news = 'Las noticias son...';
  $scope.reglamento = 'El reglamento es';
  $scope.tips = 'Encuentra tips aquí';
  $scope.about = 'Acerca de esta app';

  $scope.goToNews = function(){ $state.go('news'); }
  $scope.goToReglamento = function(){ $state.go('reglamento'); }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
