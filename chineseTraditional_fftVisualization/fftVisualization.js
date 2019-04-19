// Create a Fourier Transform Drawing Machine

// Idea
// 1. Create an epicircleusing Fourier series
// 2. Use FFT with this epicircle to create a drawing machine


// FFT Variables
let x = [];
let y = []; // a digital signal (say, audio)
let fourierX;
let fourierY; // fourier Transform of y
// Fourier Series Variables
let time = 0;
// let wave = [];
let path = [];

let loopCount = 500;

function setup() {
    createCanvas(600, 400);

    // slider = createSlider(1, 10, 1);

    //////////////////////////////////////
    // DEFINING THE PATH FOR THE EPICIRCLE
    //////////////////////////////////////
    // for (let i = 0; i < drawing.length; i++) {
    //     x[i] = drawing[i].x;
    //     y[i] = drawing[i].y;
    // }
    // For creating a noise function
    for (let i = 0; i < loopCount; i++) {
        angle = map(i, 0, loopCount, 0, TWO_PI);
        x[i] = 75 * noise(i / 50);
        // x[i] = i;
        angle = map(i, 0, loopCount, 0, TWO_PI);
        y[i] = 75 * sin(i / 30) - 50;
        // y[i] = i;
    }
    // y = [100, 100, 100, -100, -100, -100, 100, 100, 100, -100, -100, -100, 100, 100, 100, -100, -100, -100];
    fourierX = dft(x); // calling the DFT function
    fourierY = dft(y); // calling the DFT function
}


//////////////////////
// CREATING EPICIRCLES
//////////////////////
function epiCycles(x, y, rotation, fourier) {
    // converting movement to polar coordinates
    // let x = radius * cos(time);
    // let y = radius * sin(time);

    // let x = 0;
    // let y = 0;

    for (let i = 0; i < fourier.length; i++) {
        let prevX = x;
        let prevY = y; // storing last values of x and y

        // let n = i * 2 + 1; (odd values: 1, 3, 5...)
        let freq = fourier[i].freq;

        // let radius = 75 * (4 / (n * PI));
        let radius = fourier[i].amp;

        let phase = fourier[i].phase;
        // adding complexity to cos and sin values based on FFT formula
        x += radius * cos(freq * time + phase + rotation);
        y += radius * sin(freq * time + phase + rotation);

        // OUTER CIRCLE
        stroke(255, 100);
        noFill();
        ellipse(prevX, prevY, radius * 2);

        // MOVING DOT
        fill(255);
        stroke(255);
        // Connecting center to the circumference of Outer Circle
        line(prevX, prevY, x, y);
        // ellipse(x, y, 8);
    }
    return createVector(x, y);
}




function draw() {
    background(0);
    // translate(150, 200);
    // let radius = 100;

    //////////////////////////////
    // POSITION OF YOUR EPICIRCLES
    //////////////////////////////
    let vx = epiCycles(width / 2 + 100, 100, 0, fourierX); // x value of the vecotr
    let vy = epiCycles(100, height / 2 + 100, HALF_PI, fourierY);

    // vector where I want to draw
    let v = createVector(vx.x, vy.y);

    // just pushing the last value
    path.unshift(v); // storing the y value of the wave every draw loop
    // wave.unshift(y); // storing the y value of the wave every draw loop
    // unshift adds a value to the beginning of the array instead of the end (unlike push)

    // Create 2 lines to create the path we want to draw
    line(vx.x, vx.y, v.x, v.y);
    line(vy.x, vy.y, v.x, v.y);

    // translate(200, 0);
    line(x - 200, y, 0, path[0]);
    beginShape();
    noFill();
    for (let i = 0; i < path.length; i++) {
        // vertex(i, wave[i]); // draw y values from x = o
        vertex(path[i].x, path[i].y); // draw y values from x = o
    }
    endShape();

    const dt = TWO_PI / fourierY.length;
    time += dt;

    // if (path.length > 250) {
    //     path.pop(); // delete the array to prevent making it too long
    // }

}