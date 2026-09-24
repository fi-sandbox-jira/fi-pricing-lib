const { applyTax } = require('../src/tax');

describe('tax', () => {
  test('applies known region rate', () => {
    expect(applyTax(100, 'US')).toBeCloseTo(107);
  });

  test('throws on unknown region', () => {
    expect(() => applyTax(100, 'XX')).toThrow(/Unknown tax region/);
  });
});
