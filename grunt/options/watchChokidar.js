module.exports = function (grunt, data) {

	return {
		options: {
			livereload: true
		},
		setups: {
			files: ['<%= _PATH.setup %>/<%= _FILE.setup %>'],
			tasks: [
				'json_generator:bowerrc',
				'json_generator:bower',
				'shell:bowerRemove',
				'shell:bowerCacheClean',
				'shell:bowerUpdate',
				'less:vendors',
				'less:vendorsRTL',
				'concat:vendors',
				'googlefonts',
				'embedfont'
			]
		},
		styles: {
			files: ['<%= _PATH.src_styles %>/<%= _FILE.styles_less %>', '<%= _PATH.src_styles %>/**/<%= _FILE.styles_less %>'],
			tasks: ['less:custom', 'less:customRTL']
		},
		sprites: {
			files: ['<%= _PATH.src_images %>/**/<%= _DIR.sprite %>/<%= _FILE.images_raster %>', '!<%= _PATH.src_images_svg_sprite %>/**'],
			tasks: ['sprite']
		},
		svgsprites: {
			files: ['<%= _PATH.src_images_svg_sprite %>/<%= _FILE.images_svg %>'],
			tasks: ['svg_sprite']
		},
		images: {
			files: ['<%= _PATH.src_images %>/**/<%= _FILE.images_all %>', '!<%= _PATH.src_images %>/**/<%= _DIR.sprite %>/**'],
			tasks: ['newer:copy:images']
		},
		scripts: {
			files: ['<%= _PATH.src_scripts %>/<%= _FILE.scripts_js %>', '<%= _PATH.src_scripts %>/**/<%= _FILE.scripts_js %>'],
			tasks: ['concat:custom']
		},
		templates: {
			files: ['<%= _PATH.templates %>/<%= _FILE.templates_all %>', '<%= _PATH.templates %>/**/<%= _FILE.templates_all %>']
		}
	}

};
