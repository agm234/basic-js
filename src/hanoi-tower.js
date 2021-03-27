const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let obj = {};
  let turns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(turns * 60 * 60 / turnsSpeed);
  obj['turns'] = turns;
  obj['seconds'] = time;
  return obj;
};
