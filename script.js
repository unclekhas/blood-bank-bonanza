const symbols = ['🧛', '🧛‍♀️', '🩸', '🦇', '🧄', '⚰️'];

function spin() {
  const reel1 = document.getElementById('reel1');
  const reel2 = document.getElementById('reel2');
  const reel3 = document.getElementById('reel3');
  const result = document.getElementById('result');

  const s1 = symbols[Math.floor(Math.random() * symbols.length)];
  const s2 = symbols[Math.floor(Math.random() * symbols.length)];
  const s3 = symbols[Math.floor(Math.random() * symbols.length)];

  reel1.textContent = s1;
  reel2.textContent = s2;
  reel3.textContent = s3;

  if (s1 === s2 && s2 === s3) {
    result.textContent = '🧛 JACKPOT! You drained the bank! 🧛';
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    result.textContent = '🦇 Nice bite! Partial match.';
  } else {
    result.textContent = '💀 No blood for you... try again!';
  }
}