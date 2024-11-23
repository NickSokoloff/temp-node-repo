// Modules Videos 14-15
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// require (import) the module
const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavors");

require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
