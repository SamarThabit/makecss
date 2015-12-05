module.exports = function (grunt, data) {

	return {
		dist: {
			files: {
				'<%= _PATH.templates %>/<%= _FILE.templates_home %>': ['<%= _PATH.templates %>/<%= _FILE.templates_dev %>']
			}
		}
	}
};
