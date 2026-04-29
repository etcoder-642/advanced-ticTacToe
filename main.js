/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css"
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n\n:root {\n    --gradient-orange: linear-gradient(to right, rgba(210, 105, 30, 1), rgba(220, 20, 60, 1)); \n    --gradient-orange-hover: linear-gradient(to right, rgba(210, 105, 30, 0.8), rgba(220, 20, 60, 0.8)); \n    --gradient-blue: linear-gradient(to right, rgb(26, 26, 75), rgba(2, 178, 236, 1));\n    --gradient-blue-hover: linear-gradient(to right, rgba(58, 58, 153, 0.8), rgba(2, 178, 236, 0.8));\n    --gradient-box: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1));\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.header {\n    background: var(--gradient-orange);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    font-size: 32px;\n    color: white;\n    height: 128px;\n}\n\n.head-content {\n    display: flex;\n    margin: auto;\n    margin-top: 32px;\n    width: fit-content;\n}\n\nbutton, .reset-btn, .head-content * {\n    background: var(--gradient-blue);\n    color: white;\n    padding: 8px 12px;\n    margin: 4px 16px;\n    border-radius: 8px;\n}\n\n.reset-btn {\n    margin: 12px auto;\n}\n\nbutton:hover, .reset-btn:hover, .head-content *:hover {\n    background: var(--gradient-blue-hover);\n    cursor: pointer;\n}\n\n.container {\n    margin: auto;\n    margin-top: 32px;\n    width: 256px;\n    height: 256px;\n    display: flex;\n}\n\n.wrapper {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n}\n\n.space {\n    font-size: 36px;\n    font-weight: 800;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid black;\n    flex: 1;\n}\n\n.bottom-section {\n    display: flex;\n    width: 100%;\n}\n\n.message-box {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin: auto;\n    padding: 16px;\n\n    min-width: 300px;\n    min-height: 96px;\n    overflow: auto;\n\n    display: none;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border-radius: 16px;\n    background: var(--gradient-orange);\n    color: white;\n}\n\nbutton {\n    padding: 6px 16px;\n    border: none;\n    outline: none;\n    font-size: 16px;\n}\n\n.message-text {\n    font-size: 24px;\n    margin-bottom: 12px;\n}\n\n.overlay {\n    display: none;\n    position: fixed;\n    inset: 0; /* Covers entire screen */\n    background: rgba(0, 0, 0, 0.5); /* Dark semi-transparent */\n    backdrop-filter: blur(5px); /* Blurs the background */\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles/main.css"
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/styles/main.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://advanced-tictactoe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _utils_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/display.js */ \"./src/utils/display.js\");\n/* harmony import */ var _utils_computerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/computerPlayer.js */ \"./src/utils/computerPlayer.js\");\n/* harmony import */ var _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/gameStore.js */ \"./src/utils/gameStore.js\");\n/* harmony import */ var _utils_utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/utilities.js */ \"./src/utils/utilities.js\");\n/* harmony import */ var _utils_gameAction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/gameAction.js */ \"./src/utils/gameAction.js\");\n\n\n\n\n\n\n\n_utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.applyMode(true);\n_utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setMode(true);\ndocument.addEventListener('click', (e) => {\n    // Conditions: The Board is not Locked(i.e. players are playing), human Mode\n    if (e.target.classList.contains('space') && _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getBoardLocked() == false && _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getMode() === true) {\n        if (_utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getCheckInitial()) {\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setCheckInitial(false);\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.createGame();   // This fills the internal board array\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.createPlayer(); // This fills the internal player array\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.currentPlayer = 0;\n        }\n        _utils_gameAction_js__WEBPACK_IMPORTED_MODULE_5__.gameAction.executeMove(e.target, _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.currentPlayer)\n    } // Conditions: Board is not locked, computer Mode\n    else if (e.target.classList.contains('space') && _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getBoardLocked() == false && _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getMode() == false) {\n        if (_utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getCheckInitial()) {\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setCheckInitial(false);\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.createGame();   // This fills the internal board array\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.createPlayer(); // This fills the internal player array\n            _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.currentPlayer = 0;\n        }\n        _utils_gameAction_js__WEBPACK_IMPORTED_MODULE_5__.gameAction.executeMove(e.target, _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.currentPlayer);\n\n        /*\n           Since this is a computerMode the second player is always the computer. \n           It executes a click for the computer suggested move. \n        */\n        if (_utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.currentPlayer == 1) {\n            let board = _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getBoard();\n            let num = (0,_utils_computerPlayer_js__WEBPACK_IMPORTED_MODULE_2__.getComputerMove)(JSON.parse(JSON.stringify(board)), 1);\n            let secondNum = _utils_utilities_js__WEBPACK_IMPORTED_MODULE_4__.utils.convertIndextoValue(num);\n            let sampleSpace = document.getElementById(secondNum);\n\n            // Allows a click to happen only if a previous board state have not determined a winner or a draw.\n            if (_utils_gameAction_js__WEBPACK_IMPORTED_MODULE_5__.gameAction.checkWinner(board) === 0) {\n                setTimeout(() => { sampleSpace.click(); }, 500);\n            }\n        }\n    }// things that happen when the 'human-mode' button is clicked.\n    else if (e.target.classList.contains('human-mode')) {\n        if(_utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getMode()) return;\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setMode(true);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setBoardLocked(false);\n        _utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.applyMode(true);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.resetGame();\n        _utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.resetGame();\n    } // things that happen when the 'computer-mode' button is clicked.\n     else if (e.target.classList.contains('computer-mode')) {\n        if(!_utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.getMode()) return;\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setCheckInitial(true);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setBoardLocked(false);\n        _utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.applyMode(false);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setMode(false);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.resetGame();\n        _utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.resetGame();\n    } // things that happen when the 'Reset Game' or 'Restart Game' button are clicked\n     else if (e.target.classList.contains('reset-pop') || e.target.classList.contains('reset-btn')) {\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setBoardLocked(false);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setCheckInitial(true);\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.resetGame();\n        _utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.resetGame();\n    } // things when the 'See Board' button is clicked\n     else if (e.target.classList.contains('rem-pop')) {\n        _utils_display_js__WEBPACK_IMPORTED_MODULE_1__.display.noPopUpMode();\n        _utils_gameStore_js__WEBPACK_IMPORTED_MODULE_3__.gameStore.setBoardLocked(true);\n    }\n})\n\n//# sourceURL=webpack://advanced-tictactoe/./src/index.js?\n}");

/***/ },

