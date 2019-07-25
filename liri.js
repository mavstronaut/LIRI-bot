require("dotenv").config();
const fs = require('fs'); //file system
var keys = require("./keys.js");
const Spotify = require('node-spotify-api');

// let twitter = require('twitter');
// let request = require('request');
// var inquirer = require('inquirer');

var spotify = new Spotify(keys.spotify);
// const omdb = new Omdb(keys.omdb);
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

    spotifyThisSong(song);
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
async function concertThis(search) {

    //   `node liri.js concert-this <artist/band name here>`

    //   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    //   * Name of the venue

    //   * Venue location

    //   * Date of the Event (use moment to format this as "MM/DD/YYYY")


};

async function spotifyThisSong(search) {
    spotify
        .search({ type: 'track', query: search })
        .then(function(response) {
        console.log(response);
    }).catch(function(err) {
        console.log(err);
    });
// spotify-this-song
    //  `node liri.js spotify-this-song '<song name here>'`

    //  * This will show the following information about the song in your terminal/bash window
 
    //  * Artist(s)
 
    //  * The song's name
 
    //  * A preview link of the song from Spotify
 
    //  * The album that the song is from
 
    //  * If no song is provided then your program will default to "The Sign" by Ace of Base.
};


// movie-this
    // `node liri.js movie-this '<movie name here>'`

    //    * This will output the following information to your terminal/bash window:

   /* 
     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.
   */

   // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

   // * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

   // * It's on Netflix!

   // * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.



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
            })
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
    //  * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    //  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    //  * Edit the text in random.txt to test out the feature for movie-this and concert-this.

};