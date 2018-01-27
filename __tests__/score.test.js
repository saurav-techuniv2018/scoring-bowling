const score = require('../src/score');

describe('score', () => {
  describe('should return undefined', () => {
    test('when input scores is null', () => {
      expect(score(null)).toBe(undefined);
    });
    test('when input scores is undefined', () => {
      expect(score(undefined)).toBe(undefined);
    });
    test('when input scores do not make up 10 frames', () => {
      expect(score([1, 2, 4, 5])).toBe(undefined);
    });
    test('when input scores is empty', () => {
      expect(score([])).toBe(undefined);
    });
    test('when input contains invalid numbers in the scores', () => {
      expect(score([5, 3, 4, Infinity])).toBe(undefined);
    });
    test('when input scores does not make the frames specified', () => {
      expect(score([3, 4, 5, 3, 8, 0], 4)).toBe(undefined);
    });
  });

  describe('should return score', () => {
    test('when input scores contains no strikes or spares', () => {
      expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
    test('when input scores contains some strikes but no spares', () => {
      expect(score([3, 6, 10, 7, 2, 5, 2, 2, 5, 4, 5, 7, 1, 10, 10, 4, 5])).toBe(120);
    });
    test('when input contains only strikes', () => {
      expect(score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
    });
    test('when input contains only rolls of 5 (all spares)', () => {
      expect(score([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])).toBe(150);
    });
    test('when input scores contains some strikes and spares', () => {
      expect(score([3, 6, 10, 7, 2, 5, 5, 2, 5, 4, 5, 7, 1, 10, 10, 4, 5])).toBe(125);
    });
    test('when input contains scores with only spares for the specified number of frames', () => {
      expect(score([2, 5, 6, 4, 3, 4, 2, 0], 4)).toBe(29);
    });
    test('when input contains scores for the specified number of frames', () => {
      expect(score([2, 3, 5, 5, 10], 2)).toBe(25);
    });
  });
});
