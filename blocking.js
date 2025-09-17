const fs = require('fs');

const data = fs.readFileSync('example.txt', 'utf8');
console.log("Blocking Read:", data);
console.log("This line runs after file is completely read.");
