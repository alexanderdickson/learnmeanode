var http = require("http");
var url = require("url");
var fs = require("fs");
var arg = process.argv[2];

var server = http.createServer(function(req, res) {

	if (req.method == "GET") {
		var urlParts = url.parse(req.url, true);
		var iso = urlParts.query.iso;
		var path = urlParts.pathname; 

		res.writeHead(200, { 'Content-Type': 'application/json' });

		var jsonResponse = {};
		var date = new Date(iso);


		if (path == "/api/parsetime") {
			
			jsonResponse.hour = date.getHours()
			jsonResponse.minute = date.getMinutes()

			jsonResponse.second = date.getSeconds()


		} else if (path == "/api/unixtime") {

			jsonResponse.unixtime = (date.getTime());
		}

		res.end(JSON.stringify(jsonResponse))

	}

	return res.end("");


});

server.listen(8000);