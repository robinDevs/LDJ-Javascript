const scanf = require('scanf');
let tab = [];
for (var i = 0; i < 5; i++) {
	console.log(`Type integer #${i+1}`);
	tab.push(scanf('%d'));
}

let max = Math.max(...tab);
let avg = (tab) => tab.reduce((a, b) => a + b) / tab.length;

console.log("Highest element index : " + tab.indexOf(max));
console.log("Average : " + avg(tab));
