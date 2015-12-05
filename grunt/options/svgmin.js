module.exports = function (grunt, data) {

	return {
		dynamic: {
			options: {
				full: true,
				plugins: [
					{cleanupIDs: false}
				]
			},
			files: [{
				expand: true,
				cwd: '<%= _PATH.pub_images %>/',
				src: '**/<%= _FILE.images_svg %>',
				dest: '<%= _PATH.pub_images %>/'
			}]
		}
	}

};
