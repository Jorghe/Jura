
angular.module('jura', ['ionic', 'jura.controllers', 'jura.services', 'jura.routes', 'firebase'])

.run(function($ionicPlatform, $rootScope, $firebaseObject) {
  // Load all app data
//   firebase.database().ref('/appdata/').once('value').then(function(snapshot) {
//     $rootScope.appdata = snapshot.val();
//     console.log(snapshot);
//     console.log($rootScope.appdata);
// });
var appdata = $firebaseObject(firebase.database().ref().child('/appdata/'));

     // to take an action after the data loads, use the $loaded() promise
     appdata.$loaded().then(function() {
        //console.log("loaded record:", appdata);
        $rootScope.appdata = appdata;
        $rootScope.databaseloaded = appdata.$resolved;
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
