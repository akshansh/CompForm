// Program to create randomly generated music
// Inspiration and code support from The Coding Train channel on YouTube.
// Using preload function to load the music files so that it is sure that they run. 


// loading all the songs I want to manipulate
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var sound10;
var sound11;


var sliderRate; // the tempo
var sliderPan; // the stereo system (L to R speaker)

var playButton; // for play/pause controls

var jumpButton; // jumping at different times in a music file


function preload() {
    sound1 = loadSound("sound1.mp3");
    sound2 = loadSound("sound2.mp3");
    sound3 = loadSound("sound3.mp3");
    sound4 = loadSound("sound4.mp3");
    sound5 = loadSound("sound5.mp3");
    sound6 = loadSound("sound6.mp3");
    sound7 = loadSound("sound7.mp3");
    sound8 = loadSound("sound8.mp3");
    sound9 = loadSound("sound9.mp3");
    sound10 = loadSound("sound10.mp3");
    sound11 = loadSound("sound11.mp3");

}


function setup() {
    createCanvas(600, 600);

    playButton = createButton("Play");
    playButton.mousePressed(togglePlaying);

    // Moving on a music track
    jumpButton = createButton("Shuffle");
    jumpButton.mousePressed(jumpSong);


    // Cue music: manage how every song behaves
    sound6.addCue(1, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(2.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(4.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(6, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(7.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(9.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(11, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(13, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(14.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(16.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(18, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(20, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(21.5, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(23, changeBackground, color(random(255), random(255), random(255)));
    sound6.addCue(25, changeBackground, color(random(255), random(255), random(255)));



    // Additional sound controls
    //sliderRate = createSlider(0, 1.5, 1, 0.01); // rate between 0 and 3 times
    //sliderPan = createSlider(-1, 1, 0.5, 0.01); // range from -1 (L) to 1 (R)

    //sound1.setVolume(0.5);

}


function changeBackground(col) {
    background(col);
}


function jumpSong() {
    var length = sound1.duration(); // length of music
    var t = random(length);
    console.log(t);
    //sound1.jump(t); // jump a random point
    //sound2.play(t); // play the sound when the time randomizes
    //sound3.play(t);
    //sound4.play(t);
    //sound5.loop(t);
    sound6.loop(t);
    //sound7.loop(t);
    //sound8.loop(t);
    sound9.loop(t);
    //sound10.loop(t);
    sound11.loop(t);

}


// Function to handle the play/stop button
function togglePlaying() {
    if (!sound6.isPlaying()) {
        sound6.loop();
        playButton.html("Stop");
    } else {
        sound1.stop();
        sound2.stop();
        sound3.stop();
        sound4.stop();
        sound5.stop();
        sound6.stop();
        sound7.stop();
        sound8.stop();
        sound9.stop();
        sound10.stop();
        sound11.stop();
        playButton.html("Play");
    }

}


function draw() {
    //background(0);

    // if (song.currentTime() > random(0, 5)) {
    //     background(random(255), random(255), random(255));
    // }
    //background(song.currentTime() * 30, 0, 255);

    rectMode(CENTER);
    noFill();
    stroke(0);
    rect(width / 2, height / 2, mouseX, mouseY);
    //stroke(255);
    ellipse(width / 2, height / 2, mouseY, mouseX);

    // sound1.pan(sliderPan.value());
    // sound1.rate(sliderRate.value());

}