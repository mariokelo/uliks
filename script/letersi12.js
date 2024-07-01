function letersi() {
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;

    if(transcript.includes("kafk")){
      window.location = "/html/kafka.html"
    }else if(transcript.includes("kafkën")){
      window.location = "/html/kafka.html"
    }else if(transcript.includes("hap kafkën")){
      window.location = "/html/kafka.html"
    }else{
      output.innerHTML = "Nuk ju kuptoj"
    }
  }
    recognition.onerror = function(event) {
      switch (event.error) {
        case 'audio-capture':
          console.error('No audio capture device found.');
          break;
        case 'not-allowed':
          console.error('The user denied access to the microphone.');
          break;
        case 'no-speech':
          console.error('No speech was detected. Try again.');
          break;
        case 'network':
          console.error('A network error occurred.');
          break;
        case 'service-not-allowed':
          console.error('The user agent does not support speech recognition.');
          break;
        default:
          console.error('An unknown error occurred.');
      }
    }
}

const audio = new Audio('/audio/LETERSIA U HAP KE MESIM KERONI.mp3')

window.onload = audio.play()
document.onkeydown = (e) => {
  if (e.ctrlKey && e.key == 'u'){
    e.preventDefault();
  }
}