/***/ "./src/utils/computerPlayer.js"
/*!*************************************!*\
  !*** ./src/utils/computerPlayer.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComputerMove: () => (/* binding */ getComputerMove)\n/* harmony export */ });\n/* harmony import */ var _winChecker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winChecker.js */ \"./src/utils/winChecker.js\");\n/* harmony import */ var _gameState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameState.js */ \"./src/utils/gameState.js\");\n\n\n\n\n\n/*\n    Function description:\n        algorithm that scores the current or the future moves\n        made by the current player\n    Function prototype:\n        function miniMax(board, symbol)\n    Parameters:\n        @board: current board state(2D Array)\n        @symbol: number associated wih the current player\n    Returns:\n        The score of the current status or the score of\n        the best move made by the opponent\n*/\nfunction miniMax(board, symbol, alpha = -Infinity, beta = Infinity)\n{\n    if (symbol == 0)\n    {\n        return -Infinity;\n    }\n\n    var win_state = (0,_winChecker_js__WEBPACK_IMPORTED_MODULE_0__.checkWin)(board);\n    var draw_state = (0,_winChecker_js__WEBPACK_IMPORTED_MODULE_0__.checkDraw)(board);\n\n    if (win_state == symbol)\n    {\n        return 1;\n    } else if (win_state == (0,_gameState_js__WEBPACK_IMPORTED_MODULE_1__.switchPlayer)(symbol))\n    {\n        return -1;\n    } else if (win_state == 0 && draw_state == true)\n    {\n        return 0;\n    } else\n    {\n    var dim = board.length;\n    var maxScore = -Infinity;\n    for (var i = 0; i < dim; i += 1)\n    {\n        for (var j = 0; j < dim; j += 1)\n        {\n            if (board[i][j] == 0)\n            {\n                var nextPlayer = (0,_gameState_js__WEBPACK_IMPORTED_MODULE_1__.switchPlayer)(symbol);\n                var nextBoard = (0,_gameState_js__WEBPACK_IMPORTED_MODULE_1__.makeMove)(board, symbol, i * dim + j);\n                var score = -1 * miniMax(nextBoard, nextPlayer, -beta, -alpha);\n                maxScore = Math.max(maxScore, score);\n                alpha = Math.max(alpha, score);\n                if (alpha >= beta)\n                {\n                    return alpha;\n                }\n            }\n        }\n    }\n    return maxScore;\n    }\n}\n\n/*\n    Function description:\n        function that suggests the the best move the current \n        player should make given the current board state\n    Prototype:\n        function getComputerMove(board, symbol)\n    Parameters:\n        @board: a two dimensional array that contains the current board state\n        @symbol: the number associated with the player which the computer tries to help\n    Returns:\n        @index: the one dimensional index representation of the computer suggestion(from 0 .. 9)\n*/\nfunction getComputerMove(board, symbol)\n{\n    var draw_state = (0,_winChecker_js__WEBPACK_IMPORTED_MODULE_0__.checkDraw)(board);\n    if (draw_state == true)\n    {\n        return null;\n    }\n  \n    var dim = board.length;\n    var bestMove = null;\n    var maxScore = -Infinity;\n    for (var i = 0; i < dim; i += 1)\n    {\n        for (var j = 0; j < dim; j += 1)\n        {\n            if (board[i][j] == 0)\n            {\n                var index = i * dim + j;\n                var nextBoard = (0,_gameState_js__WEBPACK_IMPORTED_MODULE_1__.makeMove)(board, symbol, index);\n                var nextPlayer = (0,_gameState_js__WEBPACK_IMPORTED_MODULE_1__.switchPlayer)(symbol);\n                var score = -1 * miniMax(nextBoard, nextPlayer);\n                if (score > maxScore)\n                {\n                    maxScore = score;\n                    bestMove = index;\n                }\n            }\n        }\n    }\n    return bestMove;\n}\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/computerPlayer.js?\n}");

