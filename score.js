const verifyInput = require('./verify-input');
const verifyFrames = require('./verify-frames');

function score(scoresArray) {
  const validInput = verifyInput(scoresArray);
  if (!validInput) return undefined;

  const validFrames = verifyFrames(scoresArray);
  if (!validFrames) return undefined;

  return 0;
}

module.exports = score;
