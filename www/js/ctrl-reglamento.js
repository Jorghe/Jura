angular.module('jura.controllers')
.controller('ReglamentoCtrl',['$scope', '$state',
function($scope, $state) {
  $scope.articulos = new Array(5);
  $scope.showDetalle = new Array(5);
var art = 1;
  for(var i = 0; i<$scope.articulos.length; i++){
    $scope.articulos[i] = {}
    $scope.showDetalle[i] = false;
    $scope.articulos[i].n = art;
    $scope.articulos[i].raw = i+' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar lacus massa, quis ullamcorper est ultrices ac. Praesent vulputate dapibus tincidunt. Nullam vel nulla nec nibh tempus venenatis vel sed velit. Mauris sit amet nunc metus. Mauris ullamcorper luctus neque, nec rhoncus augue tincidunt sed. Ut egestas semper urna, ut convallis lacus auctor nec. Proin et nisi mauris. Praesent vestibulum, mi vel pharetra maximus, purus erat mollis nulla, at suscipit dui lectus id mauris. Nulla sapien ligula, sodales ut justo eget, aliquet imperdiet lorem. Aliquam dapibus dui quis justo convallis dapibus. Duis vel nisi nec ante tempor porttitor non sed orci. Fusce ut mauris massa. Nam id iaculis ligula. Phasellus eu pellentesque dolor, ac auctor est. Suspendisse neque odio, eleifend ut dolor et, posuere vulputate nulla.';
    art++;
  }


$scope.verReglamento = function(){
  console.log('Ver Reglamento');
  $state.go('detalleReglamento');
}

  console.log('Te encuentras en Reglamento;');
}]);
