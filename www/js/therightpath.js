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

      console.log('Preguntas: ',$scope.preguntas);
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

$scope.history = [];
$scope.historyCounter = 0;


$scope.showHelp = function(){
    console.log('Mostrar Ayuda');
};

$scope.showDetail = true;
  // $scope.rutas = $rootScope.rutas;
  // console.log('Te encuentras en el camino correcto');
  // console.log($scope.rutas);
  // if($scope.$isSuspended()){
     console.log('Rutas ',$scope.rutas);
  // }

  function updatePregunta() {
    var history = $scope.history;
    var historyCounter = $scope.historyCounter;
    var str = '$scope.rutaseleccionada';
    var shortStr = '';
    var ruta = $scope.rutaseleccionada;
    for(var u = 0; u<historyCounter;  u++){
      console.log('Contador ',u, historyCounter, history);

      var current= history[u];
      console.log('current ', current);
      console.log('Ruta actual' , ruta[current])
      ruta = ruta[current];
      var h = history[u];
      shortStr = shortStr.concat(h);
      str =str.concat('.'+h);
      //str = str+'.'+h;
      //console.log('str + .',h);
    }
    $scope.rutaseleccionada = ruta;
    $scope.loadComplementos();
    // $scope.rutaseleccionada;
    console.log(str);
    console.log($scope.rutaseleccionada);
    console.log('History ',$scope.historyCounter, $scope.history);
  }

  $scope.respuestaSi = function(){
    // console.log('Respuesta si', $scope.rutaseleccionada.si );
    $scope.history[$scope.historyCounter] = 'si';
    $scope.historyCounter++;
    // console.log('Ruta $id ',$scope.rutaseleccionada.$id);
    // console.log('Ruta current',$scope.rutaseleccionada.current);
    //console.log($scope.historyCounter, $scope.history);
    updatePregunta();

  };
  $scope.respuestaNo = function(){
    // console.log('Respuesta no', $scope.rutaseleccionada.no );
    $scope.history[$scope.historyCounter] = 'no';
    $scope.historyCounter++;
    updatePregunta();
  };
  $scope.respuestaNoSe = function(){
    $scope.history[$scope.historyCounter] = 'nose';
    $scope.historyCounter++;
    updatePregunta();

  };
  $scope.loadComplementos = function(){

    //console.log('Articulos', $scope.articulos);
    if($scope.rutaseleccionada.complementos && $scope.rutaseleccionada.complementos.length > 0){
      $scope.complementos = [];
      for(var i = 0; i < $scope.rutaseleccionada.complementos.length; i++){
        var id = $scope.rutaseleccionada.complementos[i];
        // console.log(id.charAt(0));
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
      // console.log($scope.complementos);
    }

  };



}]);
