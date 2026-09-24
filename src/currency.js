'use strict';

// Intentionally left without a dedicated test file - see github/CLAUDE.md,
// "Требования к содержимому репозиториев" (this repo's coverage is
// deliberately kept around 55%). The `format` happy path is still exercised
// indirectly via tests/priceCalculator.test.js; convert()/round-trip and the
// error branch below are not.
const SYMBOLS = { USD: '$', EUR: '€', GBP: '£' };
const RATES_TO_USD = { USD: 1, EUR: 1.08, GBP: 1.27 };

function format(amount, currency = 'USD') {
  const symbol = SYMBOLS[currency];
  if (!symbol) {
    throw new Error(`Unsupported currency: ${currency}`);
  }
  return `${symbol}${amount.toFixed(2)}`;
}

function convert(amount, fromCurrency, toCurrency) {
  const fromRate = RATES_TO_USD[fromCurrency];
  const toRate = RATES_TO_USD[toCurrency];
  if (!fromRate || !toRate) {
    throw new Error(`Unsupported currency conversion: ${fromCurrency} -> ${toCurrency}`);
  }
  const usdAmount = amount * fromRate;
  return usdAmount / toRate;
}

module.exports = { format, convert, SYMBOLS, RATES_TO_USD };
