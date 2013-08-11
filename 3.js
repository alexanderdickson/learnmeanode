var arg = process.argv[2];
var fs = require("fs");

var contents = fs.readFileSync(arg);

console.log(contents.toString().split("\n").length);

