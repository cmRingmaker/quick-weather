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

	/* Text */
	--FONT_COLOR: light-dark(hsl(0, 5%, 10%), hsl(30, 100%, 98%));

	&:has(#theme-toggle:not(:checked)) {
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
	background-color: var(--COLOR_BG);
	color: var(--FONT_COLOR);
	height: 100vh;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
}

::selection {
	background-color: var(--COLOR_SECONDARY);
	color: var(--COLOR_BG);
}

/* ==================================================================
    - - - - - - - - - - [ HEADER ]
   ==================================================================
    * Typically a header has branding and a site nav
   ================================================================== */

header {
	background-color: var(--COLOR_PRIMARY);
}

/* button {
	width: 100px;
	background-color: white;
	padding: 4px 0;
	align-self: flex-end;
	margin: 10px 20px 0 0;
}

#theme-toggle {
	align-self: flex-end;
	display: none;
}

label[for='theme-toggle'] {
	align-self: flex-end;
	width: 70px;
	height: 60px;
	padding: 8px 0;
	background-color: red;
	text-align: center;
	border-bottom-left-radius: 12px;
	align-items: center;
}

.sun,
.moon {
	display: none;
} */

svg {
	/* height: 36px;
	width: 36px;
	fill: white; */
}

/* #theme-switcher {
	background-color: var(--THEME_SWITCHER);
	width: 90px;
	padding: 4px 0;
	border-radius: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	cursor: pointer;

	svg {
		width: 34px;
		height: 34px;
		stroke-width: 1.5;
		stroke: var(--THEME_BUTTON_COLOR);
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		z-index: 1;
	}

	&::before {
		content: '';
		position: absolute;
		width: 36px;
		height: 36px;
		background-color: rgb(255, 123, 0);
		border-radius: 50%;
		z-index: 0;
		left: 0;
		transform: translateX(8px) translateY(0);
	}
} */

/* .theme-icon {
	stroke-width: 1.5;
	stroke: var(--THEME_BUTTON_COLOR);
	fill: none;
	stroke-linecap: round;
	stroke-linejoin: round;
} */

/* ==================================================================
    - - - - - - - - - - [ %CONTENT ]
   ==================================================================
    - - [ main, section, div, article, aside, form ]
    * replace %CONTENT with one of the above when pasting this
   ================================================================== */

main {
	align-self: center;
}

/* ==================================================================
    - - - - - - - - - - [ FOOTER ]
   ==================================================================
    * Typically a footer has branding and important site information
   ================================================================== */

