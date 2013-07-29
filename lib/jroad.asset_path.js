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

module.exports = function (asset_info, root_path, assets_path) {
	if (typeof assets_path === "undefined") {
		var js_path = "app/assets/javascripts/";
		var css_path = "app/assets/stylesheets/";
		var img_path = "app/assets/images/";
	} else {
		if (typeof assets_path["js_path"] === "undefined")
			var js_path = "app/assets/javascripts/";
		else
			var js_path = assets_path.js_path;
			
		if (typeof assets_path["css_path"] === "undefined")
			var css_path = "app/assets/stylesheets/";
		else
			var css_path = assets_path.css_path;

		if (typeof assets_path["img_path"] === "undefined")
			var img_path = "app/assets/images/";
		else
			var img_path = assets_path.img_path;
	}

	if (asset_info.asset_type == "javascript") {
		if (fs.existsSync(root_path + "/" + js_path + asset_info.file_name))
			var full_path = root_path + "/" + js_path + asset_info.file_name;
		else
			var full_path = root_path + asset_info.url_path;
	} else if (asset_info.asset_type == "stylesheet") {
		if (fs.existsSync(root_path + "/" + css_path + asset_info.file_name))
			var full_path = root_path + "/" + css_path + asset_info.file_name;
		else
			var full_path = root_path + asset_info.url_path;
	} else if (asset_info.asset_type == "image") {
		if (fs.existsSync(root_path + "/" + img_path + asset_info.file_name))
			var full_path = root_path + "/" + img_path + asset_info.file_name;
		else
			var full_path = root_path + asset_info.url_path;
	} 
	
	return full_path;
}
