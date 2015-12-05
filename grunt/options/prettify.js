module.exports = function (grunt, data) {
	return {
		options: {
			indent: 1,
			indent_char: '	',
			condense: true,
			indent_inner_html: true
		},
		dist: {
			src: '<%= _PATH.templates %>/<%= _FILE.templates_home %>',
			dest: '<%= _PATH.templates %>/<%= _FILE.templates_home %>'
		}
	}
};
