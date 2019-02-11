// Creating an optical illusion of lines looking curved and going inside
// Using parameters to customize the look of the illusion


// Declaring parameters to customize in the sketch
var line_count, line_thickness, line_color, background_color;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // colorMode(HSB);

    createP('Change Line Spacing');
    line_count = createSlider(10, 60, 35);

    createP('Change Line Thickness');
    line_thickness = createSlider(1, 5, 2);

    createP('Change Line Color');
    line_color = createInput("#000000", "color");

    createP('Select Background Color');
    background_color = createInput("#ffffff", "color");

}


function draw() {

    background(background_color.value());
    drawIllusion();

}

function drawIllusion() {
    // creating a variable for the line count
    var totalLines = line_count.value();

    strokeWeight(line_thickness.value());
    stroke(line_color.value());

    // MOVING ALONG HEIGHT
    // creating lines which flow from top to bottom on the left side
    for (let i = 0; i < height; i += totalLines) {
        line(0, i, i, height);
    }

    // Creating lines from bottom to top on the right side
    for (let i = 0; i < height; i += totalLines) {
        line(width, height - i, width - i, 0);
    }

    // MOVING ALONG WIDTH
    // Creating lines from right to left on the top
    for (let i = 0; i < width; i += totalLines) {
        line(width - i, 0, 0, i);
    }

    // Creating lines from left to right on the bottom
    for (let i = 0; i < width; i += totalLines) {
        line(i, height, width, width - i);
    }


}