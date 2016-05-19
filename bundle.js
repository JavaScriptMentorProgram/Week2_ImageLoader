/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Hi = __webpack_require__(1);
	
	var _Hi2 = _interopRequireDefault(_Hi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var hi = new _Hi2.default();
	
	var ImageLoader = function () {
	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);
	
	    this._store = {};
	  }
	
	  _createClass(ImageLoader, [{
	    key: 'load',
	    value: function load(images) {
	      var _this = this;
	
	      var total = 0;
	      var loaded = 0;
	      Object.getOwnPopertyNames(images).forEach(function (key) {
	        total++;
	        var url = images[key];
	
	        var img = new Image();
	        img.url = url;
	        image.onload = function () {
	          loaded++;
	          _this._store[key] = img;
	          if (total === loaded) cb();
	        };
	
	        image.err = function (e) {
	          cb();
	        };
	      });
	    }
	  }]);
	
	  return ImageLoader;
	}();
	
	var loader = new ImageLoader();
	loader.on('progress', function (current, total) {
	  console.log('$(current) of $(total) complete');
	});
	
	loader.load({
	  'vase': '',
	  'image': ''
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hi = function Hi() {
	  _classCallCheck(this, Hi);
	
	  console.log("Hi");
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map