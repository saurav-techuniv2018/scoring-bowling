/**
 * checks whether the passed inputScore is a valid score or not in a game of bowling
 * @param {Number} inputScore - the score to validate
 * @returns {Boolean} true if the score is valid or false if it is invalid
 */
const isScoreValid = (inputScore) => {
  if (typeof inputScore !== 'number') {
    return false;
  }

  if (inputScore >= Infinity || inputScore <= -Infinity) {
    return false;
  }

  if (inputScore < 0 || inputScore > 10) {
    return false;
  }

  return true;
};

module.exports = isScoreValid;
