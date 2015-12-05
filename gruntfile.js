module.exports = function(grunt) {

	// Root path
	var path = require('path');

	// Load plugins
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {

		// Load core
		configPath: [
			path.join(process.cwd(), 'grunt/options'),
			path.join(process.cwd(), 'grunt/core')
		],
		// Load user setups
		data: {
			SETUP: require('./setup/setup')
		},
		// Load tasks
		jitGrunt: {
			customTasksDir: 'grunt/tasks',
			staticMappings: {
				googlefonts: 'grunt-google-fonts',
				shell: 'grunt-shell-spawn',
				sprite: 'grunt-spritesmith'
			}
		}

	});

};