module.exports = {

	server: {
		http: 'http://localhost/themeX/templates'
	},
	fonts: {
		google: [
			{
				family: 'Open Sans',
				subsets: ['latin', 'cyrillic'],
				styles: [300, 400, 700]
			}
		],
		embed: {
			keepcalm: {
				normal: {
					'500': '<%= _PATH.src_fonts %>/keepcalm.ttf'
				}
			}
		}
	},
	vendors: {
		devDep: {
			"bootstrap": "*",
			"fontawesome": "*",
			"jquery": "*",
			"respond": "*",
			"OwlCarouselBower": "*",
			"slick.js": "*"
		},
		styles: [
			'<%= _PATH.src_vendors %>/bootstrap/less/bootstrap.less',
			'<%= _PATH.src_vendors %>/fontawesome/less/font-awesome.less',
			'<%= _PATH.src_vendors %>/OwlCarouselBower/owl-carousel/owl.carousel.css',
			'<%= _PATH.src_vendors %>/OwlCarouselBower/owl-carousel/owl.theme.css'
		],
		scripts: [
			'<%= _PATH.src_vendors %>/jquery/dist/jquery.js',
			'<%= _PATH.src_vendors %>/bootstrap/dist/js/bootstrap.js',
			'<%= _PATH.src_vendors %>/respond/dest/respond.src.js',
			'<%= _PATH.src_vendors %>/OwlCarouselBower/owl-carousel/owl.carousel.js'
		]
	}

};
