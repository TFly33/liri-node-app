

// Here are the four things the app needs to do: 

//    * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`





// capture the command that the user puts in (process.argv[2]) I'll create a variable to make sure I can use it wherever I want, and not have to type process.argv in a million places. 


// capture the user's search term (process.argv index 3 and later) (*use activity 18 level 2 for guidance on how to capture this!*)

//          Can run a for loop to make sure all of the input is grabbed. 

// Make a switch statement for the four commands. The default case should tell the user to try again.
//     Can use the calculator for guidance on this. 

// check if userCommand is "concert-this" 
//          If process arg = "concert-this" then (API CALL)
// run an API call using axios to the bands-in-town API
// inject the user's search term in the queryURL

// Display name of venue, venue location, and the date of the event 
// Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)

// check if userCommand is "spotify-this-song"
// Using Spotify Node package info and documentation, make a call to the Spotify API using the user's search term

// Display to the user:
// * Artist(s)
// * The song's name
// * A preview link of the song from Spotify
// * The album that the song is from

// Provide a default searchTerm if the user didn't provide an argument

// check if userCommand is "movie-this"

// Use Axios to call the OMDB API using the user's search term. Use activities 17 and 18 as a reference!

// Display to the user:
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

// Provide a default search if the user didn't provide an argument.

// check if userCommand is "do-what-it-says" (DO THIS PART OF THE ASSIGNMENT ONLY IF THE OTHER THREE API CALLS WORK WELL!)

// Use "fs" to read the random.txt file (hint, you will need to require fs! Look at activities 12 and 13)
// The command will be whatever is before the comma. The search term will be whatever is after the comma.
// Make the corresponding API call depending on what the command is.

// If the user doesn't provide 1 of the 4 recognizable commands, display message to the user to try again 

// 15-BankJS has a structure that should help you with the assignment.
// For help with Switch statements:
// 06-Calculator and 15-BankJS
// For help using Axios:
// 17-OMDB_Axios and 18-OMDB_Axios_Students
// Look at 18-OMDB_Axios_Students level 2 for guidance on how to take in a multi-word argument.
// For help reading and parsing a file:
// 12-ReadFile and 13-BestThingsEver (edited) 
// For help with the Spotify node package, read the npm documentation. You can also look at 22-WeatherNPM for an example of another node package API that is not using Axios.


// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
// console.log (spotify);

// Let's start by grabbing the input of the user and turning them into variables. 

var command = process.argv[2];
console.log(command);
var firstValue = process.argv;
console.log(firstValue);

// We'll use an empty string rather than a push. Makes it a bit simpler. 
var value = "";
// for loop to grab the user input. If it is more than one word, need it to turn into a string
for (var i = 3; i < firstValue.length; i++) {
    if (i > 1 && i < firstValue.length) {
        // if more than one word for index 3, then combine them together. 
        value = value + "+" + firstValue[i];
    }
    else {
        // if just one word, make value equal that word. 
        value += value[i]
    }
}
console.log(value);

switch (command) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    default:
        console.log("Make sure you use one of the four commands!")

}

function concertThis(){}
function spotifyThis(){}
function movieThis(){}
function doWhatitSays(){}

// check if userCommand is "concert-this" 
//          If process arg = "concert-this" then (API CALL)
// run an API call using axios to the bands-in-town API
// inject the user's search term in the queryURL

// Display name of venue, venue location, and the date of the event 
// Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)