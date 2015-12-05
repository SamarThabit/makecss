# MakeCSS

by CloudCart Team, version: 2.0.0

## Възможности на системата

###### Стилове
- LESS компилатор
- CSS форматиране за по-красив и четим код
- CSS минимизиране за по-бързо зареждане на страниците
- CSS autoprefixer за автоматична корекция на браузър префиксите (-webkit, -moz, -o, -ms и т.н.)
- CSS валидиране и проверка за грешки

###### Фонтове
- Поддръжка на Google фонтове и създаване на локални копия на използваните в проекта
- Автоматично генериране на Custom фонтове и необходимият CSS за незабавната им употреба

###### Изображения
- Автоматично генериране на PNG, JPG, GIF и SVG спрайтове + CSS по предварително зададен шаблон (handlebars)
- Оптимизатор/минификатор на всички изображения и спрайтове за по-бързо зареждане на страниците
- Автоматично пренасяне на изображенията от работната към публичната директория

###### Скриптове
- JS конкатенатор за обединяване на всички използвани скриптове
- JS форматиране за по-красив и четим код
- JS минимизиране за по-бързо зареждане на страниците
- JS валидиране и проверка за грешки

###### Vendors
- Интегриран [Bower] за избор на работни пакети като [Bootstrap], [Font-Awesome], [Jquery], [OWL Carousel] и т.н. Изберете желаните и **MakeCSS** ще се погрижи за интегрирането им.
- Base64 кодиране на всички изображения в стиловия файл на съответния vendor за по-бързо зареждане и по-добра организация на файловете
- Интегриран Custom [Modernizr] Builder

###### Други
- Live Server за преглед на проекта в реално време. Интегриран [Grunt-Contrib-Watch-Chokidar] като алтернатива на Grunt-Watch. По-бърз и по-малко проблемен! Следене за модификации в работните файлове и мигновен преглед на промените в браузъра *(Не изисква вмъкването на допълнителен JS код в темплейтите)*
- Опция за генериране на RTL версия на сайта
- Бързодействие при изпълнението на таскове с [Jit-Grunt]. Оптимизира скоростта на изпълнение с над 50%!
- Модулно разпределение на тасковете с [Load-Grunt-Config]
- Кеширане и обработка само на модифицираните файлове с [Grunt-Newer]
- Визуализация в конзолата на времето на изпълнение на тасковете с [Time-Grunt]
- Автоматично почистване на всички работни/временни файлове, създадени в процеса на разработка
- Вграден JSON генератор
- HTML форматиране за по-красив и четим код
- Обновяване на всички [Grunt] модули и [Bower] пакети само с една команда! За да бъде системата ви винаги с актуални версии на [Bootstrap], [Font-Awesome], [Jquery] и т.н.
- Интуитивна файлова структура
- Бърза и лесна конфигурация. За да започнете работа е небоходимо да редактирате един-единствен файл - *assets/setup/config.js*

## Крайният резултат?

Крайният резултат е създаването на 2 минифицирани/оптимизирани файлa - за стилове и скриптове. Примерен индекс темплейт:

```html
<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8">
	<title>MakeCSS</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--    Load: Styles -->
	<link rel="stylesheet" href="../assets/public/css/styles.min.css">
</head>
<body>
<h1>MakeCSS HTML Boilerplate</h1>

<!--    Load: Scripts -->
<script src="../assets/public/js/scripts.min.js"></script>
</body>
</html>
```

За удобство на разработчика е добавена опция за генериране на още два сателитни, неминифицирани файла - *styles.css* и *scripts.js*.

## Инсталация

За да използвате MakeCSS трябва да имате инсталирани следните технологии:

- [NodeJS]
- [Grunt]
- [Bower]

Преди да пристъпите към същинска инсталация е небходимо да отворите файла *assets/setup/config.js* и да конфигурирате системата спрямо вашите нужди.

