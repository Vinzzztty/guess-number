"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    // Where there is no input
    if (!guess) {
        displayMessage("⛔ No Number!");
    }

    // When player wins
    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    // When Player wrong guess
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 To High" : "📉 To Low");
            score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lose";
            document.querySelector(".score").textContent = 0;
        }
    }

    // BEFORE REFACTORING
    // When guess is too LOW
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📉 To Low";
    //         score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You Lose";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

    // // When guess is too HIGH
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📈 To High";
    //         score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You Lose";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing.....");
    document.querySelector(".number").textContent = "?";

    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
