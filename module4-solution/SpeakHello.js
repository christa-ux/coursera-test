(function  () {
	helloGreeter={};
	var speakWorld="Hello";
	var helloSpeaker=new Object();
helloSpeaker.speak=function(name) {
	console.log(speakWorld+" "+name);
}

helloGreeter.helloSpeaker=helloSpeaker;
})();
