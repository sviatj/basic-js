const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   let separator = options.separator;
   let times = options.repeatTimes;
   let addition = options.addition;
   let additionRepeat = options.additionRepeatTimes;
   let additionSeparator = options.additionSeparator;


   if (str === null) {
    str = 'null';
    addition = 'null';
    let strAddition = Array(additionRepeat).fill(addition).join(additionSeparator);
    return Array(times).fill(str+strAddition).join(separator);
   }

   if(typeof str === 'object' && !(options.hasOwnProperty('separator'))) {
    addition = 'STRING_OR_DEFAULT';
    let additionFill = Array(times).fill(addition).join('')
    return Array(times).fill(additionFill).join('+');
   }

   if(!(options.hasOwnProperty('separator'))) {
    separator = '+';
   }

   if(!(options.hasOwnProperty('additionSeparator'))) {
    additionSeparator = '|';
   }

   let strAddition = Array(additionRepeat).fill(addition).join(additionSeparator);
   return Array(times).fill(str+strAddition).join(separator);
}

module.exports = {
  repeater
};
