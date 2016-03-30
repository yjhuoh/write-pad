'use strict';
const leftpad = require('left-pad')

// function for reversing a string
const reverse = str => {
  let o = ''
  for (let i = str.length - 1; i >= 0; o += str[i--]) { }
  return o;
}

module.exports = (str, len, ch) => reverse(leftpad(reverse(String(str)), len, ch));
