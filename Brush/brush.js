// Program to create a brush

function setup() {
    createCanvas(800, 800);
    background(255);
    map(mouseX, 0, width, 0, 100);

}

function draw() {
    fill(0, (mouseX / 4));
    noStroke();
    if (mouseIsPressed === true) {
        beginShape();
        vertex(mouseX, mouseY);
        vertex(pmouseX + random(), pmouseY + random());
        vertex(pmouseX + random(0, 20), pmouseY + random(0, 20));
        vertex(pmouseX + random(0, 40), pmouseY + random(0, 40));
        vertex(mouseX, mouseY);
        endShape();
    }
}