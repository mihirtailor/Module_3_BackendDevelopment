const path = require("node:path");
const os = require("node:os");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.dirname(__filename));

console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log("OS Version: " + os.version());
console.log("Total Memory: " + os.totalmem);
console.log("Machine: " + os.machine);
console.log("OS Type: " + os.type);
