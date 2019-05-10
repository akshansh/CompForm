// Program to move a ball and jump to pickup a coin. 
// In theis advanced, ball will jump and pick coins.
// The ball and the coins are animated

// Reference: http://molleindustria.github.io/p5.play/examples/index.html?fileName=keyPresses.js

// Github link:
// 


var ball;
var coin;
var platform;
var GRAVITY = 2;
var JUMP = 10;

function setup() {
    createCanvas(800, 600);

    ball = createSprite(300, 150);
    // Ball on the platform
    ball.addAnimation('normal', 'sketches/ball001.png', 'sketches/ball012.png');
    // Ball in the air
    ball.addAnimation('stretch', 'sketches/ball_bounce001.png', 'sketches/ball_bounce012.png');
    ball.setCollider('circle', 0, 0, 64);
    // ball.debug = true;

    coin = createSprite(500, 200);
    coin.addAnimation('normal', 'sketches/coin001.png', 'sketches/coin006.png');
    coin.addImage('transformed', loadImage('sketches/coinTaken.png'));
    coin.setCollider('circle', 0, 0, 50);
    // coin.debug = true;

    platform = createSprite(400, 500);
    platform.addImage(loadImage('sketches/platform.png'));

    ball.depth = 10;
}

function draw() {
    background(255, 255, 255);

    //if no arrow input set velocity to 0
    ball.velocity.x = 0;

    if (keyIsDown(LEFT_ARROW)) {
        ball.velocity.x = -5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ball.velocity.x = 5;
    }
    if (keyIsDown(UP_ARROW)) {
        ball.changeAnimation('stretch');
        ball.animation.rewind();
        ball.velocity.y = -JUMP;
    }

    //instead of checking the colliders or bounding box overlaps
    //I can just check a point against a collider
    if (coin.overlapPoint(ball.position.x, ball.position.y))
        coin.changeImage('transformed');

    //Or check a point against the pixels of a sprite animation or image
    //if the bottom of the ball is not overlapping with the non transparent pixels
    //of the platform make it fall
    if (platform.overlapPixel(ball.position.x, ball.position.y + 30) == false)
        ball.velocity.y += GRAVITY;

    //if the bottom of the ball is overlapping the non transparent pixels
    //of the platform move it up one pixel until it doesn't overlap anymore
    while (platform.overlapPixel(ball.position.x, ball.position.y + 30)) {
        ball.position.y--;
        ball.velocity.y = 0;
        ball.changeAnimation('normal');
    }

    drawSprites();
}