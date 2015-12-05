module.exports = function (grunt, data) {

	return {
		all: {
			src: [
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_vendors %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_google %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_embed %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_gif %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_jpg %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_png %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_svg %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_custom %>'
			],
			dest: '<%= _PATH.pub_styles %>/<%= _FILE.styles %>'
		},
		rtl: {
			src: [
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_vendors_rtl %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_google %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_embed %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_gif %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_jpg %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_png %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_svg %>',
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_custom_rtl %>'
			],
			dest: '<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl %>'
		}
	}

};
