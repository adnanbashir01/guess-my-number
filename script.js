'use strict';

//////////////////////////////////// Game Logic ////////////////////////////////////////////////

// Remove the number from input on reload 
window.onload = function () {
    document.querySelector('.guess').value = '';
}

// Define the Secrete Number, Score, High Score, and Eng Game variable
let secreteNumber = Math.trunc(Math.random() * (20 - 10)) + 10;
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
let gameEnd = false;

// Define all the functions to ensure the logic of the game

// Function #1 Compare the Guess and the Secrete Number to print the result message
const compareNumbers = function () {
    // Define the code to catch the guess number
    const guess = Number(document.querySelector('.guess').value);

    // What if there is no number 
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Not a Number';
    }

    // What is Guess is not equal to the the secrete number 
    else if (guess !== secreteNumber) {
        let lostGame = false;
        if (score <= 1 && !lostGame) {
            document.querySelector('.message').textContent = "💥 You lost the game";
            lostGame = true;
            score = 0;
            document.querySelector('.check').disabled = true;
            gameEnd = true;
        }
        else if (score > 1) {
            score = score - 1;
        }

        // Score will be dedicted and showed in the DOM
        document.querySelector('.score').textContent = score;

        document.querySelector('.message').textContent = guess > secreteNumber ? '☹ Too High' : '☹ Too Low';
        // decrementScore();
    }

    else if (guess === secreteNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').disabled = true;

        // Assign the high score if the score is high
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        gameEnd = true;
    }
}

// Function #2 Reset the game 
const resetGame = function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secreteNumber = Math.trunc(Math.random() * (20 - 10)) + 10;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').disabled = false;
}

// Logic to compare the secrete Number and the Guess Number 
document.querySelector('.check').addEventListener('click', compareNumbers);

// Reassign all the default values on clicking again
document.querySelector('.again').addEventListener('click', resetGame);
