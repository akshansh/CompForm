// Program to create a moving car using Turtle graphics

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js

// For logic and updated tutle file, check GitHub
// Link: https://github.com/akshansh2593/CompForm/tree/master/turtleGraphicsCreator


var myTurtle;

// Customization with Parameters
var moveAmount;
var turtleMoveForward_button;
var turtleMoveReverse_button;
var turtleMoveLeft_button;
var turtleMoveRight_button;
var turtlePenDown_checkbox;

var turtleDrawEyes_button;


function setup() {
    createCanvas(500, 500);
    myTurtle = new Turtle();
    background(0);

    stroke(255);
    strokeColor = 255;
    strokeColorChangeRate = 40;

    // Draw checkbox
    turtlePenDown_checkbox = createCheckbox('Draw', true);
    turtlePenDown_checkbox.changed(drawTurtle);
    createP();

    moveAmount = 30;

    // Movement buttons
    turtleMoveForward_button = createButton('Forward');
    turtleMoveForward_button.mousePressed(moveFwd);
    turtleMoveForward_button = createButton('Backward');
    turtleMoveForward_button.mousePressed(moveBwd);
    createP();
    turtleMoveForward_button = createButton('Left');
    turtleMoveForward_button.mousePressed(moveLeft);
    turtleMoveForward_button = createButton('Right');
    turtleMoveForward_button.mousePressed(moveRight);
    createP();
    turtleDrawEyes_button = createButton('Draw Eye');
    turtleDrawEyes_button.mousePressed(drawEye);

}

function draw() {

    noFill();
    stroke(strokeColor);
    strokeWeight(2);

    // noLoop();
}


function drawTurtle() {
    if (this.checked()) {
        myTurtle.penDown();
        console.log("Draw is on.");
    } else {
        myTurtle.penUp();
        console.log("Cannot draw.");
    }
}


function moveFwd() {
    myTurtle.moveForward(moveAmount);
}

function moveBwd() {
    myTurtle.moveBackward(moveAmount);
}

function moveRight() {
    myTurtle.turnRight(90);
    myTurtle.moveForward(moveAmount);
}

function moveLeft() {
    myTurtle.turnLeft(90);
    myTurtle.moveForward(moveAmount);
}

function drawEye() {

    // draw eye
    for (var i = 0; i < 30; i++) {
        myTurtle.moveForward(10);
        myTurtle.penUp();
        myTurtle.moveForward(40);
        myTurtle.penDown();
        myTurtle.turnRight(129);
    }
    myTurtle.moveForward(37);
    myTurtle.turnRight(90);
}