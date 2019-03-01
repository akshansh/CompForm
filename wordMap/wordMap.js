// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Creating a word map using RiTa.js in p5.js.
// An extension to the tactic of placing random dots on the screen

// For notes, refer notes.md file

// Basic Stuff
var wordCount;
var lexicon; // Variable to store reference to the lexicon
var hueValue; // vary the Hue value
var colorNoise;

// Customization
var changeSyllable_button;
var syllableCount_slider;
var partsOfSpeech_dropdown;
var partOfSpeech_pennTag;


function setup() {
    createCanvas(500, 500);

    wordCount = 50;
    lexicon = new RiLexicon();


    createP('Change the number of syllables (1-5)');
    syllableCount_slider = createSlider(1, 5, 1, 1);
    syllableCount_slider.changed(randomizeWord);

    createP('Change the part of speech');
    partsOfSpeech_dropdown = createSelect();
    partsOfSpeech_dropdown.option("Noun"); // noun
    partsOfSpeech_dropdown.option("Verb"); // verb
    partsOfSpeech_dropdown.option("Adjective"); // adjective
    partsOfSpeech_dropdown.option("Adverb"); // adverb
    partsOfSpeech_dropdown.changed(randomizeWord);

}


function draw() {

    randomizeWord(); // run by default
    changeSyllable_button.mousePressed(randomizeWord); // change when mousePressed

    noLoop();
}



// Arrangement
function randomizeWord() {
    background(0);
    colorMode(HSB);
    var noiseFrequency = 10; // play with this value

    for (i = 0; i < wordCount; i++) {
        noiseSeed(1);
        var xPos = noise(i * noiseFrequency) * width;
        noiseSeed(10002);
        var yPos = noise(i * noiseFrequency) * height;

        // Color
        hueValue = random(0, 360);
        var colorNoise = noise(hueValue * noiseFrequency) * 360;
        fill(colorNoise, 100, 100);

        // Font Size
        var fontSize = map(colorNoise, 0, 360, 4, 20);
        textSize(fontSize);

        // add a random word at every position

        // condition for parts of speech (change words to PENN tags)
        if (partsOfSpeech_dropdown.value() === "Noun") {
            partOfSpeech_pennTag = "nn";
        }
        if (partsOfSpeech_dropdown.value() === "Verb") {
            partOfSpeech_pennTag = "vb";
        }
        if (partsOfSpeech_dropdown.value() === "Adjective") {
            partOfSpeech_pennTag = "jj";
        }
        if (partsOfSpeech_dropdown.value() === "Adverb") {
            partOfSpeech_pennTag = "rb";
        }

        text(lexicon.randomWord(partOfSpeech_pennTag, syllableCount_slider.value()), xPos, yPos);

    }
}