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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lettering; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/style */ \"./assets/style.js\");\nvar _jsxFileName = \"/Users/lariquinha/Caio/projects/next/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Lettering() {\n  const {\n    0: fontSize,\n    1: setFontSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const {\n    0: showLastName,\n    1: setShowLastName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n\n  function wheelControl(ev) {\n    if (fontSize < 0) return setFontSize(1);\n    if (fontSize < 700 && ev.deltaY >= 0) setFontSize(fontSize * 1.1);else if (fontSize < 700 || showLastName < 2 && ev.deltaY < -1) setFontSize(fontSize - 10 * 1.5);else if (fontSize > 700 && showLastName < 2871 && ev.deltaY >= 0) setShowLastName(showLastName + 25);else if (ev.deltaY < -1) setShowLastName(showLastName - 25);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \"My page title\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"My page title\",\n    key: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  })), __jsx(_assets_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"ContentTitleName\"], {\n    showLastName: showLastName,\n    onWheel: ev => wheelControl(ev),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"TitleName\"], {\n    passFontSize: fontSize,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"Caio \", showLastName >= 2 ? 'Triana' : null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxldHRlcmluZyIsImZvbnRTaXplIiwic2V0Rm9udFNpemUiLCJ1c2VTdGF0ZSIsInNob3dMYXN0TmFtZSIsInNldFNob3dMYXN0TmFtZSIsIndoZWVsQ29udHJvbCIsImV2IiwiZGVsdGFZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2hDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDs7QUFFQSxXQUFTRyxZQUFULENBQXNCQyxFQUF0QixFQUF5QjtBQUNyQixRQUFHTixRQUFRLEdBQUcsQ0FBZCxFQUFrQixPQUFPQyxXQUFXLENBQUMsQ0FBRCxDQUFsQjtBQUNsQixRQUFJRCxRQUFRLEdBQUcsR0FBWCxJQUFrQk0sRUFBRSxDQUFDQyxNQUFILElBQWEsQ0FBbkMsRUFBdUNOLFdBQVcsQ0FBQ0QsUUFBUSxHQUFHLEdBQVosQ0FBWCxDQUF2QyxLQUNTLElBQUdBLFFBQVEsR0FBRyxHQUFYLElBQWtCRyxZQUFZLEdBQUcsQ0FBZixJQUFvQkcsRUFBRSxDQUFDQyxNQUFILEdBQVksQ0FBQyxDQUF0RCxFQUEwRE4sV0FBVyxDQUFDRCxRQUFRLEdBQUksS0FBSyxHQUFsQixDQUFYLENBQTFELEtBQ0ksSUFBR0EsUUFBUSxHQUFHLEdBQVgsSUFBbUJHLFlBQVksR0FBRyxJQUFsQyxJQUEwQ0csRUFBRSxDQUFDQyxNQUFILElBQWEsQ0FBMUQsRUFBOERILGVBQWUsQ0FBQ0QsWUFBWSxHQUFHLEVBQWhCLENBQWYsQ0FBOUQsS0FDSSxJQUFHRyxFQUFFLENBQUNDLE1BQUgsR0FBWSxDQUFDLENBQWhCLEVBQXFCSCxlQUFlLENBQUNELFlBQVksR0FBRyxFQUFoQixDQUFmO0FBQ3pDOztBQUVELFNBQ0ksbUVBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFDLGVBQWxDO0FBQWtELE9BQUcsRUFBQyxPQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FEQSxFQUtJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUksTUFBQyx1REFBRDtBQUFrQixnQkFBWSxFQUFFQSxZQUFoQztBQUErQyxXQUFPLEVBQUdHLEVBQUQsSUFBT0QsWUFBWSxDQUFDQyxFQUFELENBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQVcsZ0JBQVksRUFBRU4sUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNVRyxZQUFZLElBQUksQ0FBaEIsR0FBb0IsUUFBcEIsR0FBK0IsSUFEekMsQ0FESixDQU5KLENBREo7QUFjSCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ29udGVudFRpdGxlTmFtZSwgVGl0bGVOYW1lIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0dGVyaW5nKCkgeyBcbiAgICBjb25zdCBbZm9udFNpemUgLCBzZXRGb250U2l6ZSBdID0gdXNlU3RhdGUoMSlcbiAgICBjb25zdCBbc2hvd0xhc3ROYW1lICwgc2V0U2hvd0xhc3ROYW1lIF0gPSB1c2VTdGF0ZSgxKVxuXG4gICAgZnVuY3Rpb24gd2hlZWxDb250cm9sKGV2KXtcbiAgICAgICAgaWYoZm9udFNpemUgPCAwICkgcmV0dXJuIHNldEZvbnRTaXplKDEpXG4gICAgICAgIGlmIChmb250U2l6ZSA8IDcwMCAmJiBldi5kZWx0YVkgPj0gMCApIHNldEZvbnRTaXplKGZvbnRTaXplICogMS4xKSBcbiAgICAgICAgICAgIGVsc2UgaWYoZm9udFNpemUgPCA3MDAgfHwgc2hvd0xhc3ROYW1lIDwgMiAmJiBldi5kZWx0YVkgPCAtMSApIHNldEZvbnRTaXplKGZvbnRTaXplIC0gKDEwICogMS41KSkgXG4gICAgICAgICAgICAgICAgZWxzZSBpZihmb250U2l6ZSA+IDcwMCAmJiAgc2hvd0xhc3ROYW1lIDwgMjg3MSAmJiBldi5kZWx0YVkgPj0gMCApIHNldFNob3dMYXN0TmFtZShzaG93TGFzdE5hbWUgKyAyNSlcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihldi5kZWx0YVkgPCAtMSAgKSBzZXRTaG93TGFzdE5hbWUoc2hvd0xhc3ROYW1lIC0gMjUpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICAgICA8Q29udGVudFRpdGxlTmFtZSBzaG93TGFzdE5hbWU9e3Nob3dMYXN0TmFtZX0gIG9uV2hlZWw9eyhldik9PiB3aGVlbENvbnRyb2woZXYpfT5cbiAgICAgICAgICAgICAgICA8VGl0bGVOYW1lIHBhc3NGb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgICAgICAgICAgICAgICBDYWlvIHtzaG93TGFzdE5hbWUgPj0gMiA/ICdUcmlhbmEnIDogbnVsbH0gXG4gICAgICAgICAgICAgICAgPC9UaXRsZU5hbWU+XG4gICAgICAgICAgICA8L0NvbnRlbnRUaXRsZU5hbWU+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/style.js":
/*!************************!*\
  !*** ./pages/style.js ***!
  \************************/
