const verifyFrames = require('../src/verify-frames');

describe('verifyFrames', () => {
  describe('should return false', () => {
    test('when input is null', () => {
      expect(verifyFrames(null)).toBe(false);
    });
    test('when input is undefined', () => {
      expect(verifyFrames(undefined)).toBe(false);
    });
    test('when input scores does not make up all 10 frames', () => {
      expect(verifyFrames([1, 4, 5, 4])).toBe(false);
    });
    test('when input contains round where a frame has sum more than 10', () => {
      expect(verifyFrames([1, 5, 7, 10, 3, 6, 7, 2, 4, 5, 3, 4, 5, 2, 5, 3, 5, 2]))
        .toBe(false);
    });
    test('when input contains last round with no fill ball when there is a with spare', () => {
      expect(verifyFrames([1, 5, 1, 7, 3, 6, 7, 2, 4, 5, 3, 4, 5, 2, 5, 3, 2, 4, 5, 5]))
        .toBe(false);
    });
    test('when input contains last round such that sum of first two throws is more than 10', () => {
      expect(verifyFrames([1, 5, 1, 7, 3, 6, 7, 2, 4, 5, 3, 4, 5, 2, 5, 3, 3, 2, 5, 6, 2]))
        .toBe(false);
    });
    test('when input contains an extra score after the last round', () => {
      expect(verifyFrames([3, 6, 3, 6, 4, 5, 4, 5, 3, 6, 4, 5, 2, 7, 4, 5, 5, 3, 4, 6, 2, 2]))
        .toBe(false);
    });
  });

  describe('should return true', () => {
    test('when input scores does indeed make up 10 frames', () => {
      expect(verifyFrames([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
        .toEqual(true);
    });
    test('when input scores does indeed make up 10 frames with all strikes', () => {
      expect(verifyFrames([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
        .toEqual(true);
    });
    test('when input scores contains a frame where a roll is zero', () => {
      expect(verifyFrames([3, 6, 0, 10, 2, 2, 3, 4, 5, 2, 1, 4, 3, 4, 2, 4, 5, 2, 5, 5, 10]))
        .toBe(true);
    });
  });
});
