const verifyInput = require('./verify-input');
const verifyFrames = require('./verify-frames');

function score(scoresArray) {
  const validInput = verifyInput(scoresArray);
  if (!validInput) return undefined;

  const validFrames = verifyFrames(scoresArray);
  if (!validFrames) return undefined;

  // const sumFromTo = (i, j) => {
  //   let sum = 0;
  //   for (let k = 0; k < j; k += 1) {
  //     if ((i + k) < scoresArray.length) {
  //       sum += scoresArray[i + k];
  //     }
  //   }
  //   return sum;
  // };
  const sumArray = inputArray => inputArray.reduce((sum, current) => {
    let tempSum = sum;
    tempSum += current;
    return tempSum;
  }, 0);

  // Copy scoresArray to temporary array
  let scores = scoresArray.slice();

  // Array to hold scores per round
  const scoresPerFrame = [];
  for (let i = 0; i < 9; i += 1) {
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
}

module.exports = score;
