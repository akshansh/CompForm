# Strategy for creating Caterpillar movement

## Observations

- [x] Noise Movement
  - [x] 3 variables: Frequency, Amplitude and Time Speed
  - [x] The movement starts with the top point, which is followed by the rest of the points
    - [x] Degree of dependance between the points monitored by noiseDetail() function
  - [x] The increase in frequency increasese the number of waves of the caterpillar body
    - [x] Governed by frequency in the noise function
  - [x] When Time is zero, the bottom point does not change its position (tail of the caterpillar) when the frequency is changed