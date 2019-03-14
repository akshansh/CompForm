// Drawing animal face using Turtle Graphics

// For notes, check logic.md
// GitHub: https://github.com/akshansh2593/CompForm/blob/master/animalImageTurtleTiles/logic.md

var referenceImage;
var myTurtle;

function preload() {
    referenceImage = loadImage("Reference.jpg"); // panda
    // referenceImage = loadImage("Reference2.jpg"); // illustrator
    // referenceImage = loadImage("Reference3.png"); // bear
    // referenceImage = loadImage("Reference4.jpg"); // tiger
    // referenceImage = loadImage("Reference5.jpg"); // bee
}


function setup() {
    createCanvas(500, 500);
    myTurtle = new Turtle();

    background(255); // white
    stroke(0);
    strokeWeight(1);

    image(referenceImage, 0, 0); // take pixel values from the loaded image
    pixelDensity(1);
    referenceImage.loadPixels(); // load pixels from the reference image
    loadPixels(); // loads the pixels from the image

    for (var y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {

            var index = (x + y * width) * 4; // pixel coordinate
            // loading color values from the reference image
            var r = referenceImage.pixels[index + 0]; // color value
            var g = referenceImage.pixels[index + 1];
            var b = referenceImage.pixels[index + 2];
            var a = referenceImage.pixels[index + 3];

            // putting the color values to the pixel array
            pixels[index + 0] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = a;

            if (r === 0) {
                // console.log("found a black color");
                drawTurtleGraphic(x, y, index);
            }
        }
    }
    updatePixels();
}


function draw() {}


// Move the turtle when the color is black. And, draw at the black pixel spot.
function drawTurtleGraphic(x, y, index) {
    console.log("Graphic is being drawn.");
    myTurtle.penUp();
    myTurtle.moveTo(x, y);
    myTurtle.penDown();
    myTurtle.turnRight(-45);
    myTurtle.moveForward(10);
    myTurtle.penUp();
}



// TRYING THE GET AND SET FUNCTION

// // get coordinates of every pixel and put that in input color
// var input_color = referenceImage.get(x, y);
// // get rgb values of every pixel and put in a separate variable
// var r = red(input_color);
// var g = green(input_color);
// var b = blue(input_color);

// var output_color;

// // Draw the turtle when the pixel color is black
// if (r === 0 && g === 0 && b === 0) {

//     // Draw Turtle
//     moveTurtle(x, y);

//     // DEBUG

//     console.log("Time to draw the Turtle.");
//     console.log("input_color x & y: " + input_color);
//     // check if the r, g, b coordinates are the same. Then, I can use a single variable to compare the location of color with that of drawing the animal
//     console.log("red x & y: " + r);
//     // console.log("green x & y: " + g);
//     // console.log("blue x & y: " + b);

// } else {
//     console.log("Turtle won't draw.");
//     console.log("prohibited red x & y: " + r);
// }

// referenceImage.set();
// referenceImage.updatePixels();
// }

// }
// noSmooth();
// image(referenceImage, 0, 0);