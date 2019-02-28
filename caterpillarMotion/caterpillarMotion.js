// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

// Coding Challenge
// Create a caterpillar motion with sliders for change
// Check the strategy.md file for details

// draws a rectangle, where you tell it to!

var frequency_slider;
var amplitude_slider;
var timeSpeed_slider;

var startX = 50;
var startY = 250;
var endX = 450;
var endY = 50;

var speed = 0;
var speedX = 0;
var speedY = 0;



function setup() {
    createCanvas(500, 300);

    createP('Frequency');
    frequency_slider = createSlider(0, 100, 20);
    createP('Amplitude');
    amplitude_slider = createSlider(0, 100, 50);
    createP('Time Speed');
    timeSpeed_slider = createSlider(0, 100, 50);

}


function draw() {
    background(50);
    ellipseMode(CENTER);

    var frequency = frequency_slider.value() / 1000;
    var amplitude = amplitude_slider.value() / 100;
    var timeSpeed = timeSpeed_slider.value() / 300;

    speed = speedX + timeSpeed;
    speed = speedY + timeSpeed;

    noiseDetail(1, 0.0001);
    // noiseDetail: similar to harmonics in Physics
    // (1, 0.5) means 1 octave will be used by noise() with 50% falloff factor for each octave

    fill(255);
    noStroke();

    for (i = 0; i < 1; i += .02) {
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);

        var offsetX = (.5 - noise((x * frequency), (speed * timeSpeed))) * amplitude * 100;
        var offsetY = (.5 - noise((y * 0.01), (speed * timeSpeed))) * amplitude * 100;
        // 0.5 - noise: so that it moves in the 4th quadrant

        ellipse(x + offsetX, y + offsetY, 10, 10);

        speedX += 0.005;
        speedY += 0.005;
    }

}