/*! exports provided: ContentTitleName, TitleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentTitleName\", function() { return ContentTitleName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleName\", function() { return TitleName; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ContentTitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n    height : 100vh;\n    width : 100vw;\n    display : flex;\n    justify-content : space-between;\n    padding : 24px;\n    position : fixed;\n    align-items : center;\n    left :  -${props => props.showLastName}px;\n`;\nconst TitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n    font-family: Archivo;\n    font-size : ${props => props.passFontSize}px;\n    color : #fff;\n    white-space: pre;\n    position: relative;\n\n     &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        z-index: -1;\n        height : ${props => props.passFontSize * 6}px;\n        width  : ${props => props.passFontSize * 6}px;\n        background : #000;\n        top : 50%;\n        border-radius : 5000px;\n        transform : translateY(-50%);\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5qcz9jOWRjIl0sIm5hbWVzIjpbIkNvbnRlbnRUaXRsZU5hbWUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInNob3dMYXN0TmFtZSIsIlRpdGxlTmFtZSIsImgxIiwicGFzc0ZvbnRTaXplIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7ZUFRckJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxZQUFhO0NBUjNDO0FBV0EsTUFBTUMsU0FBUyxHQUFHSix3REFBTSxDQUFDSyxFQUFHOztrQkFFVkgsS0FBSyxJQUFJQSxLQUFLLENBQUNJLFlBQWE7Ozs7Ozs7Ozs7bUJBVTNCSixLQUFLLElBQUlBLEtBQUssQ0FBQ0ksWUFBTixHQUFtQixDQUFFO21CQUM5QkosS0FBSyxJQUFJQSxLQUFLLENBQUNJLFlBQU4sR0FBbUIsQ0FBRTs7Ozs7O0NBYmpEIiwiZmlsZSI6Ii4vcGFnZXMvc3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBDb250ZW50VGl0bGVOYW1lID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQgOiAxMDB2aDtcbiAgICB3aWR0aCA6IDEwMHZ3O1xuICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudCA6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZyA6IDI0cHg7XG4gICAgcG9zaXRpb24gOiBmaXhlZDtcbiAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcbiAgICBsZWZ0IDogIC0ke3Byb3BzID0+IHByb3BzLnNob3dMYXN0TmFtZX1weDtcbmBcblxuY29uc3QgVGl0bGVOYW1lID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xuICAgIGZvbnQtc2l6ZSA6ICR7cHJvcHMgPT4gcHJvcHMucGFzc0ZvbnRTaXplfXB4O1xuICAgIGNvbG9yIDogI2ZmZjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgaGVpZ2h0IDogJHtwcm9wcyA9PiBwcm9wcy5wYXNzRm9udFNpemUqNn1weDtcbiAgICAgICAgd2lkdGggIDogJHtwcm9wcyA9PiBwcm9wcy5wYXNzRm9udFNpemUqNn1weDtcbiAgICAgICAgYmFja2dyb3VuZCA6ICMwMDA7XG4gICAgICAgIHRvcCA6IDUwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwMDBweDtcbiAgICAgICAgdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuYFxuXG5leHBvcnQge0NvbnRlbnRUaXRsZU5hbWUsIFRpdGxlTmFtZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/style.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lariquinha/Caio/projects/next/pages/index.js */"./pages/index.js");


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