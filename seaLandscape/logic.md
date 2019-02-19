# Creating a landscape
Control the landscape look based on sunrise and sunset.
Generating waves and mountains through Noise function.

* Logic for creating graphs: 
    * Consider a wave as a graph. Every point on the graph is a vertex which is drawn horizontally, but is then offset through noise function (xoff)
    * The graph is generated inside a shape function (begin and endShape) so that the vertices connect
    * This offset value is then incremented outside the endShape so that it moves. 
    * The amount of increment of this offset value will determine how the peaks look for the graph. 
    * The fill and stroke determine how the graph looks (line graph or not)

* This logic will be used to create mountains and rivers
    * Both of them will have different increment levels and speeds to account for parallax effect

* Finally, the sun will be an ellipse that shines (with noise) 
    * The sun will move up or down with the slider
    * The movement of the slider will change the colors of the environment (dark during night and bright during the day)
    * Use HSB and change the brightness value through the slider. 