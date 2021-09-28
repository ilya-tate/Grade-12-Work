const os = require("os");
const { type, release, totalmem, freemem } = os;

const user = os.userInfo();

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: type(),
  release: release(),
  totalMem: totalmem(),
  freemMeme: freemem()
};

console.log(currentOS);

module.exports.freeMem = os.freemem();
