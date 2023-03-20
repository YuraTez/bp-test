/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Localizations/en.json":
/*!***********************************!*\
  !*** ./src/Localizations/en.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"Unlimited Access<br>to All Features\",\"Unlimited documents\":\"Unlimited documents\",\"Count mode\":\"Count mode\",\"Text recognition (OCR)\":\"Text recognition (OCR)\",\"Monthly\":\"Monthly\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>per month\",\"3 DAYS FREE\":\"3 DAYS FREE\",\"{{price}}/month\":\"{{price}}/month\",\"Annually\":\"Annually\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>per year\",\"MOST POPULAR\":\"MOST POPULAR\",\"Continue\":\"Continue\",\"Auto-renewable. Cancel anytime.\":\"Auto-renewable. Cancel anytime.\",\"Terms of Use\":\"Terms of Use\",\"Restore\":\"Restore\",\"Privacy Policy\":\"Privacy Policy\"};\n\n//# sourceURL=webpack:///./src/Localizations/en.json?");

/***/ }),

/***/ "./src/Localizations/es.json":
/*!***********************************!*\
  !*** ./src/Localizations/es.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"Acceso ilimitado<br>a todas las funciones\",\"Unlimited documents\":\"Documentos ilimitados\",\"Count mode\":\"Modo de recuento\",\"Text recognition (OCR)\":\"Reconocimiento de texto (OCR)\",\"Monthly\":\"Mensual\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>por mes\",\"3 DAYS FREE\":\"3 DÍAS GRATIS\",\"{{price}}/month\":\"{{price}}/mes\",\"Annually\":\"Anual\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>por año\",\"MOST POPULAR\":\"LO MÁS PEDIDO\",\"Continue\":\"Continuar\",\"Auto-renewable. Cancel anytime.\":\"Renovable automáticamente. Cancela cuando quieras.\",\"Terms of Use\":\"Términos de uso\",\"Restore\":\"Restablecer\",\"Privacy Policy\":\"Política de privacidad\"};\n\n//# sourceURL=webpack:///./src/Localizations/es.json?");

/***/ }),

/***/ "./src/Localizations/fr.json":
/*!***********************************!*\
  !*** ./src/Localizations/fr.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"Accès illimité<br>à toutes les fonctionnalités\",\"Unlimited documents\":\"Documents illimités\",\"Count mode\":\"Mode décompte\",\"Text recognition (OCR)\":\"Reconnaissance de texte (OCR)\",\"Monthly\":\"Tous les mois\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>par mois\",\"3 DAYS FREE\":\"3 JOURS GRATUITS\",\"{{price}}/month\":\"{{price}}/mois\",\"Annually\":\"Tous les ans\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>par an\",\"MOST POPULAR\":\"LE PLUS POPULAIRE\",\"Continue\":\"Continuer\",\"Auto-renewable. Cancel anytime.\":\"Renouvelable automatiquement. Annulez à tout moment.\",\"Terms of Use\":\"Conditions d'utilisation\",\"Restore\":\"Restaurer\",\"Privacy Policy\":\"Politique de confidentialité\"};\n\n//# sourceURL=webpack:///./src/Localizations/fr.json?");

/***/ }),

/***/ "./src/Localizations/ja.json":
/*!***********************************!*\
  !*** ./src/Localizations/ja.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"全ての機能へ<br>無制限アクセス\",\"Unlimited documents\":\"無制限のドキュメント\",\"Count mode\":\"カウントモード\",\"Text recognition (OCR)\":\"テキスト認識 (OCR)\",\"Monthly\":\"月次\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>/月\",\"3 DAYS FREE\":\"3日間無料\",\"{{price}}/month\":\"{{price}}/か月\",\"Annually\":\"年次\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>/年\",\"MOST POPULAR\":\"一番人気\",\"Continue\":\"続行する\",\"Auto-renewable. Cancel anytime.\":\"自動更新可能。いつでもキャンセル可能。\",\"Terms of Use\":\"利用規約\",\"Restore\":\"復元する\",\"Privacy Policy\":\"プライバシーポリシー\"};\n\n//# sourceURL=webpack:///./src/Localizations/ja.json?");

/***/ }),

