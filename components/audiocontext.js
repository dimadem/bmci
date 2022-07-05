//"use strict";

//Declare btns
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const gainSlider = document.querySelector("#gain");



navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (mediaStream) {
        console.log(mediaStream)
        console.log('use device')
        console.log(navigator.mediaDevices)


        const audioContext = new AudioContext();
        const gain = audioContext.createGain();
        const deviceSource = audioContext.createMediaStreamSource(mediaStream);

        //connect Nodes
        deviceSource.connect(gain);
        gain.connect(audioContext.destination);

        //доделать громкость
        gainSlider.addEventListener("change", (e) => {
            gain.gain.value = e.currentTarget.value / 100;

        });

        //add Listener for interface
        playBtn.addEventListener("click", () => {
            if (audioContext.state === "suspended") {
                audioContext.resume();
            }
            source.autoplay = true;
            source.play();
        });

        stopBtn.addEventListener("click", () => {
            source.pause();
            source.currentTime = 0;
        });

    })
    .catch(function (err) {
        console.log(err)
    });

