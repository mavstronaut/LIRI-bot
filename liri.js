require("dotenv").config();
const fs = require('fs'); //file system
var keys = require("./keys.js");
const Spotify = require('node-spotify-api');

// let twitter = require('twitter');
// let request = require('request');
// var inquirer = require('inquirer');

var spotify = new Spotify(keys.spotify);
// const bands = new Bands(keys.bands)

let space = "\n"
let header = "Sure. I'll share what I found: "
let cmd = process.argv[1];
let input = process.argv[2];
let param1 = process.argv[3];
let param2 = process.argv[4];

console.log("command is: " + cmd);
console.log("input is: " + input);
console.log("param1 is: " + param1);
console.log("param2 is: " + param2);

search = (input+" "+param1+" "+param2);
console.log("the search string is: "+search)

//points to command functions
if (cmd == "concert-this") {
    concertThis(input);
} else if (cmd == "spotify-this-song") {
    if (!search) {
        search = "Barnacle Goose";
    }
    spotifyThisSong(search);
} else if (cmd == "movie-this") {
    movieThis(input);
} else if (cmd == "do-what-it-says") {
    doWhatItSays();
} else {
    console.log("Hey there, my commands are: ");
    console.log("Search band info   --     concert-this [artist]");
    console.log("Search song info   --     spotify-this-song [song]");
    console.log("Find move info     --     movie-this [movie]");
    console.log("See what happens   --     do-what-it-says");
};

// concert-this
function concertThis(search) {
    if (!search) {
        search = "Trevor Hall"
    }

    let urlHit = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

        request(urlHit, function(err, res, body) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                let jsonData = JSON.parse(body);
                output = space + header +
                    space + 'Title: ' + jsonData.Title +
                    space + 'Year: ' + jsonData.Year +

    
                console.log(output);
                // writeToLog(output);
            }
        });
    //   `node liri.js concert-this <artist/band name here>`
    //   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
        //   * Name of the venue
        //   * Venue location
        //   * Date of the Event (use moment to format this as "MM/DD/YYYY")
};

function spotifyThisSong(search) {
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            output =
                "Ch-ch-check out this info: " +
                space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
                space + "Album Name: " + data.tracks.items[0].album.name +
                space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
                space + "URL: " + data.tracks.items[0].album.external_urls.spotify;
            console.log(output);
            // writeToLog(output);
        }
    });
};


// movie-this
function movieThis(search) {
    if(!search) {
        search = "Cloud Atlas"
    }
    // `node liri.js movie-this '<movie name here>'`

    //    * This will output the following information to your terminal/bash window:
        // t = movietitle, y = year, plot is short, then the API key
        let urlHit = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey="+"879a15d0";

        request(urlHit, function(err, res, body) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                let jsonData = JSON.parse(body);
                output = space + header +
                    space + 'Title: ' + jsonData.Title +
                    space + 'Year: ' + jsonData.Year +
                    space + 'Rated: ' + jsonData.Rated +
                    space + 'IMDB Rating: ' + jsonData.imdbRating +
                    space + 'Country: ' + jsonData.Country +
                    space + 'Language: ' + jsonData.Language +
                    space + 'Plot: ' + jsonData.Plot +
                    space + 'Actors: ' + jsonData.Actors +
                    space + 'Tomato Rating: ' + jsonData.Ratings[1].Value +
                    space + 'IMDb Rating: ' + jsonData.imdbRating + "\n";
    
                console.log(output);
                // writeToLog(output);
            }
        });
  
};


// do-what-it-says
function doWhatItSays() {
    whatdo = ""
    //  `node liri.js do-what-it-says`
    rando = Math.floor(Math.random() * 3);
    switch (rando) {
        case 0:
            fs.readFile("random.txt", "utf8", function(error, data) {
                whatdo = data;
        
                if (error) {
                    return console.log(error);
                }
            });
            spotifyThisSong(whatdo);
            break;
        case 1:
            whatdo = "Barnacle Goose"
            concertThis(whatdo);
            break;
        case 2:
            whatdo = "Saving Private Ryan"
            movieThis(whatdo);
            break;
        };
    //  * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    //  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    //  * Edit the text in random.txt to test out the feature for movie-this and concert-this.
};