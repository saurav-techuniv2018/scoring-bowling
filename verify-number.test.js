const verifyNumber = require('./verify-number');

describe('verifyNumber', () => {
  describe('Should return false when input is invalid', () => {
    test('when input is null', () => {
      expect(verifyNumber(null)).toBe(false);
    });

    test('when input is undefined', () => {
      expect(verifyNumber(undefined)).toBe(false);
    });

    test('when input is a number but larger than 10', () => {
      expect(verifyNumber(13)).toBe(false);
    });

    test('when input is negative', () => {
      expect(verifyNumber(-20)).toBe(false);
    });
  });

  describe('Should return true when input is valid', () => {
    test('when input is a positive number less than equal to 10', () => {
      expect(verifyNumber(9)).toBe(true);
    });
    test('when input is positive but equal to 10', () => {
      expect(verifyNumber(10)).toBe(true);
    });
  });
});

