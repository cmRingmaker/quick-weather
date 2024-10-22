/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Base clean slate */
* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font: inherit;
	vertical-align: baseline;
	list-style: none;
}

/* Make images easier to work with */
img,
picture {
	font-style: italic; /* Visually offset alt text to differentiate from surrounding text  */
	max-width: 100%;
	height: auto;
	vertical-align: middle; /* Remove phantom whitespace */
}

/* Some reset rules based on piccalil css reset */
/* https://piccalil.li/blog/a-more-modern-css-reset/ */
/* https://web.archive.org/web/20240429233755/https://piccalil.li/blog/a-more-modern-css-reset/ */

/* Prevent font size inflation */
html {
	-moz-text-size-adjust: none;
	-webkit-text-size-adjust: none;
	text-size-adjust: none;
}

/* Set core body defaults */
body {
	min-height: 100vh;
	line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
/* Worth it to change if fonts have large ascenders and descenders */
h1,
h2,
h3,
h4,
button,
input,
label {
	line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
	text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
	color: currentColor;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font-family: inherit;
	font-size: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
	min-height: 10em;
}
`, "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;CACC,SAAS;CACT,UAAU;CACV,SAAS;CACT,sBAAsB;CACtB,aAAa;CACb,wBAAwB;CACxB,gBAAgB;AACjB;;AAEA,oCAAoC;AACpC;;CAEC,kBAAkB,EAAE,qEAAqE;CACzF,eAAe;CACf,YAAY;CACZ,sBAAsB,EAAE,8BAA8B;AACvD;;AAEA,iDAAiD;AACjD,sDAAsD;AACtD,iGAAiG;;AAEjG,gCAAgC;AAChC;CACC,2BAA2B;CAC3B,8BAA8B;CAC9B,sBAAsB;AACvB;;AAEA,2BAA2B;AAC3B;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA,kEAAkE;AAClE,oEAAoE;AACpE;;;;;;;CAOC,gBAAgB;AACjB;;AAEA,sCAAsC;AACtC;;;;CAIC,kBAAkB;AACnB;;AAEA,0DAA0D;AAC1D;CACC,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA,yCAAyC;AACzC;;;;CAIC,oBAAoB;CACpB,kBAAkB;AACnB;;AAEA,8DAA8D;AAC9D;CACC,gBAAgB;AACjB","sourcesContent":["/* Base clean slate */\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbox-sizing: border-box;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n\tlist-style: none;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n\tfont-style: italic; /* Visually offset alt text to differentiate from surrounding text  */\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n\tvertical-align: middle; /* Remove phantom whitespace */\r\n}\r\n\r\n/* Some reset rules based on piccalil css reset */\r\n/* https://piccalil.li/blog/a-more-modern-css-reset/ */\r\n/* https://web.archive.org/web/20240429233755/https://piccalil.li/blog/a-more-modern-css-reset/ */\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n\t-moz-text-size-adjust: none;\r\n\t-webkit-text-size-adjust: none;\r\n\ttext-size-adjust: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n\tmin-height: 100vh;\r\n\tline-height: 1.5;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\n/* Worth it to change if fonts have large ascenders and descenders */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nbutton,\r\ninput,\r\nlabel {\r\n\tline-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n\ttext-wrap: balance;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n\ttext-decoration-skip-ink: auto;\r\n\tcolor: currentColor;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n\tfont-family: inherit;\r\n\tfont-size: inherit;\r\n}\r\n\r\n/* Make sure textareas without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n\tmin-height: 10em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ==================================================================
    - - - - - - - - - - [ GLOBALS ]
   ==================================================================
    [1] Size hack to set default font size to "10px" to make 1rem
        the equivelent of 10px. (2.4rem = 24px, 0.8rem = 8px, etc)
   ================================================================== */

:root {
	color-scheme: light dark;
	font-size: 62.5%; /* [1] */

	/* Dark Mode Colors */
	--bg_dark: hsl(0, 5%, 10%);

	/* Light Mode Colors */
	--bg_light: hsl(45, 40%, 94%);

	/* Main colors */
	--COLOR_BG: light-dark(var(--bg_light), var(--bg_dark));
	--COLOR_PRIMARY: hsl(220, 90%, 15%);
	--COLOR_SECONDARY: hsl(303, 71%, 73%);
	--COLOR_OFFBLUE: hsl(208, 44%, 55%);

	/* Text */
	--FONT_COLOR: light-dark(var(--bg_dark), var(--bg_light));

	&:has(#theme-toggle:not(:checked):not(:indeterminate)) {
		color-scheme: light;
	}

	&:has(#theme-toggle:checked) {
		color-scheme: dark;
	}
}

/* ==================================================================
    - - - - - - - - - - [ BASE STYLES ]
   ==================================================================
    - - [ body, fonts, text elements, media elements ]
    * Styles that are shared across the entire site
   ================================================================== */

body {
	font-size: 1.8rem;
	transition: 250ms ease;
	background-color: var(--COLOR_BG);
	color: var(--FONT_COLOR);
	flex-direction: column;
}

::selection {
	background-color: var(--COLOR_SECONDARY);
	color: var(--COLOR_BG);
}

.noclick {
	user-select: none;
}

/* ==================================================================
    - - - - - - - - - - [ HEADER ]
   ==================================================================
    * Typically a header has branding and a site nav
   ================================================================== */

header {
	background-color: var(--COLOR_PRIMARY);
}

#theme {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 10px 12px 0 0;
	gap: 10px;

	input {
		display: none;
	}

	span {
		user-select: none;
		opacity: 0;
		transform: translateX(0px);
		transition: 250ms ease;
	}

	span:has(~ label:hover) {
		color: var(--FONT_COLOR);
		opacity: 100;
		transform: translateX(-20px);
	}

	label[for='theme-toggle'] {
		display: flex;
		cursor: pointer;
	}

	svg {
		.toggle-stroke {
			stroke: var(--FONT_COLOR);
			stroke-width: 4;
			fill: none;
		}

		.toggle-circle {
			transition: 0.4s ease;
			fill: var(--FONT_COLOR);
		}
	}
}

/* ==================================================================
    - - - - - - - - - - [ %CONTENT ]
   ==================================================================
    - - [ main, section, div, article, aside, form ]
    * replace %CONTENT with one of the above when pasting this
   ================================================================== */

main {
	display: grid;
	justify-items: center;
	gap: 100px;

	form {
		width: min(90vw, 400px);
		display: flex;
		/* gap: 10px; */

		input[type='text'] {
			color: hsl(207, 79%, 68%);
			flex-grow: 2;
			padding-left: 20px;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
			border: 2px solid hsla(0, 0%, 0%, 0); /* ensure a border so it doesn't resize text when focused */

			&:focus {
				outline: none;
				border: 2px solid var(--FONT_COLOR);
			}
		}

		input[type='submit'] {
			width: 60px;
			height: 40px;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			color: var(--FONT_COLOR);
			cursor: pointer;
		}
	}

	#hero {
		/* Background color controlled in .card */
		width: min(90vw, 400px);
		height: 450px;
		border-radius: 24px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		/* gap: 5px; */

		h1 {
			font-size: 2.4rem;
		}

		h2 {
			font-size: 1.6rem;
		}

		h3 {
			font-size: 5rem;
			align-self: center;
			margin-top: 60px;
			cursor: pointer;
			color: hsl(349, 60%, 85%);
			text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.5);
			user-select: none;
		}

		.time {
			display: block;
			margin: 10px 0;
			border-bottom: 1px solid var(--COLOR_OFFBLUE);
		}

		.current,
		.forecast {
			display: flex;
			justify-content: center;
			gap: 10px;
		}

		.current {
			/* user-select: none; */
			.c2 {
				align-self: center;
			}
		}

		.forecast {
			font-size: 1.6rem;
			flex-grow: 1;
			align-items: flex-end;
		}
	}

	#weekly {
		max-width: 90vw;
		justify-self: center;
		display: flex;
		gap: 30px;
		justify-content: space-around;
		flex-wrap: wrap;

		.card {
			display: flex;
			flex-direction: column;
			border-radius: 10px;
			justify-content: center;
			align-items: center;

			span:first-child {
				background-color: var(--COLOR_OFFBLUE);
				width: 100%;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				text-align: center;
			}
		}
	}

	.card {
		background-color: hsl(207, 79%, 68%);
		width: 200px;
	}

	@media screen and (max-width: 477px) {
		gap: 50px;

		> #weekly > .card {
			width: min(90vw, 400px);
			align-items: center;
		}
	}
}

section {
}

/* ==================================================================
    - - - - - - - - - - [ FOOTER ]
   ==================================================================
    * Typically a footer has branding and important site information
   ================================================================== */

footer {
	background-color: var(--COLOR_PRIMARY);
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;;;;;uEAKuE;;AAEvE;CACC,wBAAwB;CACxB,gBAAgB,EAAE,QAAQ;;CAE1B,qBAAqB;CACrB,0BAA0B;;CAE1B,sBAAsB;CACtB,6BAA6B;;CAE7B,gBAAgB;CAChB,uDAAuD;CACvD,mCAAmC;CACnC,qCAAqC;CACrC,mCAAmC;;CAEnC,SAAS;CACT,yDAAyD;;CAEzD;EACC,mBAAmB;CACpB;;CAEA;EACC,kBAAkB;CACnB;AACD;;AAEA;;;;;uEAKuE;;AAEvE;CACC,iBAAiB;CACjB,sBAAsB;CACtB,iCAAiC;CACjC,wBAAwB;CACxB,sBAAsB;AACvB;;AAEA;CACC,wCAAwC;CACxC,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;;;;uEAIuE;;AAEvE;CACC,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,yBAAyB;CACzB,mBAAmB;CACnB,sBAAsB;CACtB,SAAS;;CAET;EACC,aAAa;CACd;;CAEA;EACC,iBAAiB;EACjB,UAAU;EACV,0BAA0B;EAC1B,sBAAsB;CACvB;;CAEA;EACC,wBAAwB;EACxB,YAAY;EACZ,4BAA4B;CAC7B;;CAEA;EACC,aAAa;EACb,eAAe;CAChB;;CAEA;EACC;GACC,yBAAyB;GACzB,eAAe;GACf,UAAU;EACX;;EAEA;GACC,qBAAqB;GACrB,uBAAuB;EACxB;CACD;AACD;;AAEA;;;;;uEAKuE;;AAEvE;CACC,aAAa;CACb,qBAAqB;CACrB,UAAU;;CAEV;EACC,uBAAuB;EACvB,aAAa;EACb,eAAe;;EAEf;GACC,yBAAyB;GACzB,YAAY;GACZ,kBAAkB;GAClB,4BAA4B;GAC5B,+BAA+B;GAC/B,oCAAoC,EAAE,2DAA2D;;GAEjG;IACC,aAAa;IACb,mCAAmC;GACpC;EACD;;EAEA;GACC,WAAW;GACX,YAAY;GACZ,6BAA6B;GAC7B,gCAAgC;GAChC,wBAAwB;GACxB,eAAe;EAChB;CACD;;CAEA;EACC,yCAAyC;EACzC,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,cAAc;;EAEd;GACC,iBAAiB;EAClB;;EAEA;GACC,iBAAiB;EAClB;;EAEA;GACC,eAAe;GACf,kBAAkB;GAClB,gBAAgB;GAChB,eAAe;GACf,yBAAyB;GACzB,6CAA6C;GAC7C,iBAAiB;EAClB;;EAEA;GACC,cAAc;GACd,cAAc;GACd,6CAA6C;EAC9C;;EAEA;;GAEC,aAAa;GACb,uBAAuB;GACvB,SAAS;EACV;;EAEA;GACC,uBAAuB;GACvB;IACC,kBAAkB;GACnB;EACD;;EAEA;GACC,iBAAiB;GACjB,YAAY;GACZ,qBAAqB;EACtB;CACD;;CAEA;EACC,eAAe;EACf,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,eAAe;;EAEf;GACC,aAAa;GACb,sBAAsB;GACtB,mBAAmB;GACnB,uBAAuB;GACvB,mBAAmB;;GAEnB;IACC,sCAAsC;IACtC,WAAW;IACX,4BAA4B;IAC5B,6BAA6B;IAC7B,kBAAkB;GACnB;EACD;CACD;;CAEA;EACC,oCAAoC;EACpC,YAAY;CACb;;CAEA;EACC,SAAS;;EAET;GACC,uBAAuB;GACvB,mBAAmB;EACpB;CACD;AACD;;AAEA;AACA;;AAEA;;;;uEAIuE;;AAEvE;CACC,sCAAsC;AACvC","sourcesContent":["/* ==================================================================\r\n    - - - - - - - - - - [ GLOBALS ]\r\n   ==================================================================\r\n    [1] Size hack to set default font size to \"10px\" to make 1rem\r\n        the equivelent of 10px. (2.4rem = 24px, 0.8rem = 8px, etc)\r\n   ================================================================== */\r\n\r\n:root {\r\n\tcolor-scheme: light dark;\r\n\tfont-size: 62.5%; /* [1] */\r\n\r\n\t/* Dark Mode Colors */\r\n\t--bg_dark: hsl(0, 5%, 10%);\r\n\r\n\t/* Light Mode Colors */\r\n\t--bg_light: hsl(45, 40%, 94%);\r\n\r\n\t/* Main colors */\r\n\t--COLOR_BG: light-dark(var(--bg_light), var(--bg_dark));\r\n\t--COLOR_PRIMARY: hsl(220, 90%, 15%);\r\n\t--COLOR_SECONDARY: hsl(303, 71%, 73%);\r\n\t--COLOR_OFFBLUE: hsl(208, 44%, 55%);\r\n\r\n\t/* Text */\r\n\t--FONT_COLOR: light-dark(var(--bg_dark), var(--bg_light));\r\n\r\n\t&:has(#theme-toggle:not(:checked):not(:indeterminate)) {\r\n\t\tcolor-scheme: light;\r\n\t}\r\n\r\n\t&:has(#theme-toggle:checked) {\r\n\t\tcolor-scheme: dark;\r\n\t}\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ BASE STYLES ]\r\n   ==================================================================\r\n    - - [ body, fonts, text elements, media elements ]\r\n    * Styles that are shared across the entire site\r\n   ================================================================== */\r\n\r\nbody {\r\n\tfont-size: 1.8rem;\r\n\ttransition: 250ms ease;\r\n\tbackground-color: var(--COLOR_BG);\r\n\tcolor: var(--FONT_COLOR);\r\n\tflex-direction: column;\r\n}\r\n\r\n::selection {\r\n\tbackground-color: var(--COLOR_SECONDARY);\r\n\tcolor: var(--COLOR_BG);\r\n}\r\n\r\n.noclick {\r\n\tuser-select: none;\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ HEADER ]\r\n   ==================================================================\r\n    * Typically a header has branding and a site nav\r\n   ================================================================== */\r\n\r\nheader {\r\n\tbackground-color: var(--COLOR_PRIMARY);\r\n}\r\n\r\n#theme {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n\tpadding: 10px 12px 0 0;\r\n\tgap: 10px;\r\n\r\n\tinput {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\tspan {\r\n\t\tuser-select: none;\r\n\t\topacity: 0;\r\n\t\ttransform: translateX(0px);\r\n\t\ttransition: 250ms ease;\r\n\t}\r\n\r\n\tspan:has(~ label:hover) {\r\n\t\tcolor: var(--FONT_COLOR);\r\n\t\topacity: 100;\r\n\t\ttransform: translateX(-20px);\r\n\t}\r\n\r\n\tlabel[for='theme-toggle'] {\r\n\t\tdisplay: flex;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\tsvg {\r\n\t\t.toggle-stroke {\r\n\t\t\tstroke: var(--FONT_COLOR);\r\n\t\t\tstroke-width: 4;\r\n\t\t\tfill: none;\r\n\t\t}\r\n\r\n\t\t.toggle-circle {\r\n\t\t\ttransition: 0.4s ease;\r\n\t\t\tfill: var(--FONT_COLOR);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ %CONTENT ]\r\n   ==================================================================\r\n    - - [ main, section, div, article, aside, form ]\r\n    * replace %CONTENT with one of the above when pasting this\r\n   ================================================================== */\r\n\r\nmain {\r\n\tdisplay: grid;\r\n\tjustify-items: center;\r\n\tgap: 100px;\r\n\r\n\tform {\r\n\t\twidth: min(90vw, 400px);\r\n\t\tdisplay: flex;\r\n\t\t/* gap: 10px; */\r\n\r\n\t\tinput[type='text'] {\r\n\t\t\tcolor: hsl(207, 79%, 68%);\r\n\t\t\tflex-grow: 2;\r\n\t\t\tpadding-left: 20px;\r\n\t\t\tborder-top-left-radius: 10px;\r\n\t\t\tborder-bottom-left-radius: 10px;\r\n\t\t\tborder: 2px solid hsla(0, 0%, 0%, 0); /* ensure a border so it doesn't resize text when focused */\r\n\r\n\t\t\t&:focus {\r\n\t\t\t\toutline: none;\r\n\t\t\t\tborder: 2px solid var(--FONT_COLOR);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tinput[type='submit'] {\r\n\t\t\twidth: 60px;\r\n\t\t\theight: 40px;\r\n\t\t\tborder-top-right-radius: 10px;\r\n\t\t\tborder-bottom-right-radius: 10px;\r\n\t\t\tcolor: var(--FONT_COLOR);\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t}\r\n\r\n\t#hero {\r\n\t\t/* Background color controlled in .card */\r\n\t\twidth: min(90vw, 400px);\r\n\t\theight: 450px;\r\n\t\tborder-radius: 24px;\r\n\t\tpadding: 20px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\t/* gap: 5px; */\r\n\r\n\t\th1 {\r\n\t\t\tfont-size: 2.4rem;\r\n\t\t}\r\n\r\n\t\th2 {\r\n\t\t\tfont-size: 1.6rem;\r\n\t\t}\r\n\r\n\t\th3 {\r\n\t\t\tfont-size: 5rem;\r\n\t\t\talign-self: center;\r\n\t\t\tmargin-top: 60px;\r\n\t\t\tcursor: pointer;\r\n\t\t\tcolor: hsl(349, 60%, 85%);\r\n\t\t\ttext-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.5);\r\n\t\t\tuser-select: none;\r\n\t\t}\r\n\r\n\t\t.time {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 10px 0;\r\n\t\t\tborder-bottom: 1px solid var(--COLOR_OFFBLUE);\r\n\t\t}\r\n\r\n\t\t.current,\r\n\t\t.forecast {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\tgap: 10px;\r\n\t\t}\r\n\r\n\t\t.current {\r\n\t\t\t/* user-select: none; */\r\n\t\t\t.c2 {\r\n\t\t\t\talign-self: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.forecast {\r\n\t\t\tfont-size: 1.6rem;\r\n\t\t\tflex-grow: 1;\r\n\t\t\talign-items: flex-end;\r\n\t\t}\r\n\t}\r\n\r\n\t#weekly {\r\n\t\tmax-width: 90vw;\r\n\t\tjustify-self: center;\r\n\t\tdisplay: flex;\r\n\t\tgap: 30px;\r\n\t\tjustify-content: space-around;\r\n\t\tflex-wrap: wrap;\r\n\r\n\t\t.card {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\r\n\t\t\tspan:first-child {\r\n\t\t\t\tbackground-color: var(--COLOR_OFFBLUE);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tborder-top-left-radius: 10px;\r\n\t\t\t\tborder-top-right-radius: 10px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.card {\r\n\t\tbackground-color: hsl(207, 79%, 68%);\r\n\t\twidth: 200px;\r\n\t}\r\n\r\n\t@media screen and (max-width: 477px) {\r\n\t\tgap: 50px;\r\n\r\n\t\t> #weekly > .card {\r\n\t\t\twidth: min(90vw, 400px);\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nsection {\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ FOOTER ]\r\n   ==================================================================\r\n    * Typically a footer has branding and important site information\r\n   ================================================================== */\r\n\r\nfooter {\r\n\tbackground-color: var(--COLOR_PRIMARY);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ (() => {

const themeToggle = document.getElementById('theme-toggle')
const savedTheme = localStorage.getItem('theme')
const themeText = document.getElementById('theme-text')
const leftCircle = document.querySelector('.toggle-unchecked')
const rightCircle = document.querySelector('.toggle-checked')

// Save state of checkbox based on current theme chosen
if (savedTheme) {
	setTheme(savedTheme)
	updateTogglePositions()
} else {
	// Set the state of checkbox to be neither true or false for first page load
	themeToggle.indeterminate = true
}

themeToggle.addEventListener('change', () => {
	setTheme(themeToggle.checked ? 'Dark' : 'Light')
	updateTogglePositions()
})

function updateTogglePositions() {
	if (themeToggle.checked) {
		leftCircle.setAttribute('cx', 8)
		rightCircle.setAttribute('cx', 70)
	} else {
		leftCircle.setAttribute('cx', -22)
		rightCircle.setAttribute('cx', 40)
	}
}

function setTheme(theme) {
	themeToggle.checked = theme === 'Dark'
	localStorage.setItem('theme', theme)
	// Set theme-text span to display opposite theme mode (that you will be changing to)
	themeText.textContent = `${theme === 'Dark' ? 'Light' : 'Dark'} Mode`
}

// Only runs on users first page load!
// This was the only way I could solve a bug that forced system darkmode users to click the checkbox twice.
// The intention is for the users VERY FIRST load, set the theme and checkbox accordingly.
if (!savedTheme) {
	//
	setTimeout(() => {
		// Get the preceived lightness of an RGB value
		const getLightness = (color) => {
			const [r, g, b] = color.match(/\d+/g).map((n) => n / 255)
			// Using WCAG 2 formula to get Relative luminance of how bright the current background is on users first page load
			return 0.2126 * r + 0.7152 * g + 0.0722 * b
		}

		// Get the background color of the body and set
		const bgColor = window.getComputedStyle(document.body).backgroundColor
		const isDark = getLightness(bgColor) < 0.5
		setTheme(isDark ? 'Dark' : 'Light')
	}, 5)
}


/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Weather: () => (/* binding */ Weather)
/* harmony export */ });
class Weather {
	// Since this is a free key and a small personal project hosted on github
	// I don't care that I can't actually hide it lol (never do this)
	// Carry on, bots and nosey hackers
	static weatherKey = '6736d10c44a04f25826202900241206'

	async getWeather(location) {
		try {
			const response = await fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=${Weather.weatherKey}&q=${location}&days=7`
			)

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()

			if (data.error) {
				throw new Error(data.error.message || 'Unknown API error')
			}

			return this.processData(data)
		} catch (error) {
			console.error(`An error occurred while fetching weather data: ${error}`)
			throw error
		}
	}

	processData(data) {
		return {
			location: {
				city: data.location.name,
				region: data.location.region,
				country: data.location.country,
				time: data.location.localtime,

				// Coordinates
				lat: data.location.lat,
				lon: data.location.long,
			},

			current: {
				temp: data.current.temp_f,
				feelslike_f: data.current.feelslike_f,

				// Icon & Text
				icon: data.current.condition.icon,
				text: data.current.condition.text,

				forecast: {
					mintemp: data.forecast.forecastday[0].day.mintemp_f,
					maxtemp: data.forecast.forecastday[0].day.maxtemp_f,
					condition: data.forecast.forecastday[0].day.condition.text,
				},
			},

			// Tomorrow
			oneday: {
				avgtemp: data.forecast.forecastday[1].day.avgtemp_f,
				icon: data.forecast.forecastday[1].day.condition.icon,
				text: data.forecast.forecastday[1].day.condition.text,
			},

			// Two days from now
			twodays: {
				avgtemp: data.forecast.forecastday[2].day.avgtemp_f,
				icon: data.forecast.forecastday[2].day.condition.icon,
				text: data.forecast.forecastday[2].day.condition.text,
			},
		}
	}

	static fahrenheitToCelsius(f) {
		return ((f - 32) * 5) / 9
	}

	static celsiusToFahrenheit(c) {
		return (c * 9) / 5 + 32
	}
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./src/js/weather.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.js */ "./src/js/theme.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_js__WEBPACK_IMPORTED_MODULE_3__);
// -------------------------
// IMPORT





