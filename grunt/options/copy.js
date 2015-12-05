module.exports = function (grunt, data) {

	return {
		images: {
			expand: true,
			cwd: '<%= _PATH.src_images %>/',
			src: ['**/<%= _FILE.images_all %>', '!**/<%= _DIR.sprite %>/**'],
			dest: '<%= _PATH.pub_images %>/'
		},
		fontsAwesome: (function () {
			if (data.SETUP.vendors.styles.toString().indexOf('fontawesome') > -1) {
				return {
					expand: true,
					cwd: '<%= _PATH.src_vendors %>/fontawesome/fonts/',
					src: ['**/<%= _FILE.fonts_all %>'],
					dest: '<%= _PATH.pub_fonts %>/'
				}
			}
			else {
				return {}
			}
		}()),
		fontsBootstrap: (function () {
			if (data.SETUP.vendors.styles.toString().indexOf('bootstrap') > -1) {
				return {
					expand: true,
					cwd: '<%= _PATH.src_vendors %>/bootstrap/fonts/',
					src: ['**/<%= _FILE.fonts_all %>'],
					dest: '<%= _PATH.pub_fonts %>/'
				}
			}
			else {
				return {}
			}
		}())
	}

};