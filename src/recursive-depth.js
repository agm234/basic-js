const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
     let k = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        let m = this.calculateDepth(element) + 1;
        if (k < m) {
          k = m
        }
      }
    });
    return k;
  }
};
