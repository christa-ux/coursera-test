(function  () {
	byeGreeter={};
	var speakWorld="GoodBye";
var byeSpeaker=new Object();
byeSpeaker.speak=function(name) {
	console.log(speakWorld+ " "+ name);
}
byeGreeter.byeSpeaker=byeSpeaker;
})();
