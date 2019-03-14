# Draw animal face using Turtle Graphics

Using pixel array, because get() and set() is slow

## preload()

* Load a black and white image

## setup()

* Draw the image image(referenceImage, 0, 0, width, height);
  * This will show the image on canvas. Basically, the pixel values will get updated with those from this reference image.
* Make the pixelDensity(1) as 1 so that the retina display issue is resolved

## setup() continued

* loadPixels(): this will load the pixels from the image into a pixels[] array
* create a nested for loop to scan through the entire length of canvas
  * for (y = 0; y< height; y++) {
      for (x = 0; x < width; x+)}
* Create an index variable to calculate the location of every pixel on the pixels[] array
  * Formula: var index = (x + y */ width) /* 4;
* Take out the rgba values from the image into a separate variable
  * var r = pixels[index + 0]
  * var g = pixels[index + 1]
  * var b = pixels[index + 2]
  * var a = pixels[index + 3]
* Now, create an if condition to check for black color
  * if (r === 0 && g === 0 && b === 0) { drawTurtleGraphic(x, y, index)}
  * if rgb is zero, call the function drawTurtleGraphic and give the coordinates of index as input to the function
* updatePixels();

## drawTurtleGraphic

* penUp();
* Position the turtle
* penDown();
* Move turtle forward
* penUp();
* Make it fancier once the basic is working