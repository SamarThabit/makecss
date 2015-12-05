module.exports = function (grunt, data) {

	return {
		build: {
			expand: true,
			cwd: '<%= _PATH.src_images_svg_sprite %>',
			src: ['<%= _FILE.images_svg %>'],
			dest: '<%= _PATH.pub_images %>',
			options: {
				shape: {
					dimension: {
						maxWidth: 32,
						maxHeight: 32
					}
				},
				mode: {
					symbol: {
						dest: '<%= _DIR.sprite %>',
						sprite: '<%= _FILE.images_sprite_svg %>',
						bust: false,
						layout: 'horizontal',
						render: {
							css: {
								template: '<%= _PATH.patterns %>/<%= _FILE.ptn_sprite_svg %>',
								dest: '../../<%= _DIR.css %>/<%= _FILE.styles_sprite_svg %>'
							}
						}
					}
				},
				svg: {
					xmlDeclaration: false,
					doctypeDeclaration: false,
					namespaceIDs: false,
					dimensionAttributes: false,
					rootAttributes: {
						class: 'hide'
					}
				}
			}
		}
	}

};
