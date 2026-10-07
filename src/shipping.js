'use strict';

const BASE_RATES = { standard: 4.5, express: 9, overnight: 18 };
const WEIGHT_STEP_KG = 5;
const WEIGHT_STEP_SURCHARGE = 1.25;
const FREE_STANDARD_THRESHOLD = 100;

function weightSurcharge(weightKg) {
  const extraSteps = Math.max(0, Math.ceil(weightKg / WEIGHT_STEP_KG) - 1);
  return extraSteps * WEIGHT_STEP_SURCHARGE;
}

function shippingCost({ method, weightKg, orderTotal }) {
  const base = BASE_RATES[method];
  if (base === undefined) {
    throw new Error(`Unknown shipping method: ${method}`);
  }
  if (!Number.isFinite(weightKg) || weightKg <= 0) {
    throw new Error('weightKg must be a positive number');
  }
  if (method === 'standard' && orderTotal >= FREE_STANDARD_THRESHOLD) {
    return 0;
  }
  return Math.round((base + weightSurcharge(weightKg)) * 100) / 100;
}

module.exports = { shippingCost, weightSurcharge, BASE_RATES };
