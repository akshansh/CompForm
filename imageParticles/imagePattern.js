// IMAGE PATTERN BY CHANGING COLORS
// For details, check logic.md file

var referenceImage;
var referenceImageColors; // pixel color values of the reference image

function preload() {
    // referenceImage = loadImage('mondrian.jpg');
    referenceImage = loadImage('reference.jpg');
}


function setup() {
    createCanvas(425, 425);
}


function draw() {
    background(51);

    for (var y = 0; y < referenceImage.height; y++) {
        for (var x = 0; x < referenceImage.width; x++) {
            referenceImageColors = referenceImage.get(x, y);

            var r = red(referenceImageColors);
            var g = green(referenceImageColors);
            var b = blue(referenceImageColors);

            var changedColors;
            if (r === 255) {
                changedColors = color(255, 0, 0);
            } else {
                changedColors = color(0, 0, 255);
            }

            referenceImage.set(x, y, changedColors);
            referenceImage.updatePixels();
        }
    }

    noSmooth();
    image(referenceImage, 0, 0, width, height);


    noLoop();

}