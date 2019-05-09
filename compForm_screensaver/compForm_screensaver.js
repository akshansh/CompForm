// Screensaver for CompForm

// Reference: http://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions4.js

//Collision detection - Bouncing behavior

var circles;
var comp_sprite;
var form_sprite;

function setup() {
    createCanvas(800, 400);

    circles = new Group();

    for (var i = 0; i < 20; i++) {
        var circle = createSprite(random(0, width), random(0, height));
        circle.addImage('main', loadImage('sketches/circle.png'));
        circle.setCollider('circle', -2, 2, 55);
        circle.setSpeed(random(1, 2), random(0, 360));

        //scale affects the size of the collider
        circle.scale = random(0.5, 1);
        //mass determines the force exchange in case of bounce
        circle.mass = circle.scale;
        //restitution is the dispersion of energy at each bounce
        //if = 1 the circles will bounce forever
        //if < 1 the circles will slow down
        //if > 1 the circles will accelerate until they glitch
        //circle.restitution = 0.9;
        circles.add(circle);
    }


    // Placing the Comp Form letters
    // C
    comp_sprite = createSprite(300, 200);
    comp_sprite.addImage(loadImage('sketches/c.png'));
    // make letter immovable
    comp_sprite.immovable = true;
    // F
    form_sprite = createSprite(500, 200);
    form_sprite.addImage(loadImage('sketches/f.png'));
    // make letter immovable
    form_sprite.immovable = true;

}

function draw() {
    background(255, 255, 255);

    //circles bounce against each others and against boxes
    circles.bounce(circles);
    //boxes are "immovable"
    circles.bounce(comp_sprite);
    circles.bounce(form_sprite);

    //all sprites bounce at the screen edges
    for (var i = 0; i < allSprites.length; i++) {
        var s = allSprites[i];
        if (s.position.x < 0) {
            s.position.x = 1;
            s.velocity.x = abs(s.velocity.x);
        }

        if (s.position.x > width) {
            s.position.x = width - 1;
            s.velocity.x = -abs(s.velocity.x);
        }

        if (s.position.y < 0) {
            s.position.y = 1;
            s.velocity.y = abs(s.velocity.y);
        }

        if (s.position.y > height) {
            s.position.y = height - 1;
            s.velocity.y = -abs(s.velocity.y);
        }
    }

    drawSprites();

}