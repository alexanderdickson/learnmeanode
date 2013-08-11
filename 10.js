var net = require("net");

var poorMansZeroFill = function(num) {
	if (num < 10) {
		num = "0" + num;
	}
	return num;
}

var server = net.createServer(function(socket) {

	var date = new Date;

	var day = [date.getFullYear(), date.getMonth(), date.getDay()].map(poorMansZeroFill).join("-");

	var time = poorMansZeroFill(date.getHours()) + ":" + poorMansZeroFill(date.getMinutes());

	var dateTime = day + " " + time;


	socket.write(dateTime);

	socket.end();
});

server.listen(8000);