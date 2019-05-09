// Program to move a ball and pickup a coin. 
// In the basic version, only the ball will move around and collect the coin. 
// In the advanced, ball will jump and pick coins.

// Reference: http://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions5.js#

var ball;
var coin;
var platform;
var GRAVITY = 1;

function setup() {
    createCanvas(800, 400);

    ball = createSprite(300, 150);
    ball.addImage('main', loadImage('sketches/ball.png'));
    // ball.debug = true;

    coin = createSprite(500, 200);
    coin.addImage('main', loadImage('sketches/coin.png'));
    coin.addImage('transformed', loadImage('sketches/coinTaken.png'));
    coin.setCollider('circle', 0, 0, 50);
    // coin.debug = true;

    platform = createSprite(400, 300);
    platform.addImage(loadImage('sketches/platform.png'));

    ball.depth = 10;
}

function draw() {
    background(255, 255, 255);

    //if no arrow input set velocity to 0
    ball.velocity.x = 0;

    if (keyIsDown(LEFT_ARROW))
        ball.velocity.x = -5;
    if (keyIsDown(RIGHT_ARROW))
        ball.velocity.x = 5;

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
    }

    drawSprites();
}