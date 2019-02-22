// TERRAIN GENERATOR
// For logic and notes, view logic_notes.md file


// creating a grid
var cols; // columns
var rows; // rows
var scl = 20; // scale
var w = 1200; // width
var h = 900; // height

// 2D array for storing grid values (x and y)
var terrain = [];

// variable to make the grid move
var flying = 0;

// CUSTOMIZE
var terrainHeight_slider; // change terrain height
var terrainColor;


function setup() {
    createCanvas(600, 600, WEBGL);

    // grid proportion
    cols = w / scl;
    rows = h / scl;

    // Store the x and y grid values in an array
    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
            terrain[x][y] = 0;
        }
    }


    // CUSTOMIZE
    createP('Change Altitude');
    terrainHeight_slider = createSlider(20, 300, 160, 20);



}

function draw() {
    background(177, 219, 237); // sky
    // noStroke();
    stroke(0); // terrain edges
    // noFill();
    fill(151, 124, 83); // terrain background
    // terrainColor = map(noise(-terrainHeight_slider.value(), terrainHeight_slider.value()), 0, 1, 0, 255);
    // fill(terrain[x][y]); // mapping


    flying -= 0.2;

    // Build the terrain
    var yOff = flying;
    for (var y = 0; y < rows; y++) {
        var xOff = 0;
        for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xOff, yOff), 0, 1, -terrainHeight_slider.value(), terrainHeight_slider.value());
            xOff += 0.2;
        }
        yOff += 0.2;
    }

    // Center align the grid
    translate(0, 50);
    rotateX(PI / 3);
    translate(-w / 2, -h / 2);

    // Create the grid
    for (var y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}