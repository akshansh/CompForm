// Updated program to create a custom flow field using 3D Perlin Noise

var inc = 0.1; // increment variable for handling noise variation
var scl = 10; // scale (determines grid density)
var cols, rows;

var zOff = 0; // 3rd dimension for Perlin Noise

var fr; // frame rate

var particles = []; // creating a particle array

var flowField = []; // array where all the particles would be generated

// CUSTOMIZATION
var particleRotation_slider; // define how much the particles should rotate when going along the vector path
var particleHueColor_slider; // adjust the particle color
var particleSize_slider; // adjust the particle size (strokeWeight)

function setup() {
    createCanvas(800, 500);

    colorMode(HSB);

    // creating integer value of rows and columns
    cols = floor(width / scl);
    rows = floor(height / scl);

    fr = createP(''); // creating a new line

    flowField = new Array(cols * rows);


    // CUSTOMIZATION
    createP('Particle Rotation');
    particleRotation_slider = createSlider(1, 10, 1); // min, max, start
    createP('Particle Hue');
    particleHueColor_slider = createSlider(0, 360, 210);
    createP('Particle Size');
    particleSize_slider = createSlider(1, 10, 1);

    // create particles from the constructor function
    // i defines the number of particles
    for (var i = 0; i < 1000; i++) {
        particles[i] = new Particle();
    }

    background(255);

}

function draw() {
    // randomSeed(10); // used to fix the randomness of draw

    var yOff = 0; // offset in the y value

    for (var y = 0; y < rows; y++) {
        var xOff = 0; // offset in x value
        for (var x = 0; x < cols; x++) {

            var index = (x + y * cols); // index every location

            var angle = noise(xOff, yOff, zOff) * TWO_PI * particleRotation_slider.value();
            var v = p5.Vector.fromAngle(angle); // create a vector from an angle
            v.setMag(1); // inverse of particle's smooth rotation
            flowField[index] = v; // take every location and put inside the flowField array

            xOff += inc;

            // FOR VECTOR
            // stroke(0, 50);
            // strokeWeight(1);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // line(0, 0, scl, 0);
            // pop();
        }
        yOff += inc;
        zOff += 0.0003; // particle increment in z offset 
    }

    // plan the order of calling the functions
    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowField);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
        particles[i].customize(particleHueColor_slider.value(), particleSize_slider.value());
    }

    // Show frame rate on the screen
    // fr.html(floor(frameRate()));
}