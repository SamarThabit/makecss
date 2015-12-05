module.exports = function (grunt, data) {

	return {
		png: {
			src: '<%= _PATH.src_images_png_sprite %>/<%= _FILE.images_png %>',
			retinaSrcFilter: '<%= _PATH.src_images_png_sprite %>/<%= _FILE.images_png_retina %>',
			dest: '<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_png %>',
			retinaDest: '<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_png_retina %>',
			destCss: '<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_png %>',
			padding: 10,
			algorithm: 'left-right',
			cssTemplate: '<%= _PATH.patterns %>/<%= _FILE.ptn_sprite_png %>'
		},
		jpg: {
			src: '<%= _PATH.src_images_jpg_sprite %>/<%= _FILE.images_jpg %>',
			retinaSrcFilter: '<%= _PATH.images_jpg_sprite %>/<%= _FILE.images_jpg_retina %>',
			dest: '<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_jpg %>',
			retinaDest: '<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_jpg_retina %>',
			destCss: '<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_jpg %>',
			padding: 10,
			algorithm: 'left-right',
			cssTemplate: '<%= _PATH.patterns %>/<%= _FILE.ptn_sprite_jpg %>'
		},
		gif: {
			src: '<%= _PATH.src_images_gif_sprite %>/<%= _FILE.images_gif %>',
			retinaSrcFilter: '<%= _PATH.src_images_gif_sprite %>/<%= _FILE.images_gif_retina %>',
			dest: '<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_gif %>',
			retinaDest: '<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_gif_retina %>',
			destCss: '<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_gif %>',
			padding: 10,
			algorithm: 'left-right',
			cssTemplate: '<%= _PATH.patterns %>/<%= _FILE.ptn_sprite_gif %>'
		}
	}

};
