const { readFileSync, writeFileSync } = require("fs")

console.log("Start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8")

writeFileSync(
  "./content/sync-result.txt",
  `Here is the result: \n${first}, \n${second}`,
  { flag: 'w' }
);

console.log(second);
console.log("Finished");
console.log(first);
