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

module.exports = function (req) {
	var urlstr = req.url;
	var urlarr = urlstr.split('/');
	var len = urlarr.length;
	if (urlarr[urlarr.length - 1] == "")
		len = len - 1;

	var urlarr2 = urlstr.split('.');
	if (urlarr2)
		var ext = urlarr2[urlarr2.length - 1];
	
	if (urlstr == '/favicon.ico') {
		var jroad_info = {
			"data_type": "favicon",
			"file_name": "favicon.ico",
			"content_type": "image/x-icon"
		};
	} else if (urlstr == "/") {		
		var jroad_info = {
			"data_type": "view",
			"controller": "root",
			"method": "GET",
			"content_type": "text/html"
		};
	} else if (ext == "js") {
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "javascript",
			"file_name": urlarr[len - 1],
			"url_path": urlstr,
			"content_type": "text/javascript"
		};
	} else if (ext == "css") {
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "stylesheet",
			"file_name": urlarr[len - 1],
			"url_path": urlstr,
			"content_type": "text/css"
		};
	} else if (ext == "png" || ext == "jpg" || ext == "gif") {
		if (ext == "jpg")
			var content_type = 'image/jpeg';
		else
			var content_type = 'image/' + ext;
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "image",
			"file_name": urlarr[len - 1],
			"url_path": urlstr,
			"content_type": content_type
		};
	}

	return jroad_info;
}