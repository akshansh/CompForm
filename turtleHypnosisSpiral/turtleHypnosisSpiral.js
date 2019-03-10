// Program to create Hypnosis Pattern

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


var myTurtle;

// Tactic: Bouncing Ball
var strokeColor;
var strokeColorChangeRate;


function setup() {
    createCanvas(500, 500);
    myTurtle = new Turtle();
    background(0);

    strokeColor = 0;
    strokeColorChangeRate = 30;
}

function draw() {

    noFill();
    stroke(strokeColor);
    strokeWeight(1);

    // move to starting position (without drawing)
    myTurtle.penUp();
    myTurtle.moveTo(width / 2, height / 2);

    // Create Spiral Effect
    penFadeInFadeOut();

    // Generate Shape
    turtleSquarePattern(myTurtle);
    turtleTrianglePattern(myTurtle);

    // noLoop();
}


function turtleSquarePattern(t) {

    // put the pen down to draw
    myTurtle.penDown();

    // draw a shape
    for (var i = 0; i < 10; i++) {
        t.moveForward(100);
        t.turnRight(-80);
    }
}


function turtleTrianglePattern(t) {

    // put the pen down to draw
    t.penDown();

    // draw a shape
    for (var i = 0; i < 9; i++) {
        t.moveForward(20);
        t.penUp();
        t.moveForward(80);
        t.penDown();
        t.turnRight(129);
    }
}


function penFadeInFadeOut() {
    if (strokeColor < 0) {
        strokeColorChangeRate = abs(strokeColorChangeRate);
    }
    if (strokeColor > 255) {
        strokeColorChangeRate = -abs(strokeColorChangeRate);
    }
    strokeColor += strokeColorChangeRate;
}