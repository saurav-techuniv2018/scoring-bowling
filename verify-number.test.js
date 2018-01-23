const verifyNumber = require('./verify-number');

describe('verifyNumber', () => {
  describe('Should return false when input is invalid', () => {
    test('when input is null', () => {
      expect(verifyNumber(null)).toBe(false);
    });

    test('when input is undefined', () => {
      expect(verifyNumber(undefined)).toBe(false);
    });
  });
});

