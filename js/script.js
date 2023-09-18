//GLOBAL VARIABLES
//unordered list where the player's guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");
//button with the text "Guess!" in it
const guessButton = document.querySelector(".guess");
//The text input where the player will guess a letter
const letterInput = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display.
const displayRemainingGuesses = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//Symbol as place holders for the chosen word's letters
const placeHolder = function(word){
    const placeHolderLetters = [];
    for (let letter of word){
        if (placeHolderLetters.length < word.length){
            letter = "●";
            placeHolderLetters.push(letter);
        }
    }
    
    wordInProgress.innerText = placeHolderLetters.join("");
};

placeHolder(word);


guessButton.addEventListener("click", function(e){
    e.preventDefault();

    const guess = letterInput.value;
    console.log(guess);

    letterInput.value = ""; //empty value of input
});

