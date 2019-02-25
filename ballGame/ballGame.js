// Ball Game
// Using the Bouncing Ball Tactic
// Check reviseTactics.md for more info.

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js


// Obstructions
var ob1Height, ob2Height, ob3Height; // Height of obstructions
var ob1Width, ob2Width, ob3Width; // Width of obstructions
var ob1Position, ob2Position, ob3Position; // Location of obstructions
var ob1Movement, ob2Movement, ob3Movement; // Movement of obstructions
var ob1speed, ob2speed, ob3speed; // Speed of obstructions

// Ball
var ballDiameter;

// Collision and Result
var collisionCount;
var gameResult;


function setup() {
    createCanvas(600, 600);

    // Creating Obstructions
    ob1Height = 400;
    ob2Height = 200;
    ob3Height = 450;

    ob1Width = 20;
    ob2Width = 60;
    ob3Width = 20;

    ob1Position = 150;
    ob2Position = 250;
    ob3Position = 400;

    ob1Movement = 0;
    ob2Movement = height / 2;
    ob3Movement = 0;

    ob1speed = 5;
    ob2speed = 25;
    ob3speed = 15;

    // Creating Ball
    ballDiameter = 40;

    collisionCount = 0;

    gameResult = createP("Your result: ");
    createP("Use Mouse to move the ball.");
}


function draw() {
    background(0);

    // Moving Obstructions
    obstruction1();
    obstruction2();
    obstruction3();

    // Moving Ball
    ballMovement();
    fill(255);
    text('Collisions: ' + collisionCount, 20, 20);
    ballCollisionDetection();

    // Game Result
    result();
}


function obstruction1() {
    if (ob1Movement < 0) {
        ob1speed = abs(ob1speed);
    }
    if (ob1Movement > height - ob1Height) {
        ob1speed = -abs(ob1speed);
    }
    rect(ob1Position, ob1Movement, ob1Width, ob1Height);
    ob1Movement += ob1speed;
    // console.log('Obstacle 1 Position: ' + ob1Movement);
}


function obstruction2() {
    if (ob2Movement < 0) {
        ob2speed = abs(ob2speed);
    }
    if (ob2Movement > height - ob2Height) {
        ob2speed = -abs(ob2speed);
    }
    rect(ob2Position, ob2Movement, ob2Width, ob2Height);
    ob2Movement += ob2speed;
}


function obstruction3() {
    if (ob3Movement < 0) {
        ob3speed = abs(ob3speed);
    }
    if (ob3Movement > height - ob3Height) {
        ob3speed = -abs(ob3speed);
    }
    rect(ob3Position, ob3Movement, ob3Width, ob3Height);
    ob3Movement += ob3speed;
}


function ballMovement() {

    // switch sides
    // if (mouseX < 0) {
    //     mouseX = width - ballDiameter;
    // }
    // if (mouseX > width) {
    //     mouseX = 0;
    // }

    ellipse(mouseX + ballDiameter / 2, height - ballDiameter / 2, ballDiameter, ballDiameter);

    // console.log('Mouse Position: ' + mouseX);
}


function ballCollisionDetection() {

    // for Obstruction 1
    for (i = ob1Position - ob1Width; i < ob1Position + ob1Width; i++) {
        if ((mouseX === i) && (ob1Movement > (height - ob1Height - ballDiameter))) {
            mouseX = 0;
            collisionCount++;
            console.log('Number of collisions: ' + collisionCount);
        }
    }
    // for Obstruction 2
    for (i = ob2Position - ob2Width; i < ob2Position + ob2Width; i++) {
        if ((mouseX === i) && (ob2Movement > (height - ob2Height - ballDiameter))) {
            mouseX = 0;
            collisionCount++;
            console.log('Number of collisions: ' + collisionCount);

        }
    }
    // for Obstruction 3
    for (i = ob3Position - ob3Width; i < ob3Position + ob3Width; i++) {
        if ((mouseX === i) && (ob3Movement > (height - ob3Height - ballDiameter))) {
            mouseX = 0;
            collisionCount++;
            console.log('Number of collisions: ' + collisionCount);

        }
    }
}


function result() {
    if (collisionCount === 0 && mouseX < ob1Position) {
        gameResult.html('Start the game');
    }
    if (collisionCount === 0 && mouseX > (ob3Position + ob3Width)) {
        gameResult.html('You Won!');
    }
    if (collisionCount > 0) {
        gameResult.html('You lost.');
    }
}