```js
project: {
	details: {
		name: 'My New Project' // Име на проекта
	},
	server: {
		host: 'localhost' // IP, на което ще работи Live сървърът (не е препоръчително да се променя по време на работа)
		port: 2211 // Порт, на който ще работи Live сървърът (не е препоръчително да се променя по време на работа)
	},
	fonts: {
		google: [ // Добавяне на google фонтове. Задължително трябва да присъства поне един Google Font
			{
				family: 'Open Sans',
				subsets: ['latin', 'cyrillic'],
				styles: [300, 400, 700]
			}
		],
		custom: { // Добавяне на Custom фонтове. Употребата им не е задължителна. Оставете "custom: {}" празен обект, ако не желаете да използвате
			keepcalm: {
				normal: {
					'500': '<%= system.path.private.fonts %>/keepcalm.ttf'
				}
			}
		}
	},
	vendors: { // Добавяне на Bower пакети
		devDep: {
			"bootstrap": "*",
			"fontawesome": "*",
			"jquery": "*",
			"respond": "*",
			"OwlCarouselBower": "*"
		},
		styles: [ // Опишете пътищата до техните стиловите (css, less и т.н.). За LESS използвайте основния import файл
			'<%= system.path.private.vendors %>/bootstrap/less/bootstrap.less',
			'<%= system.path.private.vendors %>/fontawesome/less/font-awesome.less',
			'<%= system.path.private.vendors %>/OwlCarouselBower/owl-carousel/owl.carousel.css',
			'<%= system.path.private.vendors %>/OwlCarouselBower/owl-carousel/owl.theme.css'
		],
		scripts: [ // Опишете пътищата до техните js файлове
			'<%= system.path.private.vendors %>/jquery/dist/jquery.js',
			'<%= system.path.private.vendors %>/bootstrap/dist/js/bootstrap.js',
			'<%= system.path.private.vendors %>/respond/dest/respond.src.js',
			'<%= system.path.private.vendors %>/OwlCarouselBower/owl-carousel/owl.carousel.js'
		]
	}
}
```
*Конфигурационният файл се следи в реално време от [Grunt-Contrib-Watch-Chokidar], така че можете да нанасяте промени и в процеса на работа.*


Отворете конзолата и изберете пътя до assets/setup/core:

```sh
C:\www\makecss\assets\setup\core>
```

Инсталирайте [Grunt] модулите (като Администратор) с команда:

```sh
npm install
```

След като приключи инсталацията на [Grunt] модулите, инсталирайте **MakeCSS** с команда:

```sh
grunt make-install
```

В края на инсталацията и при коректно конфигуриран *assets/setup/config.js* в браузъра ви трябва да се визуализира индекс файлът на вашия проект.

## Команди

Това е пълният списък с команди в **MakeCSS** и тяхното предназначение.

##### Основни

Основните команди трябва да се изпълняват в посочената последователност.

| Команда               | Описание
| --------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| *grunt make-install*  | Инсталира системата. Подготвя проекта спрямо настройките в *assets/setup/config.js*. Използвайте командата само при инсталация!
| *grunt make-server*   | Активира [Grunt-Contrib-Watch-Chokidar] и Live сървъра за отразяване на промените в реално време. Ако прекъснете работа, това е командата, с която можете да продължите.
| *grunt make-site*     | Финализиране на проекта - премахва всички временни/работни файлове от public директорията; оптимизира изображенията; минифицира стиловете и скриптовете.

##### Допълнителни

Допълнителните команди се използват само след финализиране на проекта, т.е. след изпълнение на команда *grunt make-site*. Употребата им не е задължителна.

| Команда               | Описание
| --------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| *grunt make-change*   | За промени в проекта.

##### Помощни

Помощните команди могат да се използват по всяко време от работния процес.

| Команда               | Описание
| --------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| *grunt make-update*   | Обновява всички [Grunt] и [Bower] пакети. Премахва тези, които не се използват. Изчиства кеша.

