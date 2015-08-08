(function(){
var app=angular.module('mynotes', ['ionic' ,'mynotes.noteStore']);

app.config(function($stateProvider ,$urlRouterProvider){
  $stateProvider.state('list' ,{
    url:'/list' ,
    templateUrl:'templates/list.html'
  });

  $stateProvider.state('add' ,{
    url:'/add' ,
    templateUrl:'templates/edit.html' , 
    controller:'addCtrl'
  });


 $stateProvider.state('edit' ,{
    url:'/edit/:noteId' ,
    templateUrl:'templates/edit.html' , 
    controller:'editCtrl'
  });

  $urlRouterProvider.otherwise('/list');
});

 
  









app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {   
    if (window.cordova  && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})
}());