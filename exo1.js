const scanf = require('scanf');

console.log('Type a first sentence');
let sentenceA = scanf('%s');
 
console.log('Type a second sentence');
let sentenceB = scanf('%s');

let result = (sentenceA.length * 2 >= sentenceB.length) ? 'est' : 'n\'est pas';

console.log('La phrase "%s" %s 2x plus grande que la phrase "%s"', sentenceA, result, sentenceB);
