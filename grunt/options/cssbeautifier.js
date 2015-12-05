module.exports = function (grunt, data) {

	return {
		files: ['<%= _PATH.pub_styles %>/<%= _FILE.styles %>', '<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl %>'],
		options: {
			indent: '   ',
			openbrace: 'end-of-line',
			autosemicolon: true
		}
	}

};
