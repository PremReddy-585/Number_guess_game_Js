let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High, try Again";
        gameResult.style.background = "#1e217c";
    }
    else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low, try Again";
        gameResult.style.background = "#1e217c";
    }
    else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations, You got it Right";
        gameResult.style.background = "#green";
}
else{
    gameResult.textContent = "Please Provide, a Valid Input";
        gameResult.style.background = "red";
    
}
}
