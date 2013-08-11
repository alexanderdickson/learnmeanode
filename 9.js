var http = require("http");

var urls = process.argv.slice(2, 5);
var responses = [];

urls.forEach(function(url, index) {
	http.get(url, function(request) {
		request.setEncoding("UTF-8");
		var allData = "";
		request.on("data", function(data) {
			allData += data;
		});
		request.on("end", function() {
			responses[index] = allData;

			if (responses.length == urls.length) {
				console.log(responses.join("\n"));
			}
		});
	});
});

