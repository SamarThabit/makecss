module.exports = function (grunt) {
	grunt.registerTask('make-site', [
		'concat_css:all',
		'concat_css:rtl',
		'cssbeautifier',
		'cssmin:build',
		'cssmin:buildRTL',
		'concat:all',
		'jsbeautifier',
		'uglify',
		'imagemin',
		'svgmin',
		'targethtml:dist',
		'prettify:dist',
		'clean'
	]);
};