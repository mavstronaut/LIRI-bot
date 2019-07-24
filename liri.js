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
let param = process.argv[3];



//points to command functions
if (cmd == "help") {
    help()
} else if (cmd == "concert-this") {
    concertThis(input);
} else if (cmd == "spotify-this-song") {
    spotifyThisSong(input);
} else if (cmd == "movie-this") {
    movieThis(input);
} else if (process.argv[0] == "do-what-it-says") {
    doWhatItSays(input);
} else {
    console.log("Hey there, Ask me for help by typing `$help [command]`")
};

function help() {
    console.log("You need help!");
    console.log("just kidding, first enter a command");
    console.log("Followed by what you want to search");
}

// concert-this
async function concertThis(input, param) {

    //   `node liri.js concert-this <artist/band name here>`

    //   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    //   * Name of the venue

    //   * Venue location

    //   * Date of the Event (use moment to format this as "MM/DD/YYYY")


};

// spotify-this-song
    //  `node liri.js spotify-this-song '<song name here>'`

    //  * This will show the following information about the song in your terminal/bash window
 
    //  * Artist(s)
 
    //  * The song's name
 
    //  * A preview link of the song from Spotify
 
    //  * The album that the song is from
 
    //  * If no song is provided then your program will default to "The Sign" by Ace of Base.



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
    //  `node liri.js do-what-it-says`

    //  * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    //  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    //  * Edit the text in random.txt to test out the feature for movie-this and concert-this.

