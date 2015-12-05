module.exports = function (grunt, data) {
	return {
		build: {
			files: {
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_min %>': ['<%= _PATH.pub_styles %>/<%= _FILE.styles %>']
			}
		},
		buildRTL: {
			files: {
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl_min %>': ['<%= _PATH.pub_styles %>/<%= _FILE.styles_rtl %>']
			}
		}
	}
};
