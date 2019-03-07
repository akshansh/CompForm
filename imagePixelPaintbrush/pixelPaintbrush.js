// Creating a paintbrush using image pixels. 
// Take the colors from a source image to draw patterns on canvas.


var referenceImage = []; // create an array to store
var imageColor;

var imageNoise;
var noiseFrequency;
var imageOffset;

// Customization using Parameters
var dotDistance_slider;
var imageChange_dropdown;
var changedImageName;
var dotSize;

// Load the reference images in an array
function preload() {
    for (i = 1; i <= 18; i++)
        referenceImage[i] = loadImage("referenceImages/" + i + ".jpg");
}

function setup() {
    createCanvas(500, 500);

    noiseFrequency = 3;
    imageOffset = 0.0;
    dotSize = 10;

    // create a dropdown for the images
    createP("Select the image pattern");
    imageChange_dropdown = createSelect();
    imageChange_dropdown.option("Brad");
    imageChange_dropdown.option("Ray");
    imageChange_dropdown.option("Kathrin");
    imageChange_dropdown.option("Justin");
    imageChange_dropdown.changed(draw);

    // create a slider for the distance between dots
    createP('Change Distance Between Dots');
    dotDistance_slider = createSlider(0.001, 0.02, 0.001, 0.001);

    background(50);
}

function draw() {
    noStroke();

    // add noise to the position
    noiseSeed(154329 + changedImageName);
    var posX = noise(imageOffset * noiseFrequency) * width;
    noiseSeed(1 + changedImageName);
    var posY = noise(imageOffset * noiseFrequency) * height;


    // selecting the image
    if (imageChange_dropdown.value() === "Kathrin") {
        changedImageName = 1;
    }
    if (imageChange_dropdown.value() === "Ray") {
        changedImageName = 5;
    }
    if (imageChange_dropdown.value() === "Brad") {
        changedImageName = 15;
    }
    if (imageChange_dropdown.value() === "Justin") {
        changedImageName = 18;
    }

    // take color from the reference image
    imageColor = referenceImage[changedImageName].get(posX, posY);

    // Scale the images
    let mapX = map(posX, 0, 250, 0, width);
    let mapY = map(posY, 0, 250, 0, height);

    fill(imageColor);
    // draw the image
    ellipse(mapX, mapY, dotSize, dotSize);
    ellipse(mapY, mapX, dotSize, dotSize);
    ellipse(width - mapX, height - mapY, dotSize, dotSize);
    ellipse(height - mapY, width - mapX, dotSize, dotSize);

    imageOffset += dotDistance_slider.value();
}