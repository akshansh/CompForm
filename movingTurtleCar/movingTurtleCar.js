// Program to create a moving car using Turtle graphics

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require /turtles/turtle/turtle.js


// Logic:
// 1. Create a car shape
// 2. Create car tires and change stroke color to give movement
// 3. Add wind going against the direction of car to create a sense of movement.
// 4. Make it fancy by adding lights, moon, etc.

var myTurtle;

// Tactic: Bouncing Ball
var strokeColor; // tire
var strokeColorChangeRate;
var particleXMovement; // wind
var particleMovementChangeRate;


function setup() {
    createCanvas(500, 500);
    myTurtle = new Turtle();
    background(0);

    stroke(255);
    strokeColor = 255;
    strokeColorChangeRate = 40; // tire rotation rate
    particleXMovement = width;
    particleMovementChangeRate = 5; // wind speed

    // Draw the car
    carBody(myTurtle, width / 6, height / 1.4);
}

function draw() {

    noFill();
    stroke(strokeColor);
    strokeWeight(1);

    // Draw the tires
    carTireMovement(myTurtle, width / 4, height / 1.2);
    carTireMovement(myTurtle, width / 1.5, height / 1.2);
    // Draw wind particles
    windParticles();
    // Draw moon
    displayMoon();
    // Draw lights
    carLights();
    // noLoop();
}


function carBody(t, xPos, yPos) {

    // move to starting position (without drawing)
    t.penUp();
    t.moveTo(xPos, yPos);
    // put the pen down to draw
    t.penDown();

    // draw a car
    t.moveForward(40);
    t.turnLeft(60);
    t.moveForward(60);
    t.turnRight(60);
    t.moveForward(120);
    t.turnRight(60);
    t.moveForward(60);
    t.turnLeft(60);
    t.moveForward(80);
    t.turnRight(90);
    t.moveForward(40);
    t.turnRight(90);
    t.moveForward(300);
    t.turnRight(90);
    t.moveForward(40);
}

function carTireMovement(t, xPos, yPos) {

    // move to starting position (without drawing)
    t.penUp();
    t.moveTo(xPos, yPos);
    // put the pen down to draw
    t.penDown();

    penFadeInFadeOut();

    // draw a shape
    for (var i = 0; i < 9; i++) {
        t.moveForward(5);
        t.penUp();
        t.moveForward(20);
        t.penDown();
        t.turnRight(129);
    }
}

function windParticles() {
    fill(255, 50);
    noStroke();
    for (i = 0; i < 1; i++) {
        var particleSize = random(0.1, 10);
        ellipse(particleXMovement, random(height), particleSize, particleSize);
    }
    windMovement();
}

function displayMoon() {
    noStroke();
    fill(255);
    ellipse(width / 1.2, height / 6, 50, 50);
    fill(0);
    ellipse(width / 1.25, height / 6, 50, 50);
}

function carLights() {
    fill(random(180, 255));
    noStroke();
    beginShape();
    vertex(width / 1.3, height / 1.4);
    vertex(width, height / 1.6);
    vertex(width, height / 1.2);
    vertex(width / 1.3, height / 1.3);
    endShape();
}


// Bouncing Ball Tactics
// Tire Fade In and Fade Out
function penFadeInFadeOut() {
    if (strokeColor < 0) {
        strokeColorChangeRate = abs(strokeColorChangeRate);
    }
    if (strokeColor > 255) {
        strokeColorChangeRate = -abs(strokeColorChangeRate);
    }
    strokeColor += strokeColorChangeRate;
}
// Wind movement
function windMovement() {
    if (particleXMovement < 0) {
        particleMovementChangeRate = abs(particleMovementChangeRate);
    }
    if (particleXMovement > width) {
        particleMovementChangeRate = -abs(particleMovementChangeRate);
    }
    particleXMovement -= particleMovementChangeRate;
}