// Recreate Mondrian painting style
// Idea: create RGB rectangles and black borders. Make the user create a Mondrian style painting by using the canvas as a sticker sheet. 
// Colors and dimensions would change on key selection

let font, fontSize = 10;
let boxWidth, boxHeight; // dimensions of the box

function preload() {
    font = loadFont('Montserrat/Montserrat-Regular.ttf');
}

function setup() {
    createCanvas(700, 700);
    background(255);
    mousePressed();

    // Instruction window
    fill(0);
    rect(0, height - 40, width, 40);
    textFont(font);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Create your own Mondrian. Press 'q' for tall tiles,'w' for long tiles, and 'e' for square tiles.", width * 0.5, height - 30);
    text("Choose 1 for white, 2 for black, 3 for red, 4 for yellow, & 5 for blue.", width * 0.5, height - 12);
}

// function to paste objects on mouse click
function mousePressed() {

    strokeWeight(3);
    //rectMode(CENTER);
    rect(mouseX, mouseY, boxWidth, boxHeight);
}

// function to change colors and dimensions of the boxes
function keyReleased() {
    // change color
    if (key === '1') {
        fill(255); // white
    } else if (key === '2') {
        fill(0); // black
    } else if (key === '3') {
        fill(255, 0, 0); // red
    } else if (key === '4') {
        fill(255, 255, 0); // yellow
    } else if (key === '5') {
        fill(15, 127, 191); // blue
    }

    // set dimensions for the box
    if (key === 'q') {
        boxWidth = 80;
        boxHeight = 160;
    } else if (key === 'w') {
        boxWidth = 160;
        boxHeight = 80;
    } else if (key === 'e') {
        boxWidth = 160;
        boxHeight = 160;
    }
}