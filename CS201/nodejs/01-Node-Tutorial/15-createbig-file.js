const { writerFileSync, writeFileSync } = require("fs");

writeFileSync("./content/big.txt", "", { flag: "w" });
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `This is line ${i}\n`, { flag: "a" });
}
