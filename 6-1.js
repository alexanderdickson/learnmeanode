module.exports = function(dir, extensionFilter, callback) {
	var fs = require("fs");

	var extensionFilter = "." + extensionFilter;

	fs.readdir(dir, function(error, data) {

		if (error) {
			return callback(error);
		}

	    var valid = data.filter(function(file) { 
			return file.substr(-extensionFilter.length) == extensionFilter; });

	    callback(null, valid);

	});

};

