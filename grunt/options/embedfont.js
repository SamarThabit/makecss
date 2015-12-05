module.exports = function (grunt, data) {

	return {
		embed: {
			options: {
				fontPath: '<%= _PATH.pub_fonts_embed %>',
				stylePath: '<%= _PATH.pub_styles %>',
				relPath: '../<%= _DIR.fonts %>/<%= _DIR.embed %>',
				output: 'css',
				engine: 'node'
			},
			fonts: data.SETUP.fonts.embed
		}
	}

};
