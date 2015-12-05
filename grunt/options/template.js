module.exports = function (grunt, data) {
	return {
		htmlDev: {
			options: {
				data: {
					'system_title': '<%= _SYSTEM.name %>',
					'styles_vendors': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_vendors %>',
					'styles_fonts_google': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_google %>',
					'styles_fonts_embed': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_fonts_embed %>',
					'styles_sprite_gif': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_gif %>',
					'styles_sprite_jpg': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_jpg %>',
					'styles_sprite_png': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_png %>',
					'styles_sprite_svg': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_sprite_svg %>',
					'styles_custom': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_custom %>',
					'styles_min': '../<%= _PATH.pub_styles %>/<%= _FILE.styles_min %>',
					'images_sprite_svg': '../<%= _PATH.pub_images_sprite %>/<%= _FILE.images_sprite_svg %>',
					'scripts_vendors': '../<%= _PATH.pub_scripts %>/<%= _FILE.scripts_vendors %>',
					'scripts_custom': '../<%= _PATH.pub_scripts %>/<%= _FILE.scripts_custom %>',
					'scripts_min': '../<%= _PATH.pub_scripts %>/<%= _FILE.scripts_min %>'
				}
			},
			files: {
				'<%= _PATH.templates %>/<%= _FILE.templates_dev %>': '<%= _PATH.patterns %>/<%= _FILE.ptn_template_dev %>'
			}
		}
	}

};
