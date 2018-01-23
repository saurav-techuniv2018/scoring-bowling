const verifyFrames = require('./verify-frames');

describe('verifyFrames', () => {
  describe('should return false', () => {
    test('when input scores does not make up all 10 frames', () => {
      expect(verifyFrames([1, 4, 5, 4])).toEqual([false, null]);
    });
  });

  describe('should return true', () => {
    test('when input scores does indeed make up 10 frames', () => {
      expect(verifyFrames([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
        .toEqual([true, [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]]);
    });
  });
});
