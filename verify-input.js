function verifyInput(scoreArray) {
  if (!Array.isArray(scoreArray)) { return false; }
  return true;
}

module.exports = verifyInput;
