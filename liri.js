// read and set environment variables with the dotenv package.
require("dotenv").config();

var keys = require("./keys");
// Requiring Twitter
var Twitter = require('twitter');

// Rquiring OMDB Rquest npm package.
var request = require('request');
// Rquiring Spotify
var Spotify = require('node-spotify-api');

// console.log(keys.spotify.id);

// Grabing client id and secret
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

// importing and storing keys

var client = new Twitter(keys.twitter);

// Grabing user input in an array
var userInput = process.argv;
var userChoice = "";
// var movieName = process.argv[3];
// var songName = process.argv[3];

// Looping through userInput in order to combine them as a string.
for (var i=3; i<userInput.length; i++) {
    userChoice = userChoice + " " + userInput[i];

}

// If else if statements
switch(userInput[2]) {
    case 'my-tweets':
    myTweets();
    break;
    
    case "movie-this":
    movie();
    break;

    case "spotify-this-song":
    searchSpotify();
    break;
}

// In this function we are sending request to twitter website.
function myTweets() {
   
       
        client.get('statuses/user_timeline', {screen_name: "nodejs"}, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
        });


} 

// In this function we are sending the request to the omdb website.
function movie(){
  

        request("http://www.omdbapi.com/?t="+ userChoice +"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
            console.log("Release Year: " + JSON.parse(body).Year);
    });
    

}

// In this function we are sending request to spotify website.
function searchSpotify() {
    console.log(userChoice)
    spotify.search({ type: 'track', query: userChoice }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else{
            
            for (var i =0; i< data.tracks.items.length; i++) {
                    console.log(data.tracks.items[i]);
            } 
        }
           
    });
    

}