const weather = new _weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather()

// -------------------------
// DOM ELEMENTS
const formSubmit = document.getElementById('form-submit')
const formInput = document.getElementById('form-input')
const todayCard = document.getElementById('hero')
const tomorrowCard = document.getElementById('tomorrow-card')
const twoDaysCard = document.getElementById('twoDays-card')

// -------------------------
// EVENT LISTENERS

formSubmit.addEventListener('click', async (e) => {
	e.preventDefault()
	if (formInput.value === '') return

	try {
		// console.log(`Fetching weather for: ${formInput.value}`)
		const weatherData = await weather.getWeather(
			`${formInput.value.toLowerCase()}`
		)
		// console.log('Weather data received:', weatherData)
		updateUI(weatherData)
	} catch (error) {
		console.error(`Error fetching weather: ${error}`)
	}
})

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function updateUI(data) {
	if (data.error) {
		todayCard.textContent = data.message
	} else {
		todayCard.innerHTML = `
      <h1>${data.location.city}, ${abbrState(data.location.region)}</h1>
      <h2>${data.location.country}</h2>
      <span class='time'>${formatDate(data.location.time)}</span>
      <h3>${data.current.temp} °F</h3>

      <div class='current'>
        <img class='c1' src='${data.current.icon}' alt='${data.current.text}'>
        <span class='c2'>${data.current.text}</span>
      </div>

      <div class='forecast'>
        <span class='f1'>Lowest: ${data.current.forecast.mintemp} °F</span>
        <span class='noclick'>|</span>
        <span class='f2'>Highest: ${data.current.forecast.maxtemp} °F</span>
      </div>
    `

		tomorrowCard.innerHTML = `
      <span>Tomorrow</span>
      <div class='current-card'>
        <img src='${data.oneday.icon}' alt='${data.oneday.text}'>
        <span class='one-span'>${data.oneday.avgtemp} °F</span>
      </div>
    `

		twoDaysCard.innerHTML = `
      <span>In Two Days..</span>
      <div class='current-card'>
        <img src='${data.twodays.icon}' alt='${data.twodays.text}'>
        <span class='two-span'>${data.twodays.avgtemp} °F</span>
      </div>
    `

		const h3Element = todayCard.querySelector('h3')
		const f1 = document.querySelector('.f1')
		const f2 = document.querySelector('.f2')
		const oneSpan = document.querySelector('.one-span')
		const twoSpan = document.querySelector('.two-span')
		h3Element.addEventListener('click', () =>
			updateTemperature(h3Element, f1, f2, oneSpan, twoSpan)
		)
	}
}

