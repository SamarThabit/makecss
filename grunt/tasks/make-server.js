module.exports = function (grunt) {
    grunt.registerTask('make-server', [
        'open',
        'watchChokidar'
    ]);
};
