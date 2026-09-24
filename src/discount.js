'use strict';

function percentOff(amount, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error('percent must be between 0 and 100');
  }
  return amount * (1 - percent / 100);
}

function bulkDiscount(amount, quantity, threshold, rate) {
  return quantity >= threshold ? amount * (1 - rate) : amount;
}

module.exports = { percentOff, bulkDiscount };
