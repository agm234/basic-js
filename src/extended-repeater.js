const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
    let str1 = '';
  let mass = [];
  let massaddition = [];
  let straddition = '';
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  for (key in options) {
    if (key === 'repeatTimes') {
      repeatTimes = Number(options[key]);
    }
    if (key === 'separator') {
      separator = String(options[key]);
    }
    if (typeof separator === 'undefined') {
      separator = '+';
    }
    if (key === 'addition') {
      addition = String(options[key]);
    }
    if (key === 'additionRepeatTimes') {
      additionRepeatTimes = Number(options[key]);
    }
    if (key === 'additionSeparator') {
      additionSeparator = options[key];
    }
    if (typeof additionSeparator === 'undefined') {
      additionSeparator = '|';
    }
  }
  console.log(separator)
  if (typeof repeatTimes === "undefined") {
    str1 = str + addition;
  } else if (typeof additionRepeatTimes === "undefined") {
    for (let i = 0; i < 1; i++) {
      massaddition.push(addition);
    }
    straddition = massaddition.join(`${additionSeparator}`)
    for (let i = 0; i < repeatTimes; i++) {
      mass.push(str + straddition)
    }
    str1 = mass.join(`${separator}`)
  } else {
    for (let i = 0; i < additionRepeatTimes; i++) {
      massaddition.push(addition);
    }
    straddition = massaddition.join(`${additionSeparator}`)
    for (let i = 0; i < repeatTimes; i++) {
      mass.push(str + straddition)
    }
    str1 = mass.join(`${separator}`)
  }

  return str1;
};
  
