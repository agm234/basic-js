const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false
  }
  else if (sampleActivity.length = 0) {
    return false
  }
  else if (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) {
    return false
  }
  else if (isNaN(Number(sampleActivity)) === true) {
    return false
  }

  let time = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)
  return Math.ceil(time);
};
