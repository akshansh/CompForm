// Program to create a Big Dipper constellation using Noise. 

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

let twinkle1;
let twinkle2;
let diameter1;
let diameter2;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
}


function draw() {

    background(0);

    twinkleStars();

    // Creating Big Dipper (hard code the coordinates)
    createStars(1 * width / 15, 2 * height / 15);
    createStars(4 * width / 15, 3 * height / 15);
    createStars(6 * width / 15, 5.5 * height / 15);
    createStars(8 * width / 15, 8 * height / 15);
    createStars(7.5 * width / 15, 11 * height / 15);
    createStars(13 * width / 15, 9 * height / 15);
    createStars(12 * width / 15, 13 * height / 15);
}


// CREATE STARS
function createStars(posX, posY) {
    // pending: create multiple stars at random locations
    ellipse(posX, posY, diameter1, diameter2);
    ellipse(posX, posY, diameter2, diameter1);

}

// MAKE STARS TWINKLE
function twinkleStars() {
    fill(255, 50 + noise(millis() * 0.001) * 255); // flicker
    noiseSeed(1);
    twinkle1 = noise(millis() * 0.0001);
    noiseSeed(20); // different movement across x & y
    twinkle2 = noise(millis() * 0.0010);
    diameter1 = twinkle1 * 40;
    diameter2 = twinkle2 * 20;
}