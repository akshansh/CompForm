// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// In-Class Coding Challenge
// Part 1 of 3
// Draw a 'pine tree' at each point: a green triangle with a brown square


var grid_rows, grid_cols;


function setup() {
    createCanvas(500, 500);
    noLoop();

    grid_cols = width / 50;
    grid_rows = height / 50;

}

function draw() {
    background(50);
    noStroke();

    for (let y = 0; y < grid_rows; y++) {
        for (let x = 0; x < grid_cols; x++) {

            // Coordinates 
            var xPos1 = x * 50 + 20 + random(20);
            var xPos2 = xPos1 + 20;
            var xPos3 = (xPos1 + xPos2) / 2;
            var yPos1 = y * 50 + 30 + random(20);
            var yPos2 = yPos1 - 20;


            fill(160, 82, 45); // brown
            rect(xPos1, yPos1, 10, 10);

            fill(0, 128, 0); // green
            triangle(xPos1 - 15, yPos1, xPos1 + 25, yPos1, xPos3 - 5, yPos2);
        }
    }
}