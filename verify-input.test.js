const verifyInput = require('./verify-input');

test('Should return false when input passed is null', () => {
  expect(verifyInput(null)).toBe(false);
});

test('Should return true when input is undefined', () => {
  expect(verifyInput(undefined)).toBe(false);
});

test('Should return false when input passed is not an array', () => {
  expect(verifyInput('scores')).toBe(false);
});
