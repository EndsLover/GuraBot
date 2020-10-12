const quotes = [
	"a",
	"A",
	"a!",
	"SHAAAAAAAAK", 
	"ZOOS",
	"Do you taste as good as you look?",
	"SHORK BRAIN",
	"Activating shark strategy",
	"APEX PREDATOR",
	"SHARKOUR"
	];

const facts = [
	"The pistol shrimp can deliver an explosive attack hotter than the surface of the sun and loud enough to rupture a human ear drum.",
	"Shrimp that has been broiled or sautéed, usually in butter and garlic are called “scampi”.",
	"The average shrimp has 10 legs.",
	"Every shrimp is actually born a male and then become females as they mature.",
	"There are over 128 species of shrimp. (all of them love Gura!)",
	"There are 16 different stages of life are found in shrimp from egg to full adult.",
	"Some shrimp can live as long as six and a half years, while some only live about a year or so.",
	"A shrimp can average about 6 inches while the longest ever found was at 16 inches.",
	"May 9th is National Shrimp Day.",
	"One billion pounds of shrimp are eaten every year by Americans.",
	"Most sharks have to keep swimming to pump water over their gills.",
	"Each whale shark’s spot pattern is unique as a fingerprint. ",
	"Scientists age sharks by counting the rings on their vertebrae.",
	"Shark skin feels similar to sandpaper.",
	"Sharks have special electroreceptor organs.",
	"Most sharks have good eyesight.",
	"Sharks do not have bones.",
	"The Pacific Ocean is the world’s largest ocean and contains around 25,000 islands.",
	"It’s possible to find rivers and lakes beneath the ocean.",
	"Over 70 per cent of our planet’s oxygen is produced by the ocean.",
	"We still only know a fraction of the marine species in our oceans.",
	"There are more historic artefacts under the sea than in all of the world’s museums.",
	"The world’s longest mountain chain is underwater.",
	"Less than five per cent of the planet’s oceans have been explored.",
	"Our oceans cover more than 70 per cent of the Earth’s surface."
	];

const clips = [
	"https://www.youtube.com/watch?v=WIwk-B-LfHI",
	"https://www.youtube.com/watch?v=uydZpb_F7So",
	"https://www.youtube.com/watch?v=4jOmvTsWqGs",
	"https://www.youtube.com/watch?v=O4cOrgLoCoo",
	"https://www.youtube.com/watch?v=7U6eHY1M9WM",
	"https://www.youtube.com/watch?v=tHGBhz_D4M0",
	"https://www.youtube.com/watch?v=pqTSvylD550",
	"https://www.youtube.com/watch?v=5U6huL4tV0Y",
	"https://www.youtube.com/watch?v=Re0PLIAVKP4",
	"https://www.youtube.com/watch?v=7KyMzX4KqEs",
	"https://www.youtube.com/watch?v=g25mkl7Y7A8",
	"https://www.youtube.com/watch?v=tHGBhz_D4M0",
	"https://www.youtube.com/watch?v=XgXrpyChHSw",
	"https://www.youtube.com/watch?v=lYQFAL59PQA",
	"https://www.youtube.com/watch?v=WIwk-B-LfHI",
	"https://www.youtube.com/watch?v=mhhJ7v6qYn4"
];

exports.gura = function(){
	return quotes[Math.floor(Math.random() * quotes.length)];
}

exports.facts = function(){
	return facts[Math.floor(Math.random() * facts.length)];
}

exports.clips = function(){
	return clips[Math.floor(Math.random() * clips.length)];
}