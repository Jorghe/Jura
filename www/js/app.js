
angular.module('jura', ['ionic', 'jura.controllers', 'jura.services', 'jura.routes', 'firebase'])

.run(function($ionicPlatform, $rootScope) {
  // Load all app data
  firebase.database().ref('/appdata/').once('value').then(function(snapshot) {
    $rootScope.appdata = snapshot.val();
    //console.log($rootScope.appdata);
});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
