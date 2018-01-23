const verifyNumber = require('./verify-number');

function verifyInput(scoreArray) {
  if (!Array.isArray(scoreArray)) { return false; }

  for (let i = 0; i < scoreArray.length; i += 1) {
    if (!verifyNumber(scoreArray[i])) return false;
  }
  return true;
}

module.exports = verifyInput;
