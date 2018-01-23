const score = require('./score');

describe('score', () => {
  describe('should return undefined', () => {
    test('when input scores do not make up 10 frames', () => {
      expect(score([1, 2, 4, 5])).toBe(undefined);
    });
  });

  describe('should return score', () => {
    test('when input scores contains no strikes or spares', () => {
      expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });
  });
});
