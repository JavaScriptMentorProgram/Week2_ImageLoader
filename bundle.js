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
	
	/*class ImageLoader{
	  constructor(){
	    this._store = {};
	  }
	
	  load(images){
	      let total = 0;
	      Object.getOwnPropertyNames(images).forEach((key) => {
	        total++;
	        let promise = new Promise(function(resolve, reject){
	          let url = images[key];
	          let img = new Image();
	          img.src = url;
	          img.onload = () =>{
	            resolve(key);
	          }
	        });
	        promise.then(function(result){
	          console.log(`${result} of ${total} complete`);
	        });
	      });
	    });
	  }
	}
	
	
	const loader = new ImageLoader();
	
	loader.load({
	  'vase': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chinese_vase.jpg',
	  'babi':'http://images6.fanpop.com/image/photos/33500000/BABI-justin-bieber-33561812-360-640.jpg'
	  }
	);
	*/
	
	/*************************** Version One ********************************/
	
	var ImageLoader = function () {
	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);
	
	    this._store = {};
	  }
	
	  _createClass(ImageLoader, [{
	    key: 'cb',
	    value: function cb(loadedNumber) {
	      console.log('loaded $loadedNumber images');
	    }
	  }, {
	    key: 'load',
	    value: function load(images) {
	      var _this = this;
	
	      var total = 0;
	      var loaded = 0;
	      Object.getOwnPropertyNames(images).forEach(function (key) {
	        total++;
	        var url = images[key];
	        var img = new Image();
	        img.src = url;
	        img.onload = function () {
	          loaded++;
	          _this._store[key] = img;
	          console.log(loaded + ' of ' + total + ' complete');
	
	          if (total === loaded) {
	            console.log(total + ' and ' + loaded);
	          }
	        };
	
	        img.onerror = function (e) {
	          // console.log(`$total and $loaded`);
	        };
	      });
	    }
	  }]);
	
	  return ImageLoader;
	}();
	
	var loader = new ImageLoader();
	
	loader.load({
	  'vase': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Chinese_vase.jpg',
	  'babi': 'http://images6.fanpop.com/image/photos/33500000/BABI-justin-bieber-33561812-360-640.jpg'
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map