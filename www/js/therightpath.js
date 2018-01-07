angular.module('jura.controllers')
.controller('RightpathCtrl',['$scope', '$rootScope', '$stateParams', '$state', '$firebaseArray',
function($scope, $rootScope, $stateParams, $state, $firebaseArray) {
  $rootScope.$watch('databaseResolved', function() {

  if($rootScope.databaseResolved){
    // if($rootScope.rutas.$loaded){
      // TODO: activar pantalla de Loading.
      $scope.dataloaded = true;
      $scope.preguntas = $rootScope.preguntas;
      $scope.articulos = $rootScope.articulos;

      console.log($scope.preguntas);
      //console.log($scope.rutas);
      // TODO: Cargar ruta seleccionada desde un paso atrás
      $scope.rutas = $rootScope.rutas;
      $scope.rutaseleccionada = $scope.rutas[0];
      console.log('Ruta seleccionada',$scope.rutaseleccionada);
      //$scope.$suspend();
      // console.log($scope);
      $scope.loadComplementos();
  } else { $scope.dataloaded = false;}
});
$scope.showDetail = false;
  // $scope.rutas = $rootScope.rutas;
  console.log('Te encuentras en el camino correcto;');
  // console.log($scope.rutas);
  // if($scope.$isSuspended()){
     console.log($scope.rutas);
  // }
  $scope.loadComplementos = function(){

    console.log($scope.articulos);
    if($scope.rutaseleccionada.complementos.length > 0){
      $scope.complementos = [];
      for(var i = 0; i < $scope.rutaseleccionada.complementos.length; i++){
        var id = $scope.rutaseleccionada.complementos[i];
        console.log(id.charAt(0));
        // if(id.charAt(0) == p){
        //   $scope.complementos[i] = $scope.preguntas[id];
        // }
        switch(id.charAt(0)) {
          case 'p':
            $scope.complementos[i] = $scope.preguntas[id];
            break;
          case 'a':
            $scope.complementos[i] = $scope.articulos[id];
            break;
          default:
          console.log('default');
          }

        //console.log(i,  $scope.rutaseleccionada.complementos[i], $scope.preguntas)
      }
      console.log($scope.complementos);
    }

  };



}]);