function updateTemperature(h3, f1, f2, oneSpan, twoSpan) {
	let [h3Temp, h3Unit] = h3.textContent.split(' ')
	let [, lowTemp, lowUnit] = f1.textContent.split(' ')
	let [, highTemp, highUnit] = f2.textContent.split(' ')
	let [tomTemp, tomUnit] = oneSpan.textContent.split(' ')
	let [twoTemp, twoUnit] = twoSpan.textContent.split(' ')

	if (h3Unit === '°F') {
		h3Temp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.fahrenheitToCelsius(+h3Temp))
		lowTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.fahrenheitToCelsius(+lowTemp))
		highTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.fahrenheitToCelsius(+highTemp))
		tomTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.fahrenheitToCelsius(+tomTemp))
		twoTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.fahrenheitToCelsius(+twoTemp))
		h3Unit = '°C'
	} else {
		h3Temp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.celsiusToFahrenheit(+h3Temp))
		lowTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.celsiusToFahrenheit(+lowTemp))
		highTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.celsiusToFahrenheit(+highTemp))
		tomTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.celsiusToFahrenheit(+tomTemp))
		twoTemp = Math.round(_weather_js__WEBPACK_IMPORTED_MODULE_2__.Weather.celsiusToFahrenheit(+twoTemp))
		h3Unit = '°F'
	}

	// Set all units to same value
	h3Unit = lowUnit = highUnit = tomUnit = twoUnit = h3Unit

	h3.textContent = `${h3Temp} ${h3Unit}`
	f1.textContent = `Lowest: ${lowTemp} ${lowUnit}`
	f2.textContent = `Highest: ${highTemp} ${highUnit}`
	oneSpan.textContent = `${tomTemp} ${tomUnit}`
	twoSpan.textContent = `${twoTemp} ${twoUnit}`
}

