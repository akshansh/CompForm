injectInterface();
document.getElementById("title").textContent = generateTitle();
document.getElementById("subtitle").textContent = generateSubtitle();

function generateTitle() {

    var verbs = ["Stab", "Explode", "Fight", "Drink", "Taunt", "Shred", "Sketch"];
    var adverbs = ["Abnormally", "Brutally", "Effortlessly", "Loyally", "Recklessly", "Sloppily", "Awkwardly", "Happily"];
    var nouns = ["Factory Reset Button", "Toaster", "Death Wish", "Friendly Grandma", "International Law Enforcement", "Gaming Laptop", "Toilet Seat", "Boring Heartbreak", "Really Tough Guy", "Dragon", "Laser Beams"];

    var adverb = sample(adverbs);
    var verb = sample(verbs);
    var noun = sample(nouns);

    var title = "";
    title = `Parsons Guide to ${adverb} ${verb} the ${noun} on D12`;
    // 	if (Math.random() < 0.5) {
    // 		title = `${name_prefix} ${primary_noun} and the ${adjective} ${secondary_noun}`;
    // 	}
    // 	else {

    // 	}

    return title;
}

function generateSubtitle() {
    var story_adjectives = ["Lost", "Forgotten", "Merry", "Clever", "Wonderful", "Sullen", "Little", "Cowardly", "Jolly", "Festive", "Gleeful", "Enchanted", "Wise", "Wistful", "Dark", "Untold", "Secret"];
    var story_formats = ["Tale", "Novel", "Book in Three Parts", "Song", "Short Story", "Legend", "Mystery", "Comedy", "Musical", "Production", "Lesson"];

    var adjective = sample(story_adjectives);
    var format = sample(story_formats);
    var subtitle = `A  ${adjective}  ${format}`;

    return subtitle;
}



function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}




function injectInterface() {

    document.body.insertAdjacentHTML('beforeend', `
<style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Oswald|Playball|Roboto+Slab');
		body {
			text-align: center;
			font-family: 'Roboto Slab', serif;
		}
		.wrap {
			display: table;
			padding: 50px;
			margin: 50px auto;
			text-align: center;
		}
		#title {
			font-size: 50px;
			font-weight: bold;
			text-transform: uppercase;
			line-height: .9em;

		}
		#subtitle {
			margin-top: 0.75em;
			font-weight: 300;
			font-size: 25px;
			font-weight: normal;
			font-family: 'Playball', cursive;
		}
		#footer {
		    margin-top:15.0em;
		    font-weight: 100;
		    font-size:14px;
		    font-weight:normal;
		    font-family: 'Oswald', sans-serif;
		}
	</style>
	<div class="wrap">
		<div id="title">Title</div>
		<div id="subtitle">Subtitle</div>
		<div id="footer">Written By A Robot</div>
	</div>
`);
}