const verifyInput = require('./verify-input');
const verifyFrames = require('./verify-frames');

function score(scoresArray) {
  const validInput = verifyInput(scoresArray);
  if (!validInput) return undefined;

  const validFrames = verifyFrames(scoresArray);
  if (!validFrames) return undefined;

  let playerScore = 0;
  for (let i = 0, frameCounter = 0; i < 10; i += 1) {
    if (scoresArray[frameCounter] === 10) {
      playerScore += (10 + scoresArray[frameCounter + 1] + scoresArray[frameCounter + 2]);

      // Increment frameCounter to next frame
      frameCounter += 1;
    } else {
      playerScore += (scoresArray[frameCounter] + scoresArray[frameCounter + 1]);

      // Increment frameCounter by two because both rolls of this frame have been considered
      frameCounter += 2;
    }
  }

  return playerScore;
}

module.exports = score;
