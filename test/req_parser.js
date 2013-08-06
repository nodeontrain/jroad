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

it("Root path", function(done) {
	jspec.visit("/", function(content) {
		var jroad_info = {
			"data_type": "view",
			"controller": "root",
			"method": "GET",
			"content_type": "text/html"
		};
		jspec.object_equals(content, JSON.stringify(jroad_info));
		done();
	})
})

it("Get javascript file", function(done) {
	jspec.visit("/application.js", function(content) {
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "javascript",
			"file_name": "application.js",
			"url_path": "/application.js",
			"content_type": "text/javascript"
		};
		jspec.object_equals(content, JSON.stringify(jroad_info));
		done();
	})
})

it("Get stylesheet file", function(done) {
	jspec.visit("/application.css", function(content) {
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "stylesheet",
			"file_name": "application.css",
			"url_path": "/application.css",
			"content_type": "text/css"
		};
		jspec.object_equals(content, JSON.stringify(jroad_info));
		done();
	})
})

it("Get jpg image", function(done) {
	jspec.visit("/image.jpg", function(content) {
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "image",
			"file_name": "image.jpg",
			"url_path": "/image.jpg",
			"content_type": "image/jpeg"
		};
		jspec.object_equals(content, JSON.stringify(jroad_info));
		done();
	})
})

it("Get png image", function(done) {
	jspec.visit("/image.png", function(content) {
		var jroad_info = {
			"data_type": "asset",
			"asset_type": "image",
			"file_name": "image.png",
			"url_path": "/image.png",
			"content_type": "image/png"
		};
		jspec.object_equals(content, JSON.stringify(jroad_info));
		done();
	})
})
