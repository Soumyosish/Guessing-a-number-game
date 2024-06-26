let targetNumber = Math.floor(Math.random() * 100) + 1;
console.log("Target number:", targetNumber);
function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let feedback = document.getElementById("feedback");
    if (guess === targetNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number ${targetNumber}!`;
    } else if (guess < targetNumber) {
        feedback.textContent = `Try a larger number.`;
    } else {
        feedback.textContent = `Try a smaller number.`;
    }
    document.getElementById("guessInput").value = "";
}