## Файлова структура и начин на работа

```
assets/
	
	private/					: Работна директория
		fonts/					: Директория за Custom фонтове. Тук поставете фонта, който желаете да се генерира в уеб вариант
		images/					: Директория за изображения. Поставяйте изображения с lowercase разширения - .png, .jpg и т.н.
			gif/				: Директория за GIF изображения
				sprite/			: Всички GIF изображения в тази директория се генерират като GIF sprite
			jpg/				: Директория за JPG изображения
				sprite/			: Всички JPG изображения в тази директория се генерират като JPG sprite
			png/				: Директория за PNG изображения
				sprite/			: Всички PNG изображения в тази директория се генерират като PNG sprite
			svg/				: Директория за SVG изображения
				sprite/			: Всички SVG изображения в тази директория се генерират като SVG sprite
		scripts/				: Директория за JS скриптове
			libs/				: Директория за JS библиотеки и модули
			global.js			: Основният JS файл. Вмъква се като последен в генерираният скриптов файл за браузъра
		styles/					: Директория за стилове
			base/				: Основни стилове - variables, mixins, reset, helpers, typography, forms и т.н.
			elements/			: Елементи - navigation, search, breadcrumbs, pagination и др.
			layout/				: Лейаут - header, sidebar, content, footer
			modules/			: Модули - slider, modal, accordion, tooltip и др.
			pages/				: Специфични стилове за различните страници - home, about, contacts и т.н.
			responsive/			: Стилове за мобилен дизайн
			global.less			: Основният LESS файл. Вмъква се като последен в генерираният стилов файл за браузъра
			import.less			: Обединява всички custom LESS файлове
		vendors/				: Директория с избраните в config.js Bower пакети. Не редактирайте!
	
	public/						: Генерираният краен резултат за браузъра
		css/					: Стилове
		fonts/					: Фонтове
			custom/				: Custom фонтове
			google/				: Локални копия на използваните Google фонтове
		img/					: Изображения
			sprite/				: Спрайтове
		js/						: Скриптове
	
	setup/						: Системна директория
		config.js				: Файл, съдържащ настройките на проекта
		
templates/						: За HTML, PHP, TPL или друг тип темплейти
```

## Grunt модули

Системата използва следните [Grunt] модули:

- [Grunt-Cleanempty]
- [Grunt-Concat-CSS]
- [Grunt-Contrib-Clean]
- [Grunt-Contrib-Concat]
- [Grunt-Contrib-Connect]
- [Grunt-Contrib-Copy]
- [Grunt-Contrib-CSSlint]
- [Grunt-Contrib-CSSmin]
- [Grunt-Contrib-Imagemin]
- [Grunt-Contrib-JShint]
- [Grunt-Contrib-LESS]
- [Grunt-Contrib-Uglify]
- [Grunt-Contrib-Watch-Chokidar]
- [Grunt-CSSbeautifier]
- [Grunt-Dev-Update]
- [Grunt-Embedfont]
- [Grunt-Googlefonts]
- [Grunt-JSbeautifier]
- [Grunt-JSONgenerator]
- [Grunt-Modernizr-Builder]
- [Grunt-Newer]
- [Grunt-Prettify]
- [Grunt-Shell-Spawn]
- [Grunt-Spritesmith]
- [Grunt-SVG-Sprite]
- [Grunt-SVGmin]
- [Grunt-TargetHTML]
- [Grunt-Template]
- [Jit-Grunt]
- [LESS-Plugin-Autoprefix]
- [LESS-Plugin-Inline-Urls]
- [LESS-Plugin-RTL]
- [Load-Grunt-Config]
- [Time-Grunt]

## Changelog

#### v1.0.3
- Added: Less Plugin RTL
- Removed: Grunt-FlipCSS2

#### v1.0.2
- Added: Retina sprites
- Removed: RTL folder

#### v1.0.1
- Added: HTML beautifier 
- Improved: RTL maker

