// Learning from Pixel array and brightness mirror videos by The Coding Train, YouTube
// loadPixels = using pixels array.
// A linear array of coordinates of a canvas
// Each pixel info is separated by 4 values (r,g,b,a)

var canvasWidth = 800; // for mapping
var canvasHeight = 800; // for mapping

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    pixelDensity(1);
    map(canvasWidth, 0, canvasWidth, 0, 255);
    map(canvasHeight, 0, canvasHeight, 0, 255);
}

function draw() {
    background(0);

    loadPixels();

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            // Create a function to navigate through the length of the board

            pixels[index + 0] = 0; //red
            pixels[index + 1] = 0; //green
            pixels[index + 2] = 0; //blue
            pixels[index + 3] = random(255); //alpha

        }
    }

    updatePixels();
}