function abbrState(stateName) {
	const stateList = {
		Arizona: 'AZ',
		Alabama: 'AL',
		Alaska: 'AK',
		Arkansas: 'AR',
		California: 'CA',
		Colorado: 'CO',
		Connecticut: 'CT',
		Delaware: 'DE',
		Florida: 'FL',
		Georgia: 'GA',
		Hawaii: 'HI',
		Idaho: 'ID',
		Illinois: 'IL',
		Indiana: 'IN',
		Iowa: 'IA',
		Kansas: 'KS',
		Kentucky: 'KY',
		Louisiana: 'LA',
		Maine: 'ME',
		Maryland: 'MD',
		Massachusetts: 'MA',
		Michigan: 'MI',
		Minnesota: 'MN',
		Mississippi: 'MS',
		Missouri: 'MO',
		Montana: 'MT',
		Nebraska: 'NE',
		Nevada: 'NV',
		'New Hampshire': 'NH',
		'New Jersey': 'NJ',
		'New Mexico': 'NM',
		'New York': 'NY',
		'North Carolina': 'NC',
		'North Dakota': 'ND',
		Ohio: 'OH',
		Oklahoma: 'OK',
		Oregon: 'OR',
		Pennsylvania: 'PA',
		'Rhode Island': 'RI',
		'South Carolina': 'SC',
		'South Dakota': 'SD',
		Tennessee: 'TN',
		Texas: 'TX',
		Utah: 'UT',
		Vermont: 'VT',
		Virginia: 'VA',
		Washington: 'WA',
		'West Virginia': 'WV',
		Wisconsin: 'WI',
		Wyoming: 'WY',
	}

	return stateList[stateName] || stateName
}

