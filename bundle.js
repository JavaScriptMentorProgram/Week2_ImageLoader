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
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ImageLoader = function () {
	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);
	
	    this._store = {};
	    this._listeners = new Map();
	  }
	
	  _createClass(ImageLoader, [{
	    key: 'on',
	    value: function on(event, callback) {
	      this._listeners.has(event) || this._listeners.set(event, []);
	      this._listeners.get(event).push(callback);
	      this._listeners.get(event).filter(function (l) {
	        return l !== callback;
	      });
	    }
	  }, {
	    key: 'emit',
	    value: function emit(event) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var listeners = this._listeners.get(event);
	      if (listeners && listeners.length) {
	        listeners.forEach(function (listeners) {
	          listeners(args);
	        });
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'load',
	    value: function load(images) {
	      var _this = this;
	
	      return new Promise(function (resolve, reject) {
	        var total = 0;
	        var loaded = 0;
	        Object.getOwnPropertyNames(images).forEach(function (key) {
	          total++;
	          var url = images[key];
	          var img = new Image();
	          img.src = url;
	          img.onload = function () {
	            loaded++;
	            _this.emit('progress', loaded, total);
	            if (loaded === total) {
	              resolve('Done');
	            }
	          };
	          img.onerror = function () {};
	        });
	      });
	    }
	  }]);
	
	  return ImageLoader;
	}();
	
	exports.loader = new ImageLoader();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map