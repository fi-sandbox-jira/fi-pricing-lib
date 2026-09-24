const { percentOff, bulkDiscount } = require('../src/discount');

describe('discount', () => {
  test('applies percent off', () => {
    expect(percentOff(100, 10)).toBeCloseTo(90);
  });

  test('rejects invalid percent', () => {
    expect(() => percentOff(100, 150)).toThrow(/between 0 and 100/);
  });

  test('applies bulk discount at threshold', () => {
    expect(bulkDiscount(100, 10, 10, 0.1)).toBeCloseTo(90);
  });

  test('skips bulk discount below threshold', () => {
    expect(bulkDiscount(100, 5, 10, 0.1)).toBe(100);
  });
});
