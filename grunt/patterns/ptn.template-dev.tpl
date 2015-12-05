<!doctype html>
<html class="no-js" lang="">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title><%- title %></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--    Load: Styles -->
	<!--(if target dev)><!-->
	<link rel="stylesheet" href="<%- styles_vendors %>">
	<link rel="stylesheet" href="<%- styles_fonts_google %>">
	<link rel="stylesheet" href="<%- styles_fonts_embed %>">
	<link rel="stylesheet" href="<%- styles_sprite_gif %>">
	<link rel="stylesheet" href="<%- styles_sprite_jpg %>">
	<link rel="stylesheet" href="<%- styles_sprite_png %>">
	<link rel="stylesheet" href="<%- styles_sprite_svg %>">
	<link rel="stylesheet" href="<%- styles_custom %>">
	<!--<!(endif)-->
	<!--(if target dist)>
	<link rel="stylesheet" href="<%- styles_min %>">
	<!--<!(endif)-->
</head>
<body>
<!--    Begin: Your Content -->
<h1><%- title %></h1>
<!--    End: Your Content -->

<!--    Load: Scripts -->
<!--(if target dev)><!-->
<script src="<%- scripts_vendors %>"></script>
<script src="<%- scripts_custom %>"></script>
<!--<!(endif)-->
<!--(if target dist)>
<script src="<%- scripts_min %>"></script>
<!--<!(endif)-->
<!--    Load: SVG -->
<?php @include_once("<%- images_sprite_svg %>"); ?>
<!--(if target dev)><!-->
<script src="//localhost:35729/livereload.js"></script>
<!--<!(endif)-->
</body>
</html>