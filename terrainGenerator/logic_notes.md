# Treasure Map with Terrain Generator
## p5.js

Following the tutorial by [The Coding Train on YouTube](https://youtu.be/IKB1hWWedMk)

### Logic and Flow
* Create a rectangular grid in 3D
* Each point of the grid/ mesh would connect to create a **Triangle Strip** 
    * Using beginShape(TRIANGLE_STRIP)
    * Move along the y axis and select points on the x axis in a for loop
* Rotate the mesh along x-axis
* Translate the mesh to the center of the screen
* Create a 2D array to store x and y values of the grid
* Use 2D Perlin Noise to make the terrain
    * Create x offset and y offset to create mountains
* Move the terrain by adjusting the y offset
    * Create a variable that changes y offset value everytime
* Add colors
* Add a spot on the map to indicate the treasure location





#### Notes
1. _Confirm how to call data objects for variables_
2. _Confirm the error on console log when running the sketch: You must first call texture() before using vertex() with image based u and v coordinates_
