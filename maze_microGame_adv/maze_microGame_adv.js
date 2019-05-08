// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js
// require /microgames/sketches/p5.play.js
// art from opengameart.org
// https://opengameart.org/content/a-platformer-in-the-forest


//////////////////////////////////////////
// Maze Microgame - Advanced
//////////////////////////////////////////


// Reference:
// http://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions.js#



// Character variables
var joe_sprite, ball_sprite;
// Wall variables
var wall1_sprite, wall2_sprite, wall3_sprite, wall4_sprite, wall5_sprite, wall6_sprite, wall7_sprite, wall8_sprite, wall9_sprite, wall10_sprite, wall11_sprite, wall12_sprite;



function setup() {
    createCanvas(600, 600);

    // PLACING CHARACTERS
    var joe_image = loadImage("sketches/joe.png");
    var ball_image = loadImage("sketches/ball.png");

    joe_sprite = createSprite(300, 50);
    joe_sprite.addImage("main", joe_image);
    joe_sprite.scale = 0.5;
    ball_sprite = createSprite(150, 50);
    ball_sprite.addImage("main", ball_image);
    ball_sprite.scale = 0.5;

    // CREATING A WALL
    var wallImage_hor = loadImage("sketches/wall3.png");
    var wallImage_vert = loadImage("sketches/wall2.png");

    wall1_sprite = createSprite(200, 110);
    wall1_sprite.addImage("main", wallImage_hor);
    wall1_sprite.scale = 0.75;
    wall2_sprite = createSprite(350, 110);
    wall2_sprite.addImage("main", wallImage_hor);
    wall2_sprite.scale = 0.75;
    wall3_sprite = createSprite(550, 110);
    wall3_sprite.addImage("main", wallImage_hor);
    wall3_sprite.scale = 0.75;
    wall4_sprite = createSprite(50, 230);
    wall4_sprite.addImage("main", wallImage_hor);
    wall4_sprite.scale = 1;
    wall5_sprite = createSprite(250, 260);
    wall5_sprite.addImage("main", wallImage_vert);
    wall5_sprite.scale = 0.75;
    wall6_sprite = createSprite(350, 260);
    wall6_sprite.addImage("main", wallImage_vert);
    wall6_sprite.scale = 0.75;
    wall7_sprite = createSprite(450, 260);
    wall7_sprite.addImage("main", wallImage_vert);
    wall7_sprite.scale = 0.75;
    wall8_sprite = createSprite(600, 260);
    wall8_sprite.addImage("main", wallImage_hor);
    wall8_sprite.scale = 0.75;
    wall9_sprite = createSprite(150, 410);
    wall9_sprite.addImage("main", wallImage_hor);
    wall9_sprite.scale = 0.75;
    wall10_sprite = createSprite(350, 410);
    wall10_sprite.addImage("main", wallImage_hor);
    wall10_sprite.scale = 0.75;
    wall11_sprite = createSprite(500, 440);
    wall11_sprite.addImage("main", wallImage_vert);
    wall11_sprite.scale = 0.75;
    wall12_sprite = createSprite(50, 400);
    wall12_sprite.addImage("main", wallImage_vert);
    wall12_sprite.scale = 1;

    noSmooth();
}


function draw() {
    background(250, 200, 100);

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
    joe_sprite.collide(wall7_sprite);
    joe_sprite.collide(wall8_sprite);
    joe_sprite.collide(wall9_sprite);
    joe_sprite.collide(wall10_sprite);
    joe_sprite.collide(wall11_sprite);
    joe_sprite.collide(wall12_sprite);
    ball_sprite.collide(wall1_sprite);
    ball_sprite.collide(wall2_sprite);
    ball_sprite.collide(wall3_sprite);
    ball_sprite.collide(wall4_sprite);
    ball_sprite.collide(wall5_sprite);
    ball_sprite.collide(wall6_sprite);
    ball_sprite.collide(wall7_sprite);
    ball_sprite.collide(wall8_sprite);
    ball_sprite.collide(wall9_sprite);
    ball_sprite.collide(wall10_sprite);
    ball_sprite.collide(wall11_sprite);
    ball_sprite.collide(wall12_sprite);

    drawSprites();
}