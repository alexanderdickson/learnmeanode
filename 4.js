var arg = process.argv[2];
var fs = require("fs");

var contents = fs.readFile(arg, "UTF-8", function(err, data) {
      console.log(data.split("\n").length); 
});


