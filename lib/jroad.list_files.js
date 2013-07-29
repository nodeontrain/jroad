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
var info = "";

function getfiles_from_dir (path) {
	var names = fs.readdirSync(path);
	for	(var i = 0; i < names.length; i++) {
		var full_path = path + '/' + names[i];
		if (fs.statSync(full_path).isDirectory()) {
			info = info + "d " + full_path + "\n";
			getfiles_from_dir (full_path);
		} else {
			info = info + "f " + full_path + "\n";
		}
	}
}

module.exports = function (root_dir) {
	getfiles_from_dir (root_dir);
	var info_array = info.split("\n");
	info_array.splice(info_array.length - 1);
	return info_array;
}
