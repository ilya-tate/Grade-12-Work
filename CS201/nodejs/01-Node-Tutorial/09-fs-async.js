const { readFile, writeFile } = require("fs");

let first;
console.log("Start");

// Returns a promise with an error or result
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  first = result;
  readFile("./content/seond.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/async-result.txt",
      `Here is the result: \n${first} \n${second}`,
      { flag: 'w' },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("Done with task");
      }
    );
  });
});

console.log(first);
console.log('Starting next task');
console.log(second);
