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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lettering; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/style */ \"./assets/style.js\");\nvar _jsxFileName = \"/Users/lariquinha/Caio/projects/scroll-study/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Lettering() {\n  const {\n    0: fontSize,\n    1: setFontSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const {\n    0: showLastName,\n    1: setShowLastName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const {\n    0: MousePosition,\n    1: setMousePosition\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    left: 0,\n    top: 0\n  }); // useEffect(() => {\n  //     document.addEventListener('mousemove', (e) => {\n  //         setMousePosition({left: e.pageX, top: e.pageY});\n  //     });\n  //   },[MousePosition]);\n\n  function handleOnWheel(ev) {\n    if (fontSize < 0) return setFontSize(1);\n    if (fontSize < 700 && ev.deltaY >= 0) setFontSize(fontSize * 1.1);else if (fontSize < 700 || showLastName < 2 && ev.deltaY < -1) setFontSize(fontSize - 10 * 1.5);else if (fontSize > 700 && showLastName < 2871 && ev.deltaY >= 0) setShowLastName(showLastName + 25);else if (ev.deltaY < -1) setShowLastName(showLastName - 25);\n  }\n\n  function handleMouseMove(ev) {\n    setMousePosition({\n      left: ev.pageX,\n      top: ev.pageY\n    });\n  }\n\n  console.log(MousePosition);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Caio Triana - Web Developer\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"Caio Triana - Web Developer\",\n    key: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  })), __jsx(_assets_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"ContentTitleName\"], {\n    showLastName: showLastName,\n    onWheel: ev => handleOnWheel(ev),\n    onMouseMove: ev => handleMouseMove(ev),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"TitleName\"], {\n    passFontSize: fontSize,\n    style: {\n      left: MousePosition.left,\n      top: MousePosition.top\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, \"Caio \", showLastName >= 2 ? 'Triana' : null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxldHRlcmluZyIsImZvbnRTaXplIiwic2V0Rm9udFNpemUiLCJ1c2VTdGF0ZSIsInNob3dMYXN0TmFtZSIsInNldFNob3dMYXN0TmFtZSIsIk1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhhbmRsZU9uV2hlZWwiLCJldiIsImRlbHRhWSIsImhhbmRsZU1vdXNlTW92ZSIsInBhZ2VYIiwicGFnZVkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2hDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DSixzREFBUSxDQUFDO0FBQy9DSyxRQUFJLEVBQUUsQ0FEeUM7QUFFL0NDLE9BQUcsRUFBRTtBQUYwQyxHQUFELENBQWxELENBSGdDLENBT2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkMsRUFBdkIsRUFBMEI7QUFDdEIsUUFBR1YsUUFBUSxHQUFHLENBQWQsRUFBa0IsT0FBT0MsV0FBVyxDQUFDLENBQUQsQ0FBbEI7QUFDbEIsUUFBSUQsUUFBUSxHQUFHLEdBQVgsSUFBa0JVLEVBQUUsQ0FBQ0MsTUFBSCxJQUFhLENBQW5DLEVBQXVDVixXQUFXLENBQUNELFFBQVEsR0FBRyxHQUFaLENBQVgsQ0FBdkMsS0FDUyxJQUFHQSxRQUFRLEdBQUcsR0FBWCxJQUFrQkcsWUFBWSxHQUFHLENBQWYsSUFBb0JPLEVBQUUsQ0FBQ0MsTUFBSCxHQUFZLENBQUMsQ0FBdEQsRUFBMERWLFdBQVcsQ0FBQ0QsUUFBUSxHQUFJLEtBQUssR0FBbEIsQ0FBWCxDQUExRCxLQUNJLElBQUdBLFFBQVEsR0FBRyxHQUFYLElBQW1CRyxZQUFZLEdBQUcsSUFBbEMsSUFBMENPLEVBQUUsQ0FBQ0MsTUFBSCxJQUFhLENBQTFELEVBQThEUCxlQUFlLENBQUNELFlBQVksR0FBRyxFQUFoQixDQUFmLENBQTlELEtBQ0ksSUFBR08sRUFBRSxDQUFDQyxNQUFILEdBQVksQ0FBQyxDQUFoQixFQUFxQlAsZUFBZSxDQUFDRCxZQUFZLEdBQUcsRUFBaEIsQ0FBZjtBQUN6Qzs7QUFHRCxXQUFTUyxlQUFULENBQXlCRixFQUF6QixFQUE2QjtBQUFFSixvQkFBZ0IsQ0FBQztBQUFDQyxVQUFJLEVBQUVHLEVBQUUsQ0FBQ0csS0FBVjtBQUFpQkwsU0FBRyxFQUFFRSxFQUFFLENBQUNJO0FBQXpCLEtBQUQsQ0FBaEI7QUFBb0Q7O0FBRW5GQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsYUFBWjtBQUVBLFNBQ0ksbUVBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FESixFQUVJO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFDLDZCQUFsQztBQUFnRSxPQUFHLEVBQUMsT0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREEsRUFLSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JLE1BQUMsdURBQUQ7QUFBa0IsZ0JBQVksRUFBRUYsWUFBaEM7QUFBK0MsV0FBTyxFQUFHTyxFQUFELElBQU9ELGFBQWEsQ0FBQ0MsRUFBRCxDQUE1RTtBQUFrRixlQUFXLEVBQUdBLEVBQUQsSUFBT0UsZUFBZSxDQUFDRixFQUFELENBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQVcsZ0JBQVksRUFBRVYsUUFBekI7QUFBb0MsU0FBSyxFQUFFO0FBQUNPLFVBQUksRUFBQ0YsYUFBYSxDQUFDRSxJQUFwQjtBQUEyQkMsU0FBRyxFQUFFSCxhQUFhLENBQUNHO0FBQTlDLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDVUwsWUFBWSxJQUFJLENBQWhCLEdBQW9CLFFBQXBCLEdBQStCLElBRHpDLENBREosQ0FOSixDQURKO0FBY0giLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ29udGVudFRpdGxlTmFtZSwgVGl0bGVOYW1lIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vYXNzZXRzL3N0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0dGVyaW5nKCkgeyBcbiAgICBjb25zdCBbZm9udFNpemUgLCBzZXRGb250U2l6ZSBdID0gdXNlU3RhdGUoMSlcbiAgICBjb25zdCBbc2hvd0xhc3ROYW1lICwgc2V0U2hvd0xhc3ROYW1lIF0gPSB1c2VTdGF0ZSgxKVxuICAgIGNvbnN0IFtNb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwXG4gICAgfSlcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIC8vICAgICAgICAgc2V0TW91c2VQb3NpdGlvbih7bGVmdDogZS5wYWdlWCwgdG9wOiBlLnBhZ2VZfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSxbTW91c2VQb3NpdGlvbl0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25XaGVlbChldil7XG4gICAgICAgIGlmKGZvbnRTaXplIDwgMCApIHJldHVybiBzZXRGb250U2l6ZSgxKVxuICAgICAgICBpZiAoZm9udFNpemUgPCA3MDAgJiYgZXYuZGVsdGFZID49IDAgKSBzZXRGb250U2l6ZShmb250U2l6ZSAqIDEuMSkgXG4gICAgICAgICAgICBlbHNlIGlmKGZvbnRTaXplIDwgNzAwIHx8IHNob3dMYXN0TmFtZSA8IDIgJiYgZXYuZGVsdGFZIDwgLTEgKSBzZXRGb250U2l6ZShmb250U2l6ZSAtICgxMCAqIDEuNSkpIFxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZm9udFNpemUgPiA3MDAgJiYgIHNob3dMYXN0TmFtZSA8IDI4NzEgJiYgZXYuZGVsdGFZID49IDAgKSBzZXRTaG93TGFzdE5hbWUoc2hvd0xhc3ROYW1lICsgMjUpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZXYuZGVsdGFZIDwgLTEgICkgc2V0U2hvd0xhc3ROYW1lKHNob3dMYXN0TmFtZSAtIDI1KVxuICAgIH1cblxuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldikgeyBzZXRNb3VzZVBvc2l0aW9uKHtsZWZ0OiBldi5wYWdlWCwgdG9wOiBldi5wYWdlWX0pOyB9XG4gICAgXG4gICAgY29uc29sZS5sb2coTW91c2VQb3NpdGlvbilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkNhaW8gVHJpYW5hIC0gV2ViIERldmVsb3BlcjwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkNhaW8gVHJpYW5hIC0gV2ViIERldmVsb3BlclwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgPENvbnRlbnRUaXRsZU5hbWUgc2hvd0xhc3ROYW1lPXtzaG93TGFzdE5hbWV9ICBvbldoZWVsPXsoZXYpPT4gaGFuZGxlT25XaGVlbChldil9IG9uTW91c2VNb3ZlPXsoZXYpPT4gaGFuZGxlTW91c2VNb3ZlKGV2KX0+XG4gICAgICAgICAgICAgICAgPFRpdGxlTmFtZSBwYXNzRm9udFNpemU9e2ZvbnRTaXplfSAgc3R5bGU9e3tsZWZ0Ok1vdXNlUG9zaXRpb24ubGVmdCAsIHRvcDogTW91c2VQb3NpdGlvbi50b3B9fSA+XG4gICAgICAgICAgICAgICAgICAgIENhaW8ge3Nob3dMYXN0TmFtZSA+PSAyID8gJ1RyaWFuYScgOiBudWxsfSBcbiAgICAgICAgICAgICAgICA8L1RpdGxlTmFtZT5cbiAgICAgICAgICAgIDwvQ29udGVudFRpdGxlTmFtZT5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/style.js":
/*!************************!*\
  !*** ./pages/style.js ***!
  \************************/
