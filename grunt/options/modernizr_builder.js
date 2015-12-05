module.exports = function (grunt, data) {

	return {
		build: {
			options: {
				config: '<%= _PATH.patterns %>/<%= _FILE.ptn_modernizr %>',
				dest: '<%= _PATH.src_vendors_modernizr %>/<%= _FILE.scripts_modernizr %>'
			}
		}
	}

};
