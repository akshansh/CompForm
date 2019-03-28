// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

// Logic
// 1. Create a pattern of different shapes in Paper.js
// (Try a wood texture)
// 2. Export the pattern as SVG
// 3. Organize the file in Illustrator and export as PNG
// 4. Create a 3D model in Cinema 4D
// 5. Add MoGraph effect to create a "Timeless" piece
// 6. Add the texture PNG to the rotating material


// Idea: Create a shape. Repeat it. Do it for all shapes


var scaleChange = 0;
var xPos = 80;
var yPos = 50;
var point_pos = new Point(xPos, yPos);
var s = 1; // for concentric ellipses

// Make a concentric ellipse
function repeatEllipse(x, y) {
    s = 1; // reset scale to original after reducing it
    for (var i = 0; i < 16; i++) {
        var ellipse1 = new Shape.Ellipse({
            point: [x, y],
            size: [250, 100],
            strokeColor: 'black',
            fillColor: new Color('hsl(28deg, 71%, 22%)')
        });
        ellipse1.scale(s);
        s -= 0.08;
        ellipse1.fillColor.brightness = i * 0.18;
    }
}

// Repeat ellipses
for (var i = 0; i < 20; i++) {

    repeatEllipse(xPos, yPos);
    xPos += 100 * Math.random();
    yPos += 100 * Math.random();
    // console.log(xPos, yPos);
}



//////////////////////////
// Export the file as SVG
//////////////////////////
// Since this code is not in paperscript, it may be put in the HTML file
// Didn't work when I tried.

function onKeyDown(event) {
    if (event.key === 's') {
        downloadAsSVG();
    }
}

function downloadAsSVG(fileName) {
    // use default name if not provided
    fileName = fileName || "output.svg"
        // create a data url of the file
    var svgData = project.exportSVG({ asString: true });
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

    // create a link to the data, and "click" it
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}