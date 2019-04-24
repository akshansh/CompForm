// Tone.js
// Canon in D Melody Loop

// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */


// Inspiration
// https://youtu.be/rNsgHMklBW0

// Create a new synthesizer (keyboard)
const synth = new Tone.Synth({
    oscillator: {
        type: 'sine',
    },
    envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.5,
        release: 1,
    },
});

// create a gain
const gain = new Tone.Gain(0.5);
gain.toMaster();
synth.connect(gain);

// Plugin the keyboard
// synth.toMaster();

// Play the sound
// synth.triggerAttackRelease('C4', '8n');

// build an array of notes
const notes = [
    'A4', '',
    'F#4', 'G4', 'A4', '',
    'F#4', 'G4', 'A4', 'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', '',
    'F#4', '',
    'D4', 'E4', 'F#4', '',
    'F#3', 'G3', 'A3', 'B3', 'A3', 'G3', 'A3', 'F#3', 'G3', 'A3',

    'G3', '',
    'B3', 'A3', 'G3', '',
    'F#3', 'E3', '',
    'F#3', 'E3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', '',
    'G3', '',
    'B3', 'A3', 'B3', '',
    'C#4', 'D4', '',
    'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A4', '',
];

// store the note value
var index = 0;

// Music Repeat Pattern
Tone.Transport.scheduleRepeat(time => {
    repeat(time);
}, '8n');

// Default beats per minute
console.log(Tone.Transport.bpm.value);
// Tone.Transport.bpm.value = 90;

function repeat(time) {
    let note = notes[index % notes.length];
    // if note gets to the end, start at 0
    synth.triggerAttackRelease(note, '8n', time);
    index++;
}

// start the music
Tone.Transport.start();

// stop the music after 5 seconds
setTimeout(() => {
    Tone.Transport.stop();
}, 30000);