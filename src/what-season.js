const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
 if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error()
  }
  if (date.getMonth() === 11 || date.getMonth() === 1 || date.getMonth() === 0) {
    return "winter";
  }
  if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
    return "spring";
  }
  if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
    return "summer";
  }
  if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
    return "autumn";
  }


};
