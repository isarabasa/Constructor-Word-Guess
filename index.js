
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

var randomIndex = Math.floor(Math.random() * GOTcharacters.length);
var randomWord = GOTcharacters[randomIndex];

var computerWord = new word(randomWord);
var requireWord = false;  

var incorrectWord = [];
var correctWord = [];

var totalGuesses = 10;


function playGame() {
    if (requireWord) {
        var randomIndex = Math.floor(Math.random() * GOTcharacters.length);
        var randomWord = GOTcharacters[randomIndex];
        var computerWord = new word(randomWord);
        var requireWord = false;  

    }
    var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Select a letter",
                name: "userInput"
            }
        ]).then(function(input){
            if(!lettersArray.includes(input.userInput) || input.userInput.length > 1) {
                console.log("\nTry again!\n");
                playGame();
            } else {
                if (
                incorrectWord.includes(input.userInput) || 
                correctWord.includes(input.userInput) || 
                input.userInput === ""
                ) {
                    console.log("\nAlready guessed\n");
                    playGame();
                } else {
                    var wordCheck = [];

                    computerWord.userGuess(input.userInput);
                    computerWord.objArray.forEach(wordCheck);

                    if (wordCheck.join("") === wordComplete.join("")) {
                        console.log("\nIncorrect\n");

                        incorrectWord.push(input.userInput);
                        totalGuesses--;
                    } else {
                        console.log("\nCorrect\n");
                        correctWord.push(input.userInput);
                    }
                    computerWord();
                    console.log("Guesses Left: " + totalGuesses + "\n");
                    console.log("Letters Guessed: " + incorrectWord.join(" ") + "\n");

                    if (totalGuesses > 0) {
                        playGame();
                    } else {
                        console.log("You lost");
                    }
                    function wordsCheck(key) {
                        wordCheck.push(key.guessed);
                    }
                }
            }
        });
    } else {
        console.log("YOU WIN");
    }
    function completecheck(key) {
        wordComplete.push(key.guessed);
    }
};
function restartGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to: ",
            choices: ["Play again", "Exit"],
            name: "restart"
        }
    ]).then(function(input){
        if (input.restart === "Play again") {
            requireWord = true;
            incorrectWord = [];
            correctWord = [];
            totalGuesses = 10;
            playGame();
        } else {
            return;
        }
    });
}
playGame();
