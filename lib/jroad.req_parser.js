/*

	This file is a part of jroad project.

	Copyright (C) 2013 Thanh D. Dang <thanhdd.it@gmail.com>

	jroad is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	jroad is distributed in the hope that it will be useful, but
	WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/


var fs = require('fs');
var querystring = require('querystring');
var url = require('url');

function isJSON(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

module.exports = function (req, callback) {
    var content_type = req.headers.accept.split(';')[0];
    if (req.headers['content-type'])
        content_type = req.headers['content-type'];
    
	var url_parts = url.parse(req.url, true);
	var url_pathname = url_parts.pathname;

	var url_arr = url_pathname.split('.');
	var ext = "";
	if (url_arr)
		ext = url_arr[url_arr.length - 1];

	var url_path = url_pathname.split('/');
	var len = url_path.length;
	if (url_path[url_path.length - 1] == "")
		len = len - 1;
	
	if (req.url == '/favicon.ico') {
		var jroad_info = {
			data_type: "favicon",
			file_name: "favicon.ico",
			content_type: content_type
		};
		callback(jroad_info);
	} else if (ext == "js") {
		var jroad_info = {
			data_type: "asset",
			asset_type: "javascript",
			file_name: url_path[len - 1],
			url_path: req.url,
			content_type: content_type
		};
		callback(jroad_info);
	} else if (ext == "css") {
		var jroad_info = {
			data_type: "asset",
			asset_type: "stylesheet",
			file_name: url_path[len - 1],
			url_path: req.url,
			content_type: content_type
		};
		callback(jroad_info);
	} else if (ext == "png" || ext == "jpg" || ext == "gif") {
		var jroad_info = {
			data_type: "asset",
			asset_type: "image",
			file_name: url_path[len - 1],
			url_path: req.url,
			content_type: content_type
		};
		callback(jroad_info);
	} else {
		if (req.method == "POST") {
			var postData = '';
			req.on('data', function(chunk) {
				postData += chunk;
			});
			req.on('end', function() {
				if (isJSON(postData))
					var value = JSON.parse(postData);
				else
					var value = querystring.parse(postData);

				if (value._method == "delete") {
					var jroad_info = {
						data_type: "view",
						url_path: url_pathname,
						_method: value._method,
						method: "DELETE",
						content_type: content_type
					};
				} else if (value._method == "put") {
					var jroad_info = {
						data_type: "view",
						url_path: url_pathname,
						data: value,
						_method: value._method,
						method: "PUT",
						content_type: content_type
					};
				} else {
					var jroad_info = {
						data_type: "view",
						url_path: url_pathname,
						data: value,
						method: "POST",
						content_type: content_type
					};
					if (value._method)
						jroad_info._method = value._method;
				}
				callback(jroad_info);
			});
		} else if (req.method == "GET") {
			var jroad_info = {
				data_type: "view",
				url_path: url_pathname,
				method: "GET",
				content_type: content_type
			};
			callback(jroad_info);
		} else if (req.method == "PUT") {
			var postData = '';
			req.on('data', function(chunk) {
				postData += chunk;
			});
			req.on('end', function() {
				if (isJSON(postData))
					var value = JSON.parse(postData);
				else
					var value = querystring.parse(postData);

				var jroad_info = {
					data_type: "view",
					url_path: url_pathname,
					data: value,
					method: "PUT",
					content_type: content_type
				};
				callback(jroad_info);
			});
		} else if (req.method == "DELETE") {
			var jroad_info = {
				data_type: "view",
				url_path: url_pathname,
				method: "DELETE",
				content_type: content_type
			};
			callback(jroad_info);
		}
	}
}
