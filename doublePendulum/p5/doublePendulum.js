// Creating a customizable double pendulum
// Taking inspiration from Daniel Shiffman's YouTube channel, The Coding Train
// Video reference: https://youtu.be/uWzPe_S-RVE

// creating variables
let r1 = 125; // radius for ball 1's path
let r2 = 125; // radius for ball 2's path
let m1 = 10; // mass of ball 1
let m2 = 10; // mass of ball 2
let a1 = 0; // angle of ball 1
let a2 = 0; // angle of ball 2
let a1_v = 0; // angular velocity of ball 1
let a2_v = 0; // angular velocity of ball 2
let g = 1; // acceleration of gravity

let px2 = -1; // previous value of x2 (to draw a line)
let py2 = -1; // previous value of y2
let cx, cy; // for moving the pendulum on canvas

let buffer; // used to tell p5 what to draw and what to leave


// creating sliders and buttons (variables)
var lineColor_button; // color of the pendulum tracing
var traceRedVal = 0; // trace red value to change based on button press
var traceGreenVal = 0; // trace green value to change based on button press
var traceBlueVal = 0; // trace blue value to change based on button press

var gravity_slider; // value of acceleration of gravity
var radius1_slider; // value of radius of pendulum 1
var radius2_slider; // value of radius of pendulum 2
var drag_slider; // value of resistance force


function setup() {
    createCanvas(window.innerWidth, 450);
    pixelDensity(1);
    a1 = PI / 2; // 90 degree starting angle
    a2 = PI / 2; // 90 degree starting angle (combined with a1)
    cx = width / 2;
    cy = 150;
    buffer = createGraphics(width, height); // similar to PGraphincs in Processing
    buffer.background(220);
    buffer.translate(cx, cy);


    // Create buttons and sliders
    lineColor_button = createButton('Randomize Tracing Color');
    createP('Gravity');
    gravity_slider = createSlider(1, 4, 1);
    createP('Radius of Pendulum 1 and 2');
    radius1_slider = createSlider(20, 200, 100, 10);
    radius2_slider = createSlider(20, 200, 100, 10);
    createP('Air Drag');
    drag_slider = createSlider(0.950, 1.000, 0.999, 0.001);

}


function draw() {
    // create the first background as base which would then be traced by the pendulum
    background(200);
    imageMode(CORNER);
    image(buffer, 0, 0, width, height);

    g = gravity_slider.value();
    r1 = radius1_slider.value();
    r2 = radius2_slider.value();

    // writing formula for angular acceleration
    // for angle 1: a1_a (angular acc for angle 1)
    let num1 = -g * (2 * m1 + m2) * sin(a1);
    let num2 = -m2 * g * sin(a1 - 2 * a2);
    let num3 = -2 * sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    // for angle 2: a2_a (angular acc for angle 2)
    num1 = 2 * sin(a1 - a2);
    num2 = (a1_v * a1_v * r1 * (m1 + m2));
    num3 = g * (m1 + m2) * cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    translate(cx, cy);
    // trace color: adjust using sliders
    lineColor_button.mousePressed(lineColorChange);
    //stroke(traceRedVal, traceGreenVal, traceBlueVal);
    strokeWeight(2);

    // coordinates of ball 1
    let x1 = r1 * sin(a1);
    let y1 = r1 * cos(a1);

    // coordinates of ball 2
    let x2 = x1 + r2 * sin(a2);
    let y2 = y1 + r2 * cos(a2);

    // render ball 1
    line(0, 0, x1, y1);
    fill(0);
    ellipse(x1, y1, m1, m1);

    // render ball 2
    line(x1, y1, x2, y2);
    fill(traceRedVal, traceGreenVal, traceBlueVal);
    ellipse(x2, y2, m2, m2);

    // Physics of angular motion
    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    // drag force: adjust using sliders
    a1_v *= drag_slider.value();
    a2_v *= drag_slider.value();

    // Tracing
    buffer.stroke(traceRedVal, traceGreenVal, traceBlueVal); // change color of stroke
    if (frameCount > 1) {
        buffer.line(px2, py2, x2, y2);
    }

    px2 = x2;
    py2 = y2;
}

// Change the tracing color
function lineColorChange() {
    console.log('Color has changed.');
    traceRedVal = random(255);
    traceGreenVal = random(255);
    traceBlueVal = random(255);
}