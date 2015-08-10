var nr = require('./numberReverse.js').numberReverse;
var ip = require('./isPalindrome.js').isPalindrome;
var ao = require('./alphabeticalOrder.js').alphabeticalOrder;
var uc = require('./upperCase.js').upperCase;
var lw = require('./longestWord.js').longestWord;
var ta = require('./triangleArea.js').triangleArea;
var ri = require('./randomInteger.js').randomInteger;
var hv = require('./highestValue.js').highestValue;
var hl = require('./highLow.js').highLow;

console.log('1. ' + nr(123));
console.log('2. ' + ip('ababababababa'));
console.log('3. ' + ao('aklsjdvx,12309klaus,,maklsd'));
console.log('4. ' + uc('hello world dog cat'));
console.log('5. ' + lw('helloasd dodasdasdsdasdg dodasdasdsdasdg caasdadst'));
console.log('6. ' + ta([4, 13, 15]));
console.log('7. ' + ri(3));
console.log('8. ' + hv([4, 15, 13, 20, 20, 0]));
console.log('9. ' + hl([4, 15, 13, 20, 20]));