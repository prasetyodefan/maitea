// List of available teas
var teas = ["Green tea", "Black tea", "Oolong tea", "White tea", "Herbal tea"];

// Randomly select a tea from the list
var randomIndex = Math.floor(Math.random() * teas.length);
var selectedTea = teas[randomIndex];

// Number of attempts
var attempts = 0;

// Function to start the game
function startGame() {
    // Prompt the user for their guess
    var guess = prompt("Guess the type of tea from the following options:\n\n" + teas.join(", "));

    // Increment the number of attempts
    attempts++;

    // Check if the guess is correct
    if (guess.toLowerCase() === selectedTea.toLowerCase()) {
        alert("Congratulations! You guessed the tea (" + selectedTea + ") correctly in " + attempts + " attempts.");
    } else {
        alert("Incorrect guess! Try again.");
        startGame(); // Recursive call to allow the user to guess again
    }
}

// Start the game
startGame();
