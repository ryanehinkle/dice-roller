// Event listener for roll button
document.getElementById('rollButton').addEventListener('click', function() {
    rollDice(); // Call to roll the dice
});

// Function to roll the dice
function rollDice() {
    // Use placeholders for dice elements
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
  
    // Generate random numbers for each dice
    var result1 = Math.floor(Math.random() * 6) + 1;
    var result2 = Math.floor(Math.random() * 6) + 1;
  
    // Update dice images based on RNG
    dice1.innerHTML = `<img src="${result1}.png" alt="Dice ${result1}">`;
    dice2.innerHTML = `<img src="${result2}.png" alt="Dice ${result2}">`;
  
    // Calculate the um of dice
    var sum = result1 + result2;
  
    // Display result prompt
    var resultPrompt = document.getElementById('resultPrompt');
    resultPrompt.textContent = `You rolled ${sum}! (${result1} & ${result2})`;
  
    // Add roll animation class to dice elements
    dice1.classList.add('roll-animation');
    dice2.classList.add('roll-animation');
  
    // Remove animation class after it completes so it can be repeated
    setTimeout(function() {
      dice1.classList.remove('roll-animation');
      dice2.classList.remove('roll-animation');
    }, 1000);
}
