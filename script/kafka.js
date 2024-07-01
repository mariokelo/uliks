function kafka(){
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    if(transcript.includes("jet") || transcript.includes("iet")){
      playSound(jeta)
    }else if(transcript.includes("personaliteti")){
      playSound(personaliteti)
    }else if(transcript.includes("faj")){
      playSound(faji)
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

  let jeta = new Audio('/audio/MBARUAR P1.mp3')
let personaliteti = new Audio('/audio/MBARUAR P2.mp3')
let faji = new Audio('/audio/MBARUAR P3.mp3')
let metamorfoza = new Audio('/audio/MBARUAR P4.mp3')
let hello = new Audio('/audio/PERSHENDETJE ME CAR MUND TJU NDIHMOJ.mp3')
let audio1 = new Audio('/audio/FARNC KAFKA.mp3')
let letersia = new Audio('/audio/LETERSIA U HAP KE MESIM KERONI.mp3')

function playSound(audio){
  jeta.pause();
  jeta.currentTime = 0;
  personaliteti.pause();
  personaliteti.currentTime = 0;
  faji.pause();
  faji.currentTime = 0;
  metamorfoza.pause();
  metamorfoza.currentTime = 0;
  hello.pause();
  hello.currentTime = 0;

  audio.play();
}

document.onkeydown = (e) => {
  if (e.ctrlKey && e.key == 'u'){
    e.preventDefault();
  }
}
