// Vector art for Poster
// A pattern of website with ads

// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js

// Idea: Create a webpage pattern
// 1. Create a rectangle (webpage)
// 2. Add textboxes (placeholders for heading and body text)
// 3. Add randomized colored rectangles inside it (ads)
// 4. Create a group of this shape (group)
// 5. Create a pattern using this group
// 6. Save the pattern as SVG


///////////////////////////////
// Creating the webpage content
///////////////////////////////

// Webpage Outline
var webpageOuter = new Rectangle(new Point(20, 20), new Point(440, 220));
var webpage_outline = new Path.Rectangle(webpageOuter);
webpage_outline.fillColor = 'white';
webpage_outline.strokeColor = 'black';
webpage_outline.style = {
    shadowColor: new Color(0, 0, 0, 0.5),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5)
};

// Website Navigation
var nav = new Rectangle(new Point(20, 20), new Point(440, 40));
var navigation = new Path.Rectangle(nav);
navigation.fillColor = 'black';
// navigation.strokeColor = 'black';

// Heading
var heading1 = new Rectangle(new Point(100, 120), new Point(240, 130));
var heading1_content = new Path.Rectangle(heading1);
heading1_content.fillColor = 'black';
// heading1_content.strokeColor = 'red';
var heading2 = new Rectangle(new Point(100, 135), new Point(240, 145));
var heading2_content = new Path.Rectangle(heading2);
heading2_content.fillColor = 'black';
// heading2_content.strokeColor = 'red';

// Paragraph
var line1 = new Rectangle(new Point(100, 155), new Point(220, 160));
var line1_content = new Path.Rectangle(line1);
line1_content.fillColor = 'grey';
// line1_content.strokeColor = 'red';
var line2 = new Rectangle(new Point(100, 165), new Point(200, 170));
var line2_content = new Path.Rectangle(line2);
line2_content.fillColor = 'grey';
// line2_content.strokeColor = 'red';
var line3 = new Rectangle(new Point(100, 175), new Point(210, 180));
var line3_content = new Path.Rectangle(line3);
line3_content.fillColor = 'grey';
// line3_content.strokeColor = 'red';
var line4 = new Rectangle(new Point(100, 185), new Point(220, 190));
var line4_content = new Path.Rectangle(line4);
line4_content.fillColor = 'grey';
// line4_content.strokeColor = 'red';


///////////////////////////
// Creating the webpage ads
///////////////////////////

// Header Ad
var header1 = new Rectangle(new Point(100, 40), new Point(360, 100));
var header_ad = new Path.Rectangle(header1);
header_ad.fillColor = 'red';
// header_ad.strokeColor = 'red';

// Sidebar Ad
var sidebar = new Rectangle(new Point(280, 110), new Point(400, 220));
var sidebar_ad = new Path.Rectangle(sidebar);
sidebar_ad.fillColor = 'red';
// sidebar_ad.strokeColor = 'red';

// Footer Ad
var footer1 = new Rectangle(new Point(100, 200), new Point(240, 220));
var footer1_ad = new Path.Rectangle(footer1);
footer1_ad.fillColor = 'red';
// footer1_ad.strokeColor = 'red';


///////////////////////
// Grouping the webpage
///////////////////////

var webpageContent_group = new Group({
    children: [webpage_outline, navigation, heading1_content, heading2_content, line1_content, line2_content, line3_content, line4_content]
        // Move the group to the center of the view:
        // position: view.center
});
var webpageAd_group = new Group({
    children: [header_ad, sidebar_ad, footer1_ad]
        // Move the group to the center of the view:
        // position: view.center
});

var webpageFull_group = new Group({
    children: [webpageContent_group, webpageAd_group],
    position: view.center
});


/////////////////////
// Creating a pattern
/////////////////////

// Making copies of the webpage group:
for (var i = 0; i < 10; i++) {
    webpageAd_group.fillColor = Color.random();
    var webpageCopy = webpageFull_group.clone();
    // Distribute the copies horizontally, so we can see them:
    webpageCopy.position = view.size * Point.random() + i * 0.5;
    webpageCopy.scale(i * 0.2);
    // webpageCopy.rotate(i);
}


////////////////////////////
// Exporting the file as SVG
////////////////////////////

function onKeyDown(event) {
    if (event.key === 's') {
        downloadAsSVG();
    }
}

function downloadAsSVG(fileName) {
    // use default name if not provided
    fileName = fileName || "Webpage_Pattern.svg"
        // create a data url of the file
    var svgData = project.exportSVG({
        asString: true
    });
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

    // create a link to the data, and "click" it
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}