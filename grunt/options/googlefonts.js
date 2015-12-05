module.exports = function (grunt, data) {

	return {
		build: {
			options: {
				fontPath: '<%= _PATH.pub_fonts_google %>/',
				httpPath: '../<%= _DIR.fonts %>/<%= _DIR.google %>/',
				cssFile: '<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_google %>',
				formats: {
					eot: true,
					ttf: true,
					woff: true,
					woff2: true,
					svg: true
				},
				fonts: data.SETUP.fonts.google
			}
		}
	}

};
