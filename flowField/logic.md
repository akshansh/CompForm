#Flow Field
Following tutorial by [The Coding Train}(https://youtu.be/BjoM9oKOAKY)

## Logic
** Two parts: Create a vector (flow field) and make particles follow that flow field.**
* Identify every pixel from the canvas and create vectors from on the intersection.
* Make the vectors move in different directions (z offset)
* Create a constructor function for generating particles
* Link the particles to the same canvas (call that function)
* Link the particles to the vector direction
    * Create an array for entire grid of the canvas.
    * The intersection (where vectors) were there would now also have the particles
    * Create a function to apply force
    * Link that force to the coordinates of the grid
* Hide the vector flow field to only show the particles
* Reduce the speed of particle movement
* Shift background back to setup (draw once)
* Change the particles from a point to a line
    * Record the current position
    * Create a line from the prev position to the current position
* Play with show function to create custom patterns on the screen
