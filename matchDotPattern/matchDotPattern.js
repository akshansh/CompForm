// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge
// Replicate the dot pattern image
// Check the strategy.md file for logic assessment


var hueValue; // vary the Hue value
var colorNoise;

function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(50);
    colorMode(HSB);
    noStroke();
    ellipseMode(CENTER);


    var noiseFrequency = 10; // play with this value to get the desired arrangement
    // best value so far: 1

    for (var i = 0; i < 100; i++) {

        // Arrangement
        noiseSeed(1);
        var xPos = noise(i * noiseFrequency) * width;
        noiseSeed(10002);
        var yPos = noise(i * noiseFrequency) * height;

        // Color
        hueValue = random(0, 360);
        var colorNoise = noise(hueValue * noiseFrequency) * 360;
        fill(colorNoise, 100, 100);

        // Size
        var diameter = map(colorNoise, 0, 360, 4, 20);

        ellipse(xPos, yPos, diameter, diameter);
    }


    noLoop();

}