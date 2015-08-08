var app=angular.module('mynotes');

app.controller('editCtrl' , function($scope , $state , noteStoreService){

  $scope.note= angular.copy(noteStoreService.get($state.params.noteId));
  $scope.save = function(){
    noteStoreService.update($scope.note);
    $state.go('list');
  };

});