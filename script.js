const symbols = ['🧛', '🧛‍♀️', '🩸', '🦇', '🧄', '⚰️'];

// Function to perform the spin and update the reels
function spin() {
  const reel1 = document.getElementById('reel1');
  const reel2 = document.getElementById('reel2');
  const reel3 = document.getElementById('reel3');
  const result = document.getElementById('result');

  // Select random symbols for each reel
  const s1 = symbols[Math.floor(Math.random() * symbols.length)];
  const s2 = symbols[Math.floor(Math.random() * symbols.length)];
  const s3 = symbols[Math.floor(Math.random() * symbols.length)];

  // Update the text content of each reel
  reel1.textContent = s1;
  reel2.textContent = s2;
  reel3.textContent = s3;

  // Check if the reels match
  if (s1 === s2 && s2 === s3) {
    result.textContent = '🧛 JACKPOT! You drained the bank! 🧛';
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    result.textContent = '🦇 Nice bite! Partial match.';
  } else {
    result.textContent = '💀 No blood for you... try again!';
  }
}

// Ensure the button works after the page has fully loaded
window.onload = function() {
  // Select the "Spin the Coffin" button by its ID
  const spinButton = document.getElementById('spinButton');
  
  // Check if the button exists
  if (spinButton) {
    // Add a click event listener to trigger the spin function
    spinButton.addEventListener('click', spin);
  }
};