footer {
	background-color: var(--COLOR_PRIMARY);
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;;;;;uEAKuE;;AAEvE;CACC,wBAAwB;CACxB,gBAAgB,EAAE,QAAQ;;CAE1B,qBAAqB;CACrB,0BAA0B;;CAE1B,sBAAsB;CACtB,6BAA6B;;CAE7B,gBAAgB;CAChB,uDAAuD;CACvD,mCAAmC;CACnC,qCAAqC;;CAErC,SAAS;CACT,6DAA6D;;CAE7D;EACC,mBAAmB;CACpB;;CAEA;EACC,kBAAkB;CACnB;AACD;;AAEA;;;;;uEAKuE;;AAEvE;CACC,iBAAiB;CACjB,iCAAiC;CACjC,wBAAwB;CACxB,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,yBAAyB;AAC1B;;AAEA;CACC,wCAAwC;CACxC,sBAAsB;AACvB;;AAEA;;;;uEAIuE;;AAEvE;CACC,sCAAsC;AACvC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;GA2BG;;AAEH;CACC;;eAEc;AACf;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAiCG;;AAEH;;;;;;GAMG;;AAEH;;;;;uEAKuE;;AAEvE;CACC,kBAAkB;AACnB;;AAEA;;;;uEAIuE;;AAEvE;CACC,sCAAsC;AACvC","sourcesContent":["/* ==================================================================\r\n    - - - - - - - - - - [ GLOBALS ]\r\n   ==================================================================\r\n    [1] Size hack to set default font size to \"10px\" to make 1rem\r\n        the equivelent of 10px. (2.4rem = 24px, 0.8rem = 8px, etc)\r\n   ================================================================== */\r\n\r\n:root {\r\n\tcolor-scheme: light dark;\r\n\tfont-size: 62.5%; /* [1] */\r\n\r\n\t/* Dark Mode Colors */\r\n\t--bg_dark: hsl(0, 5%, 10%);\r\n\r\n\t/* Light Mode Colors */\r\n\t--bg_light: hsl(45, 40%, 94%);\r\n\r\n\t/* Main colors */\r\n\t--COLOR_BG: light-dark(var(--bg_light), var(--bg_dark));\r\n\t--COLOR_PRIMARY: hsl(220, 90%, 15%);\r\n\t--COLOR_SECONDARY: hsl(303, 71%, 73%);\r\n\r\n\t/* Text */\r\n\t--FONT_COLOR: light-dark(hsl(0, 5%, 10%), hsl(30, 100%, 98%));\r\n\r\n\t&:has(#theme-toggle:not(:checked)) {\r\n\t\tcolor-scheme: light;\r\n\t}\r\n\r\n\t&:has(#theme-toggle:checked) {\r\n\t\tcolor-scheme: dark;\r\n\t}\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ BASE STYLES ]\r\n   ==================================================================\r\n    - - [ body, fonts, text elements, media elements ]\r\n    * Styles that are shared across the entire site\r\n   ================================================================== */\r\n\r\nbody {\r\n\tfont-size: 1.8rem;\r\n\tbackground-color: var(--COLOR_BG);\r\n\tcolor: var(--FONT_COLOR);\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* align-items: center; */\r\n}\r\n\r\n::selection {\r\n\tbackground-color: var(--COLOR_SECONDARY);\r\n\tcolor: var(--COLOR_BG);\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ HEADER ]\r\n   ==================================================================\r\n    * Typically a header has branding and a site nav\r\n   ================================================================== */\r\n\r\nheader {\r\n\tbackground-color: var(--COLOR_PRIMARY);\r\n}\r\n\r\n/* button {\r\n\twidth: 100px;\r\n\tbackground-color: white;\r\n\tpadding: 4px 0;\r\n\talign-self: flex-end;\r\n\tmargin: 10px 20px 0 0;\r\n}\r\n\r\n#theme-toggle {\r\n\talign-self: flex-end;\r\n\tdisplay: none;\r\n}\r\n\r\nlabel[for='theme-toggle'] {\r\n\talign-self: flex-end;\r\n\twidth: 70px;\r\n\theight: 60px;\r\n\tpadding: 8px 0;\r\n\tbackground-color: red;\r\n\ttext-align: center;\r\n\tborder-bottom-left-radius: 12px;\r\n\talign-items: center;\r\n}\r\n\r\n.sun,\r\n.moon {\r\n\tdisplay: none;\r\n} */\r\n\r\nsvg {\r\n\t/* height: 36px;\r\n\twidth: 36px;\r\n\tfill: white; */\r\n}\r\n\r\n/* #theme-switcher {\r\n\tbackground-color: var(--THEME_SWITCHER);\r\n\twidth: 90px;\r\n\tpadding: 4px 0;\r\n\tborder-radius: 24px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tgap: 6px;\r\n\tcursor: pointer;\r\n\r\n\tsvg {\r\n\t\twidth: 34px;\r\n\t\theight: 34px;\r\n\t\tstroke-width: 1.5;\r\n\t\tstroke: var(--THEME_BUTTON_COLOR);\r\n\t\tfill: none;\r\n\t\tstroke-linecap: round;\r\n\t\tstroke-linejoin: round;\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t&::before {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\twidth: 36px;\r\n\t\theight: 36px;\r\n\t\tbackground-color: rgb(255, 123, 0);\r\n\t\tborder-radius: 50%;\r\n\t\tz-index: 0;\r\n\t\tleft: 0;\r\n\t\ttransform: translateX(8px) translateY(0);\r\n\t}\r\n} */\r\n\r\n/* .theme-icon {\r\n\tstroke-width: 1.5;\r\n\tstroke: var(--THEME_BUTTON_COLOR);\r\n\tfill: none;\r\n\tstroke-linecap: round;\r\n\tstroke-linejoin: round;\r\n} */\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ %CONTENT ]\r\n   ==================================================================\r\n    - - [ main, section, div, article, aside, form ]\r\n    * replace %CONTENT with one of the above when pasting this\r\n   ================================================================== */\r\n\r\nmain {\r\n\talign-self: center;\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ FOOTER ]\r\n   ==================================================================\r\n    * Typically a footer has branding and important site information\r\n   ================================================================== */\r\n\r\nfooter {\r\n\tbackground-color: var(--COLOR_PRIMARY);\r\n}\r\n"],"sourceRoot":""}]);
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

// Save state of checkbox based on current theme chosen
if (savedTheme) {
	themeToggle.checked = savedTheme === 'dark'
}

// Checkbox state, update storage when clicked
themeToggle.addEventListener('change', () => {
	localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light')
})


/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WEATHER)
/* harmony export */ });
class WEATHER {}

