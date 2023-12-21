const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if(!(Array.isArray(arr))) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    if (copy[0] === '--discard-prev' || copy[0] === '--double-prev') {
      let result = copy.slice(1);
      return result;
    }
    if (arr[copy.length - 1] === '--double-next'|| copy[copy.length - 1] === '--discard-next') {
      let result = copy.slice(0, -1);
      return result;
    }

    if(copy[i] === '--discard-next') {
      copy[i] = 'null';
      copy[i + 1] = 'null';
      copy[i + 2] = 'null'
      return copy.filter((item) => item !== 'null');
    }
    if(copy[i] === '--double-next' && copy[i + 2] === '--double-prev') {
      copy[i] = copy[i + 1];
      copy[i + 2] = copy[i + 1]
      return copy;
    }
    if(copy[i] === '--double-next' && copy[i + 2] === '--discard-prev') {
      copy[i] = copy[i + 1];
      copy[i + 1] = 'null';
      copy[i + 2] = 'null';
      return copy.filter((item) => item !== 'null');
    }
    if(copy[i] === '--double-next') {
      copy[i] = copy[i + 1];
      return copy;
    }
  }
  return arr;
}

module.exports = {
  transform
};
