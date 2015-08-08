var app=angular.module('mynotes');

app.controller('listCtrl' , function($scope ,noteStoreService){
$scope.reordering=false  ;
$scope.notes=noteStoreService.list();
$scope.remove= function(noteId){
  noteStoreService.remove(noteId);
};
$scope.move = function(note , fromIndex , toIndex){
  noteStoreService.move(note , fromIndex , toIndex);
};

$scope.toggleReordering=function(){
  $scope.reordering = !$scope.reordering ;
};

});