(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-core-mixins"] = factory();
	else
		root["vue-core-mixins"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Events", function() { return /* reexport */ events; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/mixins/events.js
// EVENTS
/* harmony default export */ var events = ({
  data: function data() {
    return {
      // Hilitor
      myHilitor: null
    };
  },
  created: function created() {
    var _this = this;

    // Search highlight
    this.$EventBus.$on('search-vgt', function ()
    /*searchTerm*/
    {
      if (window.inputSearch == null) {
        // Event empty input
        window.inputSearch = document.querySelector('.vgt-inner-wrap > .vgt-global-search > .vgt-global-search__input input');
        window.inputSearch.addEventListener('input', function (event) {
          _this.$log.debug('EVENTS -> inputSearch');

          setTimeout(function () {
            if (event.target.value == '') {
              _this.$log.debug('EVENTS -> remove');

              _this.$app.myHilitor.remove();
            }
          }, 50);
        });
      }
    }); // apiGet

    this.$EventBus.$on('apiGet', function (url, callback) {
      // Degub
      _this.$log.debug('EVENTS -> apiGet', url);

      _this.$api.get(url, callback);
    }); // apiUpdate

    this.$EventBus.$on('apiUpdate', function (url, item, callback) {
      // Degub
      _this.$log.debug('EVENTS -> apiUpdate', url);

      _this.$api.update(url, item, callback);
    }); // apiSave

    this.$EventBus.$on('apiSave', function (url, item, callback) {
      // Degub
      _this.$log.debug('EVENTS -> apiSave', url);

      _this.$api.save(url, item, callback);
    }); // apiOrder

    this.$EventBus.$on('apiOrder', function (url, item, callback) {
      // Degub
      _this.$log.debug('EVENTS -> apiOrder', url);

      _this.$api.order(url, item, callback);
    }); // apiUpload

    this.$EventBus.$on('apiUpload', function (url, item, callback) {
      // Degub
      _this.$log.debug('EVENTS -> apiUpload', url);

      _this.$api.upload(url, item, callback);
    }); // apiDownload

    this.$EventBus.$on('apiDownload', function (url, item) {
      // Degub
      _this.$log.debug('EVENTS -> apiDownload', url);

      _this.$api.download(url, item);
    }); // apiDelete

    this.$EventBus.$on('apiDelete', function (url, item, callback, wait, id_parent) {
      // Degub
      _this.$log.debug('EVENTS -> apiDelete', url);

      _this.$api.delete(url, item, callback, wait, id_parent);
    });
  }
});
// CONCATENATED MODULE: ./src/build.js
/**
 * @name VueJS VueCore Mixins (vue-core-mixins)
 * @description Library for Vue.js 2.0
 */
// Mixins


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=vue-core-mixins.umd.js.map