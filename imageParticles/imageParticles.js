// IMAGE PATTERN BY USING PARTICLES
// For details, check logic.md file

var particle;
var referenceImage;
var referenceImageColors; // pixel color values of the reference image

function preload() {
    // referenceImage = loadImage('mondrian.jpg');
    referenceImage = loadImage('reference.jpg');
}


function setup() {
    createCanvas(425, 425);
    // pixelDensity(1);


    particle = new Particle(random(width), random(height));
    // Filling particles[] array with values from Particle constructor function
    // for (var i = 0; i < 1; i++) {
    //     particles[i] = new Particle(random(width), random(height));
    // }

}


function draw() {
    background(51);

    for (var y = 0; y < referenceImage.height; y++) {
        for (var x = 0; x < referenceImage.width; x++) {
            referenceImageColors = referenceImage.get(x, y);

            particle.show(); // show function to show the particles
            particle.update(); // calling update function to change particle location

            referenceImage.set(x, y);
            referenceImage.updatePixels();
        }
    }

    // Creating the loaded image using particles
    // for (var i = 0; i < particles.length; i++) {
    //     particles[i].update(); // calling update function to change particle location
    //     particles[i].show(); // show function to show the particles
    // }

    noSmooth();
    image(referenceImage, 0, 0, width, height);


    // noLoop();

}