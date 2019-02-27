# Strategy for creating the Dot Pattern

## Observations

[x] Noise Placement
  [x] There is an overlap of dots
[x] colorMode (HSB)
  [x] Changes in Hue values
    [x] Hue (0 to 360), Saturation: 100, Brightness: 100
  [x] No change in the alpha values
  [x] Vary noise frequency to give preference to specific region of hue
[x] Size
  [x] The point size has been mapped to the hue value
  [x] Size is increasing as per Hue value: low value => small size