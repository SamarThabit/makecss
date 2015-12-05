module.exports = function (grunt, data) {

	return {
		npmRemove: {
			command: 'npm prune'
		},
		npmCacheClean: {
			command: 'npm cache clean'
		},
		bowerInstall: {
			command: 'bower install'
		},
		bowerUpdate: {
			command: 'bower update'
		},
		bowerRemove: {
			command: 'bower prune'
		},
		bowerCacheClean: {
			command: 'bower cache clean'
		}
	}

};
