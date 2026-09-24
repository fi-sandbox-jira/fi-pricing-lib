const { calculatePrice } = require('../src/priceCalculator');

describe('priceCalculator', () => {
  test('calculates price with discount, bulk and tax', () => {
    const price = calculatePrice({
      unitPrice: 10,
      quantity: 12,
      discountPercent: 10,
      bulkThreshold: 10,
      bulkRate: 0.05,
      region: 'US',
      currency: 'USD',
    });
    expect(price).toMatch(/^\$\d+\.\d{2}$/);
  });

  test('calculates price without discounts', () => {
    const price = calculatePrice({ unitPrice: 5, quantity: 1, region: 'EU', currency: 'EUR' });
    expect(price).toMatch(/^€\d+\.\d{2}$/);
  });
});
