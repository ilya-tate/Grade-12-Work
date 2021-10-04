const number = require("./01-intro");
const logFunc = require("./03-moduleFunctions");
const { kids, num2, num3 } = require("./04-globals");
const freeMem = require("./05-os-module");

const { num } = number;

// APIKEY is a local variable
// Not visible from the base file
const APIKEY = "htsfalskdjklsfa";

logFunc(freeMem);
logFunc(number.num + " logging " + num3);
logFunc(number.num + num2);
