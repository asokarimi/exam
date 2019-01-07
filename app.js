'use strict';

function SimpleAdding (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(SimpleAdding('140'));

function LetterCapitalize (str) {
  let arr = str.split(' ');
  let string = arr.map(function (value) {
    let first = value.charAt(0).toUpperCase();
    let word = value.slice(1);
    return first.concat(word);
  });
  return string.join(' ');
}
console.log(LetterCapitalize('hello world it'));
