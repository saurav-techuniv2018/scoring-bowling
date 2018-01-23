const verifyFrames = require('./verify-frames');

describe('verifyFrames', () => {
  describe('should return false', () => {
    test('when input scores does not make up all 10 frames', () => {
      expect(verifyFrames([1, 4, 5, 4])).toBe(false);
    });
  });

  describe('should return true', () => {
    test('when input scores does indeed make up 10 frames', () => {
      expect(verifyFrames([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
        .toEqual(true);
    });
    test('when input scores does indeed make up 10 frames', () => {
      expect(verifyFrames([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
        .toEqual(true);
    });
  });
});
