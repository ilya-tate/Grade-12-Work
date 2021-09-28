const number = require("./01-intro");
const logFunc = require("./03-moduleFunctions");
const { kids, num1, num2 } = require("./04-globals");
const { num } = number;

// APIKEY is a local variable
// Not visible from the base file
const APIKEY = "htsfalskdjklsfa";

logFunc(number.num + " logging " + num3);
logFunc(number.num + num2);
