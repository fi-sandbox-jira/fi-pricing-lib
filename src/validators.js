'use strict';

// Intentionally left without a dedicated test file - see src/currency.js for
// the same note. Not wired into priceCalculator.js, so it stays uncovered.
function assertPositiveNumber(value, label) {
  if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
    throw new Error(`${label} must be a non-negative number`);
  }
}

function assertNonEmptyString(value, label) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} must be a non-empty string`);
  }
}

function assertOneOf(value, allowed, label) {
  if (!allowed.includes(value)) {
    throw new Error(`${label} must be one of: ${allowed.join(', ')}`);
  }
}

module.exports = { assertPositiveNumber, assertNonEmptyString, assertOneOf };
