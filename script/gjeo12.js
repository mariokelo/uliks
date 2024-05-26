function gjeo12(){
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    input.innerHTML = transcript;
    if(transcript.includes("ecuri") || transcript.includes("iet")){
      playSound(ecuria)
    }else if(transcript.includes("i hershëm")){
      playSound(popullimi)
    }else if(transcript.includes("numri")){
      playSound(titull)
    }else if(transcript.includes("metamorfoz")){
      playSound(metamorfoza)
    }else{
      output.innerHTML = "Nuk ju kuptova"
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

  const titull = new Audio('/audio/a e ke nje ide & titull.mp3')
  const ecuria = new Audio('/audio/ecuria e numrit te pergjithsme te popullsise.mp3')
  const popullimi = new Audio('/audio/popullimi i hershem i trevave shqiptare.mp3')
  const gjeo = new Audio('/audio/GJEOGRAFI.mp3')

  function playSound(audio){
    titull.pause();
    titull.currentTime = 0;
    ecuria.pause();
    ecuria.currentTime = 0;
    popullimi.pause();
    popullimi.currentTime = 0;

    audio.play();
  }

  window.onload = playSound(gjeo)
