const boomBamSound = document.getElementById('boomBamSound');

// Play Boom Bam sound in sync with animation
function playBoomBamSound() {
  boomBamSound.currentTime = 0; // Reset sound
  boomBamSound.play();
}

// Play sound every 2 seconds (match animation duration)
setInterval(playBoomBamSound, 2000);
