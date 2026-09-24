'use strict';

const { percentOff, bulkDiscount } = require('./discount');
const { applyTax } = require('./tax');
const { format } = require('./currency');

function calculatePrice({ unitPrice, quantity, discountPercent = 0, bulkThreshold, bulkRate, region, currency }) {
  let amount = unitPrice * quantity;
  if (discountPercent > 0) {
    amount = percentOff(amount, discountPercent);
  }
  if (bulkThreshold && bulkRate) {
    amount = bulkDiscount(amount, quantity, bulkThreshold, bulkRate);
  }
  amount = applyTax(amount, region);
  return format(amount, currency);
}

module.exports = { calculatePrice };
