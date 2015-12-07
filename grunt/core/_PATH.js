var dir = require('./_DIR');

module.exports = {

	/*=============================================================================*\
		PRIVATE
	\*=============================================================================*/

	src:						dir.assets + '/' + dir.private,
	src_fonts:					dir.assets + '/' + dir.private + '/' + dir.fonts,
	src_images:					dir.assets + '/' + dir.private + '/' + dir.images,
	src_images_gif_sprite:		dir.assets + '/' + dir.private + '/' + dir.images + '/' + dir.gif + '/' + dir.sprite,
	src_images_jpg_sprite:		dir.assets + '/' + dir.private + '/' + dir.images + '/' + dir.jpg + '/' + dir.sprite,
	src_images_png_sprite:		dir.assets + '/' + dir.private + '/' + dir.images + '/' + dir.png + '/' + dir.sprite,
	src_images_svg_sprite:		dir.assets + '/' + dir.private + '/' + dir.images + '/' + dir.svg + '/' + dir.sprite,
	src_scripts:				dir.assets + '/' + dir.private + '/' + dir.scripts,
	src_scripts_libs:			dir.assets + '/' + dir.private + '/' + dir.scripts + '/' + dir.libs,
	src_styles:					dir.assets + '/' + dir.private + '/' + dir.styles,
	src_vendors:				dir.assets + '/' + dir.private + '/' + dir.vendors,
	src_vendors_modernizr:		dir.assets + '/' + dir.private + '/' + dir.vendors + '/' + dir.modernizr,

	/*=============================================================================*\
	    PUBLIC
	\*=============================================================================*/

	pub:						dir.assets + '/' + dir.public,
	pub_fonts:					dir.assets + '/' + dir.public + '/' + dir.fonts,
	pub_fonts_embed:			dir.assets + '/' + dir.public + '/' + dir.fonts + '/' + dir.embed,
	pub_fonts_google:			dir.assets + '/' + dir.public + '/' + dir.fonts + '/' + dir.google,
	pub_images:					dir.assets + '/' + dir.public + '/' + dir.img,
	pub_images_sprite:			dir.assets + '/' + dir.public + '/' + dir.img + '/' + dir.sprite,
	pub_scripts:				dir.assets + '/' + dir.public + '/' + dir.js,
	pub_styles:					dir.assets + '/' + dir.public + '/' + dir.css,

	/*=============================================================================*\
		PATTERNS
	\*=============================================================================*/

	patterns:					dir.grunt + '/' + dir.patterns,

	/*=============================================================================*\
	    TEMPLATES
	\*=============================================================================*/

	templates:					dir.templates,

	/*=============================================================================*\
		CONFIG
	\*=============================================================================*/

	setup:						dir.setup

};