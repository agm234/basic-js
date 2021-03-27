const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    let number = 0;
  let ears = '^^';
  matrix = matrix.flat(Infinity);
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === ears) {
      number += 1;
    }
  }
  return number;
};
