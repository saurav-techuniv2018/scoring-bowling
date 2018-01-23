const verifyInput = require('./verify-input');
const verifyFrames = require('./verify-frames');

function score(scoresArray) {
  const validInput = verifyInput(scoresArray);
  if (!validInput) return undefined;

  const validFrames = verifyFrames(scoresArray);
  if (!validFrames) return undefined;

  let playerScore = 0;
  for (let i = 0; i < 10; i += 1) {
    playerScore += scoresArray[i];

    if (i + 1 <= scoresArray.length - 1) {
      playerScore += scoresArray[i + 1];
    }
  }

  return playerScore;
}

module.exports = score;
