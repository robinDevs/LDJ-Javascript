const scanf = require('scanf');

console.log('Type a number');
let num = scanf('%d');
let result = num * (num + 1) / 2;
console.log('somme de l\'ensemble E[1;%s] = %s', num, result);
