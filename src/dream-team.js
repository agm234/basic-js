const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
if (!Array.isArray(members)) {
    return false;
  }
  let name = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      members[i] = members[i].trim();
      name = name + members[i][0].toUpperCase();
    }
  }
  name = name.split("").sort().join("");
  return name;
};
