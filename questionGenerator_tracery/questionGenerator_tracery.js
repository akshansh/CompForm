// require /text/tracery.min.js

const storyGrammar = {
    'top': ['#div#'],
    'div': ['<div style="border: #borderSize# #borderType# #borderColor#;  color: #borderColor#; text-align: center; text-transform: capitalize; font-family: serif; margin: 10px;">#content# #content#</div>'],
    'content': ['#div#', '#div#', '#word#', '#word#'],
    'borderSize': ['1px', '4px', '10px'],
    'borderType': ['solid', 'dashed', 'dotted', 'groove', 'ridge'],
    'borderColor': ['firebrick', 'mediumseagreen', 'dodgerblue', 'chocolate'],
    'word': ['<span style="font-size: 30px">#question# #person# #verb# #issues##char#</span>'],
    'question': ['can', 'should', 'will'],
    'person': ['trump', 'government', 'corporations', 'people'],
    'verb': ['prevent', 'sustain', 'ignore', 'avoid', 'ridicule', 'fear', 'solve'],
    'issues': ['fake news', 'climate change', 'data privacy', 'poverty', 'terrorism', 'unemployment', 'pollution'],
    'char': ['?']
}


function main() {
    let grammar = tracery.createGrammar(storyGrammar);
    let story = grammar.flatten('#top#');

    const storyDiv = document.createElement('div');
    storyDiv.innerHTML = story;

    document.body.insertAdjacentElement('beforeend', storyDiv);
}


setTimeout(main, 10);