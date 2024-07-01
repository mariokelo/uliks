function mesime12() {
  let output = document.getElementById('output')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;


    if (transcript.includes("biologji")) { 
      window.location = "/html/biologji12.html"
    } else if(transcript.includes("letërsi")){
      window.location = "/html/letersi12.html"
    }else if(transcript.includes('gjeo')){
      window.location = "/html/gjeografi12.html"
    }else if(transcript.includes('histori')){
      window.location = "/html/histori.html"
    }else {
      output.innerHTML = "Nuk ju kuptoj :(";
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
  document.onkeydown = (e) => {
  if (e.ctrlKey && e.key == 'u'){
    e.preventDefault();
  }
}
}

const audio = new Audio('/audio/CFARE MESIMI DO TE DEGJOSH.mp3')

window.onload = audio.play()
