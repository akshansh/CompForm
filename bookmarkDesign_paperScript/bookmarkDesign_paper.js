// Vector art for Bookmark

// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js


////////////////////////////////////
// Creating the anchor for bookmark
////////////////////////////////////
// ANCHOR TOP
var innerCircle = new Path.Circle(new Point(100, 35), 15);
innerCircle.strokeColor = 'blue';
innerCircle.fillColor = 'yellow';
var outerCircle = new Path.Circle(new Point(100, 35), 30);
outerCircle.strokeColor = 'red'; // stroke of the anchor
outerCircle.fillColor = 'white'; // color of the anchor

var rectLocation1 = new Rectangle(new Point(10, 75), new Point(190, 95));
// var horizontalRectangle = new Path.Rectangle(rectLocation1);
var radius = new Size(3, 3);
var curvedRect = new Path.Rectangle(rectLocation1, radius);
curvedRect.fillColor = 'black';
curvedRect.strokeColor = 'red';
// horizontalRectangle.fillColor = "black";
// horizontalRectangle.strokeColor = 'red';

var rectLocation2 = new Rectangle(new Point(90, 55), new Point(110, 375));
var verticalRectangle = new Path.Rectangle(rectLocation2);
verticalRectangle.fillColor = 'black';
verticalRectangle.strokeColor = 'red';

var outerCircle_vertRect = outerCircle.unite(verticalRectangle);
var upperBody = outerCircle_vertRect.unite(curvedRect);

// ANCHOR BASE
var curvedPath = new Path();
curvedPath.strokeColor = 'blue';
// top curve
curvedPath.add(
    new Point(30, 350),
    new Point(10, 360),
    new Point(20, 320),
    new Point(60, 330),
    new Point(45, 340),
    new Point(100, 370), // center
    new Point(155, 340),
    new Point(140, 330),
    new Point(180, 320),
    new Point(190, 360),
    new Point(170, 350));
// bottom curve
curvedPath.add(
    new Point(140, 390),
    new Point(110, 410),
    new Point(100, 420), // center
    new Point(90, 410),
    new Point(60, 390));
curvedPath.closed = true;
// curvedPath.selected = true;
curvedPath.smooth();
curvedPath.fillColor = 'black';

var fullAnchor = upperBody.unite(curvedPath);
var fullAnchor_punched = fullAnchor.subtract(innerCircle);

fullAnchor_punched.style = {
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0, .5),
    shadowBlur: 12,
    // shadowOffset: new Point(5, 5),
};

var anchorSymbol = new Symbol(fullAnchor_punched);
// Place 1000 instances of the symbol in the project in random
// positions in the view:
for (var i = 0; i < 1000; i++) {
    var position = view.size * Point.random();
    var placed = anchorSymbol.place(position - i * 0.5);
    placed.scale(i * 0.0010);
    placed.rotate(i);
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

// document.body.appendChild(project.exportSVG());
// console.log('Export SVG', Date.now() - start);

// function downloadAsSVG() {
//     var svg = project.exportSVG({
//         asString: true
//     });
//     downloadDataUri({
//         data: 'data:image/svg+xml;base64,' + btoa(svg),
//         filename: 'export.svg'
//     });
// }