const score = require('./score');

describe('score', () => {
  describe('should return undefined', () => {
    test('when input scores do not make up 10 frames', () => {
      expect(score([1, 2, 4, 5])).toBe(undefined);
    });
    test('when input scores is empty', () => {
      expect(score([])).toBe(undefined);
    });
    test('when input contains invalid numbers in the scores', () => {
      expect(score([5, 3, 4, Infinity])).toBe(undefined);
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
  });
});
