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

test('Should return false when array contains invalid items (Infinity, null and undefined)', () => {
  expect(verifyInput([1, 3, null, undefined])).toBe(false);
});

test('Should return false when array contains scores that are out of range', () => {
  expect(verifyInput([1, 5, 7, 9, -3, 12])).toBe(false);
});
