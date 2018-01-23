const verifyInput = require('./verify-input');

test('Should return false when input passed is null', () => {
  expect(verifyInput(null)).toBe(false);
});
