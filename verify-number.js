function verifyNumber(inputNumber) {
  if (typeof inputNumber !== 'number') {
    return false;
  }

  if (inputNumber >= Infinity || inputNumber <= -Infinity) {
    return false;
  }

  return true;
}

module.exports = verifyNumber;