#### v1.0.0
- Initial version

[NodeJS]: <https://nodejs.org>
[Grunt]: <http://gruntjs.com/>
[Bower]: <http://bower.io/>
[Bootstrap]: <http://getbootstrap.com/>
[Jquery]: <https://jquery.com/>
[OWL Carousel]: <http://owlgraphic.com/owlcarousel/>
[Font-Awesome]: <https://fortawesome.github.io/Font-Awesome/>
[Modernizr]: <https://modernizr.com/>
[Grunt-Cleanempty]: <https://www.npmjs.com/package/grunt-cleanempty>
[Grunt-Concat-CSS]: <https://www.npmjs.com/package/grunt-concat-css>
[Grunt-Contrib-Clean]: <https://www.npmjs.com/package/grunt-contrib-clean>
[Grunt-Contrib-Concat]: <https://github.com/gruntjs/grunt-contrib-concat>
[Grunt-Contrib-Connect]: <https://github.com/gruntjs/grunt-contrib-connect>
[Grunt-Contrib-Copy]: <https://github.com/gruntjs/grunt-contrib-copy>
[Grunt-Contrib-CSSlint]: <https://github.com/gruntjs/grunt-contrib-csslint>
[Grunt-Contrib-CSSmin]: <https://www.npmjs.com/package/grunt-contrib-cssmin>
[Grunt-Contrib-Imagemin]: <https://www.npmjs.com/package/grunt-contrib-imagemin>
[Grunt-Contrib-JShint]: <https://github.com/gruntjs/grunt-contrib-jshint>
[Grunt-Contrib-LESS]: <https://www.npmjs.com/package/grunt-contrib-less>
[Grunt-Contrib-Uglify]: <https://github.com/gruntjs/grunt-contrib-uglify>
[Grunt-Contrib-Watch-Chokidar]: <https://www.npmjs.com/package/grunt-contrib-watch-chokidar>
[Grunt-CSSbeautifier]: <https://www.npmjs.com/package/grunt-cssbeautifier>
[Grunt-Dev-Update]: <https://www.npmjs.com/package/grunt-dev-update>
[Grunt-Embedfont]: <https://github.com/tylerbeck/grunt-embedfont>
[Grunt-Googlefonts]: <https://github.com/Mika-/grunt-google-fonts>
[Grunt-JSbeautifier]: <https://www.npmjs.com/package/grunt-jsbeautifier>
[Grunt-JSONgenerator]: <https://www.npmjs.com/package/grunt-json-generator>
[Grunt-Modernizr-Builder]: <https://www.npmjs.com/package/grunt-modernizr-builder> 
[Grunt-Newer]: <https://www.npmjs.com/package/grunt-newer>
[Grunt-Prettify]: <https://www.npmjs.com/package/grunt-prettify>
[Grunt-Shell-Spawn]: <https://github.com/cri5ti/grunt-shell-spawn>
[Grunt-Spritesmith]: <https://github.com/Ensighten/grunt-spritesmith>
[Grunt-SVG-Sprite]: <https://www.npmjs.com/package/grunt-svg-sprite>
[Grunt-SVGmin]: <https://www.npmjs.com/package/grunt-svgmin>
[Grunt-TargetHTML]: <https://github.com/changer/grunt-targethtml>
[Grunt-Template]: <https://github.com/mathiasbynens/grunt-template>
[Jit-Grunt]: <https://www.npmjs.com/package/jit-grunt>
[LESS-Plugin-Autoprefix]: <https://github.com/less/less-plugin-autoprefix>
[LESS-Plugin-Inline-Urls]: <https://github.com/less/less-plugin-inline-urls>
[LESS-Plugin-RTL]: <https://github.com/less/less-plugin-rtl>
[Load-Grunt-Config]: <https://github.com/firstandthird/load-grunt-config>
[Time-Grunt]: <https://www.npmjs.com/package/time-grunt>