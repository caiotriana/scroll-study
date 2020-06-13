module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/style.js":
/*!*************************!*\
  !*** ./assets/style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n/* http://meyerweb.com/eric/tools/css/reset/ \nv2.0 | 20110126\nLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n margin: 0;\n padding: 0;\n border: 0;\n font-size: 100%;\n font: inherit;\n vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n display: block;\n}\nbody {\n line-height: 1;\n}\nol, ul {\n list-style: none;\n}\nblockquote, q {\n quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n content: '';\n content: none;\n}\ntable {\n border-collapse: collapse;\n border-spacing: 0;\n}\n\nhtml, body {\n    background-color : #fff;\n    height: 100%;\n    overflow: hidden;\n}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUuanM/ZWJhZiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXRDO0FBeURlRCwwRUFBZiIsImZpbGUiOiIuL2Fzc2V0cy9zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxudjIuMCB8IDIwMTEwMTI2XG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiBtYXJnaW46IDA7XG4gcGFkZGluZzogMDtcbiBib3JkZXI6IDA7XG4gZm9udC1zaXplOiAxMDAlO1xuIGZvbnQ6IGluaGVyaXQ7XG4gdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gbGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcbiBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiBjb250ZW50OiAnJztcbiBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYFxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/style.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lettering; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/style */ \"./assets/style.js\");\nvar _jsxFileName = \"/Users/lariquinha/Caio/projects/scroll-study/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Lettering() {\n  const {\n    0: fontSize,\n    1: setFontSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const {\n    0: showLastName,\n    1: setShowLastName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const {\n    0: isAnimate,\n    1: setIsAnimate\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: MousePosition,\n    1: setMousePosition\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    left: 0,\n    top: 0\n  });\n\n  function handleOnWheel(ev) {\n    setIsAnimate(false);\n    if (fontSize < 0) return setFontSize(1);\n    if (fontSize < 700 && ev.deltaY >= 0) setFontSize(fontSize * 1.1);else if (fontSize < 700 || showLastName < 2 && ev.deltaY < -1) setFontSize(fontSize - 10 * 1.5);else if (fontSize > 700 && showLastName < 2871 && ev.deltaY >= 0) setShowLastName(showLastName + 25);else if (ev.deltaY < -1) setShowLastName(showLastName - 25);\n  }\n\n  function handleMouseMove(ev) {\n    setMousePosition({\n      left: ev.pageX,\n      top: ev.pageY\n    });\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Caio Triana - Web Developer\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"Caio Triana - Web Developer\",\n    key: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  })), __jsx(_assets_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"ContentTitleName\"], {\n    showLastName: showLastName,\n    onWheel: ev => handleOnWheel(ev),\n    onMouseMove: ev => handleMouseMove(ev),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"TitleName\"], {\n    passFontSize: fontSize,\n    style: {\n      left: MousePosition.left,\n      top: MousePosition.top\n    },\n    isAnimate: isAnimate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, \"Caio \", showLastName >= 2 ? 'Triana' : null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxldHRlcmluZyIsImZvbnRTaXplIiwic2V0Rm9udFNpemUiLCJ1c2VTdGF0ZSIsInNob3dMYXN0TmFtZSIsInNldFNob3dMYXN0TmFtZSIsImlzQW5pbWF0ZSIsInNldElzQW5pbWF0ZSIsIk1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhhbmRsZU9uV2hlZWwiLCJldiIsImRlbHRhWSIsImhhbmRsZU1vdXNlTW92ZSIsInBhZ2VYIiwicGFnZVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFDaEMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLENBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSixzREFBUSxDQUFDLElBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ04sc0RBQVEsQ0FBQztBQUMvQ08sUUFBSSxFQUFFLENBRHlDO0FBRS9DQyxPQUFHLEVBQUU7QUFGMEMsR0FBRCxDQUFsRDs7QUFLQSxXQUFTQyxhQUFULENBQXVCQyxFQUF2QixFQUEwQjtBQUN0Qk4sZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQSxRQUFHTixRQUFRLEdBQUcsQ0FBZCxFQUFrQixPQUFPQyxXQUFXLENBQUMsQ0FBRCxDQUFsQjtBQUNsQixRQUFJRCxRQUFRLEdBQUcsR0FBWCxJQUFrQlksRUFBRSxDQUFDQyxNQUFILElBQWEsQ0FBbkMsRUFBdUNaLFdBQVcsQ0FBQ0QsUUFBUSxHQUFHLEdBQVosQ0FBWCxDQUF2QyxLQUNTLElBQUdBLFFBQVEsR0FBRyxHQUFYLElBQWtCRyxZQUFZLEdBQUcsQ0FBZixJQUFvQlMsRUFBRSxDQUFDQyxNQUFILEdBQVksQ0FBQyxDQUF0RCxFQUEwRFosV0FBVyxDQUFDRCxRQUFRLEdBQUksS0FBSyxHQUFsQixDQUFYLENBQTFELEtBQ0ksSUFBR0EsUUFBUSxHQUFHLEdBQVgsSUFBbUJHLFlBQVksR0FBRyxJQUFsQyxJQUEwQ1MsRUFBRSxDQUFDQyxNQUFILElBQWEsQ0FBMUQsRUFBOERULGVBQWUsQ0FBQ0QsWUFBWSxHQUFHLEVBQWhCLENBQWYsQ0FBOUQsS0FDSSxJQUFHUyxFQUFFLENBQUNDLE1BQUgsR0FBWSxDQUFDLENBQWhCLEVBQXFCVCxlQUFlLENBQUNELFlBQVksR0FBRyxFQUFoQixDQUFmO0FBQ3pDOztBQUVELFdBQVNXLGVBQVQsQ0FBeUJGLEVBQXpCLEVBQTZCO0FBQUVKLG9CQUFnQixDQUFDO0FBQUNDLFVBQUksRUFBRUcsRUFBRSxDQUFDRyxLQUFWO0FBQWlCTCxTQUFHLEVBQUVFLEVBQUUsQ0FBQ0k7QUFBekIsS0FBRCxDQUFoQjtBQUFvRDs7QUFFbkYsU0FDSSxtRUFDQSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURKLEVBRUk7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUMsNkJBQWxDO0FBQWdFLE9BQUcsRUFBQyxPQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FEQSxFQUtJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUksTUFBQyx1REFBRDtBQUFrQixnQkFBWSxFQUFFYixZQUFoQztBQUErQyxXQUFPLEVBQUdTLEVBQUQsSUFBT0QsYUFBYSxDQUFDQyxFQUFELENBQTVFO0FBQWtGLGVBQVcsRUFBR0EsRUFBRCxJQUFPRSxlQUFlLENBQUNGLEVBQUQsQ0FBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBVyxnQkFBWSxFQUFFWixRQUF6QjtBQUFvQyxTQUFLLEVBQUU7QUFBQ1MsVUFBSSxFQUFDRixhQUFhLENBQUNFLElBQXBCO0FBQTJCQyxTQUFHLEVBQUVILGFBQWEsQ0FBQ0c7QUFBOUMsS0FBM0M7QUFBK0YsYUFBUyxFQUFFTCxTQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1VGLFlBQVksSUFBSSxDQUFoQixHQUFvQixRQUFwQixHQUErQixJQUR6QyxDQURKLENBTkosQ0FESjtBQWNIIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENvbnRlbnRUaXRsZU5hbWUsIFRpdGxlTmFtZSB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldHRlcmluZygpIHsgXG4gICAgY29uc3QgW2ZvbnRTaXplICwgc2V0Rm9udFNpemUgXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgW3Nob3dMYXN0TmFtZSAsIHNldFNob3dMYXN0TmFtZSBdID0gdXNlU3RhdGUoMSlcbiAgICBjb25zdCBbaXNBbmltYXRlICwgc2V0SXNBbmltYXRlIF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtNb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uV2hlZWwoZXYpe1xuICAgICAgICBzZXRJc0FuaW1hdGUoZmFsc2UpXG4gICAgICAgIGlmKGZvbnRTaXplIDwgMCApIHJldHVybiBzZXRGb250U2l6ZSgxKVxuICAgICAgICBpZiAoZm9udFNpemUgPCA3MDAgJiYgZXYuZGVsdGFZID49IDAgKSBzZXRGb250U2l6ZShmb250U2l6ZSAqIDEuMSkgXG4gICAgICAgICAgICBlbHNlIGlmKGZvbnRTaXplIDwgNzAwIHx8IHNob3dMYXN0TmFtZSA8IDIgJiYgZXYuZGVsdGFZIDwgLTEgKSBzZXRGb250U2l6ZShmb250U2l6ZSAtICgxMCAqIDEuNSkpIFxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZm9udFNpemUgPiA3MDAgJiYgIHNob3dMYXN0TmFtZSA8IDI4NzEgJiYgZXYuZGVsdGFZID49IDAgKSBzZXRTaG93TGFzdE5hbWUoc2hvd0xhc3ROYW1lICsgMjUpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZXYuZGVsdGFZIDwgLTEgICkgc2V0U2hvd0xhc3ROYW1lKHNob3dMYXN0TmFtZSAtIDI1KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXYpIHsgc2V0TW91c2VQb3NpdGlvbih7bGVmdDogZXYucGFnZVgsIHRvcDogZXYucGFnZVl9KTsgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+Q2FpbyBUcmlhbmEgLSBXZWIgRGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQ2FpbyBUcmlhbmEgLSBXZWIgRGV2ZWxvcGVyXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICAgICA8Q29udGVudFRpdGxlTmFtZSBzaG93TGFzdE5hbWU9e3Nob3dMYXN0TmFtZX0gIG9uV2hlZWw9eyhldik9PiBoYW5kbGVPbldoZWVsKGV2KX0gb25Nb3VzZU1vdmU9eyhldik9PiBoYW5kbGVNb3VzZU1vdmUoZXYpfT5cbiAgICAgICAgICAgICAgICA8VGl0bGVOYW1lIHBhc3NGb250U2l6ZT17Zm9udFNpemV9ICBzdHlsZT17e2xlZnQ6TW91c2VQb3NpdGlvbi5sZWZ0ICwgdG9wOiBNb3VzZVBvc2l0aW9uLnRvcH19IGlzQW5pbWF0ZT17aXNBbmltYXRlfSA+XG4gICAgICAgICAgICAgICAgICAgIENhaW8ge3Nob3dMYXN0TmFtZSA+PSAyID8gJ1RyaWFuYScgOiBudWxsfSBcbiAgICAgICAgICAgICAgICA8L1RpdGxlTmFtZT5cbiAgICAgICAgICAgIDwvQ29udGVudFRpdGxlTmFtZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/style.js":
