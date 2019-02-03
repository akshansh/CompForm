// Learning from Pixel array and brightness mirror videos by The Coding Train, YouTube
// loadPixels = using pixels array.
// A linear array of coordinates of a canvas
// Each pixel info is separated by 4 values (r,g,b,a)

var video;
var videoScale = 16; //scaling down quality for optimization

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);

    video = createCapture(VIDEO);
    video.size(width / videoScale, height / videoScale);

}

function draw() {
    background(0);

    video.loadPixels();
    loadPixels();

    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (x + y * video.width) * 4;
            // Create a function to navigate through the length of the board

            var r = video.pixels[index + 0]; // red from webcam
            var g = video.pixels[index + 1]; // green from webcam
            var b = video.pixels[index + 2]; // blue from webcam

            var bright = (r + g + b) / 3;

            fill(bright);
            rect(x * videoScale, y * videoScale, videoScale, videoScale);

            // pixels[index + 0] = r; //red
            // pixels[index + 1] = g; //green
            // pixels[index + 2] = b; //blue
            // pixels[index + 3] = 255; //alpha
        }
    }

    // updatePixels();
}