/**
 * calculates the sum of the inputArray containing positive integers
 * @param {Number[]} positiveNumbersArray an array containing positive integers
 * @returns sum of the elements in the array
 */
const sumArray = positiveNumbersArray =>
  positiveNumbersArray.reduce((sum, currentValue) => {
    let currentSum = sum;
    currentSum += currentValue;
    return currentSum;
  }, 0);

module.exports = sumArray;
