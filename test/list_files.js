var jspec = require('jspec');
var jroad = require('../lib/jroad');
var root_app = process.cwd();

it("List all file in lib directory", function() {
	var array1 = jroad.list_files(root_app + "/lib");
	var array2 = [
		"f " + root_app + "/lib/jroad.asset_path.js",
		"f " + root_app + "/lib/jroad.favicon.js",
		"f " + root_app + "/lib/jroad.js",
		"f " + root_app + "/lib/jroad.list_files.js",
		"f " + root_app + "/lib/jroad.req_parser.js",
		"d " + root_app + "/lib/public",
		"f " + root_app + "/lib/public/favicon.ico"
	];
	jspec.object_equals(JSON.stringify(array1), JSON.stringify(array2));
})
