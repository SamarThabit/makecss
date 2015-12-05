module.exports = function (grunt, data) {

	return {
		build: {
			files: {
				'<%= _PATH.pub_scripts %>/<%= _FILE.scripts_min %>': ['<%= _PATH.pub_scripts %>/<%= _FILE.scripts %>']
			}
		}
	}

};
