// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// In-class challenges
// Part 3 of 3
// Stored Random and Grid Placement

const points = [];
// var posOffset; // position offset in grid placement

var xPos = 0;
var yPos = 0;
var pointCount; // no. of points in random placement

function setup() {
    createCanvas(500, 500);
    noLoop();

    pointCount = 100;

    // STORED RANDOM PLACEMENT
    for (let i = 0; i < pointCount; i++) {
        points.push({
            xPos: random() * width,
            yPos: random() * height
        });
    }

    createTreesAndSnowmen();

    // STORED GRID PLACEMENT
    // posOffset = 10;

    // for (let y = 0; y < 10; y++) {
    //     for (let x = 0; x < 10; x++) {
    //         points.push({
    //             x: x * 50 + 25 + random() * posOffset,
    //             y: y * 50 + 25 + random() * posOffset
    //         });
    //     }
    // }
}

function draw() {


    // STORED GRID PLACEMENT
    // for (let i = 0; i < points.length; i++) {
    //     const p = points[i];
    //     ellipse(p.x, p.y, 10, 10);
    // }
}


function createTreesAndSnowmen() {
    background(50);
    fill(200);
    noStroke();
    // STORED RANDOM PLACEMENT
    for (let i = 0; i < points.length; i++) {
        const p = points[i];

        if (random() < 0.75) {

            // create pine trees
            let xPos1 = p.xPos - 10;
            let xPos2 = p.xPos + 20;
            let xPos3 = (xPos1 + xPos2) / 2;
            let yPos1 = p.yPos;
            let yPos2 = yPos1 - 20;

            fill(160, 82, 45); // brown
            rect(p.xPos, p.yPos, 10, 10);

            fill(0, 128, 0); // green
            triangle(xPos1, yPos1, xPos1 + 30, yPos1, xPos3, yPos2);

        } else {
            // create snowmen
            fill(255);
            ellipse(p.xPos, p.yPos - 40, 10, 10);
            ellipse(p.xPos, p.yPos - 25, 20, 20);
            ellipse(p.xPos, p.yPos, 30, 30);

            // random movement of snowman
            p.xPos += random() * 2;
            p.yPos += random() * 2;
        }
    }

}