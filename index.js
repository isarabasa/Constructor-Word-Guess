// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses


var word = require("./word");
var inquirer = require("inquirer");

var lettersArray = "abcdefghijklmnopqrstuvwxyz";

var GOTcharacters = [
    "Ned Stark", "Catelyn Stark", "Daenerys Targaryen", "Jon Snow", "Tyrion Lannister", "Bran Stark", "Sansa Stark", "Arya Stark",
    "Cersei Lannister", "Jaime Lanniste", "Littlefinger", "Varys", "Robert Baratheon", "Jorah Mormont", "Viserys Targaryen", 
    "Khal Drogo", "Joffrey Baratheon", "The Hound", "Robb Stark", "Theon Greyjoy", "Rodrik", "Tywin Lannister", "Bronn", "Lysa Arryn",
    "Maester Aemon", "Samwell Tarly", "Renly Baratheon", "Stannis Baratheon", "Ser Gregor Cleagne", "Rickon Stark", "Rhaegar Targaryen",
    "The Mad King", "Jon Arryn", "Roose Bolton", "Gendry", "Ramsey Bolton", "Aeron Greyjoy", "Ygritte", "Gilly", "The High Sparrow",
    "Jaqen Hghar", "Ellaria Sand", "Tormund", "Yara Greyjoy", "Hodor", "Margaery Tyrell", "Brienne of Tarth", "Melisandre", "Missandei",
    "Grey Worm", "Davos Seaworth", "Olenna Tyrell", "The Night King", "Drogon", "Rhaegal", "Viserion", "Lyanna Star", 
];

// Random loop (look for the math.floor function)

// random word variable thats created from the GOTcharacters random

// create de computer word. it would be made from the word constructor, thats making a random word.

// set our require new word with the boolean false 

// var array for incorrect and correct answer

// create variable that sets the guesses to 10

// create main function that handles all the logic

        // start with an if statement that will generate the new word from the word constructor that selects
        // random GOTcharacters

        // create array that hold the word thats complete. First create variable

        // create if statement with inquierer.prompt
        // then the .then(function(input)
            // for the "if statement determine if the letter is not included in the user input



        // else: console.log(you win)