/***/ },

/***/ "./src/utils/display.js"
/*!******************************!*\
  !*** ./src/utils/display.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\nconst display = (() => {\n    let messageBox = document.querySelector('.message-box');\n    let humanMode = document.querySelector('.human-mode');\n    let computerMode = document.querySelector('.computer-mode');\n    return {\n        humanMode: function () {\n            humanMode.style.background = 'linear-gradient(to right, rgb(19, 19, 54), rgb(2, 25, 236))';\n            computerMode.style.background = 'linear-gradient(to right, rgba(58, 58, 153, 0.8), rgba(2, 178, 236, 0.8))';\n        },\n        computerMode: function () {\n            computerMode.style.background = 'linear-gradient(to right, rgb(19, 19, 54), rgb(2, 25, 236))';\n            humanMode.style.background = 'linear-gradient(to right, rgba(58, 58, 153, 1), rgba(2, 178, 236, 1))';\n        },\n        popUpMode: function (str) {\n            document.querySelector('.message-text').innerHTML = str;\n            document.querySelector('.overlay').style.display = 'block';\n            messageBox.style.display = 'flex';\n        },\n        noPopUpMode: function () {\n            document.querySelector('.overlay').style.display = 'none';\n            messageBox.style.display = 'none';\n        },\n        resetGame: function () {\n            document.querySelector('.overlay').style.display = 'none';\n            messageBox.style.display = 'none';\n            let space = document.querySelectorAll('.space');\n            space.forEach(element => {\n                element.innerHTML = ''\n            })\n        },\n        applyMode: function(bool) {\n            if (bool) {\n                display.humanMode();\n            } else {\n                display.computerMode();\n            }\n        }\n    }\n})()\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/display.js?\n}");

/***/ },

