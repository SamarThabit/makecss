module.exports = function (grunt) {
    grunt.registerTask('make-install', [
        'modernizr_builder',
        'json_generator:bowerrc',
        'json_generator:bower',
        'shell:bowerInstall',
        'less',
        'googlefonts',
        'embedfont',
        'sprite',
        'svg_sprite',
        'copy:images',
		'copy:fontsBootstrap',
		'copy:fontsAwesome',
        'concat:vendors',
        'concat:custom',
		'template:htmlDev',
        'make-server'
    ]);
};