/***/ "./src/Localizations/nl.json":
/*!***********************************!*\
  !*** ./src/Localizations/nl.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"Onbeperkte toegang<br>tot alle functies\",\"Unlimited documents\":\"Onbeperkt aantal documenten\",\"Count mode\":\"Aantal modus\",\"Text recognition (OCR)\":\"Gratis tekstherkenning (OCR)\",\"Monthly\":\"Maandelijks\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>per maand\",\"3 DAYS FREE\":\"3 DAGEN GRATIS\",\"{{price}}/month\":\"{{price}}/maand\",\"Annually\":\"Jaarlijks\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>per jaar\",\"MOST POPULAR\":\"MEEST POPULAIR\",\"Continue\":\"Doorgaan\",\"Auto-renewable. Cancel anytime.\":\"Automatisch verlengbaar. Altijd annuleren.\",\"Terms of Use\":\"Gebruiksvoorwaarden\",\"Restore\":\"Herstellen\",\"Privacy Policy\":\"Privacybeleid\"};\n\n//# sourceURL=webpack:///./src/Localizations/nl.json?");

/***/ }),

/***/ "./src/Localizations/ru.json":
/*!***********************************!*\
  !*** ./src/Localizations/ru.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"Неограниченный доступ<br>ко всем функциям\",\"Unlimited documents\":\"Любое количество документов\",\"Count mode\":\"Режим «Подсчет»\",\"Text recognition (OCR)\":\"Распознавание текста (OCR)\",\"Monthly\":\"1 месяц\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>в месяц\",\"3 DAYS FREE\":\"3 ДНЯ БЕСПЛАТНО\",\"{{price}}/month\":\"{{price}}/месяц\",\"Annually\":\"1 ГОД\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>в год\",\"MOST POPULAR\":\"ПОПУЛЯРНОЕ\",\"Continue\":\"Продолжить\",\"Auto-renewable. Cancel anytime.\":\"Автопродление. Отмена в любое время.\",\"Terms of Use\":\"Условия использования\",\"Restore\":\"Восстановить\",\"Privacy Policy\":\"Конфиденциальность\"};\n\n//# sourceURL=webpack:///./src/Localizations/ru.json?");

/***/ }),

/***/ "./src/Localizations/zh.json":
/*!***********************************!*\
  !*** ./src/Localizations/zh.json ***!
  \***********************************/
/*! exports provided: Unlimited Access<br>to All Features, Unlimited documents, Count mode, Text recognition (OCR), Monthly, <strong>{{price}}</strong><br>per month, 3 DAYS FREE, {{price}}/month, Annually, -83%, <strong>{{price}}</strong><br>per year, MOST POPULAR, Continue, Auto-renewable. Cancel anytime., Terms of Use, Restore, Privacy Policy, default */
/***/ (function(module) {

eval("module.exports = {\"Unlimited Access<br>to All Features\":\"无限制使用<br>所有功能\",\"Unlimited documents\":\"文档无限制\",\"Count mode\":\"计数模式\",\"Text recognition (OCR)\":\"文本识别（OCR）\",\"Monthly\":\"每月\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong>每月<br>\",\"3 DAYS FREE\":\"3日免费\",\"{{price}}/month\":\"{{price}}/月\",\"Annually\":\"包年\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"每年<strong>{{price}}</strong><br>\",\"MOST POPULAR\":\"最热门\",\"Continue\":\"继续\",\"Auto-renewable. Cancel anytime.\":\"自动续订。可随时取消。\",\"Terms of Use\":\"使用条款\",\"Restore\":\"恢复\",\"Privacy Policy\":\"隐私政策\"};\n\n//# sourceURL=webpack:///./src/Localizations/zh.json?");

/***/ }),

