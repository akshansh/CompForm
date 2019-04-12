// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

/////////////////////////////////////////////////////////////////////

// Creating a text steering behavior using p5.js
// Inspiration: The Coding Train
// Reference: https://youtu.be/4hA7G3gup-4

// Idea:
// 1. Draw a background word
// 2. Trace the shape of the word using points
// 3. Replace the points with text
// 4. Randomize the text
// 5. Add steering effect


var font;

// Adding Steering Effect
var vehicles = [];


// Text Array: CompForm Justin Bakse
var text_array = ['C', 'o', 'm', 'p', 'F', 'o', 'r', 'm', 'J', 'u', 's', 't', 'i', 'n', 'B', 'a', 'k', 's', 'e'];

function preload() {
    font = loadFont('Adobe_Caslon_Pro_Regular.ttf');
}

function setup() {
    createCanvas(800, 300);
    background(51);

    // textFont(font);
    // textSize(128);
    // fill(255);
    // noStroke(255);
    // text('CompForm', 100, 200);

    var points = font.textToPoints('CompForm', 100, 200, 128);
    console.log(points);

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        // stroke(255);
        // strokeWeight(6);

        var text_random = random(text_array);

        var vehicle = new Vehicle(text_random, pt.x, pt.y);
        vehicles.push(vehicle);

        // fill(255);
        // console.log(text_random);
        // text(text_random, pt.x, pt.y);

    }
}

function draw() {
    background(51);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}