angular.module('mynotes.noteStore' ,[])
.factory('noteStoreService', function(){

	var notes= angular.fromJson(window.localStorage['notes'] || '[]') ;

	function presist(){
		window.localStorage['notes'] = angular.toJson(notes); 
	}


  return{

      list : function(){
        return notes;
      },
      get : function(noteId){
          for(var i=0 ; i<notes.length;i++){
          if(notes[i].id===noteId){
          return notes[i];
        }
      }
    return undefined ;
  },


    create : function(note){
      notes.push(note);
      presist();
    },
    update : function(note){
        for(var i=0 ; i<notes.length;i++){
      if(notes[i].id===note.id){
        notes[i] = note ;
        presist();
        return;
      }
    }
    
    },

    move : function(note , fromIndex , toIndex){
      notes.splice(fromIndex , 1) ; 
      notes.splice(toIndex , 0 ,note);
      presist() ;
    },

    remove: function(noteId){
    	for(var i=0 ; i<notes.length;i++){
          if(notes[i].id===noteId){
          notes.splice(i,1);
          presist();
          return;
        }
      }
    }

  };

 });

var notes=[];


  function getNote(noteId){
    for(var i=0 ; i<notes.length;i++){
      if(notes[i].id===noteId){
        return notes[i];
      }
    }
    return undefined ; 
  }

 
