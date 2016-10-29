
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");
var cp = document.getElementById("capitalplanets");
var ep = document.getElementById("eplanets");
var nw = document.getElementById("newwords");

/* ---FOR EACH --- */


planets.forEach(function(planetnames) {
    el.innerHTML += "<p>" + planetnames + "</p>";
});


/* --- MAP --- */

/// Take character at index 0 and make it uppercase. Add it to the remaining array. For strings, numbers and booleans, slice copies the values into the new array.

var capitalPlanets = planets.map(function(cap) {
	 return cap.charAt(0).toUpperCase() + cap.slice(1);
});

/// Output new array to DOM
capitalPlanets.forEach(function(capPlanets) {
	cp.innerHTML += "<p>" + capPlanets + "</p>";
});


/* --- FILTER --- */

///Take indexOf the letter e. If the index is 0 (first letter) or greater, return to planets

var ePlanets = planets.filter(function(e) {
	return (e.indexOf("e") >= 0);
});

/// Output new array to DOM
ePlanets.forEach(function(ePlanets) {
	ep.innerHTML += "<p>" + ePlanets + "</p>";
});


/* --- REDUCE --- */

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


var newWords = words.reduce(function(prev, curr) {
    return prev + " " + curr;
});

nw.innerHTML = newWords;




