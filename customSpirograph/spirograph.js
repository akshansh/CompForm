// Creating a spirograph
// Inspired by the workshop during Processing Community Day


// Variables for creating the pattern
var angle;
var circumference_ratio;
var pos_x, pos_y;

// Parameters for generating spirograph
var pos_button; // change the position of the spirograph
var pattern_change_button; // create a new pattern
var color_change_button; // change the color of the dots
var dot_size_slider; // change the dot size
var pattern_size_slider; // change the size of the pattern


function setup() {
    createCanvas(window.innerWidth, 600);

    background(240);
    angle = 0.0;
    pos_x = width / 2;
    pos_y = height / 2;

    // Button Creation
    pattern_change_button = createButton("Randomize Pattern");
    pos_button = createButton("Randomize Position");
    color_change_button = createButton("Randomize Color");

    // Slider Creation
    createP('Change Pattern Size');
    pattern_size_slider = createSlider(50, 200, 100);
    createP('Change Dot Size');
    dot_size_slider = createSlider(1, 10, 2);

}


function draw() {
    content.translate(pos_x, pos_y);

    // Button Action
    pattern_change_button.mousePressed(changePattern);
    pos_button.mousePressed(randomizePosition);
    color_change_button.mousePressed(changeColor);

    strokeWeight(dot_size_slider.value());

    // draw the pattern between begin shape and end shape
    beginShape();
    var radius = pattern_size_slider.value() * Math.cos(circumference_ratio * angle);
    var x = Math.cos(angle) * radius;
    var y = Math.sin(angle) * radius;
    vertex(x, y);
    vertex(x + 0.1, y + 0.1);
    endShape();

    angle = angle + 0.1;

}

function randomizePosition() {
    // move the pattern around the screen
    console.log("Position has changed.");
    pos_x = random(0, width);
    pos_y = random(0, height);

}

function changePattern() {
    console.log('Pattern has changed.');
    circumference_ratio = random(50.0) / random(5.0);
}

function changeColor() {
    console.log('Color has changed.');
    stroke(random(255), random(255), random(255));
}