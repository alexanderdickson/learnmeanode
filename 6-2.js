var filter = require("./6-1.js");

var results = filter(process.argv[2], process.argv[3], function(error, files) {
	if (error) {
		return console.log("Problem occurred.");
	}

	console.log(files.join("\n"));
});