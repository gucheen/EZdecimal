var EZdecimal = require('./EZdecimal');
var assert = require('assert');

describe('EZdecimal', function () {
  describe('#EZdecimal-type', function () {
    it('EZdecimal should be a function', function () {
      assert.equal(typeof EZdecimal, 'function');
    });
  });
  describe('#EZdecimal()', function () {
    var tests = [
      { args: 'abc', digits: 2, expected: NaN },
      { args: 1, digits: 2, expected: 1 },
      { args: 1.1, digits: 2, expected: 1.1 },
      { args: 1.11, digits: 2, expected: 1.11 },
      { args: 1.111, digits: 2, expected: 1.11 },
      { args: 1.555, digits: 2, expected: 1.56 },
      { args: 1.555, digits: 3, expected: 1.555 },
      { args: 1.111, expected: 1 },
      { args: 1.555, expected: 2 }
    ];

    tests.forEach(function (test) {
      var result = EZdecimal(test.args, test.digits);
      it('should return ' + test.expected + ' when calling EZdecimal() with ' + [test.args, test.digits], function () {
        if (isNaN(test.expected)) {
          isNaN(result);
        } else {
          assert.equal(result, test.expected);
        }
      });
    });
  });
});