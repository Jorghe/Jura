angular.module('jura.controllers')
.controller('ReglamentoCtrl',['$scope', '$state', '$timeout', '$ionicPopover',
function($scope, $state, $timeout, $ionicPopover) {
  $scope.trigger = function(item){
    $scope.data.show = true;
    $timeout(function(){ $scope.data.show = false; }, 1500);
  };
  $scope.data= {show:false, help:false};
  $scope.count = 0;
  $scope.articulos = new Array(5);
  $scope.showDetalle = new Array(5);
  var art = 1;
    for(var i = 0; i<$scope.articulos.length; i++){
      $scope.articulos[i] = {};
      $scope.showDetalle[i] = false;
      $scope.articulos[i].n = art;
      $scope.articulos[i].raw = i+ ': Lorem ipsum';
      art++;
    }

  firebase.database().ref('/articulos/').once('value').then(function(snapshot) {
  //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // 'Articulo '+i+': ' + snapshot.val().articulo1;
  console.log(snapshot.val());
  $scope.articulos[0].raw = snapshot.val().articulo1;
  $scope.articulos[1].raw = snapshot.val().articulo2;
console.log($scope.articulos);
});

// Cambios de estado:
$scope.goHome = function(){ $state.go('tab.dash'); };
$scope.verWorkflow = function(){ $state.go('comoactuar'); }; // Main
$scope.verReglamento = function(){ $state.go('detalleReglamento'); };
$scope.reglamentoxTemas = function() { console.log('go to reglamento por temas'); };
$scope.forosdeReglamento = function(){ console.log('go to foros de Reglamento'); };
$scope.tipsdeReglamento = function(){ console.log('go to tips de reglamento'); };


$ionicPopover.fromTemplateUrl('templates/reglamento/help.html', {
  scope: $scope
}).then(function(popover) {
  $scope.popover = popover;
});

$scope.help = function(tipo){
  /*Tipos:
  * 0: Cómo actuar
    1: Reglamento
    2: Por temas
    3: Foros de discusión
    4: Tips
  */
  console.log($scope.popover);

$scope.popover.show();
console.log($scope.popover);
  console.log(tipo);
};



  console.log('Te encuentras en Reglamento;');
}]);
