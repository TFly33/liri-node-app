
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require("fs");

// Let's start by grabbing the input of the user and turning them into variables. 

var command = process.argv[2];
// console.log(command);

var value = process.argv.slice(3).join(" ");

// console.log(value);

switch (command) {
  case "concert-this":
    //   If no user input, need a default. 
    if (!value) {
      value = "U2"
    }
    concertThis();
    break;

  case "spotify-this-song":
    if (!value) {
      value = "The Sign Ace of Base"
    }
    spotifyThis(value);
    // data.track.items 
    break;

  case "movie-this":
    if (!value) {
      value = "Mr Nobody"
    }
    movieThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;

  default:
    console.log("Make sure you use one of the four commands!")

}

function concertThis() {

  var axios = require("axios");
  var queryUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
  console.log("Here's the URL search: " + queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      console.log("-------------------");
      console.log("Here are the concerts coming up for: " + value);
      var bandResults = response.data;
      for (i = 0; i < bandResults.length; i++) {
        // console.log(response.data);
        console.log(JSON.stringify("They're Playing at: " + bandResults[i].venue.name, null, 2));
        console.log(JSON.stringify("City: " + bandResults[i].venue.city, null, 2));
        console.log(JSON.stringify("Region: " + bandResults[i].venue.region, null, 2));
        var concertDate = moment(bandResults[i].datetime).format('LL');
        console.log(JSON.stringify("on: " + concertDate, null, 2));
        console.log("--------------------")

        var bandText =
        "\n" + "Here are the concerts coming up for: " + value + "\n" +
          "They're Playing at: " + bandResults[i].venue.name + "\n" +
          "City: " + bandResults[i].venue.city + "\n" +
          "on: " + concertDate + "\n" +
          "-----------------------------------------";

        var fs = require("fs");

        fs.appendFile("log.txt", bandText, function (err) {

          if (err) { console.log(err) }
          // else { console.log("Content Added") }
          // end of appendFile
        });
      }

    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

}
function spotifyThis(value) {
  // This function needs to pass an argument of value so that it will work with the "do what it says" function. Otherwise I will get an error message. 
  spotify.search({ type: 'track', query: value },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log(value)
      var results = data.tracks.items[0];
      console.log("--------------------------------------------")
      console.log(JSON.stringify("Song: " + results.name, null, 2))
      console.log(JSON.stringify("Album: " + results.album.name, null, 2))
      console.log(JSON.stringify("Artist: " + results.artists[0].name, null, 2))
      console.log(JSON.stringify("Preview Link: " + results.preview_url, null, 2))
      console.log("--------------------------------------------")

      var songText =
        "\n" + "Song: " + results.name + "\n" +
        "Album: " + results.album.name + "\n" +
        "Artist: " + results.artists[0].name + "\n" +
        "Preview Link: " + results.preview_url + "\n" +
        "-----------------------------------------";

      var fs = require("fs");

      fs.appendFile("log.txt", songText, function (err) {

        if (err) { console.log(err) }
        // else { console.log("Content Added") }
        // end of appendFile
      });

    });
}

function movieThis() {
  // Here's the variable for axios. 
  var axios = require("axios");

  axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log("-----------------------------")
      // * Title of the movie.
      console.log("Title: " + response.data.Title);
      // / * Year the movie came out.
      console.log("Release Year: " + response.data.Year);
      // * IMDB Rating of the movie.
      console.log("IMDB Rating: " + response.data.Ratings[0].Value);
      // * Rotten Tomatoes Rating of the movie.
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      // * Country where the movie was produced.
      console.log("Country of Production: " + response.data.Country);
      // * Language of the movie.
      console.log("Language: " + response.data.Language);
      // * Plot of the movie.
      console.log("Plot: " + response.data.Plot);
      // * Actors in the movie.
      console.log("Actors: " + response.data.Actors);
      console.log("-----------------------------")

      var movieText =
        "\n" + "Title: " + response.data.Title + "\n" +
        "Release Year: " + response.data.Year + "\n" +
        "IMDB Rating: " + response.data.Ratings[0].Value + "\n" +
        "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n" +
        "Country of Production: " + response.data.Country + "\n" +
        "Language: " + response.data.Language + "\n" +
        "Plot: " + response.data.Plot + "\n" +
        "Actors: " + response.data.Actors + "\n" +
        "-----------------------------------------";

      var fs = require("fs");

      fs.appendFile("log.txt", movieText, function (err) {

        if (err) { console.log(err) }
        // else { console.log("Content Added") }
        // end of appendFile
      });

    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    var newValue = data.split(" ").slice(1).join(" ");
    spotifyThis(newValue);
  });

}

