var app=angular.module('mynotes');

app.controller('addCtrl' , function($scope , $state ,noteStoreService){

  $scope.note= {
    id: new Date().getTime().toString() , 
    title:'' , 
    description:''
  };
  $scope.save = function(){
    noteStoreService.create($scope.note);
    $state.go('list');
  };

});