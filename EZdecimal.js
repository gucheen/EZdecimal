/*
* EZdecimal
* easy decimal control
* version 0.1.0
* author: guchengf@gmail.com
*/
var EZdecimal;
EZdecimal = function (originalNumber, digits) {
    if (typeof originalNumber !== 'number') {
        return NaN;
    }
    if (typeof digits !== 'number' && typeof digits !== 'undefined') {
        return NaN;
    }
    digits = digits || 0;
    var handledNumber;
    var decimalArray = originalNumber.toString().split('.');
    if (decimalArray.length === 2 && decimalArray[1].length > digits) {
        var pow = Math.pow(10, digits);
        handledNumber = +(Math.round(originalNumber * pow) / pow);
    }
    else {
        handledNumber = originalNumber;
    }
    return handledNumber;
};
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = EZdecimal;