/*!************************!*\
  !*** ./pages/style.js ***!
  \************************/
/*! exports provided: ContentTitleName, TitleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentTitleName\", function() { return ContentTitleName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleName\", function() { return TitleName; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ContentTitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n    height : 100vh;\n    width : 100vw;\n    display : flex;\n    justify-content : space-between;\n    padding : 24px;\n    position : fixed;\n    // align-items : center;\n    left :  -${props => props.showLastName}px;\n`;\nconst TitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n    font-family: Archivo;\n    font-size : ${props => props.passFontSize}px;\n    color : #fff;\n    white-space: pre;\n    position: relative;\n    height : max-content;\n\n     &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        z-index: -1;\n        height : ${props => props.passFontSize * 6}px;\n        width  : ${props => props.passFontSize * 6}px;\n        background : #000;\n        top : 50%;\n        border-radius : 5000px;\n        transform : translateY(-50%);\n        animation: ${props => props.isAnimate ? 'pulseSize 2s infinite' : ''};\n  }\n  \n\n  @keyframes pulseSize { \n      0% { \n        transform : scale(1)\n      }\n      50% { \n        transform : scale(2)\n      }\n      100% { \n        transform : scale(1)\n      }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5qcz9jOWRjIl0sIm5hbWVzIjpbIkNvbnRlbnRUaXRsZU5hbWUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInNob3dMYXN0TmFtZSIsIlRpdGxlTmFtZSIsImgxIiwicGFzc0ZvbnRTaXplIiwiaXNBbmltYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7ZUFRckJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxZQUFhO0NBUjNDO0FBV0EsTUFBTUMsU0FBUyxHQUFHSix3REFBTSxDQUFDSyxFQUFHOztrQkFFVkgsS0FBSyxJQUFJQSxLQUFLLENBQUNJLFlBQWE7Ozs7Ozs7Ozs7O21CQVczQkosS0FBSyxJQUFJQSxLQUFLLENBQUNJLFlBQU4sR0FBbUIsQ0FBRTttQkFDOUJKLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxZQUFOLEdBQW1CLENBQUU7Ozs7O3FCQUs1QkosS0FBSyxJQUFJQSxLQUFLLENBQUNLLFNBQU4sR0FBa0IsdUJBQWxCLEdBQTRDLEVBQUc7Ozs7Ozs7Ozs7Ozs7OztDQW5CN0UiLCJmaWxlIjoiLi9wYWdlcy9zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IENvbnRlbnRUaXRsZU5hbWUgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodCA6IDEwMHZoO1xuICAgIHdpZHRoIDogMTAwdnc7XG4gICAgZGlzcGxheSA6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nIDogMjRweDtcbiAgICBwb3NpdGlvbiA6IGZpeGVkO1xuICAgIC8vIGFsaWduLWl0ZW1zIDogY2VudGVyO1xuICAgIGxlZnQgOiAgLSR7cHJvcHMgPT4gcHJvcHMuc2hvd0xhc3ROYW1lfXB4O1xuYFxuXG5jb25zdCBUaXRsZU5hbWUgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1mYW1pbHk6IEFyY2hpdm87XG4gICAgZm9udC1zaXplIDogJHtwcm9wcyA9PiBwcm9wcy5wYXNzRm9udFNpemV9cHg7XG4gICAgY29sb3IgOiAjZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodCA6IG1heC1jb250ZW50O1xuXG4gICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBoZWlnaHQgOiAke3Byb3BzID0+IHByb3BzLnBhc3NGb250U2l6ZSo2fXB4O1xuICAgICAgICB3aWR0aCAgOiAke3Byb3BzID0+IHByb3BzLnBhc3NGb250U2l6ZSo2fXB4O1xuICAgICAgICBiYWNrZ3JvdW5kIDogIzAwMDtcbiAgICAgICAgdG9wIDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzIDogNTAwMHB4O1xuICAgICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBhbmltYXRpb246ICR7cHJvcHMgPT4gcHJvcHMuaXNBbmltYXRlID8gJ3B1bHNlU2l6ZSAycyBpbmZpbml0ZScgOiAnJ307XG4gIH1cbiAgXG5cbiAgQGtleWZyYW1lcyBwdWxzZVNpemUgeyBcbiAgICAgIDAlIHsgXG4gICAgICAgIHRyYW5zZm9ybSA6IHNjYWxlKDEpXG4gICAgICB9XG4gICAgICA1MCUgeyBcbiAgICAgICAgdHJhbnNmb3JtIDogc2NhbGUoMilcbiAgICAgIH1cbiAgICAgIDEwMCUgeyBcbiAgICAgICAgdHJhbnNmb3JtIDogc2NhbGUoMSlcbiAgICAgIH1cbiAgfVxuYFxuXG5leHBvcnQge0NvbnRlbnRUaXRsZU5hbWUsIFRpdGxlTmFtZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/style.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lariquinha/Caio/projects/scroll-study/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });