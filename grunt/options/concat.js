module.exports = function (grunt, data) {

	return {
		vendors: {
			src: [
				'<%= _PATH.src_vendors_modernizr %>/<%= _FILE.scripts_modernizr %>',
				data.SETUP.vendors.scripts
			],
			dest: '<%= _PATH.pub_scripts %>/<%= _FILE.scripts_vendors %>'
		},
		custom: {
			src: [
				'<%= _PATH.src_scripts_libs %>/**/<%= _FILE.scripts_js %>',
				'<%= _PATH.src_scripts %>/<%= _FILE.scripts_global %>'
			],
			dest: '<%= _PATH.pub_scripts %>/<%= _FILE.scripts_custom %>'
		},
		all: {
			src: [
				'<%= _PATH.pub_scripts %>/<%= _FILE.scripts_vendors %>',
				'<%= _PATH.pub_scripts %>/<%= _FILE.scripts_custom %>'
			],
			dest: '<%= _PATH.pub_scripts %>/<%= _FILE.scripts %>'
		}
	}

};
