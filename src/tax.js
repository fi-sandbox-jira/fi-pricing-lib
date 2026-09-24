'use strict';

const TAX_RATES = { US: 0.07, EU: 0.2, UK: 0.2 };

function applyTax(amount, region) {
  const rate = TAX_RATES[region];
  if (rate === undefined) {
    throw new Error(`Unknown tax region: ${region}`);
  }
  return amount * (1 + rate);
}

module.exports = { applyTax, TAX_RATES };
