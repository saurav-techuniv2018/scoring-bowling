const sumArray = require('./sum-array');
const isScoreValid = require('./is-score-valid');

function verifyFrames(scoresArray, frames = 10) {
  // Copy scoresArray to temporary array
  let scores = scoresArray.slice();

  // A nested array that will hold the frames for the fame
  const framesArray = [];
  // Will hold the number of frames in the game
  let framesCount = 0;
  // Will hold temporarily, if the frames are complete
  let isFrameComplete = true;
  // Will hold the number of scores being added to framesArray
  let addedScoresCount = 0;

  const isValidFrames = scores.every((currentValue) => {
    // Return false if score is invalid or if frames have been
    // separated out till last round
    if (!isScoreValid(currentValue)) { return false; }

    if (framesCount === frames - 1) {
      const lastRound = framesArray[frames - 1] || (framesArray[frames - 1] = []);

      if (sumArray(lastRound) < 20 && lastRound.length < 2) {
        lastRound.push(currentValue);
        addedScoresCount += 1;
        return true;
      }
      return true;
    } else if (!isFrameComplete) {
      // If frame is not complete, currentValue cannot be 10
      if (currentValue === 10) return false;

      framesArray[framesCount].push(currentValue);
      addedScoresCount += 1;
      // Complete frame
      framesCount += 1;
      isFrameComplete = true;
    } else {
      // Starting a new frame
      framesArray[framesCount] = [];
      framesArray[framesCount].push(currentValue);
      addedScoresCount += 1;
      if (currentValue === 10) {
        // This frame is complete
        framesCount += 1;
      } else {
        isFrameComplete = false;
      }
    }
    return true;
  });

  if (!isValidFrames ||
    framesArray.length < frames ||
    framesArray.length > frames) { return false; }


  // Get the last round's scores
  const lastRound = framesArray[frames - 1];

  if (!(lastRound[0] + lastRound[1] <= 10 ||
    lastRound[1] + lastRound[0] === 20)) {
    return false;
  }
  // Remove all scores till the fill ball
  scores = scores.splice(addedScoresCount);
  const fillBall = lastRound[0] + lastRound[1] === 10 || lastRound[1] + lastRound[0] === 20;

  if (!fillBall) {
    return true;
  }
  if (fillBall && scores.length > 1) {
    return false;
  }

  // Add fill ball
  if (!isScoreValid(scores[0])) {
    return false;
  }
  lastRound.push(scores[0]);

  return true;
}

module.exports = verifyFrames;
