var nr = require('./numberReverse.js').numberReverse;
var ip = require('./isPalindrome.js').isPalindrome;
var ao = require('./alphabeticalOrder.js').alphabeticalOrder;
var uc = require('./upperCase.js').upperCase;

console.log('1. ' + nr(123));
console.log('2. ' + ip('ababababababa'));
console.log('3. ' + ao('aklsjdvx,12309klaus,,maklsd'));
console.log('4. ' + uc('hello world dog cat'));