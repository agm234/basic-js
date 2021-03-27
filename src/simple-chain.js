const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mass: [],

  getLength() {
    return this.mass.length;

  },
  addLink(value) {
    this.mass.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.mass.length < position || position < 1) {
      this.mass = [];
      throw Error();
    }
    this.mass.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.mass.reverse();
    return this;
  },
  finishChain() {
    let str = this.mass.join("~~");
    this.mass = [];
    return str;
  }
};

module.exports = chainMaker;
