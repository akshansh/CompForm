// Particle function
// Called in the main function
// Following from the flow field example


function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(4, 20);

    // change the particle location
    this.update = function() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    // show the particles
    this.show = function() {
        noStroke();

        // Get the color of the particle from the loaded image
        var r = red(referenceImageColors);
        var g = green(referenceImageColors);
        var b = blue(referenceImageColors);
        fill(255);
        // console.log(r, g, b);

        ellipse(this.x, this.y, this.r, this.r);

    }

}