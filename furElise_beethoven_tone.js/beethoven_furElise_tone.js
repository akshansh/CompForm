// Tone.js
// Beethoven - Für Elise

// require https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.6/Tone.min.js
/* global Tone */


// First, create the synth.
// Synth types: PolySynth, MonoSynth, Synth, DuoSynth, AMSynth, FMSynth, PluckSynth, MetalSynth, etc.
// const synth = new Tone.Synth().toMaster();
const synth = new Tone.PolySynth({
    //   oscillator: {
    //     type: 'triangle', // sine, square, triangle, sawtooth, fat*
    //   },
    envelope: {
        attack: 0.1,
        decay: 0.3,
        sustain: 1,
        release: 3,
    },
});

// Connect to the speakers.
synth.toMaster();


Tone.Transport.bpm.value = 200;

const melody = [
    // part 1
    ['E5', '4n'],
    ['D#5', '4n'],
    ['E5', '4n'],
    ['D#5', '4n'],
    ['E5', '4n'],

    ['B4', '4n'],
    ['D5', '4n'],
    ['C5', '4n'],
    ['A4', '4n'],

    ['rest', '1m'],

    ['E4', '4n'],
    ['G4', '4n'],
    ['A4', '4n'],
    ['B4', '4n'],

    ['rest', '1m'],

    ['E4', '4n'],
    ['A4', '4n'],
    ['B4', '4n'],
    ['C5', '4n'],

    ['rest', '1m'],

    // part 2
    ['E4', '4n'],
    ['E5', '4n'],
    ['D#5', '4n'],
    ['E5', '4n'],
    ['D#5', '4n'],
    ['E5', '4n'],

    ['B4', '4n'],
    ['D5', '4n'],
    ['C5', '4n'],
    ['A4', '4n'],

    ['rest', '1m'],

    ['E4', '4n'],
    ['G4', '4n'],
    ['A4', '4n'],
    ['B4', '4n'],

    ['rest', '1m'],

    ['E4', '4n'],
    ['C5', '4n'],
    ['B4', '4n'],
    ['A4', '4n'],

    ['rest', '1m'],
];

window.onmousedown = (e) => {
    // Play the melody!

    let t = Tone.now();
    console.log('Presenting Für Elise by Beethoven:');
    for (const note of melody) {
        console.log(note);
        if (note[0] !== 'rest') {
            //   synth.triggerAttackRelease(note[0], Tone.Time(note[1]), t);
            synth.triggerAttackRelease(note[0], Tone.Time(note[1]) + 0.1, t);
        }
        t += Tone.Time(note[1]);
    }
};

console.log('Click to play music!');