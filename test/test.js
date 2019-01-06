'use strict';
var assert = require('assert');

describe('getAvergeAge', function () {
  let John = { name: 'John', age: 25 };
  let Pete = { name: 'Pete', age: 30 };
  let Mary = { name: 'Mary', age: 28 };
  let arr = [John, Pete, Mary];

  it('get Averge Age arr', function () {
    assert.strictEqual(getAvergeAge(arr), 83);
  });
});

function getAvergeAge (arr) {
  return arr.map(value => value.age).reduce((sum, current, index) => sum + current, 0);
}
