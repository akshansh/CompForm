// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js
// require /microgames/sketches/p5.play.js
// art from opengameart.org
// https://opengameart.org/content/a-platformer-in-the-forest


//////////////////////////////////////////
// Maze Microgame - Basic
//////////////////////////////////////////


// Reference:
// http://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions.js#



// Character variables
var joe_sprite, ball_sprite;
// Wall variables
var wall1_sprite, wall2_sprite, wall3_sprite, wall4_sprite, wall5_sprite, wall6_sprite;



function setup() {
    createCanvas(600, 600);

    // PLACING CHARACTERS
    var joe_image = loadImage("sketches/joe.png");
    var ball_image = loadImage("sketches/ball.png");

    joe_sprite = createSprite(300, 80);
    joe_sprite.addImage("main", joe_image);
    // joe_sprite.scale = 0.75;
    ball_sprite = createSprite(300, 175);
    ball_sprite.addImage("main", ball_image);
    ball_sprite.scale = 0.5;

    // CREATING A WALL
    var wallImage = loadImage("sketches/wall2.png");

    wall1_sprite = createSprite(150, 490);
    wall1_sprite.addImage("main", wallImage);
    wall2_sprite = createSprite(450, 490);
    wall2_sprite.addImage("main", wallImage);
    wall3_sprite = createSprite(150, 300);
    wall3_sprite.addImage("main", wallImage);
    wall4_sprite = createSprite(450, 300);
    wall4_sprite.addImage("main", wallImage);
    wall5_sprite = createSprite(150, 110);
    wall5_sprite.addImage("main", wallImage);
    wall6_sprite = createSprite(450, 110);
    wall6_sprite.addImage("main", wallImage);

    noSmooth();
}


function draw() {
    background(250, 250, 150);

    textSize(30);
    textAlign(CENTER, CENTER);
    text('Start', width / 2, height / 12);
    text('End', width / 2, height / 1.1);

    // Move Joe
    joe_sprite.position.x = mouseX;
    joe_sprite.position.y = mouseY;

    // Move Ball
    joe_sprite.displace(ball_sprite);

    // Adding Wall Collision Properties
    joe_sprite.collide(wall1_sprite);
    joe_sprite.collide(wall2_sprite);
    joe_sprite.collide(wall3_sprite);
    joe_sprite.collide(wall4_sprite);
    joe_sprite.collide(wall5_sprite);
    joe_sprite.collide(wall6_sprite);
    ball_sprite.collide(wall1_sprite);
    ball_sprite.collide(wall2_sprite);
    ball_sprite.collide(wall3_sprite);
    ball_sprite.collide(wall4_sprite);
    ball_sprite.collide(wall5_sprite);
    ball_sprite.collide(wall6_sprite);

    drawSprites();
}