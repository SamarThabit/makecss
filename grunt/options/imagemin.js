module.exports = function (grunt, data) {

	return {
		dynamic: {
			options: {
				optimizationLevel: 3
			},
			files: [{
				expand: true,
				cwd: '<%= _PATH.pub_images %>/',
				src: ['**/<%= _FILE.images_raster %>'],
				dest: '<%= _PATH.pub_images %>/'
			}]
		}
	}

};