/***/ "./src/utils/gameAction.js"
/*!*********************************!*\
  !*** ./src/utils/gameAction.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameAction: () => (/* binding */ gameAction)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/utils/display.js\");\n/* harmony import */ var _winChecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winChecker.js */ \"./src/utils/winChecker.js\");\n/* harmony import */ var _gameStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameStore.js */ \"./src/utils/gameStore.js\");\n/* harmony import */ var _gameState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState.js */ \"./src/utils/gameState.js\");\n\n\n\n\n\n\nconst gameAction = (() => {\n    return {\n        /*\n            Function Description:\n                - updates the board by taking the clicked user value\n            Prototype\n                function (board, player, str, num)\n            Parameters:\n                @board: a two dimensional array of the current board state\n                @player: an array containing two objects about two players\n                @str: the id of the element clicked by the user(usually represented by two numbers like 00,01,02...)\n                @num: the current player(tracked by the currentPlayer variable inside this module and swings between 0 & 1 by each click)\n            Returns:\n               the updated board\n        */\n        updateBoard: function (board, player, str, num) {\n            board[str[0]][str[1]] = player[num].id;\n            return board;\n        },\n        // checks for a win or draw and updates visual elements accordingly.\n        checkWinner: function (array) {\n            if ((0,_winChecker_js__WEBPACK_IMPORTED_MODULE_1__.checkWin)(array) == 1) {\n                _display_js__WEBPACK_IMPORTED_MODULE_0__.display.popUpMode('Player1 Won');\n                return 1;\n            } else if ((0,_winChecker_js__WEBPACK_IMPORTED_MODULE_1__.checkWin)(array) == 2) {\n                _display_js__WEBPACK_IMPORTED_MODULE_0__.display.popUpMode('Player2 Won');\n                return 1;\n            } else if ((0,_winChecker_js__WEBPACK_IMPORTED_MODULE_1__.checkDraw)(array)) {\n                _display_js__WEBPACK_IMPORTED_MODULE_0__.display.popUpMode('The game ended in a Draw');\n                return 1;\n            } else { return 0; }\n        },\n        /*\n           Function Description:\n                An internal function that executes move by taking the id of a player\n                and the user clicked box or element\n            Prototype:\n                function executeMove(targetElement, playerID)\n            Parameters:\n                @targetElement: refers to clicked element usually identified by e.target\n                @playerID: refers to the id of the current player, also tracked by gameAction.currentPlayer\n            Returns:\n                It doesn't return anything just performs a move action.\n        */\n        executeMove: function (targetElement, playerID) {\n            let player = _gameStore_js__WEBPACK_IMPORTED_MODULE_2__.gameStore.getPlayer();\n            let board = _gameStore_js__WEBPACK_IMPORTED_MODULE_2__.gameStore.getBoard();\n            let str = targetElement.id;\n\n            /* \n                - Prevents User from changing Values of already selected board Spaces. \n                Board Spaces can have 3 values 0 - nothing in space, \n                1 - Player1 have selected the spot, 2 - Player1 have selected the spot\n            */\n            if (board[str[0]][str[1]] != 0) {\n                return;\n            }\n            // switches Player (0<->1)\n            _gameStore_js__WEBPACK_IMPORTED_MODULE_2__.gameStore.currentPlayer = (0,_gameState_js__WEBPACK_IMPORTED_MODULE_3__.switchPlayer)(_gameStore_js__WEBPACK_IMPORTED_MODULE_2__.gameStore.currentPlayer);\n\n            board = gameAction.updateBoard(board, player, str, playerID);\n            targetElement.innerHTML = player[playerID].symbol;\n\n            gameAction.checkWinner(board);\n        }\n    }\n})();\n\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/gameAction.js?\n}");

/***/ },

/***/ "./src/utils/gameState.js"
/*!********************************!*\
  !*** ./src/utils/gameState.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameState: () => (/* binding */ createGameState),\n/* harmony export */   makeMove: () => (/* binding */ makeMove),\n/* harmony export */   switchPlayer: () => (/* binding */ switchPlayer)\n/* harmony export */ });\n/*\n    Function description:\n        Create a board\n    Function prototype:\n        function creategameState()\n    Returns:\n        Initialize board state for a new game\n*/\nfunction createGameState()\n{\n    return [[0, 0, 0],\n            [0, 0, 0],\n            [0, 0, 0]];\n}\n\n/*\n    Function description:\n        Track the current player\n    Function prototype:\n        function switchPlayer(player)\n    Parameters:\n        @player: the current player\n    Returns:\n        the next player\n*/\nfunction switchPlayer(player)\n{\n    if (player == 2)\n    {\n        return Math.random() < 0.5 ? 0 : 1;\n    } else if (player == 0)\n    {\n        return 1;\n    } else if (player == 1)\n    {\n        return 0;\n    } else\n    {\n        return -1;\n    }\n}\n\n/*\n    Function description:\n        Validate and apply moves, and return the updated board\n    Function prototype:\n        function makeMove(board, player, index)\n    Parameters:\n        @board: current board state\n        @player: current player\n        @index: the move intended by the current player\n    Returns:\n        The new board state given a valid move\n*/\nfunction makeMove(board, player, index)\n{\n    if (index < 0 || index >= board.length * board[0].length)\n    {\n        return null;\n    }\n    let row = Math.floor(index / 3);\n    let col = index % 3;\n\n    if (board[row][col] != 0)\n    {\n        return null;\n    }\n\n    if (player != 1 && player != 2)\n    {\n        return null;\n    }\n\n    board[row][col] = player;\n    return board;\n}\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/gameState.js?\n}");

/***/ },

