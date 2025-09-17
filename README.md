# node-js-assignment-3
Third Node.js practical: Modules, File System, and Asynchronous Programming
📌 Student Info

Name: Dipanshu

Student ID: GF202345540
Task 1: Modules

Created math.js file:
function add(a, b) {
    return a + b;
    }
function subtract(a, b) {
    return a - b;
}
module.exports = { add, subtract };

Created app.js file:

const math = require('./math');
console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(10, 5));

Run with: node app.js

Task 2: File System (Blocking vs Non-Blocking)

Blocking File Read (blocking.js)

const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8'); 
console.log("Blocking Read:", data);
console.log("This line runs after file is completely read.");

Non-Blocking File Read (nonblocking.js)
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Non-Blocking Read:", data);
});
console.log("This line runs before file is completely read.");

Run with: node blocking.js  node nonblocking.js


Task 3: Asynchronous Programming
 Created Asynchronous.js file:
 function fetchUserData() {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data received");
    }, 2000);
}
fetchUserData();

Run with: node async.js