async function getForecast() {}


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





// -------------------------
// DOM ELEMENTS
const currentInfo = document.getElementById('current-info')

// -------------------------
// EVENT LISTENERS

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    * description
   ================================================================== */

function name(params) {}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWGM7QUFDZjtBQUNBOzs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUN5QjtBQUNBO0FBQ1M7QUFDSjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyLy4vc3JjL2pzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F1aWNrLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWljay13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcXVpY2std2VhdGhlci8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQmFzZSBjbGVhbiBzbGF0ZSAqL1xyXG4qIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXHJcbmltZyxcclxucGljdHVyZSB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljOyAvKiBWaXN1YWxseSBvZmZzZXQgYWx0IHRleHQgdG8gZGlmZmVyZW50aWF0ZSBmcm9tIHN1cnJvdW5kaW5nIHRleHQgICovXHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiBSZW1vdmUgcGhhbnRvbSB3aGl0ZXNwYWNlICovXHJcbn1cclxuXHJcbi8qIFNvbWUgcmVzZXQgcnVsZXMgYmFzZWQgb24gcGljY2FsaWwgY3NzIHJlc2V0ICovXHJcbi8qIGh0dHBzOi8vcGljY2FsaWwubGkvYmxvZy9hLW1vcmUtbW9kZXJuLWNzcy1yZXNldC8gKi9cclxuLyogaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMjQwNDI5MjMzNzU1L2h0dHBzOi8vcGljY2FsaWwubGkvYmxvZy9hLW1vcmUtbW9kZXJuLWNzcy1yZXNldC8gKi9cclxuXHJcbi8qIFByZXZlbnQgZm9udCBzaXplIGluZmxhdGlvbiAqL1xyXG5odG1sIHtcclxuXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG5cdHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cclxuYm9keSB7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogU2V0IHNob3J0ZXIgbGluZSBoZWlnaHRzIG9uIGhlYWRpbmdzIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xyXG4vKiBXb3J0aCBpdCB0byBjaGFuZ2UgaWYgZm9udHMgaGF2ZSBsYXJnZSBhc2NlbmRlcnMgYW5kIGRlc2NlbmRlcnMgKi9cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbmxhYmVsIHtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcblxyXG4vKiBCYWxhbmNlIHRleHQgd3JhcHBpbmcgb24gaGVhZGluZ3MgKi9cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG5cdHRleHQtd3JhcDogYmFsYW5jZTtcclxufVxyXG5cclxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cclxuYTpub3QoW2NsYXNzXSkge1xyXG5cdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuXHRjb2xvcjogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0Zm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBNYWtlIHN1cmUgdGV4dGFyZWFzIHdpdGhvdXQgYSByb3dzIGF0dHJpYnV0ZSBhcmUgbm90IHRpbnkgKi9cclxudGV4dGFyZWE6bm90KFtyb3dzXSkge1xyXG5cdG1pbi1oZWlnaHQ6IDEwZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakI7O0FBRUEsb0NBQW9DO0FBQ3BDOztDQUVDLGtCQUFrQixFQUFFLHFFQUFxRTtDQUN6RixlQUFlO0NBQ2YsWUFBWTtDQUNaLHNCQUFzQixFQUFFLDhCQUE4QjtBQUN2RDs7QUFFQSxpREFBaUQ7QUFDakQsc0RBQXNEO0FBQ3RELGlHQUFpRzs7QUFFakcsZ0NBQWdDO0FBQ2hDO0NBQ0MsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5QixzQkFBc0I7QUFDdkI7O0FBRUEsMkJBQTJCO0FBQzNCO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQSxrRUFBa0U7QUFDbEUsb0VBQW9FO0FBQ3BFOzs7Ozs7O0NBT0MsZ0JBQWdCO0FBQ2pCOztBQUVBLHNDQUFzQztBQUN0Qzs7OztDQUlDLGtCQUFrQjtBQUNuQjs7QUFFQSwwREFBMEQ7QUFDMUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztDQUlDLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7O0FBRUEsOERBQThEO0FBQzlEO0NBQ0MsZ0JBQWdCO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJhc2UgY2xlYW4gc2xhdGUgKi9cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUge1xcclxcblxcdGZvbnQtc3R5bGU6IGl0YWxpYzsgLyogVmlzdWFsbHkgb2Zmc2V0IGFsdCB0ZXh0IHRvIGRpZmZlcmVudGlhdGUgZnJvbSBzdXJyb3VuZGluZyB0ZXh0ICAqL1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogUmVtb3ZlIHBoYW50b20gd2hpdGVzcGFjZSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTb21lIHJlc2V0IHJ1bGVzIGJhc2VkIG9uIHBpY2NhbGlsIGNzcyByZXNldCAqL1xcclxcbi8qIGh0dHBzOi8vcGljY2FsaWwubGkvYmxvZy9hLW1vcmUtbW9kZXJuLWNzcy1yZXNldC8gKi9cXHJcXG4vKiBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAyNDA0MjkyMzM3NTUvaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xcclxcblxcclxcbi8qIFByZXZlbnQgZm9udCBzaXplIGluZmxhdGlvbiAqL1xcclxcbmh0bWwge1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxyXFxuXFx0dGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcclxcbmJvZHkge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBzaG9ydGVyIGxpbmUgaGVpZ2h0cyBvbiBoZWFkaW5ncyBhbmQgaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXHJcXG4vKiBXb3J0aCBpdCB0byBjaGFuZ2UgaWYgZm9udHMgaGF2ZSBsYXJnZSBhc2NlbmRlcnMgYW5kIGRlc2NlbmRlcnMgKi9cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxubGFiZWwge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcblxcclxcbi8qIEJhbGFuY2UgdGV4dCB3cmFwcGluZyBvbiBoZWFkaW5ncyAqL1xcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG5cXHR0ZXh0LXdyYXA6IGJhbGFuY2U7XFxyXFxufVxcclxcblxcclxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxyXFxuYTpub3QoW2NsYXNzXSkge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG5cXHRjb2xvcjogY3VycmVudENvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIE1ha2Ugc3VyZSB0ZXh0YXJlYXMgd2l0aG91dCBhIHJvd3MgYXR0cmlidXRlIGFyZSBub3QgdGlueSAqL1xcclxcbnRleHRhcmVhOm5vdChbcm93c10pIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEdMT0JBTFMgXVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFsxXSBTaXplIGhhY2sgdG8gc2V0IGRlZmF1bHQgZm9udCBzaXplIHRvIFwiMTBweFwiIHRvIG1ha2UgMXJlbVxyXG4gICAgICAgIHRoZSBlcXVpdmVsZW50IG9mIDEwcHguICgyLjRyZW0gPSAyNHB4LCAwLjhyZW0gPSA4cHgsIGV0YylcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG46cm9vdCB7XHJcblx0Y29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xyXG5cdGZvbnQtc2l6ZTogNjIuNSU7IC8qIFsxXSAqL1xyXG5cclxuXHQvKiBEYXJrIE1vZGUgQ29sb3JzICovXHJcblx0LS1iZ19kYXJrOiBoc2woMCwgNSUsIDEwJSk7XHJcblxyXG5cdC8qIExpZ2h0IE1vZGUgQ29sb3JzICovXHJcblx0LS1iZ19saWdodDogaHNsKDQ1LCA0MCUsIDk0JSk7XHJcblxyXG5cdC8qIE1haW4gY29sb3JzICovXHJcblx0LS1DT0xPUl9CRzogbGlnaHQtZGFyayh2YXIoLS1iZ19saWdodCksIHZhcigtLWJnX2RhcmspKTtcclxuXHQtLUNPTE9SX1BSSU1BUlk6IGhzbCgyMjAsIDkwJSwgMTUlKTtcclxuXHQtLUNPTE9SX1NFQ09OREFSWTogaHNsKDMwMywgNzElLCA3MyUpO1xyXG5cclxuXHQvKiBUZXh0ICovXHJcblx0LS1GT05UX0NPTE9SOiBsaWdodC1kYXJrKGhzbCgwLCA1JSwgMTAlKSwgaHNsKDMwLCAxMDAlLCA5OCUpKTtcclxuXHJcblx0JjpoYXMoI3RoZW1lLXRvZ2dsZTpub3QoOmNoZWNrZWQpKSB7XHJcblx0XHRjb2xvci1zY2hlbWU6IGxpZ2h0O1xyXG5cdH1cclxuXHJcblx0JjpoYXMoI3RoZW1lLXRvZ2dsZTpjaGVja2VkKSB7XHJcblx0XHRjb2xvci1zY2hlbWU6IGRhcms7XHJcblx0fVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBCQVNFIFNUWUxFUyBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIFsgYm9keSwgZm9udHMsIHRleHQgZWxlbWVudHMsIG1lZGlhIGVsZW1lbnRzIF1cclxuICAgICogU3R5bGVzIHRoYXQgYXJlIHNoYXJlZCBhY3Jvc3MgdGhlIGVudGlyZSBzaXRlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuYm9keSB7XHJcblx0Zm9udC1zaXplOiAxLjhyZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xyXG5cdGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcclxuXHRjb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBIRUFERVIgXVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICogVHlwaWNhbGx5IGEgaGVhZGVyIGhhcyBicmFuZGluZyBhbmQgYSBzaXRlIG5hdlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XHJcbn1cclxuXHJcbi8qIGJ1dHRvbiB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDRweCAwO1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cdG1hcmdpbjogMTBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuI3RoZW1lLXRvZ2dsZSB7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubGFiZWxbZm9yPSd0aGVtZS10b2dnbGUnXSB7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0d2lkdGg6IDcwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdHBhZGRpbmc6IDhweCAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3VuLFxyXG4ubW9vbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG5cclxuc3ZnIHtcclxuXHQvKiBoZWlnaHQ6IDM2cHg7XHJcblx0d2lkdGg6IDM2cHg7XHJcblx0ZmlsbDogd2hpdGU7ICovXHJcbn1cclxuXHJcbi8qICN0aGVtZS1zd2l0Y2hlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVEhFTUVfU1dJVENIRVIpO1xyXG5cdHdpZHRoOiA5MHB4O1xyXG5cdHBhZGRpbmc6IDRweCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGdhcDogNnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0c3ZnIHtcclxuXHRcdHdpZHRoOiAzNHB4O1xyXG5cdFx0aGVpZ2h0OiAzNHB4O1xyXG5cdFx0c3Ryb2tlLXdpZHRoOiAxLjU7XHJcblx0XHRzdHJva2U6IHZhcigtLVRIRU1FX0JVVFRPTl9DT0xPUik7XHJcblx0XHRmaWxsOiBub25lO1xyXG5cdFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG5cdFx0c3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cclxuXHQmOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMzZweDtcclxuXHRcdGhlaWdodDogMzZweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpIHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG59ICovXHJcblxyXG4vKiAudGhlbWUtaWNvbiB7XHJcblx0c3Ryb2tlLXdpZHRoOiAxLjU7XHJcblx0c3Ryb2tlOiB2YXIoLS1USEVNRV9CVVRUT05fQ09MT1IpO1xyXG5cdGZpbGw6IG5vbmU7XHJcblx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG5cdHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbn0gKi9cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbICVDT05URU5UIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gWyBtYWluLCBzZWN0aW9uLCBkaXYsIGFydGljbGUsIGFzaWRlLCBmb3JtIF1cclxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5tYWluIHtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEZPT1RFUiBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgKiBUeXBpY2FsbHkgYSBmb290ZXIgaGFzIGJyYW5kaW5nIGFuZCBpbXBvcnRhbnQgc2l0ZSBpbmZvcm1hdGlvblxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmZvb3RlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7dUVBS3VFOztBQUV2RTtDQUNDLHdCQUF3QjtDQUN4QixnQkFBZ0IsRUFBRSxRQUFROztDQUUxQixxQkFBcUI7Q0FDckIsMEJBQTBCOztDQUUxQixzQkFBc0I7Q0FDdEIsNkJBQTZCOztDQUU3QixnQkFBZ0I7Q0FDaEIsdURBQXVEO0NBQ3ZELG1DQUFtQztDQUNuQyxxQ0FBcUM7O0NBRXJDLFNBQVM7Q0FDVCw2REFBNkQ7O0NBRTdEO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Ozs7O3VFQUt1RTs7QUFFdkU7Q0FDQyxpQkFBaUI7Q0FDakIsaUNBQWlDO0NBQ2pDLHdCQUF3QjtDQUN4QixhQUFhO0NBQ2IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsc0JBQXNCO0FBQ3ZCOztBQUVBOzs7O3VFQUl1RTs7QUFFdkU7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRzs7QUFFSDtDQUNDOztlQUVjO0FBQ2Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDRzs7QUFFSDs7Ozs7O0dBTUc7O0FBRUg7Ozs7O3VFQUt1RTs7QUFFdkU7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Ozs7dUVBSXVFOztBQUV2RTtDQUNDLHNDQUFzQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEdMT0JBTFMgXVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICBbMV0gU2l6ZSBoYWNrIHRvIHNldCBkZWZhdWx0IGZvbnQgc2l6ZSB0byBcXFwiMTBweFxcXCIgdG8gbWFrZSAxcmVtXFxyXFxuICAgICAgICB0aGUgZXF1aXZlbGVudCBvZiAxMHB4LiAoMi40cmVtID0gMjRweCwgMC44cmVtID0gOHB4LCBldGMpXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcblxcdGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcXHJcXG5cXHRmb250LXNpemU6IDYyLjUlOyAvKiBbMV0gKi9cXHJcXG5cXHJcXG5cXHQvKiBEYXJrIE1vZGUgQ29sb3JzICovXFxyXFxuXFx0LS1iZ19kYXJrOiBoc2woMCwgNSUsIDEwJSk7XFxyXFxuXFxyXFxuXFx0LyogTGlnaHQgTW9kZSBDb2xvcnMgKi9cXHJcXG5cXHQtLWJnX2xpZ2h0OiBoc2woNDUsIDQwJSwgOTQlKTtcXHJcXG5cXHJcXG5cXHQvKiBNYWluIGNvbG9ycyAqL1xcclxcblxcdC0tQ09MT1JfQkc6IGxpZ2h0LWRhcmsodmFyKC0tYmdfbGlnaHQpLCB2YXIoLS1iZ19kYXJrKSk7XFxyXFxuXFx0LS1DT0xPUl9QUklNQVJZOiBoc2woMjIwLCA5MCUsIDE1JSk7XFxyXFxuXFx0LS1DT0xPUl9TRUNPTkRBUlk6IGhzbCgzMDMsIDcxJSwgNzMlKTtcXHJcXG5cXHJcXG5cXHQvKiBUZXh0ICovXFxyXFxuXFx0LS1GT05UX0NPTE9SOiBsaWdodC1kYXJrKGhzbCgwLCA1JSwgMTAlKSwgaHNsKDMwLCAxMDAlLCA5OCUpKTtcXHJcXG5cXHJcXG5cXHQmOmhhcygjdGhlbWUtdG9nZ2xlOm5vdCg6Y2hlY2tlZCkpIHtcXHJcXG5cXHRcXHRjb2xvci1zY2hlbWU6IGxpZ2h0O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOmhhcygjdGhlbWUtdG9nZ2xlOmNoZWNrZWQpIHtcXHJcXG5cXHRcXHRjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEJBU0UgU1RZTEVTIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIFsgYm9keSwgZm9udHMsIHRleHQgZWxlbWVudHMsIG1lZGlhIGVsZW1lbnRzIF1cXHJcXG4gICAgKiBTdHlsZXMgdGhhdCBhcmUgc2hhcmVkIGFjcm9zcyB0aGUgZW50aXJlIHNpdGVcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LXNpemU6IDEuOHJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgSEVBREVSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBUeXBpY2FsbHkgYSBoZWFkZXIgaGFzIGJyYW5kaW5nIGFuZCBhIHNpdGUgbmF2XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogMTAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0cGFkZGluZzogNHB4IDA7XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFx0bWFyZ2luOiAxMHB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGhlbWUtdG9nZ2xlIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbFtmb3I9J3RoZW1lLXRvZ2dsZSddIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHR3aWR0aDogNzBweDtcXHJcXG5cXHRoZWlnaHQ6IDYwcHg7XFxyXFxuXFx0cGFkZGluZzogOHB4IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW4sXFxyXFxuLm1vb24ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufSAqL1xcclxcblxcclxcbnN2ZyB7XFxyXFxuXFx0LyogaGVpZ2h0OiAzNnB4O1xcclxcblxcdHdpZHRoOiAzNnB4O1xcclxcblxcdGZpbGw6IHdoaXRlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjdGhlbWUtc3dpdGNoZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLVRIRU1FX1NXSVRDSEVSKTtcXHJcXG5cXHR3aWR0aDogOTBweDtcXHJcXG5cXHRwYWRkaW5nOiA0cHggMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDZweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFx0c3ZnIHtcXHJcXG5cXHRcXHR3aWR0aDogMzRweDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDM0cHg7XFxyXFxuXFx0XFx0c3Ryb2tlLXdpZHRoOiAxLjU7XFxyXFxuXFx0XFx0c3Ryb2tlOiB2YXIoLS1USEVNRV9CVVRUT05fQ09MT1IpO1xcclxcblxcdFxcdGZpbGw6IG5vbmU7XFxyXFxuXFx0XFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcblxcdFxcdHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuXFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRjb250ZW50OiAnJztcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDM2cHg7XFxyXFxuXFx0XFx0aGVpZ2h0OiAzNnB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdHotaW5kZXg6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KSB0cmFuc2xhdGVZKDApO1xcclxcblxcdH1cXHJcXG59ICovXFxyXFxuXFxyXFxuLyogLnRoZW1lLWljb24ge1xcclxcblxcdHN0cm9rZS13aWR0aDogMS41O1xcclxcblxcdHN0cm9rZTogdmFyKC0tVEhFTUVfQlVUVE9OX0NPTE9SKTtcXHJcXG5cXHRmaWxsOiBub25lO1xcclxcblxcdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG5cXHRzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbICVDT05URU5UIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXFxyXFxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgRk9PVEVSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBUeXBpY2FsbHkgYSBmb290ZXIgaGFzIGJyYW5kaW5nIGFuZCBpbXBvcnRhbnQgc2l0ZSBpbmZvcm1hdGlvblxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXRvZ2dsZScpXHJcbmNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxyXG5cclxuLy8gU2F2ZSBzdGF0ZSBvZiBjaGVja2JveCBiYXNlZCBvbiBjdXJyZW50IHRoZW1lIGNob3NlblxyXG5pZiAoc2F2ZWRUaGVtZSkge1xyXG5cdHRoZW1lVG9nZ2xlLmNoZWNrZWQgPSBzYXZlZFRoZW1lID09PSAnZGFyaydcclxufVxyXG5cclxuLy8gQ2hlY2tib3ggc3RhdGUsIHVwZGF0ZSBzdG9yYWdlIHdoZW4gY2xpY2tlZFxyXG50aGVtZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWVUb2dnbGUuY2hlY2tlZCA/ICdkYXJrJyA6ICdsaWdodCcpXHJcbn0pXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdFQVRIRVIge31cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KCkge31cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1QT1JUXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgV0VBVEhFUiBmcm9tICcuL3dlYXRoZXIuanMnXG5pbXBvcnQgVEhFTUUgZnJvbSAnLi90aGVtZS5qcydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRE9NIEVMRU1FTlRTXG5jb25zdCBjdXJyZW50SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWluZm8nKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFVkVOVCBMSVNURU5FUlNcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbICVGVU5DVElPTlMgXVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBkZXNjcmlwdGlvblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmZ1bmN0aW9uIG5hbWUocGFyYW1zKSB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9