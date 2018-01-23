function verifyNumber(inputNumber) {
  if (typeof inputNumber !== 'number') {
    return false;
  }

  if (inputNumber >= Infinity || inputNumber <= -Infinity) {
    return false;
  }

  if (inputNumber < 0 || inputNumber > 10) return false;
  return true;
}

module.exports = verifyNumber;
