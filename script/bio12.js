function bio12(){
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    input.innerHTML = transcript;
    if(transcript.includes("bërtha") || transcript.includes("iet")){
      playSound(berthama)
    }else if(transcript.includes("riprodh")){
      playSound(riprodhimi)
    }else if(transcript.includes("varia")){
      playSound(variacioni)
    }else if(transcript.includes("varja")){
      playSound(variacioni)
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

  const berthama = new Audio('/audio/permbajtja e berthames.mp3')
  const riprodhimi = new Audio('/audio/riprodhimi sexual dhe trashegimia.mp3')
  const variacioni = new Audio('/audio/variacioni dhe trashegimia.mp3')
  const bio = new Audio('/audio/BIOLOGJI.mp3')

  function playSound(audio){
    berthama.pause();
    berthama.currentTime = 0;
    riprodhimi.pause();
    riprodhimi.currentTime = 0;
    variacioni.pause();
    variacioni.currentTime = 0;

    audio.play();
  }

  window.onload = playSound(bio)

document.onkeydown = (e) => {
  if (e.ctrlKey && e.key == 'u'){
    e.preventDefault();
  }
}
