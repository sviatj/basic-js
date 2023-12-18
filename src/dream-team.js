const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res = '';
  let member;
  if (Array.isArray(members)) {
  let newArr = members.filter((item) => typeof item === 'string')
  for (let i = 0; i < newArr.length; i++) {
   member = newArr[i].replaceAll(/\s/g, '')
   res += member[0].toUpperCase();
  }
  let res2 = res.split('').sort().join('')
  return res2;
}
return false;
}

module.exports = {
  createDreamTeam
};
