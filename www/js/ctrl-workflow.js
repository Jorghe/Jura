angular.module('jura.controllers')
.controller('WorkflowCtrl',['$scope', '$state', '$firebaseArray',
function($scope, $state, $firebaseArray) {
  console.log('Te encuentras en workflow;');
  $scope.test = 'Hola mundo';
  $scope.data = {
  };


  $scope.workflow = $firebaseArray(firebase.database().ref().child("workflow/"));
  console.log($scope.workflow);
  $scope.workflow.$loaded().then(function(){
    $scope.data.detalle = new Array($scope.workflow.length);
    for(var i = 0; i< $scope.workflow.length; i++){
      $scope.data.detalle[i] = false;
    }
    console.log('data from detalle', $scope.data);
  });
  // $scope.workflow.detalle = 'aaa';
  firebase.database().ref('/workflow/').once('value').then(function(snapshot) {
  //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // 'Articulo '+i+': ' + snapshot.val().articulo1;
  console.log(snapshot.val());
console.log($scope.articulos);
});


}]);