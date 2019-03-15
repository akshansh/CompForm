// Creating a spiral art with Turtle Graphics
// Reference: http://compform.net/turtles/

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

var myTurtle;

// CUSTOMIZATION
var cameraApperture_slider;
var rotation_noise;
var rotationNoise_frequency;
var rotationNoise_amplitude;


function setup() {
    createCanvas(500, 500);
    noFill();
    stroke(255);
    noLoop();

    myTurtle = new Turtle();

    createP('Change Camera Apperture');
    cameraApperture_slider = createSlider(1, 15, 5, 1);
    cameraApperture_slider.changed(draw);
    rotationNoise_frequency = 100;
    rotationNoise_amplitude = 10;
}



function draw() {
    background(0);
    rotation_noise = noise(20 * rotationNoise_frequency) * rotationNoise_amplitude;

    myTurtle.penUp();
    myTurtle.moveTo(250, 385);
    myTurtle.penDown();

    for (var i = 0; i < 180; i++) {
        stroke(255, 0);
        myTurtle.moveForward(25 + i * 0.1);
        myTurtle.turnLeft(10);
        drawLeaf();
    }
}

function drawLeaf() {
    myTurtle.pushState();

    stroke(0, random(255), random(255), random(255));

    for (i = 0; i < 15; i++) {
        myTurtle.moveForward(2 * i * cameraApperture_slider.value());
        myTurtle.turnLeft(19);
        for (j = 0; j < 20; j++) {
            myTurtle.penUp();
            myTurtle.moveBackward(j * 3);
            myTurtle.penDown();
            myTurtle.moveForward(j * 8);
            myTurtle.turnRight(rotation_noise * 2);
        }
    }

    myTurtle.popState();
}