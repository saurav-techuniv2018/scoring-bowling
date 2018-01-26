const sumArray = require('./sum-array');
const verifyFrames = require('./verify-frames');

/**
 * calculates the score for a game of bowling
 * @param {Number[]} scoresArray - an array containing scores for the game
 * @param {Number} [framesCount=10] - number of frames in the game
 * @returns {Number | undefined} the score if scoresArray is a valid array of scores or
 * undefined if scoresArray contains invalid scores
 */
const score = (scoresArray, framesCount = 10) => {
  const validFrames = verifyFrames(scoresArray, framesCount);
  if (!validFrames) return undefined;

  // Copy scoresArray to temporary array
  let scores = scoresArray.slice();

  // Array to hold scores per round
  const scoresPerFrame = [];
  for (let i = 0; i < framesCount - 1; i += 1) {
    if (scores[0] === 10) {
      scoresPerFrame.push(sumArray(scores.slice(0, 3)));
      scores = scores.splice(1);
    } else if (sumArray(scores.slice(0, 2)) === 10) {
      scoresPerFrame.push(sumArray(scores.slice(0, 3)));
      scores = scores.splice(2);
    } else {
      scoresPerFrame.push(sumArray(scores.slice(0, 2)));
      scores = scores.splice(2);
    }
  }

  // Push the score of the 10th round
  scoresPerFrame.push(sumArray(scores));

  // Return the total score
  return sumArray(scoresPerFrame);
};

module.exports = score;
