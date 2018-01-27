const sumArray = require('../src/sum-array');

describe(sumArray.name, () => {
  describe('should return zero', () => {
    test('when array contains no elements', () => {
      expect(sumArray([])).toBe(0);
    });
    test('when array contains zeroes', () => {
      expect(sumArray([0, 0, 0])).toBe(0);
    });
  });
  describe('should return sum of array elements', () => {
    test('when array contains positive integers', () => {
      expect(sumArray([1, 2, 4, 8])).toBe(15);
    });
  });
});
