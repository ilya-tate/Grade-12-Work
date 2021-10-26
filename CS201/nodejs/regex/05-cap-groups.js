const str = "test1 test_01.js coding.css script.js testing.coding";
const re = /(\w+)\.(js|css|html)/g;
let match = re.exec(str);
// console.log(match);

// Loop for the .exec method
while (match) {
  console.log(`Name: ${match[1]} \nExtension: ${match[2]}`);
  match = re.exec(str);
}
