module.exports = function (grunt, data) {

	return {
		main: {
			options: {
				updateType: 'prompt', // report, prompt, force, fail
				reportUpdated: false,
				semver: true,
				packages: {
					devDependencies: true,
					dependencies: false
				},
				packageJson: null,
				reportOnlyPkgs: []
			}
		}
	}

};
