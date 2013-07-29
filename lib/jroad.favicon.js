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


var path = require('path');
var fs = require('fs');

module.exports = function (root_path, favicon_path) {
	var favicon_path_default = path.join(path.dirname(fs.realpathSync(__filename)), '../') + "public/favicon.ico" ;

	if (typeof favicon_path === "undefined")
		var favicon_path = "public/favicon.ico";

	if (fs.existsSync(root_path + "/" + favicon_path))
		var full_path = root_path + "/" + favicon_path;
	else
		var full_path = favicon_path_default;

	return full_path;
}
