// Constructor function to create particles

// Idea: apply physics to a particle, incl pos, vel, acc, and force

function Particle() {

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;

    // prevent it from skipping pixels: create a trail
    this.prevPos = this.pos.copy(); // make a copy of its current position

    // Function to update vel and acc
    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0); // reset acc
    }

    // function to follow the vector
    this.follow = function(vectors) {
        var x = floor(this.pos.x / scl); // divide by scale to give the corresponding position on the grid (not the entire screen)
        var y = floor(this.pos.y / scl);
        var index = x + y * cols; // using a 2D value in a 1D array
        var force = vectors[index];
        this.applyForce(force);
    }

    // apply force to accumulate additional force into acc
    this.applyForce = function(force) {
        this.acc.add(force);

    }

    // create the particle
    this.show = function() {
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        // point(this.pos.x, this.pos.y);
        this.updatePrev();
    }


    // CUSTOMIZE
    this.customize = function(particleColor, particleSize) {
        colorMode(HSB);
        // stroke(particleColor, 50, 100); // solid color
        stroke(particleColor, 50, 100, 0.1); // solid color with alpha
        // stroke(50, 0, particleColor); // grayscale
        // stroke(particleColor, 69.7, 25.9); // sepia
        // stroke(mouseX, mouseY, mouseX + mouseY, 5);
        // stroke(mouseY, mouseX, mouseY, 5);
        strokeWeight(particleSize);

    }


    // Prevent lines from being created when it reaches screen edge
    this.updatePrev = function() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    // prevent particle from going outside the the screen
    this.edges = function() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}