// Creating a double pendulum. 
// Reference: https://www.myphysicslab.com/pendulum/double-pendulum-en.html
// Taking inspiration from Daniel Shiffman's YouTube channel, The Coding Train

// Idea: 2 balls are connected through a string. Each ball has a mass and rotates freely with gravity. 


// define the radius, mass for the two balls
float radius1 = 200;
float radius2 = 200;
float mass1 = 40;
float mass2 = 40; 
// define variables for angular motion
float angle1 = PI/2;
float angle2 = PI/2;
float a1_vel = 0;
float a2_vel = 0;
float g = 1; // gravity

float prevx2 = -1; // previous x2 (to create a path)
float prevy2 = -1;
float cx, cy; // center x and center y (for translating the center point)


// do tracing
PGraphics canvas;

void setup () {
  size (900, 600);
  cx = width/2;
  cy = 100;
  canvas = createGraphics (width,height);
  canvas.beginDraw();
  canvas.background(255);
  canvas.endDraw();
  
}



void draw () {
 
  background(255);
  
  // loading canvas image from the setup function. That will load the background once, and then begin tracing.
  imageMode(CORNER);
  image(canvas, 0, 0, width, height);
  
  // writing formula for the angular acceleration (to mimic gravity)
  // check the reference link. 
  // Idea: derivative of position is velocity and derivative of velocity is acceleration
  // Similarly, derivative of angle is angular velocity and that of ang. vel. is angular acceleration
  
  // Formula for a1_acc (angular acceleration for angle 1): numerator and denominator
  float num1 = -g * (2 * mass1 + mass2) * sin(angle1);
  float num2 = - mass2 * g * sin(angle1 - 2*angle2);
  float num3 = - 2* sin(angle1 - angle2) * mass2;
  float num4 = a2_vel * a2_vel * radius2 + a1_vel * a1_vel * radius1 * cos (angle1 - angle2);
  float den = radius1 * (2 * mass1 + mass2 - mass2*cos(2*angle1 - 2* angle2));
  
  float a1_acc = (num1 + num2 + num3 * num4)/den;
  
  // Formula for a2_acc (angular acceleration for angle 2): numerator and denominator
  num1 = 2 * sin(angle1 - angle2);
  num2 = (a1_vel * a1_vel * radius1 * (mass1 + mass2));
  num3 = g * (mass1 + mass2) * cos(angle1);
  num4 = a2_vel * a2_vel * radius2 * mass2 * cos (angle1 - angle2);
  den = radius2 * (2 * mass1 + mass2 - mass2 * cos (2* angle1 - 2 * angle2));
  
  float a2_acc = (num1 * (num2 + num3 + num4)) / den; 
  
  
  
  // Shift the canvas to have the starting point of the pendulum on the screen.
  translate(cx,cy);
  
  stroke(0);
  strokeWeight(2);
  
  // define coordinates of ball 1
  float x1 = radius1 * sin(angle1);
  float y1 = radius1 * cos(angle1);
  // define coordinates for ball 2
  float x2 = x1 + radius2 * sin(angle2); // offset from x1
  float y2 = y1 + radius2 * cos(angle2); // offset from y1
  
  // render first ball
  line (0, 0, x1, y1);
  fill(0);
  ellipse (x1, y1, mass1, mass1);
  
  // render second ball
  line (x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, mass2, mass2);
  
  // adding Physics to the sketch
  // update the angular velocity with acceleration
  a1_vel += a1_acc;
  a2_vel += a2_acc;
  // increment angle with an angular velocity
  angle1 += a1_vel;
  angle2 += a2_vel;

  // dampening
  a1_vel *= 0.999;
  a2_vel *= 0.999;

  
  // tracing
  canvas.beginDraw();
  canvas.translate(cx, cy);
  canvas.strokeWeight(1);
  canvas.stroke(0);
  if (frameCount > 1) {
  canvas.line(prevx2, prevy2, x2, y2);
  }
  canvas.endDraw();
  
  
  prevx2 = x2;
  prevy2 = y2;
  
}
