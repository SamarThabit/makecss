module.exports = function (grunt, data) {

	return {
		strict: {
			options: {
				import: 2
			},
			src: ['<%= _PATH.pub_styles %>/<%= _FILE.styles %>', '<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl %>']
		},
		lax: {
			options: {
				csslintrc: '<%= _PATH.patterns %>/<%= _FILE.ptn_csslint %>'
			},
			src: ['<%= _PATH.pub_styles %>/<%= _FILE.styles %>', '<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl %>']
		}
	}

};