function one() {
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;

    if(transcript.includes("përshë")){
      playSound(ulikss)
    }
    else if (transcript.includes("dhje")) { 
      window.location = "html/mesimet12.html"
    } else if(transcript.includes("një")){
      window.location = "html/mesimet12.html"
    }else if(transcript.includes('dy')){
      window.location = "html/mesimet12.html"
    }else{
      output.innerHTML = "Nuk ju kuptoj :(";
    }
  }
  document.onkeydown = (e) => {
  if (e.ctrlKey && e.key == 'u'){
    e.preventDefault();
  }
}

  recognition.onerror = function(event) {
    switch (event.error) {
      case 'audio-capture':
        console.error('No audio capture device found.');
        output.innerHTML = 'No audio capture device found.'
        break;
      case 'not-allowed':
        console.error('The user denied access to the microphone.');
        output.innerHTML = 'The user denied access to the microphone.'
        break;
      case 'no-speech':
        console.error('No speech was detected. Try again.');
        output.innerHTML = 'No speech was detected. Try again.'
        break;
      case 'network':
        console.error('A network error occurred.');
        output.innerHTML = 'A network error occurred.'
        break;
      case 'service-not-allowed':
        console.error('The user agent does not support speech recognition.');
        output.innerHTML = 'The user agent does not support speech recognition.'
        break;
      default:
        console.error('An unknown error occurred.');
        output.innerHTML = 'An unknown error occurred.'
    }
  }
}

const ulikss = new Audio('audio/uliksi.mp3')
function playSound(audio){
  audio.play()
}






