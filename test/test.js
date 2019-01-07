'use strict';
var assert = require('assert');

describe('SimpleAdding', function () {
  it('Sum of previous numbers', function () {
    assert.strictEqual(SimpleAdding('12'), 78);
  });
});

function SimpleAdding (num) {
  let sum = 0;
  let num1 = Number(num);
  for (let i = 1; i <= num1; i++) {
    sum += i;
  }
  return sum;
}

describe('LetterCapitalize', function () {
  it('LetterCapitalize string hello wotld', function () {
    assert.strictEqual(LetterCapitalize('hello world'), 'Hello World');
  });
});

function LetterCapitalize (str) {
  let arr = str.split(' ');
  let string = arr.map(function (value) {
    let first = value.charAt(0).toUpperCase();
    let word = value.slice(1);
    return first.concat(word);
  });
  return string.join(' ');
}
