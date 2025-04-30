<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blood Bank Bonanza</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Blood Bank Bonanza</h1>
    
    <!-- Display the slot machine reels -->
    <div>
        <span id="reel1" class="reel"></span>
        <span id="reel2" class="reel"></span>
        <span id="reel3" class="reel"></span>
    </div>
    
    <!-- The "Spin the Coffin" Button -->
    <button id="spinButton">Spin the Coffin</button>

    <!-- Display the result of the spin -->
    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
console.log("Page Loaded");

window.onload = function() {
  console.log("Spin Button Loaded");

  const spinButton = document.getElementById('spinButton');
  if (spinButton) {
    console.log("Button Found!");
    spinButton.addEventListener('click', function() {
      console.log("Spin Button Clicked");
      spin();
    });
  }
};
