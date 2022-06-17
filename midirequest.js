
if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');
} else {
    console.log('WebMIDI is not supported in this browser.');
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);


function onMIDISuccess(midiAccess) {
    const inputs = midiAccess.inputs;

    inputs.forEach((input) => {
        //console.log(input);
        input.onmidimessage = getMIDIMessage;
        //input.addEventListener('onmidimessage', getMIDIMessage);
    });
    midiAccess.onstatechange = updateDevices;
    //midiAccess.addEventListener('onstatechange', updateDevices);

    //const outputs = midiAccess.outputs;

}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//Get Midi
function getMIDIMessage(midiMessage) {
    const velocity = midiMessage.data[2];
    const note = midiMessage.data[1];
    const command = midiMessage.data[0];
    console.log(`Note: ${note}, Velocity: ${velocity}, Command: ${command}`);

    //     // Switch for Arturia KEYSTEP keyboard Only
    //     switch (command) {
    //         case 157: //noteOn
    //             if (velocity > 0) {
    //                 noteOn(note, velocity);
    //             } else {
    //                 noteOff(note);
    //             }
    //             break;
    //         case 141: //noteOff
    //             noteOff(note);
    //             break;
    //     }
    // }

    // function noteOn(note, velocity) {
    //     console.log(note, velocity);
    // }

    // function noteOff(note) {
    //     console.log(note);
}

//Device connected
function updateDevices(device) {
    console.log(`Device: ${device.port.name}!, ${device.port.state} Port: ${device.port.type}`);
    console.log(device);
}
