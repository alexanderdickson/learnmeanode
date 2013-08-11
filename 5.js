var fs = require("fs");

var dir = process.argv[2];
var extensionFilter = "." + process.argv[3];

fs.readdir(dir, function(error, data) {

    var valid = data.filter(function(file) { 
		return file.substr(-extensionFilter.length) == extensionFilter; });

    valid.forEach(function(a) { console.log(a) });;
});