/***/ "./src/utils/gameStore.js"
/*!********************************!*\
  !*** ./src/utils/gameStore.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameStore: () => (/* binding */ gameStore)\n/* harmony export */ });\n/* harmony import */ var _gameState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState.js */ \"./src/utils/gameState.js\");\n\nconst gameStore = (() => {\n    // flag boolean - indicates whether the current move is the first move or not\n    let checkInitial = true;\n\n    // flag boolean - locks the board if a user wants to see the board state after a match\n    let boardLocked = false;\n\n    /* \n       humanMode = true, computerMode = false \n       (the reason it is false now is because gameAction.applyMode() /line 238/ runs immediately and makes it humanMode)\n    */\n    let mode = false;\n    let player = [];\n    let board = [];\n\n    return {\n        getCheckInitial: function () {\n            return checkInitial;\n        },\n        setCheckInitial: function (value) {\n            checkInitial = value;\n        },\n        getBoardLocked: function () {\n            return boardLocked;\n        },\n        setBoardLocked: function (value) {\n            boardLocked = value;\n        },\n        getMode: function () {\n            return mode;\n        },\n        setMode: function (value) {\n            mode = value;\n        },\n        // creates two players with name, symbol, and id keys\n        createPlayer: function () {\n            player.push({ name: 'Player1', symbol: '\\u2715', id: 1 });\n            player.push({ name: 'Player2', symbol: '\\u25EF', id: 2 });\n            return player;\n        },\n        // creates an instance of board\n        createGame: function () {\n            board = (0,_gameState_js__WEBPACK_IMPORTED_MODULE_0__.createGameState)();\n            return board;\n        },\n        getPlayer: function () {\n            return player;\n        },\n        getBoard: function () {\n            return board;\n        },\n        resetGame: function () {\n            board = [];\n            player = [];\n        },\n        currentPlayer: 2\n    }\n})()\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/gameStore.js?\n}");

/***/ },

/***/ "./src/utils/utilities.js"
/*!********************************!*\
  !*** ./src/utils/utilities.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   utils: () => (/* binding */ utils)\n/* harmony export */ });\nconst utils = (()=>{\n    const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    const values = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];\n\n    return {\n        /*\n           Function Description:\n              - to convert the single digit values returned by the computerMove \n              to a two digit format like the one in the values array. \n        */\n        convertIndextoValue: function (index) {\n            let v = 0;\n            for (let i = 0; i < indexes.length; i++) {\n                if (index === indexes[i]) {\n                    v = values[i]\n                }\n            };\n            return v;\n        },\n        convertValuetoIndexes: function (value) {\n            let v = 0o0;\n            for (let i = 0; i < value.length; i++) {\n                if (value === values[i]) {\n                    v = indexes[i];\n                }\n            }\n            return v;\n        }\n    }\n})()\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/utilities.js?\n}");

/***/ },

/***/ "./src/utils/winChecker.js"
/*!*********************************!*\
  !*** ./src/utils/winChecker.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkDraw: () => (/* binding */ checkDraw),\n/* harmony export */   checkWin: () => (/* binding */ checkWin)\n/* harmony export */ });\n/*\n    Function description:\n        check if one of the players won given the current state\n    Function prototype:\n        function checkWin(board)\n    Parametrs:\n        @board: current board state(2D Array)\n    Returns:\n        The number associated with the winning player or\n        the number zero of the game is not won yet\n*/\nfunction checkWin(board)\n{\n    for (var i = 0; i < board.length; i += 1)\n    {\n        if (board[i][0] != 0 && board[i][0] == board[i][1] && board[i][1] == board[i][2])\n        {\n            return board[i][0];\n        } else if (board[0][i] != 0 && board[0][i] == board[1][i] && board[1][i] == board[2][i])\n        {\n            return board[0][i];\n        }\n    }\n\n    if (board[0][0] != 0 && board[0][0] == board[1][1] && board[1][1] == board[2][2])\n    {\n        return board[0][0];\n    } else if (board[0][2] != 0 && board[0][2] == board[1][1] && board[1][1] == board[2][0])\n    {\n        return board[0][2];\n    } else\n    {\n        return 0;\n    }\n}\n\n/*\n    Function description:\n        check if the game is over and the game is not won\n    Function prototype:\n        function checkDraw(board)\n    Parameters:\n        @board: current board state(2D Array)\n    Returns:\n        the value true if the game is completed and is in\n        draw state, else the value false\n*/\nfunction checkDraw(board)\n{\n    for (var i = 0; i < board.length; i += 1)\n    {\n        for (var j = 0; j < board[i].length; j += 1)\n        {\n            if (board[i][j] == 0)\n            {\n                return false;\n            }\n        }\n    }\n    return false;\n}\n\n\n//# sourceURL=webpack://advanced-tictactoe/./src/utils/winChecker.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;