/***/ "./src/js/components/localization.js":
/*!*******************************************!*\
  !*** ./src/js/components/localization.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Localizations_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Localizations/en.json */ \"./src/Localizations/en.json\");\nvar _Localizations_en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/en.json */ \"./src/Localizations/en.json\", 1);\n/* harmony import */ var _Localizations_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Localizations/es.json */ \"./src/Localizations/es.json\");\nvar _Localizations_es_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/es.json */ \"./src/Localizations/es.json\", 1);\n/* harmony import */ var _Localizations_fr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Localizations/fr.json */ \"./src/Localizations/fr.json\");\nvar _Localizations_fr_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/fr.json */ \"./src/Localizations/fr.json\", 1);\n/* harmony import */ var _Localizations_ja_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Localizations/ja.json */ \"./src/Localizations/ja.json\");\nvar _Localizations_ja_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/ja.json */ \"./src/Localizations/ja.json\", 1);\n/* harmony import */ var _Localizations_nl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Localizations/nl.json */ \"./src/Localizations/nl.json\");\nvar _Localizations_nl_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/nl.json */ \"./src/Localizations/nl.json\", 1);\n/* harmony import */ var _Localizations_ru_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Localizations/ru.json */ \"./src/Localizations/ru.json\");\nvar _Localizations_ru_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/ru.json */ \"./src/Localizations/ru.json\", 1);\n/* harmony import */ var _Localizations_zh_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Localizations/zh.json */ \"./src/Localizations/zh.json\");\nvar _Localizations_zh_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Localizations/zh.json */ \"./src/Localizations/zh.json\", 1);\n\n\n\n\n\n\n\nvar data = {\n  en: _Localizations_en_json__WEBPACK_IMPORTED_MODULE_0__,\n  es: _Localizations_es_json__WEBPACK_IMPORTED_MODULE_1__,\n  fr: _Localizations_fr_json__WEBPACK_IMPORTED_MODULE_2__,\n  ja: _Localizations_ja_json__WEBPACK_IMPORTED_MODULE_3__,\n  nl: _Localizations_nl_json__WEBPACK_IMPORTED_MODULE_4__,\n  ru: _Localizations_ru_json__WEBPACK_IMPORTED_MODULE_5__,\n  zh: _Localizations_zh_json__WEBPACK_IMPORTED_MODULE_6__\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/js/components/localization.js?");

/***/ }),

