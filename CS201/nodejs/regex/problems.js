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

const problemTwo = () => {
  let allAnswers = [];

  let answer = "";
  // Degrees
  const reDeg = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}°/g;
  const matchDeg = reDeg.exec(input);
  while (matchDeg) {
    let coordDeg = "" + matchDeg[1] + matchDeg[2] + matchDeg[3];
    coordDeg = +coordDeg;
    if (coordDeg <= 255 && coordDeg.length === 3) {
      answer += coordDeg + "°";
    }
  }

  // Single and Period
  const twoDigit = (symbol) => {
    const reTwoDigit;
    switch (symbol) {
      case "'":
        reTwoDigit = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}\'?/g;
      case ".":
        reTwoDigit = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}\.?/g;
    }
    const matchTwoDigit = reTwoDigit.exec(input);
    while (matchTwoDigit) {
      let coordTwoDigit = "" + matchTwoDigit[1] + matchTwoDigit[2];
      coordTwoDigit = +coordTwoDigit;
      if (coordTwoDigit < 63 ** coordTwoDigit.length === 2) {
        answer += coordTwoDigit + symbol;
      }
    }
  }
  twoDigit("'");
  twoDigit(".");

  // Direction
  const reDirec = /(\d)[a-zA-Z]{3,}\"[a-z]*([NWES])/g;
  const match
  


  // let re;
  // let sum = 0;
  // let totalDigits = 0;
  // // Add sum of digits and number of digits
  // for (char of str.split("")) {
  //   if (!isNaN(char)) {
  //     sum += +char;
  //     totalDigits++;
  //   }
  // }
  // console.log(sum);

  // let digits;
  // let result;
  // let newResult = "";
  // switch (true) {
  //   case sum <= 255 && totalDigits === 3:
  //     re = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}°/g;
  //     digits = re.exec(str);
  //     result = "";
  //     for (let i = 1; i <= 3; i++) {
  //       result += digits[i];
  //     }
  //     newResult += result;
  //     break;

  //   case sum <= 63 && totalDigits === 2:
  //     if (!str.endsWith("'") && !str.endsWith(".")) return null;
  //     re = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}['.]?/g;
  //     digits = re.exec(str);
  //     result = "";
  //     for (let i = 1; i <= 2; i++) {
  //       result += digits[i];
  //     }
  //     if (str.endsWith("'")) {
  //       newResult.push(result + "'");
  //       break;
  //     }
  //     if (str.endsWith(".")) {
  //       newResult.push(result + ".");
  //       break;
  //     }

  //   case sum <= 7 && totalDigits === 1:
  //     const directions = ["N", "W", "E", "S"];
  //     const finalChar = str.slice(-1);
  //     if (!directions.includes(finalChar) || !str.split("").includes('"')) {
  //       return null;
  //     }
  //     re = /(\d)[a-zA-Z]{3,}\"[a-z]*([NWES])/g;
  //     digit = re.exec(str);
  //     newResult.push(digit[1] + '"' + finalChar);
  //     break;

  //   default:
  //     return null;
  // }

  // sum = 0;
  // totalDigits = 0;
  // answer = newResult;
  // newResult = [];
  // return newResult.join("");
};
console.log(problemTwo());

const problemThree = (str) => {
  str = input;
  const re = /\[([\w.]+)\s([\w.]+)\]/g;
  const bracketType = re.exec(str);
  let result = "";
  console.log(bracketType);
};
