//	Less Plugins
var less_autoprefix = new (require('../../node_modules/less-plugin-autoprefix'))({browsers: ['last 2 versions', 'ie 10']});
var less_inline_urls = require('../../node_modules/less-plugin-inline-urls');
var less_ltr = new (require('../../node_modules/less-plugin-rtl'))({'vars': true, 'autoReverse': false, 'dir': 'LTR'});
var less_rtl = new (require('../../node_modules/less-plugin-rtl'))({'vars': true, 'autoReverse': true, 'dir': 'RTL'});

module.exports = function (grunt, data) {

	return {
		vendors: {
			options: {
				plugins: [less_autoprefix, less_inline_urls, less_ltr],
				dumpLineNumbers: 'comments',
				ieCompat: false
			},
			files: {
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_vendors %>': data.SETUP.vendors.styles
			}
		},
		vendorsRTL: {
			options: {
				plugins: [less_autoprefix, less_inline_urls, less_rtl],
				dumpLineNumbers: 'comments',
				ieCompat: false
			},
			files: {
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_vendors_rtl %>': data.SETUP.vendors.styles
			}
		},
		custom: {
			options: {
				plugins: [less_autoprefix, less_ltr],
				dumpLineNumbers: 'comments'
			},
			files: {
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_custom %>': ['<%= _PATH.src_styles %>/<%= _FILE.styles_less_import %>']
			}
		},
		customRTL: {
			options: {
				plugins: [less_autoprefix, less_rtl],
				dumpLineNumbers: 'comments'
			},
			files: {
				'<%= _PATH.pub_styles %>/<%= _FILE.styles_custom_rtl %>': ['<%= _PATH.src_styles %>/<%= _FILE.styles_less_import %>']
			}
		}
	}

};
