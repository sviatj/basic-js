const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let r = Number(sampleActivity);
  let s = +sampleActivity;
  if (r > 15 || r <= 0 || typeof sampleActivity !== 'string' || Number.isNaN(r) || sampleActivity.length === 0 || typeof s !== 'number') {
    return false
  } else
  k = Math.log2(MODERN_ACTIVITY / r);
  t = HALF_LIFE_PERIOD * k;
  let res = Math.ceil(t);
  return res;
}

module.exports = {
  dateSample
};
