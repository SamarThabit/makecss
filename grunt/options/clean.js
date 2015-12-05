module.exports = function (grunt, data) {

	return {
		css: [
			'<%= _PATH.pub_styles %>/**/<%= _FILE.styles_css %>',
			'!<%= _PATH.pub_styles %>/<%= _FILE.styles %>',
			'!<%= _PATH.pub_styles %>/<%= _FILE.styles_min %>',
			'!<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl %>',
			'!<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl_min %>'
		],
		js: [
			'<%= _PATH.pub_scripts %>/**/<%= _FILE.scripts_js %>',
			'!<%= _PATH.pub_scripts %>/<%= _FILE.scripts %>',
			'!<%= _PATH.pub_scripts %>/<%= _FILE.scripts_min %>'
		]
	}

};
