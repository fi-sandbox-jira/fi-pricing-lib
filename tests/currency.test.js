const { convert } = require('../src/currency');

describe('currency.convert', () => {
  test('converts between two non-USD currencies via USD', () => {
    expect(convert(100, 'EUR', 'GBP')).toBeCloseTo((100 * 1.08) / 1.27, 5);
  });

  test('converts USD to EUR', () => {
    expect(convert(108, 'USD', 'EUR')).toBeCloseTo(100, 5);
  });

  test('round trip returns the original amount', () => {
    expect(convert(convert(50, 'GBP', 'EUR'), 'EUR', 'GBP')).toBeCloseTo(50, 5);
  });
});
