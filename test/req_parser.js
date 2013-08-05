var jspec = require('jspec');

it("Get favicon.ico", function(done) {
	jspec.visit("/favicon.ico", function(content) {
		var jroad_info = {
			"data_type": "favicon",
			"file_name": "favicon.ico",
			"content_type": "image/x-icon"
		};
		jspec.object_equals(content, JSON.stringify(jroad_info));
		done();
	})
})
