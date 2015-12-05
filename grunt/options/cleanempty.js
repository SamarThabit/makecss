module.exports = function (grunt, data) {

	return {
		images: {
			src: ['<%= _PATH.pub_images %>/**/<%= _FILE.images_all %>']
		}
	}

};