/***/ "./src/js/components/templateBanner.js":
/*!*********************************************!*\
  !*** ./src/js/components/templateBanner.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar template = function template(data, price) {\n  return \"\\n        <div class=\\\"banner-header\\\">\\n            <a href=\\\"#\\\" class=\\\"banner-header__cross\\\"></a>\\n            <a href=\\\"#\\\" class=\\\"banner-header__restore\\\">\".concat(data[\"Restore\"], \"</a>\\n        </div>\\n     <div class=\\\"banner-container\\\">\\n        <h1 class=\\\"title\\\">\").concat(data[\"Unlimited Access<br>to All Features\"], \"</h1>\\n\\n        <ul class=\\\"advantages-list\\\">\\n            <li class=\\\"advantages-list__item\\\">\\n            <svg><use xlink:href=\\\"images/sprite.svg#unLimit\\\"></use></svg>\\n                \").concat(data[\"Unlimited documents\"], \"\\n            </li>\\n            <li class=\\\"advantages-list__item\\\">\\n            <svg><use xlink:href=\\\"images/sprite.svg#export\\\"></use></svg>\\n               \").concat(data[\"Count mode\"], \"\\n            </li>\\n            <li class=\\\"advantages-list__item\\\">\\n            <svg><use xlink:href=\\\"images/sprite.svg#noAds\\\"></use></svg>\\n             \").concat(data[\"Text recognition (OCR)\"], \"\\n               \\n            </li>\\n        </ul>\\n\\n        <div class=\\\"subscription\\\">\\n            <div class=\\\"subscription__el  active\\\" data-url=\\\"https://apple.com/\\\">\\n                <div class=\\\"subscription__time\\\">\").concat(data[\"Monthly\"], \"</div>\\n                <div class=\\\"subscription__price\\\">\\n                    \").concat(data[\"<strong>{{price}}</strong><br>per month\"].replace('{{price}}', price.month.price), \"\\n                </div>\\n                <div class=\\\"subscription__banner\\\">\\n                   \").concat(data[\"3 DAYS FREE\"], \"\\n                </div>\\n                <div class=\\\"subscription__month-price\\\">\\n                    \").concat(data[\"{{price}}/month\"].replace('{{price}}/', price.month.priceMonth), \"\\n                </div>\\n            </div>\\n            <div class=\\\"subscription__el subscription__el--sale\\\" data-url=\\\"https://google.com/\\\">\\n                <div class=\\\"subscription__time\\\">\").concat(data[\"Annually\"], \"</div>\\n                <div class=\\\"subscription__price\\\">\\n               \").concat(data[\"<strong>{{price}}</strong><br>per year\"].replace('{{price}}', price.year.price), \"\\n                </div>\\n                <div class=\\\"subscription__banner\\\">\\n                    \").concat(data[\"MOST POPULAR\"], \"\\n                </div>\\n                <div class=\\\"subscription__month-price\\\">\\n                \").concat(data[\"{{price}}/month\"].replace('{{price}}/', price.year.priceMonth), \"\\n                </div>\\n                <span class=\\\"subscription-sale\\\">\").concat(data[\"-83%\"], \"</span>\\n            </div>\\n        </div>\\n\\n        <a href=\\\"https://apple.com/\\\" class=\\\"subscription-btn\\\">\").concat(data[\"Continue\"], \"</a>\\n\\n        <p class=\\\"text-page\\\">\").concat(data[\"Auto-renewable. Cancel anytime.\"], \"</p>\\n\\n        <div class=\\\"agreement\\\">\\n            <a href=\\\"#\\\" class=\\\"agreement__item\\\">\").concat(data[\"Terms of Use\"], \"</a>\\n            <a href=\\\"#\\\" class=\\\"agreement__item\\\">\").concat(data[\"Privacy Policy\"], \"</a>\\n        </div>\\n    </div>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (template);\n\n//# sourceURL=webpack:///./src/js/components/templateBanner.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/localization */ \"./src/js/components/localization.js\");\n/* harmony import */ var _components_templateBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/templateBanner */ \"./src/js/components/templateBanner.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar price = {\n  month: {\n    price: \"$9.99\",\n    priceMonth: \"$9.99\"\n  },\n  year: {\n    price: \"$19.99\",\n    priceMonth: \"$1.66\"\n  }\n};\nvar banner = document.querySelector(\"#banner\");\n\nvar deviceDefaultLanguage = function deviceDefaultLanguage() {\n  return navigator.languages && navigator.languages.length ? navigator.languages[1] : 'en';\n};\n\nvar params = _toConsumableArray(new URLSearchParams(window.location.search).entries()).reduce(function (r, _ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n      k = _ref2[0],\n      v = _ref2[1];\n\n  r[k] = v;\n  return r;\n}, {});\n\nvar lang = deviceDefaultLanguage();\nvar locationSearch = document.location.search;\n\nif (locationSearch === \"\" && _components_localization__WEBPACK_IMPORTED_MODULE_0__[\"default\"][lang] !== undefined) {\n  window.history.pushState(\"string\", \"search\", \"?\" + \"lang=\" + lang);\n  banner.innerHTML = Object(_components_templateBanner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_localization__WEBPACK_IMPORTED_MODULE_0__[\"default\"][lang], price);\n  banner.classList.add(\"lang-\" + lang);\n} else if (_components_localization__WEBPACK_IMPORTED_MODULE_0__[\"default\"][params.lang]) {\n  banner.innerHTML = Object(_components_templateBanner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_localization__WEBPACK_IMPORTED_MODULE_0__[\"default\"][params.lang], price);\n  banner.classList.add(\"lang-\" + params.lang);\n} else {\n  window.history.pushState(\"string\", \"search\", \"?\" + \"lang=en\");\n  banner.innerHTML = Object(_components_templateBanner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_localization__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"en\"], price);\n  banner.classList.add(\"lang-en\");\n}\n\nwindow.onload = function () {\n  var subscription = document.querySelector(\".subscription\");\n  var subscriptionElemList = subscription.querySelectorAll(\".subscription__el\");\n  var subscriptionBtn = document.querySelector(\".subscription-btn\");\n  subscription.addEventListener(\"click\", function (event) {\n    var target = event.target;\n\n    if (target.classList.contains(\"subscription__el\")) {\n      subscriptionElemList.forEach(function (el) {\n        el.classList.remove(\"active\");\n      });\n      target.classList.add(\"active\");\n      var url = target.getAttribute(\"data-url\");\n      subscriptionBtn.setAttribute(\"href\", url);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/main.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/main.scss?");

/***/ })

/******/ });