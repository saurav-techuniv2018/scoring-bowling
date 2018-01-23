const score = require('./score');

describe('score', () => {
  describe('should return undefined', () => {
    test('when input scores do not make up 10 frames', () => {
      expect(score([1, 2, 4, 5])).toBe(undefined);
    });
  });
});
