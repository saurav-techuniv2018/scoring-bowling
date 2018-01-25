const verifyFrames = require('./verify-frames');

function verifyInput(scoreArray) {
  if (!Array.isArray(scoreArray)) { return false; }

  return verifyFrames(scoreArray);
}

module.exports = verifyInput;
