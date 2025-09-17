const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Non-Blocking Read:", data);
});
console.log("This line runs before file is completely read.");
