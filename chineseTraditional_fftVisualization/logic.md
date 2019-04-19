# Discrete Fourier Transform Visualization

[Reference 1](https://en.wikipedia.org/wiki/Fourier_series)
[Reference 2](https://youtu.be/Mm2eYfj0SgA)
[Reference 3](https://youtu.be/MY4luNgGfms)
[Reference 3](https://youtu.be/spUNpyF58BY)
[Inspiration](http://bilimneguzellan.net/en/purrier-series-meow-and-making-images-speak/)

## Logic Part 1: Create a shape that moves around an ellipse

1. Create an ellipse and have the time loop in draw function
2. Convert position in polar coordinates using sin and cos
3. Create a dot/ ellipse at that position. It should move with time, on the ellipse path
4. Create a line from the center to the circumference of ellipse

## Logic Part 2: Make that shape move along a wave path

1. Store y value of the polar coordinate in an array
2. Create a vertex in a for loop, going till the length of the array
3. Enclose the vertex in beginShape and endShape to tie it together
4. Translate the wave and connect a line from the point to the vertex

## Logic Part 3: Create 3 circles, with path continued

1. Update the sin and cos functions as per Wikipedia (FFT) formula
2. Update radius value
3. Change the value of the multiplier (n) to change the polar coordinates of x and y. This multiplier would take values of a Fourier Series: 1, 3, 5, 7....
4. Create a for loop to have those values of n added to the x and y
5. Store previous values of x and y and make the line go from that position line (prevX, prevY, x, y) instead of line (0, 0, x, y)
6. Do the same for the outer ellipse
7. Change the value of i (for loop) to change the number of ellipses that move around the main ellipse
8. Keep the unshift outside the for loop to push just the last value

## Logic Part 4: Using Fourier Series Visualization to create a Fourier Transform

1. Create a new JS file to write the DFT function
2. Compute DFT (Discrete Fourier Transform) of a signal
3. Run the for loop to the output of DFT (fourierY.length). This would make the circles go along a path
4. Add values of frequency, amplitude and phase to the x and y positions
5. Change the time constant using dt (differential time)
6. Add another signal for x and y values
7. Put the Fourier Series in a function to simplify the code

## Logic Part 5: Create a path instead of a wave

1. Change variable from wave array to path array and replace everywhere
2. Add a custom path for it to trace
3. Play with the path variables to create patterns