function formatDate(dateString) {
	const [dateStr, timeStr] = dateString.split(' ')
	const [year, month, day] = dateStr.split('-')
	const [hour, minute] = timeStr.split(':')

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const getSuffix = (day) => {
		if (day >= 11 && day <= 13) return 'th' // Exception for 11-13
		const lastDigit = day % 10
		// 0th - 9th
		return ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][
			lastDigit
		]
	}

	const formattedDate = `${months[(month, 10) - 1]} ${day}${getSuffix(
		day
	)}, ${year}`

	const period = hour >= 12 ? 'PM' : 'AM'
	const twelveHour = hour % 12 || 12 // converts 0 to 12
	const formattedTime = `${twelveHour}:${minute} ${period}`

	return `${formattedDate} ${formattedTime}`
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHlCQUF5QixFQUFFLElBQUksRUFBRTtBQUMzRDtBQUNBLEdBQUcsSUFBSSxLQUFLOztBQUVaO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVyxHQUFHLFFBQVEsRUFBRSxPQUFPOztBQUV6RCxXQUFXLGVBQWUsRUFBRSxjQUFjO0FBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vc3JjL2pzL3RoZW1lLmpzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9zcmMvanMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCYXNlIGNsZWFuIHNsYXRlICovXHJcbioge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cclxuaW1nLFxyXG5waWN0dXJlIHtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7IC8qIFZpc3VhbGx5IG9mZnNldCBhbHQgdGV4dCB0byBkaWZmZXJlbnRpYXRlIGZyb20gc3Vycm91bmRpbmcgdGV4dCAgKi9cclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIFJlbW92ZSBwaGFudG9tIHdoaXRlc3BhY2UgKi9cclxufVxyXG5cclxuLyogU29tZSByZXNldCBydWxlcyBiYXNlZCBvbiBwaWNjYWxpbCBjc3MgcmVzZXQgKi9cclxuLyogaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xyXG4vKiBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAyNDA0MjkyMzM3NTUvaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xyXG5cclxuLyogUHJldmVudCBmb250IHNpemUgaW5mbGF0aW9uICovXHJcbmh0bWwge1xyXG5cdC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcblx0dGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxufVxyXG5cclxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xyXG5ib2R5IHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiBTZXQgc2hvcnRlciBsaW5lIGhlaWdodHMgb24gaGVhZGluZ3MgYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzICovXHJcbi8qIFdvcnRoIGl0IHRvIGNoYW5nZSBpZiBmb250cyBoYXZlIGxhcmdlIGFzY2VuZGVycyBhbmQgZGVzY2VuZGVycyAqL1xyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuYnV0dG9uLFxyXG5pbnB1dCxcclxubGFiZWwge1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuXHJcbi8qIEJhbGFuY2UgdGV4dCB3cmFwcGluZyBvbiBoZWFkaW5ncyAqL1xyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCB7XHJcblx0dGV4dC13cmFwOiBiYWxhbmNlO1xyXG59XHJcblxyXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xyXG5hOm5vdChbY2xhc3NdKSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG5cdGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSB0ZXh0YXJlYXMgd2l0aG91dCBhIHJvd3MgYXR0cmlidXRlIGFyZSBub3QgdGlueSAqL1xyXG50ZXh0YXJlYTpub3QoW3Jvd3NdKSB7XHJcblx0bWluLWhlaWdodDogMTBlbTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQjs7QUFFQSxvQ0FBb0M7QUFDcEM7O0NBRUMsa0JBQWtCLEVBQUUscUVBQXFFO0NBQ3pGLGVBQWU7Q0FDZixZQUFZO0NBQ1osc0JBQXNCLEVBQUUsOEJBQThCO0FBQ3ZEOztBQUVBLGlEQUFpRDtBQUNqRCxzREFBc0Q7QUFDdEQsaUdBQWlHOztBQUVqRyxnQ0FBZ0M7QUFDaEM7Q0FDQywyQkFBMkI7Q0FDM0IsOEJBQThCO0NBQzlCLHNCQUFzQjtBQUN2Qjs7QUFFQSwyQkFBMkI7QUFDM0I7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBLGtFQUFrRTtBQUNsRSxvRUFBb0U7QUFDcEU7Ozs7Ozs7Q0FPQyxnQkFBZ0I7QUFDakI7O0FBRUEsc0NBQXNDO0FBQ3RDOzs7O0NBSUMsa0JBQWtCO0FBQ25COztBQUVBLDBEQUEwRDtBQUMxRDtDQUNDLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0NBSUMsb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQjs7QUFFQSw4REFBOEQ7QUFDOUQ7Q0FDQyxnQkFBZ0I7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmFzZSBjbGVhbiBzbGF0ZSAqL1xcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSB7XFxyXFxuXFx0Zm9udC1zdHlsZTogaXRhbGljOyAvKiBWaXN1YWxseSBvZmZzZXQgYWx0IHRleHQgdG8gZGlmZmVyZW50aWF0ZSBmcm9tIHN1cnJvdW5kaW5nIHRleHQgICovXFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiBSZW1vdmUgcGhhbnRvbSB3aGl0ZXNwYWNlICovXFxyXFxufVxcclxcblxcclxcbi8qIFNvbWUgcmVzZXQgcnVsZXMgYmFzZWQgb24gcGljY2FsaWwgY3NzIHJlc2V0ICovXFxyXFxuLyogaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xcclxcbi8qIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDI0MDQyOTIzMzc1NS9odHRwczovL3BpY2NhbGlsLmxpL2Jsb2cvYS1tb3JlLW1vZGVybi1jc3MtcmVzZXQvICovXFxyXFxuXFxyXFxuLyogUHJldmVudCBmb250IHNpemUgaW5mbGF0aW9uICovXFxyXFxuaHRtbCB7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG5cXHR0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxyXFxuYm9keSB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IHNob3J0ZXIgbGluZSBoZWlnaHRzIG9uIGhlYWRpbmdzIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcclxcbi8qIFdvcnRoIGl0IHRvIGNoYW5nZSBpZiBmb250cyBoYXZlIGxhcmdlIGFzY2VuZGVycyBhbmQgZGVzY2VuZGVycyAqL1xcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5sYWJlbCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQmFsYW5jZSB0ZXh0IHdyYXBwaW5nIG9uIGhlYWRpbmdzICovXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQge1xcclxcblxcdHRleHQtd3JhcDogYmFsYW5jZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXHJcXG5hOm5vdChbY2xhc3NdKSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcclxcblxcdGNvbG9yOiBjdXJyZW50Q29sb3I7XFxyXFxufVxcclxcblxcclxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBzdXJlIHRleHRhcmVhcyB3aXRob3V0IGEgcm93cyBhdHRyaWJ1dGUgYXJlIG5vdCB0aW55ICovXFxyXFxudGV4dGFyZWE6bm90KFtyb3dzXSkge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgR0xPQkFMUyBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgWzFdIFNpemUgaGFjayB0byBzZXQgZGVmYXVsdCBmb250IHNpemUgdG8gXCIxMHB4XCIgdG8gbWFrZSAxcmVtXHJcbiAgICAgICAgdGhlIGVxdWl2ZWxlbnQgb2YgMTBweC4gKDIuNHJlbSA9IDI0cHgsIDAuOHJlbSA9IDhweCwgZXRjKVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbjpyb290IHtcclxuXHRjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XHJcblx0Zm9udC1zaXplOiA2Mi41JTsgLyogWzFdICovXHJcblxyXG5cdC8qIERhcmsgTW9kZSBDb2xvcnMgKi9cclxuXHQtLWJnX2Rhcms6IGhzbCgwLCA1JSwgMTAlKTtcclxuXHJcblx0LyogTGlnaHQgTW9kZSBDb2xvcnMgKi9cclxuXHQtLWJnX2xpZ2h0OiBoc2woNDUsIDQwJSwgOTQlKTtcclxuXHJcblx0LyogTWFpbiBjb2xvcnMgKi9cclxuXHQtLUNPTE9SX0JHOiBsaWdodC1kYXJrKHZhcigtLWJnX2xpZ2h0KSwgdmFyKC0tYmdfZGFyaykpO1xyXG5cdC0tQ09MT1JfUFJJTUFSWTogaHNsKDIyMCwgOTAlLCAxNSUpO1xyXG5cdC0tQ09MT1JfU0VDT05EQVJZOiBoc2woMzAzLCA3MSUsIDczJSk7XHJcblx0LS1DT0xPUl9PRkZCTFVFOiBoc2woMjA4LCA0NCUsIDU1JSk7XHJcblxyXG5cdC8qIFRleHQgKi9cclxuXHQtLUZPTlRfQ09MT1I6IGxpZ2h0LWRhcmsodmFyKC0tYmdfZGFyayksIHZhcigtLWJnX2xpZ2h0KSk7XHJcblxyXG5cdCY6aGFzKCN0aGVtZS10b2dnbGU6bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpKSB7XHJcblx0XHRjb2xvci1zY2hlbWU6IGxpZ2h0O1xyXG5cdH1cclxuXHJcblx0JjpoYXMoI3RoZW1lLXRvZ2dsZTpjaGVja2VkKSB7XHJcblx0XHRjb2xvci1zY2hlbWU6IGRhcms7XHJcblx0fVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBCQVNFIFNUWUxFUyBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIFsgYm9keSwgZm9udHMsIHRleHQgZWxlbWVudHMsIG1lZGlhIGVsZW1lbnRzIF1cclxuICAgICogU3R5bGVzIHRoYXQgYXJlIHNoYXJlZCBhY3Jvc3MgdGhlIGVudGlyZSBzaXRlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuYm9keSB7XHJcblx0Zm9udC1zaXplOiAxLjhyZW07XHJcblx0dHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XHJcblx0Y29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xyXG5cdGNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XHJcbn1cclxuXHJcbi5ub2NsaWNrIHtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgSEVBREVSIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqIFR5cGljYWxseSBhIGhlYWRlciBoYXMgYnJhbmRpbmcgYW5kIGEgc2l0ZSBuYXZcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5oZWFkZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG59XHJcblxyXG4jdGhlbWUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDEwcHggMTJweCAwIDA7XHJcblx0Z2FwOiAxMHB4O1xyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0c3BhbiB7XHJcblx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuXHRcdHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XHJcblx0fVxyXG5cclxuXHRzcGFuOmhhcyh+IGxhYmVsOmhvdmVyKSB7XHJcblx0XHRjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcblx0XHRvcGFjaXR5OiAxMDA7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG5cdH1cclxuXHJcblx0bGFiZWxbZm9yPSd0aGVtZS10b2dnbGUnXSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHJcblx0c3ZnIHtcclxuXHRcdC50b2dnbGUtc3Ryb2tlIHtcclxuXHRcdFx0c3Ryb2tlOiB2YXIoLS1GT05UX0NPTE9SKTtcclxuXHRcdFx0c3Ryb2tlLXdpZHRoOiA0O1xyXG5cdFx0XHRmaWxsOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC50b2dnbGUtY2lyY2xlIHtcclxuXHRcdFx0dHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG5cdFx0XHRmaWxsOiB2YXIoLS1GT05UX0NPTE9SKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbICVDT05URU5UIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gWyBtYWluLCBzZWN0aW9uLCBkaXYsIGFydGljbGUsIGFzaWRlLCBmb3JtIF1cclxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5tYWluIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDEwMHB4O1xyXG5cclxuXHRmb3JtIHtcclxuXHRcdHdpZHRoOiBtaW4oOTB2dywgNDAwcHgpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qIGdhcDogMTBweDsgKi9cclxuXHJcblx0XHRpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG5cdFx0XHRjb2xvcjogaHNsKDIwNywgNzklLCA2OCUpO1xyXG5cdFx0XHRmbGV4LWdyb3c6IDI7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgaHNsYSgwLCAwJSwgMCUsIDApOyAvKiBlbnN1cmUgYSBib3JkZXIgc28gaXQgZG9lc24ndCByZXNpemUgdGV4dCB3aGVuIGZvY3VzZWQgKi9cclxuXHJcblx0XHRcdCY6Zm9jdXMge1xyXG5cdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tRk9OVF9DT0xPUik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcblx0XHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHRcdFx0Y29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQjaGVybyB7XHJcblx0XHQvKiBCYWNrZ3JvdW5kIGNvbG9yIGNvbnRyb2xsZWQgaW4gLmNhcmQgKi9cclxuXHRcdHdpZHRoOiBtaW4oOTB2dywgNDAwcHgpO1xyXG5cdFx0aGVpZ2h0OiA0NTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcblx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHQvKiBnYXA6IDVweDsgKi9cclxuXHJcblx0XHRoMSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMi40cmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdGgyIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0XHR9XHJcblxyXG5cdFx0aDMge1xyXG5cdFx0XHRmb250LXNpemU6IDVyZW07XHJcblx0XHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luLXRvcDogNjBweDtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRjb2xvcjogaHNsKDM0OSwgNjAlLCA4NSUpO1xyXG5cdFx0XHR0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggaHNsYSgwLCAwJSwgMCUsIDAuNSk7XHJcblx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC50aW1lIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tQ09MT1JfT0ZGQkxVRSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LmN1cnJlbnQsXHJcblx0XHQuZm9yZWNhc3Qge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0Z2FwOiAxMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jdXJyZW50IHtcclxuXHRcdFx0LyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXHJcblx0XHRcdC5jMiB7XHJcblx0XHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmZvcmVjYXN0IHtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0I3dlZWtseSB7XHJcblx0XHRtYXgtd2lkdGg6IDkwdnc7XHJcblx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRnYXA6IDMwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHJcblx0XHQuY2FyZCB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0c3BhbjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfT0ZGQkxVRSk7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jYXJkIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDc5JSwgNjglKTtcclxuXHRcdHdpZHRoOiAyMDBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3N3B4KSB7XHJcblx0XHRnYXA6IDUwcHg7XHJcblxyXG5cdFx0PiAjd2Vla2x5ID4gLmNhcmQge1xyXG5cdFx0XHR3aWR0aDogbWluKDkwdncsIDQwMHB4KTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBGT09URVIgXVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICogVHlwaWNhbGx5IGEgZm9vdGVyIGhhcyBicmFuZGluZyBhbmQgaW1wb3J0YW50IHNpdGUgaW5mb3JtYXRpb25cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5mb290ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O3VFQUt1RTs7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QW1CO0VBQ3BCO0NBQ0Q7QUFDRDs7QUFFQTtBQUNBOztBQUVBOzs7O3VFQUl1RTs7QUFFdkU7Q0FDQyxzQ0FBc0M7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBHTE9CQUxTIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgWzFdIFNpemUgaGFjayB0byBzZXQgZGVmYXVsdCBmb250IHNpemUgdG8gXFxcIjEwcHhcXFwiIHRvIG1ha2UgMXJlbVxcclxcbiAgICAgICAgdGhlIGVxdWl2ZWxlbnQgb2YgMTBweC4gKDIuNHJlbSA9IDI0cHgsIDAuOHJlbSA9IDhweCwgZXRjKVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHRjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XFxyXFxuXFx0Zm9udC1zaXplOiA2Mi41JTsgLyogWzFdICovXFxyXFxuXFxyXFxuXFx0LyogRGFyayBNb2RlIENvbG9ycyAqL1xcclxcblxcdC0tYmdfZGFyazogaHNsKDAsIDUlLCAxMCUpO1xcclxcblxcclxcblxcdC8qIExpZ2h0IE1vZGUgQ29sb3JzICovXFxyXFxuXFx0LS1iZ19saWdodDogaHNsKDQ1LCA0MCUsIDk0JSk7XFxyXFxuXFxyXFxuXFx0LyogTWFpbiBjb2xvcnMgKi9cXHJcXG5cXHQtLUNPTE9SX0JHOiBsaWdodC1kYXJrKHZhcigtLWJnX2xpZ2h0KSwgdmFyKC0tYmdfZGFyaykpO1xcclxcblxcdC0tQ09MT1JfUFJJTUFSWTogaHNsKDIyMCwgOTAlLCAxNSUpO1xcclxcblxcdC0tQ09MT1JfU0VDT05EQVJZOiBoc2woMzAzLCA3MSUsIDczJSk7XFxyXFxuXFx0LS1DT0xPUl9PRkZCTFVFOiBoc2woMjA4LCA0NCUsIDU1JSk7XFxyXFxuXFxyXFxuXFx0LyogVGV4dCAqL1xcclxcblxcdC0tRk9OVF9DT0xPUjogbGlnaHQtZGFyayh2YXIoLS1iZ19kYXJrKSwgdmFyKC0tYmdfbGlnaHQpKTtcXHJcXG5cXHJcXG5cXHQmOmhhcygjdGhlbWUtdG9nZ2xlOm5vdCg6Y2hlY2tlZCk6bm90KDppbmRldGVybWluYXRlKSkge1xcclxcblxcdFxcdGNvbG9yLXNjaGVtZTogbGlnaHQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6aGFzKCN0aGVtZS10b2dnbGU6Y2hlY2tlZCkge1xcclxcblxcdFxcdGNvbG9yLXNjaGVtZTogZGFyaztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgQkFTRSBTVFlMRVMgXVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gWyBib2R5LCBmb250cywgdGV4dCBlbGVtZW50cywgbWVkaWEgZWxlbWVudHMgXVxcclxcbiAgICAqIFN0eWxlcyB0aGF0IGFyZSBzaGFyZWQgYWNyb3NzIHRoZSBlbnRpcmUgc2l0ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcclxcblxcdHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG46OnNlbGVjdGlvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9jbGljayB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgSEVBREVSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBUeXBpY2FsbHkgYSBoZWFkZXIgaGFzIGJyYW5kaW5nIGFuZCBhIHNpdGUgbmF2XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RoZW1lIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDEycHggMCAwO1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHJcXG5cXHRpbnB1dCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0c3BhbiB7XFxyXFxuXFx0XFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiAyNTBtcyBlYXNlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRzcGFuOmhhcyh+IGxhYmVsOmhvdmVyKSB7XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcblxcdFxcdG9wYWNpdHk6IDEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRsYWJlbFtmb3I9J3RoZW1lLXRvZ2dsZSddIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0c3ZnIHtcXHJcXG5cXHRcXHQudG9nZ2xlLXN0cm9rZSB7XFxyXFxuXFx0XFx0XFx0c3Ryb2tlOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG5cXHRcXHRcXHRzdHJva2Utd2lkdGg6IDQ7XFxyXFxuXFx0XFx0XFx0ZmlsbDogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnRvZ2dsZS1jaXJjbGUge1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXHJcXG5cXHRcXHRcXHRmaWxsOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbICVDT05URU5UIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXFxyXFxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDEwMHB4O1xcclxcblxcclxcblxcdGZvcm0ge1xcclxcblxcdFxcdHdpZHRoOiBtaW4oOTB2dywgNDAwcHgpO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0LyogZ2FwOiAxMHB4OyAqL1xcclxcblxcclxcblxcdFxcdGlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6IGhzbCgyMDcsIDc5JSwgNjglKTtcXHJcXG5cXHRcXHRcXHRmbGV4LWdyb3c6IDI7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCBoc2xhKDAsIDAlLCAwJSwgMCk7IC8qIGVuc3VyZSBhIGJvcmRlciBzbyBpdCBkb2Vzbid0IHJlc2l6ZSB0ZXh0IHdoZW4gZm9jdXNlZCAqL1xcclxcblxcclxcblxcdFxcdFxcdCY6Zm9jdXMge1xcclxcblxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tRk9OVF9DT0xPUik7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDYwcHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA0MHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjaGVybyB7XFxyXFxuXFx0XFx0LyogQmFja2dyb3VuZCBjb2xvciBjb250cm9sbGVkIGluIC5jYXJkICovXFxyXFxuXFx0XFx0d2lkdGg6IG1pbig5MHZ3LCA0MDBweCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiA0NTBweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdC8qIGdhcDogNXB4OyAqL1xcclxcblxcclxcblxcdFxcdGgxIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDIuNHJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aDIge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMS42cmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRoMyB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiA1cmVtO1xcclxcblxcdFxcdFxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiA2MHB4O1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRjb2xvcjogaHNsKDM0OSwgNjAlLCA4NSUpO1xcclxcblxcdFxcdFxcdHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXHJcXG5cXHRcXHRcXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnRpbWUge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMTBweCAwO1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1DT0xPUl9PRkZCTFVFKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmN1cnJlbnQsXFxyXFxuXFx0XFx0LmZvcmVjYXN0IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGdhcDogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmN1cnJlbnQge1xcclxcblxcdFxcdFxcdC8qIHVzZXItc2VsZWN0OiBub25lOyAqL1xcclxcblxcdFxcdFxcdC5jMiB7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmZvcmVjYXN0IHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRcXHRcXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3dlZWtseSB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiA5MHZ3O1xcclxcblxcdFxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0Z2FwOiAzMHB4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG5cXHRcXHQuY2FyZCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRzcGFuOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9PRkZCTFVFKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY2FyZCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgNzklLCA2OCUpO1xcclxcblxcdFxcdHdpZHRoOiAyMDBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc3cHgpIHtcXHJcXG5cXHRcXHRnYXA6IDUwcHg7XFxyXFxuXFxyXFxuXFx0XFx0PiAjd2Vla2x5ID4gLmNhcmQge1xcclxcblxcdFxcdFxcdHdpZHRoOiBtaW4oOTB2dywgNDAwcHgpO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgRk9PVEVSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBUeXBpY2FsbHkgYSBmb290ZXIgaGFzIGJyYW5kaW5nIGFuZCBpbXBvcnRhbnQgc2l0ZSBpbmZvcm1hdGlvblxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXRvZ2dsZScpXHJcbmNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxyXG5jb25zdCB0aGVtZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtdGV4dCcpXHJcbmNvbnN0IGxlZnRDaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLXVuY2hlY2tlZCcpXHJcbmNvbnN0IHJpZ2h0Q2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1jaGVja2VkJylcclxuXHJcbi8vIFNhdmUgc3RhdGUgb2YgY2hlY2tib3ggYmFzZWQgb24gY3VycmVudCB0aGVtZSBjaG9zZW5cclxuaWYgKHNhdmVkVGhlbWUpIHtcclxuXHRzZXRUaGVtZShzYXZlZFRoZW1lKVxyXG5cdHVwZGF0ZVRvZ2dsZVBvc2l0aW9ucygpXHJcbn0gZWxzZSB7XHJcblx0Ly8gU2V0IHRoZSBzdGF0ZSBvZiBjaGVja2JveCB0byBiZSBuZWl0aGVyIHRydWUgb3IgZmFsc2UgZm9yIGZpcnN0IHBhZ2UgbG9hZFxyXG5cdHRoZW1lVG9nZ2xlLmluZGV0ZXJtaW5hdGUgPSB0cnVlXHJcbn1cclxuXHJcbnRoZW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHRzZXRUaGVtZSh0aGVtZVRvZ2dsZS5jaGVja2VkID8gJ0RhcmsnIDogJ0xpZ2h0JylcclxuXHR1cGRhdGVUb2dnbGVQb3NpdGlvbnMoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9nZ2xlUG9zaXRpb25zKCkge1xyXG5cdGlmICh0aGVtZVRvZ2dsZS5jaGVja2VkKSB7XHJcblx0XHRsZWZ0Q2lyY2xlLnNldEF0dHJpYnV0ZSgnY3gnLCA4KVxyXG5cdFx0cmlnaHRDaXJjbGUuc2V0QXR0cmlidXRlKCdjeCcsIDcwKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRsZWZ0Q2lyY2xlLnNldEF0dHJpYnV0ZSgnY3gnLCAtMjIpXHJcblx0XHRyaWdodENpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N4JywgNDApXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSkge1xyXG5cdHRoZW1lVG9nZ2xlLmNoZWNrZWQgPSB0aGVtZSA9PT0gJ0RhcmsnXHJcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpXHJcblx0Ly8gU2V0IHRoZW1lLXRleHQgc3BhbiB0byBkaXNwbGF5IG9wcG9zaXRlIHRoZW1lIG1vZGUgKHRoYXQgeW91IHdpbGwgYmUgY2hhbmdpbmcgdG8pXHJcblx0dGhlbWVUZXh0LnRleHRDb250ZW50ID0gYCR7dGhlbWUgPT09ICdEYXJrJyA/ICdMaWdodCcgOiAnRGFyayd9IE1vZGVgXHJcbn1cclxuXHJcbi8vIE9ubHkgcnVucyBvbiB1c2VycyBmaXJzdCBwYWdlIGxvYWQhXHJcbi8vIFRoaXMgd2FzIHRoZSBvbmx5IHdheSBJIGNvdWxkIHNvbHZlIGEgYnVnIHRoYXQgZm9yY2VkIHN5c3RlbSBkYXJrbW9kZSB1c2VycyB0byBjbGljayB0aGUgY2hlY2tib3ggdHdpY2UuXHJcbi8vIFRoZSBpbnRlbnRpb24gaXMgZm9yIHRoZSB1c2VycyBWRVJZIEZJUlNUIGxvYWQsIHNldCB0aGUgdGhlbWUgYW5kIGNoZWNrYm94IGFjY29yZGluZ2x5LlxyXG5pZiAoIXNhdmVkVGhlbWUpIHtcclxuXHQvL1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0Ly8gR2V0IHRoZSBwcmVjZWl2ZWQgbGlnaHRuZXNzIG9mIGFuIFJHQiB2YWx1ZVxyXG5cdFx0Y29uc3QgZ2V0TGlnaHRuZXNzID0gKGNvbG9yKSA9PiB7XHJcblx0XHRcdGNvbnN0IFtyLCBnLCBiXSA9IGNvbG9yLm1hdGNoKC9cXGQrL2cpLm1hcCgobikgPT4gbiAvIDI1NSlcclxuXHRcdFx0Ly8gVXNpbmcgV0NBRyAyIGZvcm11bGEgdG8gZ2V0IFJlbGF0aXZlIGx1bWluYW5jZSBvZiBob3cgYnJpZ2h0IHRoZSBjdXJyZW50IGJhY2tncm91bmQgaXMgb24gdXNlcnMgZmlyc3QgcGFnZSBsb2FkXHJcblx0XHRcdHJldHVybiAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGJcclxuXHRcdH1cclxuXHJcblx0XHQvLyBHZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJvZHkgYW5kIHNldFxyXG5cdFx0Y29uc3QgYmdDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmJhY2tncm91bmRDb2xvclxyXG5cdFx0Y29uc3QgaXNEYXJrID0gZ2V0TGlnaHRuZXNzKGJnQ29sb3IpIDwgMC41XHJcblx0XHRzZXRUaGVtZShpc0RhcmsgPyAnRGFyaycgOiAnTGlnaHQnKVxyXG5cdH0sIDUpXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFdlYXRoZXIge1xyXG5cdC8vIFNpbmNlIHRoaXMgaXMgYSBmcmVlIGtleSBhbmQgYSBzbWFsbCBwZXJzb25hbCBwcm9qZWN0IGhvc3RlZCBvbiBnaXRodWJcclxuXHQvLyBJIGRvbid0IGNhcmUgdGhhdCBJIGNhbid0IGFjdHVhbGx5IGhpZGUgaXQgbG9sIChuZXZlciBkbyB0aGlzKVxyXG5cdC8vIENhcnJ5IG9uLCBib3RzIGFuZCBub3NleSBoYWNrZXJzXHJcblx0c3RhdGljIHdlYXRoZXJLZXkgPSAnNjczNmQxMGM0NGEwNGYyNTgyNjIwMjkwMDI0MTIwNidcclxuXHJcblx0YXN5bmMgZ2V0V2VhdGhlcihsb2NhdGlvbikge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0XHRgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtXZWF0aGVyLndlYXRoZXJLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz03YFxyXG5cdFx0XHQpXHJcblxyXG5cdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBBUEkgZXJyb3InKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9jZXNzRGF0YShkYXRhKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOiAke2Vycm9yfWApXHJcblx0XHRcdHRocm93IGVycm9yXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm9jZXNzRGF0YShkYXRhKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsb2NhdGlvbjoge1xyXG5cdFx0XHRcdGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuXHRcdFx0XHRyZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxyXG5cdFx0XHRcdGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcclxuXHRcdFx0XHR0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuXHJcblx0XHRcdFx0Ly8gQ29vcmRpbmF0ZXNcclxuXHRcdFx0XHRsYXQ6IGRhdGEubG9jYXRpb24ubGF0LFxyXG5cdFx0XHRcdGxvbjogZGF0YS5sb2NhdGlvbi5sb25nLFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Y3VycmVudDoge1xyXG5cdFx0XHRcdHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2YsXHJcblx0XHRcdFx0ZmVlbHNsaWtlX2Y6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcclxuXHJcblx0XHRcdFx0Ly8gSWNvbiAmIFRleHRcclxuXHRcdFx0XHRpY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXHJcblx0XHRcdFx0dGV4dDogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG5cclxuXHRcdFx0XHRmb3JlY2FzdDoge1xyXG5cdFx0XHRcdFx0bWludGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxyXG5cdFx0XHRcdFx0bWF4dGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxyXG5cdFx0XHRcdFx0Y29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8gVG9tb3Jyb3dcclxuXHRcdFx0b25lZGF5OiB7XHJcblx0XHRcdFx0YXZndGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9mLFxyXG5cdFx0XHRcdGljb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cdFx0XHRcdHRleHQ6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8gVHdvIGRheXMgZnJvbSBub3dcclxuXHRcdFx0dHdvZGF5czoge1xyXG5cdFx0XHRcdGF2Z3RlbXA6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfZixcclxuXHRcdFx0XHRpY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHRcdFx0XHR0ZXh0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24udGV4dCxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmYWhyZW5oZWl0VG9DZWxzaXVzKGYpIHtcclxuXHRcdHJldHVybiAoKGYgLSAzMikgKiA1KSAvIDlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjZWxzaXVzVG9GYWhyZW5oZWl0KGMpIHtcclxuXHRcdHJldHVybiAoYyAqIDkpIC8gNSArIDMyXHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElNUE9SVFxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvcmVzZXQuY3NzJ1xuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gJy4vd2VhdGhlci5qcydcbmltcG9ydCBUSEVNRSBmcm9tICcuL3RoZW1lLmpzJ1xuXG5jb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIoKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBET00gRUxFTUVOVFNcbmNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1zdWJtaXQnKVxuY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0taW5wdXQnKVxuY29uc3QgdG9kYXlDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8nKVxuY29uc3QgdG9tb3Jyb3dDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvbW9ycm93LWNhcmQnKVxuY29uc3QgdHdvRGF5c0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvRGF5cy1jYXJkJylcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVZFTlQgTElTVEVORVJTXG5cbmZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuXHRlLnByZXZlbnREZWZhdWx0KClcblx0aWYgKGZvcm1JbnB1dC52YWx1ZSA9PT0gJycpIHJldHVyblxuXG5cdHRyeSB7XG5cdFx0Ly8gY29uc29sZS5sb2coYEZldGNoaW5nIHdlYXRoZXIgZm9yOiAke2Zvcm1JbnB1dC52YWx1ZX1gKVxuXHRcdGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXRXZWF0aGVyKFxuXHRcdFx0YCR7Zm9ybUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCl9YFxuXHRcdClcblx0XHQvLyBjb25zb2xlLmxvZygnV2VhdGhlciBkYXRhIHJlY2VpdmVkOicsIHdlYXRoZXJEYXRhKVxuXHRcdHVwZGF0ZVVJKHdlYXRoZXJEYXRhKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIHdlYXRoZXI6ICR7ZXJyb3J9YClcblx0fVxufSlcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbICVGVU5DVElPTlMgXVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBkZXNjcmlwdGlvblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmZ1bmN0aW9uIHVwZGF0ZVVJKGRhdGEpIHtcblx0aWYgKGRhdGEuZXJyb3IpIHtcblx0XHR0b2RheUNhcmQudGV4dENvbnRlbnQgPSBkYXRhLm1lc3NhZ2Vcblx0fSBlbHNlIHtcblx0XHR0b2RheUNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGgxPiR7ZGF0YS5sb2NhdGlvbi5jaXR5fSwgJHthYmJyU3RhdGUoZGF0YS5sb2NhdGlvbi5yZWdpb24pfTwvaDE+XG4gICAgICA8aDI+JHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9PC9oMj5cbiAgICAgIDxzcGFuIGNsYXNzPSd0aW1lJz4ke2Zvcm1hdERhdGUoZGF0YS5sb2NhdGlvbi50aW1lKX08L3NwYW4+XG4gICAgICA8aDM+JHtkYXRhLmN1cnJlbnQudGVtcH0gwrBGPC9oMz5cblxuICAgICAgPGRpdiBjbGFzcz0nY3VycmVudCc+XG4gICAgICAgIDxpbWcgY2xhc3M9J2MxJyBzcmM9JyR7ZGF0YS5jdXJyZW50Lmljb259JyBhbHQ9JyR7ZGF0YS5jdXJyZW50LnRleHR9Jz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2MyJz4ke2RhdGEuY3VycmVudC50ZXh0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPSdmb3JlY2FzdCc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdmMSc+TG93ZXN0OiAke2RhdGEuY3VycmVudC5mb3JlY2FzdC5taW50ZW1wfSDCsEY8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdub2NsaWNrJz58PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz0nZjInPkhpZ2hlc3Q6ICR7ZGF0YS5jdXJyZW50LmZvcmVjYXN0Lm1heHRlbXB9IMKwRjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIGBcblxuXHRcdHRvbW9ycm93Q2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3Bhbj5Ub21vcnJvdzwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9J2N1cnJlbnQtY2FyZCc+XG4gICAgICAgIDxpbWcgc3JjPScke2RhdGEub25lZGF5Lmljb259JyBhbHQ9JyR7ZGF0YS5vbmVkYXkudGV4dH0nPlxuICAgICAgICA8c3BhbiBjbGFzcz0nb25lLXNwYW4nPiR7ZGF0YS5vbmVkYXkuYXZndGVtcH0gwrBGPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYFxuXG5cdFx0dHdvRGF5c0NhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPHNwYW4+SW4gVHdvIERheXMuLjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9J2N1cnJlbnQtY2FyZCc+XG4gICAgICAgIDxpbWcgc3JjPScke2RhdGEudHdvZGF5cy5pY29ufScgYWx0PScke2RhdGEudHdvZGF5cy50ZXh0fSc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSd0d28tc3Bhbic+JHtkYXRhLnR3b2RheXMuYXZndGVtcH0gwrBGPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYFxuXG5cdFx0Y29uc3QgaDNFbGVtZW50ID0gdG9kYXlDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2gzJylcblx0XHRjb25zdCBmMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mMScpXG5cdFx0Y29uc3QgZjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZjInKVxuXHRcdGNvbnN0IG9uZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25lLXNwYW4nKVxuXHRcdGNvbnN0IHR3b1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHdvLXNwYW4nKVxuXHRcdGgzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdFx0XHR1cGRhdGVUZW1wZXJhdHVyZShoM0VsZW1lbnQsIGYxLCBmMiwgb25lU3BhbiwgdHdvU3Bhbilcblx0XHQpXG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmUoaDMsIGYxLCBmMiwgb25lU3BhbiwgdHdvU3Bhbikge1xuXHRsZXQgW2gzVGVtcCwgaDNVbml0XSA9IGgzLnRleHRDb250ZW50LnNwbGl0KCcgJylcblx0bGV0IFssIGxvd1RlbXAsIGxvd1VuaXRdID0gZjEudGV4dENvbnRlbnQuc3BsaXQoJyAnKVxuXHRsZXQgWywgaGlnaFRlbXAsIGhpZ2hVbml0XSA9IGYyLnRleHRDb250ZW50LnNwbGl0KCcgJylcblx0bGV0IFt0b21UZW1wLCB0b21Vbml0XSA9IG9uZVNwYW4udGV4dENvbnRlbnQuc3BsaXQoJyAnKVxuXHRsZXQgW3R3b1RlbXAsIHR3b1VuaXRdID0gdHdvU3Bhbi50ZXh0Q29udGVudC5zcGxpdCgnICcpXG5cblx0aWYgKGgzVW5pdCA9PT0gJ8KwRicpIHtcblx0XHRoM1RlbXAgPSBNYXRoLnJvdW5kKFdlYXRoZXIuZmFocmVuaGVpdFRvQ2Vsc2l1cygraDNUZW1wKSlcblx0XHRsb3dUZW1wID0gTWF0aC5yb3VuZChXZWF0aGVyLmZhaHJlbmhlaXRUb0NlbHNpdXMoK2xvd1RlbXApKVxuXHRcdGhpZ2hUZW1wID0gTWF0aC5yb3VuZChXZWF0aGVyLmZhaHJlbmhlaXRUb0NlbHNpdXMoK2hpZ2hUZW1wKSlcblx0XHR0b21UZW1wID0gTWF0aC5yb3VuZChXZWF0aGVyLmZhaHJlbmhlaXRUb0NlbHNpdXMoK3RvbVRlbXApKVxuXHRcdHR3b1RlbXAgPSBNYXRoLnJvdW5kKFdlYXRoZXIuZmFocmVuaGVpdFRvQ2Vsc2l1cygrdHdvVGVtcCkpXG5cdFx0aDNVbml0ID0gJ8KwQydcblx0fSBlbHNlIHtcblx0XHRoM1RlbXAgPSBNYXRoLnJvdW5kKFdlYXRoZXIuY2Vsc2l1c1RvRmFocmVuaGVpdCgraDNUZW1wKSlcblx0XHRsb3dUZW1wID0gTWF0aC5yb3VuZChXZWF0aGVyLmNlbHNpdXNUb0ZhaHJlbmhlaXQoK2xvd1RlbXApKVxuXHRcdGhpZ2hUZW1wID0gTWF0aC5yb3VuZChXZWF0aGVyLmNlbHNpdXNUb0ZhaHJlbmhlaXQoK2hpZ2hUZW1wKSlcblx0XHR0b21UZW1wID0gTWF0aC5yb3VuZChXZWF0aGVyLmNlbHNpdXNUb0ZhaHJlbmhlaXQoK3RvbVRlbXApKVxuXHRcdHR3b1RlbXAgPSBNYXRoLnJvdW5kKFdlYXRoZXIuY2Vsc2l1c1RvRmFocmVuaGVpdCgrdHdvVGVtcCkpXG5cdFx0aDNVbml0ID0gJ8KwRidcblx0fVxuXG5cdC8vIFNldCBhbGwgdW5pdHMgdG8gc2FtZSB2YWx1ZVxuXHRoM1VuaXQgPSBsb3dVbml0ID0gaGlnaFVuaXQgPSB0b21Vbml0ID0gdHdvVW5pdCA9IGgzVW5pdFxuXG5cdGgzLnRleHRDb250ZW50ID0gYCR7aDNUZW1wfSAke2gzVW5pdH1gXG5cdGYxLnRleHRDb250ZW50ID0gYExvd2VzdDogJHtsb3dUZW1wfSAke2xvd1VuaXR9YFxuXHRmMi50ZXh0Q29udGVudCA9IGBIaWdoZXN0OiAke2hpZ2hUZW1wfSAke2hpZ2hVbml0fWBcblx0b25lU3Bhbi50ZXh0Q29udGVudCA9IGAke3RvbVRlbXB9ICR7dG9tVW5pdH1gXG5cdHR3b1NwYW4udGV4dENvbnRlbnQgPSBgJHt0d29UZW1wfSAke3R3b1VuaXR9YFxufVxuXG5mdW5jdGlvbiBhYmJyU3RhdGUoc3RhdGVOYW1lKSB7XG5cdGNvbnN0IHN0YXRlTGlzdCA9IHtcblx0XHRBcml6b25hOiAnQVonLFxuXHRcdEFsYWJhbWE6ICdBTCcsXG5cdFx0QWxhc2thOiAnQUsnLFxuXHRcdEFya2Fuc2FzOiAnQVInLFxuXHRcdENhbGlmb3JuaWE6ICdDQScsXG5cdFx0Q29sb3JhZG86ICdDTycsXG5cdFx0Q29ubmVjdGljdXQ6ICdDVCcsXG5cdFx0RGVsYXdhcmU6ICdERScsXG5cdFx0RmxvcmlkYTogJ0ZMJyxcblx0XHRHZW9yZ2lhOiAnR0EnLFxuXHRcdEhhd2FpaTogJ0hJJyxcblx0XHRJZGFobzogJ0lEJyxcblx0XHRJbGxpbm9pczogJ0lMJyxcblx0XHRJbmRpYW5hOiAnSU4nLFxuXHRcdElvd2E6ICdJQScsXG5cdFx0S2Fuc2FzOiAnS1MnLFxuXHRcdEtlbnR1Y2t5OiAnS1knLFxuXHRcdExvdWlzaWFuYTogJ0xBJyxcblx0XHRNYWluZTogJ01FJyxcblx0XHRNYXJ5bGFuZDogJ01EJyxcblx0XHRNYXNzYWNodXNldHRzOiAnTUEnLFxuXHRcdE1pY2hpZ2FuOiAnTUknLFxuXHRcdE1pbm5lc290YTogJ01OJyxcblx0XHRNaXNzaXNzaXBwaTogJ01TJyxcblx0XHRNaXNzb3VyaTogJ01PJyxcblx0XHRNb250YW5hOiAnTVQnLFxuXHRcdE5lYnJhc2thOiAnTkUnLFxuXHRcdE5ldmFkYTogJ05WJyxcblx0XHQnTmV3IEhhbXBzaGlyZSc6ICdOSCcsXG5cdFx0J05ldyBKZXJzZXknOiAnTkonLFxuXHRcdCdOZXcgTWV4aWNvJzogJ05NJyxcblx0XHQnTmV3IFlvcmsnOiAnTlknLFxuXHRcdCdOb3J0aCBDYXJvbGluYSc6ICdOQycsXG5cdFx0J05vcnRoIERha290YSc6ICdORCcsXG5cdFx0T2hpbzogJ09IJyxcblx0XHRPa2xhaG9tYTogJ09LJyxcblx0XHRPcmVnb246ICdPUicsXG5cdFx0UGVubnN5bHZhbmlhOiAnUEEnLFxuXHRcdCdSaG9kZSBJc2xhbmQnOiAnUkknLFxuXHRcdCdTb3V0aCBDYXJvbGluYSc6ICdTQycsXG5cdFx0J1NvdXRoIERha290YSc6ICdTRCcsXG5cdFx0VGVubmVzc2VlOiAnVE4nLFxuXHRcdFRleGFzOiAnVFgnLFxuXHRcdFV0YWg6ICdVVCcsXG5cdFx0VmVybW9udDogJ1ZUJyxcblx0XHRWaXJnaW5pYTogJ1ZBJyxcblx0XHRXYXNoaW5ndG9uOiAnV0EnLFxuXHRcdCdXZXN0IFZpcmdpbmlhJzogJ1dWJyxcblx0XHRXaXNjb25zaW46ICdXSScsXG5cdFx0V3lvbWluZzogJ1dZJyxcblx0fVxuXG5cdHJldHVybiBzdGF0ZUxpc3Rbc3RhdGVOYW1lXSB8fCBzdGF0ZU5hbWVcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XG5cdGNvbnN0IFtkYXRlU3RyLCB0aW1lU3RyXSA9IGRhdGVTdHJpbmcuc3BsaXQoJyAnKVxuXHRjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlU3RyLnNwbGl0KCctJylcblx0Y29uc3QgW2hvdXIsIG1pbnV0ZV0gPSB0aW1lU3RyLnNwbGl0KCc6JylcblxuXHRjb25zdCBtb250aHMgPSBbXG5cdFx0J0phbnVhcnknLFxuXHRcdCdGZWJydWFyeScsXG5cdFx0J01hcmNoJyxcblx0XHQnQXByaWwnLFxuXHRcdCdNYXknLFxuXHRcdCdKdW5lJyxcblx0XHQnSnVseScsXG5cdFx0J0F1Z3VzdCcsXG5cdFx0J1NlcHRlbWJlcicsXG5cdFx0J09jdG9iZXInLFxuXHRcdCdOb3ZlbWJlcicsXG5cdFx0J0RlY2VtYmVyJyxcblx0XVxuXG5cdGNvbnN0IGdldFN1ZmZpeCA9IChkYXkpID0+IHtcblx0XHRpZiAoZGF5ID49IDExICYmIGRheSA8PSAxMykgcmV0dXJuICd0aCcgLy8gRXhjZXB0aW9uIGZvciAxMS0xM1xuXHRcdGNvbnN0IGxhc3REaWdpdCA9IGRheSAlIDEwXG5cdFx0Ly8gMHRoIC0gOXRoXG5cdFx0cmV0dXJuIFsndGgnLCAnc3QnLCAnbmQnLCAncmQnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnXVtcblx0XHRcdGxhc3REaWdpdFxuXHRcdF1cblx0fVxuXG5cdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHttb250aHNbKG1vbnRoLCAxMCkgLSAxXX0gJHtkYXl9JHtnZXRTdWZmaXgoXG5cdFx0ZGF5XG5cdCl9LCAke3llYXJ9YFxuXG5cdGNvbnN0IHBlcmlvZCA9IGhvdXIgPj0gMTIgPyAnUE0nIDogJ0FNJ1xuXHRjb25zdCB0d2VsdmVIb3VyID0gaG91ciAlIDEyIHx8IDEyIC8vIGNvbnZlcnRzIDAgdG8gMTJcblx0Y29uc3QgZm9ybWF0dGVkVGltZSA9IGAke3R3ZWx2ZUhvdXJ9OiR7bWludXRlfSAke3BlcmlvZH1gXG5cblx0cmV0dXJuIGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=