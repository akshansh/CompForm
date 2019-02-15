// Custom Eyeglasses

// TOOLS
// Realtime human pose estimation in a browser
// Using ml5, PoseNet and Tensor Flow
// Inspired by ml5 tutorial by The Coding Train: https://youtu.be/EA3-k9mnLHs
// using lerp: linear interpolation: used to smooth the value

// Idea: detect parts of the body and overlay shapes on that position
// Give a color picker for users to change the color of eyeglasses

let video;
let specColor_button; // color-picker to change color of eyeglasses

// Pose Net variables
let poseNet;
let noseX = 0; // x position of the nose on the camera
let noseY = 0;
let eyeLeftX = 0;
let eyeLeftY = 0;
let eyeRightX = 0;
let eyeRightY = 0;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    console.log(ml5); // check if ml5 is loadded

    poseNet = ml5.poseNet(video, modelReady); // load poseNet model and connect to a video
    poseNet.on('pose', gotPoses); // detect pose and put the info in the 'pose' array

    specColor_button = createButton('Change Eyeglass Color');
}


// create a function to detect poses
function gotPoses(poses) {
    //console.log(poses); // See the list of all poses and their locations

    // assign the position of detection from console to noseX and noseY
    if (poses.length > 0) { // making sure that there is at least one pose
        let nX = poses[0].pose.keypoints[0].position.x; // current noseX position
        let nY = poses[0].pose.keypoints[0].position.y; // current noseY position
        let eLX = poses[0].pose.keypoints[1].position.x; // current left eye's X position
        let eLY = poses[0].pose.keypoints[1].position.y; // current left eye's Y position
        let eRX = poses[0].pose.keypoints[2].position.x; // current right eye's X position
        let eRY = poses[0].pose.keypoints[2].position.y; // current right eye's Y position


        // smoothen the movement using lerp (averaging the position)
        noseX = lerp(noseX, nX, 0.5);
        noseY = lerp(noseY, nY, 0.5);
        eyeLeftX = lerp(eyeLeftX, eLX, 0.5);
        eyeLeftY = lerp(eyeLeftY, eLY, 0.5);
        eyeRightX = lerp(eyeRightX, eRX, 0.5);
        eyeRightY = lerp(eyeRightY, eRY, 0.5);
    }
}



function modelReady() {
    console.log('Model is ready');
}


function draw() {
    background(220);
    // function to draw image on canvas
    image(video, 0, 0);

    // find distance between the two eyes
    let d = dist(eyeLeftX, eyeLeftY, eyeRightX, eyeRightY);

    // fill(255, 0, 0);
    // ellipse(noseX, noseY, 50); // draw nose

    specColor_button.mousePressed(specColor);

    //stroke(specColor_button.value()); // color change with color picker
    strokeWeight(5);
    noFill();
    ellipse(eyeLeftX, eyeLeftY, d - 10); // draw left eyeglass
    ellipse(eyeRightX, eyeRightY, d - 10); // draw right eyeglass
    line(eyeLeftX, eyeLeftY - (d - 45), eyeRightX, eyeRightY - (d - 45)); // connect the two

}

function specColor() {
    console.log('Color has changed.');
    stroke(random(255), random(255), random(255));
}