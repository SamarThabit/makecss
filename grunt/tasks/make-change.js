module.exports = function (grunt) {
    grunt.registerTask('make-change', [
        'less',
        'googlefonts',
        'embedfont',
        'sprite',
        'svg_sprite',
        'concat:vendors',
        'concat:custom',
        'make-server'
    ]);
};