/*! exports provided: ContentTitleName, TitleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentTitleName\", function() { return ContentTitleName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleName\", function() { return TitleName; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ContentTitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n    height : 100vh;\n    width : 100vw;\n    display : flex;\n    justify-content : space-between;\n    padding : 24px;\n    position : fixed;\n    // align-items : center;\n    left :  -${props => props.showLastName}px;\n`;\nconst TitleName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n    font-family: Archivo;\n    font-size : ${props => props.passFontSize}px;\n    color : #fff;\n    white-space: pre;\n    position: relative;\n    height : max-content;\n\n     &:after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        z-index: -1;\n        height : ${props => props.passFontSize * 6}px;\n        width  : ${props => props.passFontSize * 6}px;\n        background : #000;\n        top : 50%;\n        border-radius : 5000px;\n        transform : translateY(-50%);\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5qcz9jOWRjIl0sIm5hbWVzIjpbIkNvbnRlbnRUaXRsZU5hbWUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInNob3dMYXN0TmFtZSIsIlRpdGxlTmFtZSIsImgxIiwicGFzc0ZvbnRTaXplIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7ZUFRckJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxZQUFhO0NBUjNDO0FBV0EsTUFBTUMsU0FBUyxHQUFHSix3REFBTSxDQUFDSyxFQUFHOztrQkFFVkgsS0FBSyxJQUFJQSxLQUFLLENBQUNJLFlBQWE7Ozs7Ozs7Ozs7O21CQVczQkosS0FBSyxJQUFJQSxLQUFLLENBQUNJLFlBQU4sR0FBbUIsQ0FBRTttQkFDOUJKLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxZQUFOLEdBQW1CLENBQUU7Ozs7OztDQWRqRCIsImZpbGUiOiIuL3BhZ2VzL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgQ29udGVudFRpdGxlTmFtZSA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0IDogMTAwdmg7XG4gICAgd2lkdGggOiAxMDB2dztcbiAgICBkaXNwbGF5IDogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmcgOiAyNHB4O1xuICAgIHBvc2l0aW9uIDogZml4ZWQ7XG4gICAgLy8gYWxpZ24taXRlbXMgOiBjZW50ZXI7XG4gICAgbGVmdCA6ICAtJHtwcm9wcyA9PiBwcm9wcy5zaG93TGFzdE5hbWV9cHg7XG5gXG5cbmNvbnN0IFRpdGxlTmFtZSA9IHN0eWxlZC5oMWBcbiAgICBmb250LWZhbWlseTogQXJjaGl2bztcbiAgICBmb250LXNpemUgOiAke3Byb3BzID0+IHByb3BzLnBhc3NGb250U2l6ZX1weDtcbiAgICBjb2xvciA6ICNmZmY7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0IDogbWF4LWNvbnRlbnQ7XG5cbiAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGhlaWdodCA6ICR7cHJvcHMgPT4gcHJvcHMucGFzc0ZvbnRTaXplKjZ9cHg7XG4gICAgICAgIHdpZHRoICA6ICR7cHJvcHMgPT4gcHJvcHMucGFzc0ZvbnRTaXplKjZ9cHg7XG4gICAgICAgIGJhY2tncm91bmQgOiAjMDAwO1xuICAgICAgICB0b3AgOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MDAwcHg7XG4gICAgICAgIHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbmBcblxuZXhwb3J0IHtDb250ZW50VGl0bGVOYW1lLCBUaXRsZU5hbWUgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/style.js\n");

/***/ }),

/***/ 4:
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