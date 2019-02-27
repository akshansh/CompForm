// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// In-Class Challenge
// Part 2 of 3
// Snowman Noise Placement

var xPos, yPos;
var xOffset, yOffset;
var snowmanCount;

function setup() {
    createCanvas(500, 500);
    noLoop();

    xPos = width / 2;
    yPos = width / 2;

    xOffset = width;
    yOffset = height;

    snowmanCount = 20;
}

function draw() {
    background(50);
    fill(200);
    noStroke();
    for (let i = 0; i < snowmanCount; i++) {
        var x = noise(xPos, yPos) * width;
        var y = noise(yPos) * height;

        ellipse(x, y - 40, 10, 10);
        ellipse(x, y - 25, 20, 20);
        ellipse(x, y, 30, 30);


        xPos += xOffset;
        yPos += yOffset;
    }
}