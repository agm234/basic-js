const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw Error();
    }
    let key1 = '';
    let str2 = '';
    let key3 = '';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let key2 = [];
    while (str.length > key1.length) {
      key1 += key;
    }
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        key2.push(' ');
      } else {
        key2.push(key1[j]);
        j += 1;
      }
    }
    for (let i = 0; i < key2.length; i++) {
      key3 += key2[i];
    }
    key1 = key3.slice(0, str.length)
    let n2 = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
        if (str[i].charCodeAt() + key1[i].charCodeAt() - 65 > 90) {
          n2 = 65 + (str[i].charCodeAt() + key1[i].charCodeAt() - 156)
        } else {
          n2 = str[i].charCodeAt() + key1[i].charCodeAt() - 65;
        }
        str2 += String.fromCharCode(n2);
      } else {
        str2 += str[i];
      }
    }
    if (this.type === false) {
      return str2.split('').reverse().join('');
    }
    return str2;
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw Error();
    }
    let key1 = '';
    let str2 = '';
    let key3 = '';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let key2 = [];
    while (str.length > key1.length) {
      key1 += key;
    }
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        key2.push(' ');
      } else {
        key2.push(key1[j]);
        j += 1;
      }
    }
    for (let i = 0; i < key2.length; i++) {
      key3 += key2[i];
    }
    key1 = key3.slice(0, str.length)
    let n2 = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
        if (str[i].charCodeAt() - key1[i].charCodeAt() + 65 < 65) {
          n2 = (str[i].charCodeAt() - key1[i].charCodeAt() + 91)
        } else {
          n2 = str[i].charCodeAt() - key1[i].charCodeAt() + 65;
        }
        str2 += String.fromCharCode(n2);
      } else {
        str2 += str[i];
      }
    }
    if (this.type === false) {
      return str2.split('').reverse().join('');
    }
    return str2;

  }
}

module.exports = VigenereCipheringMachine;
