const scanf = require('scanf');

console.log('Type a number');
let num = scanf('%d');
let cpt = 0;
for (let i = 1; i < num+1; i++) {
  cpt +=i;
}
console.log('somme de l\'ensemble E[1;%s] = %s', num, cpt);
