var http = require("http");

var server = http.createServer(function(req, res) {

	if (req.method != "POST") {
		return res.end("");
	}

	req.setEncoding("UTF-8");

	var body = '';
	req.on('data', function(d) {

		body += d.toUpperCase();
	})
	req.once("end", function() {
		res.end(body);
	});

});

server.listen(8000);