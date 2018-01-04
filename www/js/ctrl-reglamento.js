angular.module('jura.controllers')
.controller('ReglamentoCtrl',['$scope', '$state',
function($scope, $state) {
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

$scope.verWorkflow = function(){
  $state.go('comoactuar');
};

$scope.verReglamento = function(){
  console.log('Ver Reglamento');
  $state.go('detalleReglamento');
};

  console.log('Te encuentras en Reglamento;');
}]);
