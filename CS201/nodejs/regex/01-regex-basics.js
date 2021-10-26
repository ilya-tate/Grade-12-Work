const str = "test1 test_01.js coding.css script.js testing.coding";
// const re = /test/; // Local
const re = /test/g; // Global

console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));
console.log(str.replace(re, "scriptin"));
