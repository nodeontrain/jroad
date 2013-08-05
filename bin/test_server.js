var http = require('http');
var jroad = require('../lib/jroad');

http.createServer(function (req, res) {
	var obj = jroad.req_parser(req);
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');
