// OS module - interacting with operating system and server (built in module).

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// up time in seconds (how long the computer is running)
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
