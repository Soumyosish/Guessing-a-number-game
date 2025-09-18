let targetNumber = Math.floor(Math.random() * 100) + 1;
console.log("Target number:", targetNumber);

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let feedback = document.getElementById("feedback");

    if (isNaN(guess) || guess < 1 || guess > 100) {
      feedback.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }

    if (guess === targetNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number ${targetNumber}!`;
    } else if (guess < targetNumber) {
        feedback.textContent = `Try a larger number.`;
    } else {
        feedback.textContent = `Try a smaller number.`;
    }
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
