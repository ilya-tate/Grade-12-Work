const fs = require("fs");
const input = fs.readFileSync("./problems-input.txt", "utf-8");

const problemOne = () => {
  const re = /@[a-zA-Z]{1,18}/g;
  let result = input.match(re);
  let resultChars = [];
  // Adds all chars to array resultChars
  for (str of result) {
    str = str.split("");
    for (char of str) {
      if (char !== "@") resultChars.push(char);
    }
  }

  let newResult = [];
  // Loops through every 18 chars splicing resultChars, joins and adds to newResult
  while (resultChars.length) {
    let location = [];
    for (let i = 0; i <= 17; i++) {
      location.push(resultChars.splice(0, 1));
    }
    newResult.push(location.join(""));
  }
  return newResult;
};

const problemTwo = (str) => {
  let re;
  let sum = 0;
  let totalDigits = 0;
  // Add sum of digits and number of digits
  for (char of str.split("")) {
    if (!isNaN(char)) {
      sum += +char;
      totalDigits++;
    }
  }

  let result;
  switch (true) {
    case sum <= 255 && totalDigits === 3:
      if (!str.endsWith("°")) return null;
      re = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}°/g;
      const digits = re.exec(str);
      for (let i = 1; i <= 3; i++) {
        result += digits[i];
      }
      return result + "°";

    case sum <= 63 && totalDigits === 2:
      if (!str.endsWith("'") && !/[a-zA-Z]/.test(str.slice(-1))) return null;
      re = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}'?/g;
      const digits = re.exec(str);
      for (let i = 1; i <= 2; i++) {
        result += digits[i];
      }
      if (!str.endsWith("'")) return result;
      return result;

    case sum <= 7 && totalDigits === 1:
      const directions = ["N", "W", "E", "S"];
      const finalChar = str.slice(-1);
      if (!directions.includes(finalChar) || !str.split("").includes('"')) {
        return null;
      }
      re = /(\d)[a-zA-Z]{3,}\”[a-zA-Z]*[NWES]/g;
      const digit = re.exec(str);
      return digit[1] + '"' + finalChar;

    default:
      return null;
  }
};
console.log(problemTwo("0spy1kids3fytu°"));

const problemThree = (str) => {
  const re = /\[[a-zA-Z]+\]?^/g;
  return str.match(re);
};
