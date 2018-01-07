
angular.module('jura', ['ionic', 'jura.controllers', 'jura.services', 'jura.routes', 'firebase'])

.run(function($ionicPlatform, $rootScope, $firebaseObject, $firebaseArray) {
  // Load all app data
//   firebase.database().ref('/appdata/').once('value').then(function(snapshot) {
//     $rootScope.appdata = snapshot.val();
//     console.log(snapshot);
//     console.log($rootScope.appdata);
// });
$rootScope.database = [];
/* Appdata */
$rootScope.appdata = $firebaseObject(firebase.database().ref().child('/appdata/'));
$rootScope.appdata.$loaded().then(function(a) {
   $rootScope.database[0] = $rootScope.appdata.$resolved;
});
/* Rutas */
 $rootScope.rutas = $firebaseArray(firebase.database().ref().child("rutas/"));
 $rootScope.rutas.$loaded().then(function(){
   $rootScope.database[1] = $rootScope.rutas.$resolved;
 });
/* Preguntas */
$rootScope.preguntas = $firebaseObject(firebase.database().ref().child("preguntas/"));
$rootScope.preguntas.$loaded().then(function(){
  $rootScope.database[2] = $rootScope.preguntas.$resolved;
});
/* Artículos */
 $rootScope.articulos = $firebaseObject(firebase.database().ref().child("articulos/"));
 $rootScope.articulos.$loaded().then(function(){
   $rootScope.database[3] = $rootScope.articulos.$resolved;
 });

 $rootScope.$watchCollection('database',function(newValues, oldValues, scope) {
   if(newValues[0] && newValues[1] && newValues[2] && newValues[3]){
     $rootScope.databaseResolved = true;
     // console.log('database loaded');
     // console.log('Rutas', $rootScope.rutas);
     // console.log('Appdata', $rootScope.appdata);

   }
  // console.log('newv, oldv, scope');
  // console.log(newValues, oldValues, scope);
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
