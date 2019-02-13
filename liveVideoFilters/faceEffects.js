// Processing a video in realtime
// Using Seriously.js with p5.js
// Inspired by the videos of Daniel Shiffman on YouTube (The Coding Train)

// Idea: apply an effect to the source video to process it
// Source: video input, target: canvas, effect: anything we want to add


var video; // video input: webcam
var seriously, src, target; // variables for using seriously.js

function setup() {
    // setup canvas: target
    canvas = createCanvas(640, 480, WEBGL);
    canvas.id('p5canvas');
    background(51);

    // setup webcam: source
    video = createCapture(VIDEO);
    video.size(width, height);
    video.id('p5video'); // giving an ID to the video to link to seriously
    video.hide();

    // switch between modes
    createP("To start, press 'a' for blur or 's' for vignette.");

    // adjust blur
    createP('Adjust Blur');
    blurSlider = createSlider(0, 1, 0.5, 0.01);
    blurSlider.id('blur-slider');

    // adjust vignette strength
    createP('Adjust Vignette');
    vignetteSlider = createSlider(0, 100, 50);
    vignetteSlider.id('vignette-slider');


    // Call Seriously function inside the variable: seriously
    seriously = new Seriously(); // create an object called seriously

    // Source: webcam, target: canvas
    src = seriously.source('#p5video');
    target = seriously.target('#p5canvas');

    keyReleased();

    seriously.go();


}

// Function to change commands
function keyReleased() {
    if (key === 'a') {
        // EFFECT 1: BLUR
        var blur = seriously.effect('blur');
        blur.amount = '#blur-slider'; // connect the blur slider to an ID
        blur.source = src; // telling src to go into blur
        target.source = blur; // telling blur to go inside target
    } else if (key === 's') {
        // EFFECT 2: VIGNETTE
        var vignette = seriously.effect('vignette');
        vignette.amount = '#vignette-slider';
        vignette.source = src;
        target.source = vignette;
    }
}