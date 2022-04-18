(function(){
	var names=["Yaakov", "john", "jen", "Jason","Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i=0; i<names.length; i++) {
	  var firstLetter=names[i].charAt(0);
	  if (firstLetter==='j'||firstLetter==='J') {
		byeGreeter.byeSpeaker.speak(names[i]);
	  }
	  else {
		helloGreeter.helloSpeaker.speak(names[i]);
	  }
	  
	}
  })();
