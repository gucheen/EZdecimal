/*
* EZdecimal
* easy decimal control
* version 0.1.0
* author: guchengf@gmail.com
*/

declare var module: any;

interface EZdecimalFunc {
  (originalNumber: number, digits: number): number;
}

var EZdecimal: EZdecimalFunc;

EZdecimal = function(originalNumber: number, digits: number) {
  if (typeof originalNumber !== 'number') {
    return NaN;
  }
  
  if (typeof digits !== 'number' && typeof digits !== 'undefined') {
    return NaN;
  }
  
  digits = digits || 0;

  var handledNumber: number;

  var decimalArray: string[] = originalNumber.toString().split('.');

  if (decimalArray.length === 2 && decimalArray[1].length > digits) {
    var pow: number = Math.pow(10, digits);
    handledNumber = +(Math.round(originalNumber * pow) / pow);
  } else {
    handledNumber = originalNumber;
  }

  return handledNumber;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
  module.exports = EZdecimal;