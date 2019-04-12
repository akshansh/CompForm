// Constructor Function

// Would be linked to textSteering_p5.js


function Vehicle(t, x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.text = t;
    this.maxSpeed = 10;
    this.maxForce = 1;
}

Vehicle.prototype.behaviors = function() {
    // var seek = this.seek(this.target);
    var arrive = this.arrive(this.target);
    // this.applyForce(seek);

    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5); // flee stronger than arrival

    this.applyForce(arrive);
    this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}

Vehicle.prototype.show = function() {
    fill(255);
    text(this.text, this.pos.x, this.pos.y);
}

// Function to make characters move towards the target
Vehicle.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos); // subtract the desired pos
    var d = desired.mag(); // d = distance
    var speed = this.maxSpeed;
    if (d < 100) {
        var speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return (steer);
}

// Function to make characters move away from the target
Vehicle.prototype.seek = function(target) {
    var desired = p5.Vector.sub(target, this.pos); // subtract the desired pos
    desired.setMag(this.maxSpeed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return (steer);
}

// Function to make the target dynamic
Vehicle.prototype.flee = function(target) {
    var desired = p5.Vector.sub(target, this.pos); // subtract the desired pos

    var d = desired.mag();
    if (d < 50) {
        desired.setMag(this.maxSpeed);
        desired.mult(-1);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        return (steer);
    } else {
        return createVector(0, 0);
    }
}