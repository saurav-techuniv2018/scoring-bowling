function verifyFrames(scoresArray) {
  // scoresArray has already been verified in the main score function
  // not verifying again here
  const resultFramesArray = scoresArray.reduce((accumulator, currentValue) => {
    const framesArray = accumulator;
    const frameNumber = framesArray.length - 1;

    if (framesArray.length === 0) framesArray.push(currentValue);

    else {
      const currentFrame = framesArray[frameNumber];
      if (currentFrame + currentValue <= 10) {
        framesArray[frameNumber] += currentValue;
      } else {
        framesArray.push(currentValue);
      }
    }

    return framesArray;
  }, []);

  if (resultFramesArray.length > 11 || resultFramesArray.length < 10) {
    return false;
  } else if (resultFramesArray[9] > 20) {
    return false;
  }
  return true;
}

module.exports = verifyFrames;
