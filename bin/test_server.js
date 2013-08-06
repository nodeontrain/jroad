var http = require('http');
var jroad = require('../lib/jroad');

http.createServer(function (req, res) {
	var root_app = process.cwd();
	var obj = {}
	var req_parser = jroad.req_parser(req);
	obj.req_parser = req_parser;
	if (req_parser.data_type == "asset") {
		var asset_path = jroad.asset_path(req_parser, root_app);
		obj.asset_path = asset_path;
	} else if (req_parser.data_type == "favicon") {
		var favicon_path = jroad.favicon(root_app);
		obj.favicon_path = favicon_path;
	}
	
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(obj));
	
}).listen(1337, '127.0.0.1');
