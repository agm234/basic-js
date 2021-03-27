const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
 let mass = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && (arr[i] === '--double-prev' || arr[i] === '--discard-prev')) {
      mass.push(1);
      mass.splice(0, 1);
    }
    else if (i === arr.length - 1 && (arr[i] === '--double-next' || arr[i] === '--discard-next')) {
      mass.push(1);
      mass.splice(mass.length - 1, 1);
    }
    else if (arr[i] === '--double-prev') {
      mass.push(arr[i - 1]);
    }
    else if (arr[i] === '--double-next') {
      mass.push(arr[i + 1]);
    }
    else if (arr[i - 1] === '--discard-next') {
      mass.push(1);
      mass.splice(mass.length - 2, 2);
      if (arr[i + 1] === '--double-prev' || arr[i + 1] === '--discard-prev') {
        i = i + 1;
      }
    }
    else if (arr[i] === '--discard-prev') {
      mass.splice(mass.length - 1, 1);
    }
    else {
      mass.push(arr[i])
    }
  }
  return mass;
};
