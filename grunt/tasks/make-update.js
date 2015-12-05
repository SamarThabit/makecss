module.exports = function (grunt) {
	grunt.registerTask('make-update', [
		'shell:npmRemove',
		'shell:npmCacheClean',
		'devUpdate',
		'json_generator:bowerrc',
		'json_generator:bower',
		'shell:bowerRemove',
		'shell:bowerCacheClean',
		'shell:bowerUpdate'
	]);
};
