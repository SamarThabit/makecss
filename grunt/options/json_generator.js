module.exports = function (grunt, data) {

	return {
		bowerrc: {
			dest: '.bowerrc',
			options: {
				directory: '<%= _PATH.src_vendors %>'
			}
		},
		bower: {
			dest: 'bower.json',
			options: {
				name: '<%= _SYSTEM.name %>',
				version: '<%= _SYSTEM.version %>',
				description: '<%= _SYSTEM.description %>',
				devDependencies: data.SETUP.vendors.devDep,
				ignore: ['node_modules', 'bower_components'],
				private: true
			}
		}
	}

};