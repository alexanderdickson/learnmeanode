var http = require("http");

var url = process.argv[2];

http.get(url, function(request) {
	request.setEncoding("UTF-8");
	var allData = "";
	request.on("data", function(data) {
		allData += data;
	});
	request.on("end", function() {
		console.log(allData.length + "\n" + allData);
	});
});

