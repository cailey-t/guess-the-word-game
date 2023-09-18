//GLOBAL VARIABLES
//unordered list where the player's guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
const guessedLetters = [];

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

    message.innerText = ""; //empty text of message element

    const guess = letterInput.value;
    //console.log(guess);
    
    const goodGuess = validateInput(guess); //calls function to validate guess input

    if (goodGuess) {
        makeGuess(guess);
    }

    letterInput.value = ""; //empty value of input
});



const validateInput = function(input) {
    //accepted inputs are letters only
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0){
        //input empty
        message.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        //more than one character
        message.innerText = "Please enter only one letter at a time.";
    } else if (!input.match(acceptedLetter)) {
        //input not a letter
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        //valid input
        return input;
    }
};

//adds guess to array of guesses, prevents duplicate guesses
const makeGuess = function(letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)){
        message.innerText = "You have already guessed that letter, silly. Please try a different letter.";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
        updateGuess();
        updateWordInProgress(guessedLetters);
    }
    
};


//displays list of all guessed letters
const updateGuess = function() {
    guessedLettersElement.innerHTML = "";

    for (let guess of guessedLetters){
        const li = document.createElement("li");
        li.innerText = `${guess}`;
        guessedLettersElement.append(li);
    }
};

//if guessed letter in chosen word, replaces placeholder with guessed letter
const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    
    //array to split letters of chosen word into individual strings 
    const wordArray = wordUpper.split(""); 
    
    const showWord = [];
    
    for (let letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            showWord.push(letter);
        } else {
            showWord.push("●");
        }
    }
    console.log(showWord);
    wordInProgress.innerText = showWord.join("");
    wonGame();
};

const wonGame = function() {
    if (wordInProgress.innerText === word.toUpperCase()){
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};

