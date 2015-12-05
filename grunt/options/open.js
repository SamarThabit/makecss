module.exports = function (grunt, data) {

	return {
		dev: {
			path: data.SETUP.server.http + '/<%= _FILE.templates_dev %>'
		}
	}

};