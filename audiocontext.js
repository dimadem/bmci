navigator.mediaDevices.getUserMedia({ audio: true })
    .then(successCallback)
    .catch(failureCallback);

let audioContext = new (window.AudioContext || window.webkitAudioContext);

let audioCtx = new AudioContext();

//Буфер для левого и правого канала
let stereoBuffer = audioCtx.createBuffer(2, 22050, 44100);

const startButton = document.querySelector('button');


let node = AudioContext.createScriptProcessor(4096, 2, 2);
node.onaudioprocess = function (data) {
    console.log(data);
}
// Connect the microphone to the script processor
source.connect(node);
node.connect(audioCtx.destination);