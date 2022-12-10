 var SpeechRecognition = window.webkitSpeechRecognition;
 recog = new SpeechRecognition;


 function beguon() {
     document.getElementById("otxt").innerHTML = "";
     recog.start();
 }

 recog.onresult = function run(event) {
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("otxt").innerHTML = content;
 }