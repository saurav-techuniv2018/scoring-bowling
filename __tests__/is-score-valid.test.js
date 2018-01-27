const isScoreValid = require('../src/is-score-valid');

describe(isScoreValid.name, () => {
  describe('Should return false when input is invalid', () => {
    test('when input is null', () => {
      expect(isScoreValid(null)).toBe(false);
    });

    test('when input is undefined', () => {
      expect(isScoreValid(undefined)).toBe(false);
    });

    test('when input is a number but larger than 10', () => {
      expect(isScoreValid(13)).toBe(false);
    });

    test('when input is negative', () => {
      expect(isScoreValid(-20)).toBe(false);
    });

    test('when input is Infinity', () => {
      expect(isScoreValid(Infinity)).toBe(false);
    });

    test('when input is negative Infinity', () => {
      expect(isScoreValid(-Infinity)).toBe(false);
    });
  });

  describe('Should return true when input is valid', () => {
    test('when input is a positive number less than equal to 10', () => {
      expect(isScoreValid(9)).toBe(true);
    });
    test('when input is positive but equal to 10', () => {
      expect(isScoreValid(10)).toBe(true);
    });
  });
});

