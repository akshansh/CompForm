// Creating a landscape
// Control the landscape look based on sunrise and sunset
// Generating waves and mountains through Noise function


// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

var mountainStartValue = 0; // start value of graph
var mountainSlope = 0.003; // increment value

var riverStartValue = 0;
var riverSlope = 0.01;

var sun_position_slider;
var mountain_color;
var river_color;
var sky_color;

// Color changes as per sun's position
var dayPosition = 50;
var nightPosition = 350;

function setup() {
    createCanvas(500, 500);

    createP('Change time of the day');
    sun_position_slider = createSlider(dayPosition, nightPosition, 50, 10);
}


function draw() {
    colorMode(HSB);
    background(212, 50, 100 - (sun_position_slider.value()) / 3); // sky
    noStroke();

    createSun();
    createMountain();
    createRiver();

}

function createSun() {
    fill(49, 100, 100 - (sun_position_slider.value()) / 3);
    ellipse(width / 2, sun_position_slider.value(), 50, 50);
}

function createMountain() {
    beginShape();
    fill(95, 58, 100 - (sun_position_slider.value()) / 3); // mountain
    var mountainVariation = mountainStartValue; // offset

    for (var x = 0; x < width; x += 0.3) {
        var y = map(noise(mountainVariation), 0, 1, 50, 450);
        vertex(x, y);
        mountainVariation += mountainSlope;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    mountainStartValue += mountainSlope;
}


function createRiver() {
    beginShape();
    fill(210, 100, 100 - (sun_position_slider.value()) / 3); // river
    var riverVariation = riverStartValue; // offset

    for (var x = 0; x < width; x += 5) {
        var y = map(noise(riverVariation), 0, 1, 350, height);
        vertex(x, y);
        riverVariation += riverSlope;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    riverStartValue += riverSlope;
}