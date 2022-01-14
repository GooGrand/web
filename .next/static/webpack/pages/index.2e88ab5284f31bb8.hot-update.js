"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Commands/parser.ts":
/*!**********************************!*\
  !*** ./pages/Commands/parser.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Parse\": function() { return /* binding */ Parse; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ \"./pages/Commands/Store.js\");\n/* harmony import */ var _utils_API_web3_connect_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/API/web3/connect-metamask */ \"./pages/utils/API/web3/connect-metamask.ts\");\n/* harmony import */ var _utils_API_web3_stake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/API/web3/stake */ \"./pages/utils/API/web3/stake.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Parse(Command) {\n    return _Parse.apply(this, arguments);\n}\nfunction _Parse() {\n    _Parse = _asyncToGenerator(C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Command) {\n        var address, tx;\n        return C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(Command == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Help[0])) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Help[1]);\n                case 2:\n                    if (!(Command == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Join[0])) {\n                        _ctx.next = 13;\n                        break;\n                    }\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return (0,_utils_API_web3_connect_metamask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                case 6:\n                    address = _ctx.sent;\n                    _ctx.next = 12;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    return _ctx.abrupt(\"return\", _ctx.t0.message);\n                case 12:\n                    return _ctx.abrupt(\"return\", address);\n                case 13:\n                    if (!(Command.split(' ')[0] == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Stake)) {\n                        _ctx.next = 26;\n                        break;\n                    }\n                    _ctx.prev = 14;\n                    _ctx.next = 17;\n                    return (0,_utils_API_web3_stake__WEBPACK_IMPORTED_MODULE_3__.stake)(Command.split(' ')[1]);\n                case 17:\n                    tx = _ctx.sent;\n                    _ctx.next = 23;\n                    break;\n                case 20:\n                    _ctx.prev = 20;\n                    _ctx.t1 = _ctx[\"catch\"](14);\n                    return _ctx.abrupt(\"return\", _ctx.t1.message);\n                case 23:\n                    return _ctx.abrupt(\"return\", tx);\n                case 26:\n                    return _ctx.abrupt(\"return\", 'no');\n                case 27:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                9\n            ],\n            [\n                14,\n                20\n            ]\n        ]);\n    }));\n    return _Parse.apply(this, arguments);\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21tYW5kcy9wYXJzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDa0M7QUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxTQUFlRyxLQUFLLENBQUNDLE9BQU87V0FBYkQsTUFBSzs7U0FBTEEsTUFBSztJQUFMQSxNQUFLLDBKQUFwQixRQUFRLFNBQWFDLE9BQU8sRUFDbkMsQ0FBQztZQVNlQyxPQUFPLEVBYVBDLEVBQUU7Ozs7MEJBckJYRixPQUFPLElBQUlKLHNEQUFnQjs7OztpREFFbkJBLHNEQUFnQjs7MEJBRXhCSSxPQUFPLElBQUlKLHNEQUFnQjs7Ozs7OzJCQUlGQyw0RUFBZTs7b0JBQS9CSSxPQUFPOzs7Ozs7eURBSUFJLE9BQU87O2lEQUdmSixPQUFPOzswQkFFZkQsT0FBTyxDQUFDTSxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUMsS0FBS1Ysb0RBQWM7Ozs7OzsyQkFJbkJFLDREQUFLLENBQUNFLE9BQU8sQ0FBQ00sS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDOztvQkFBckNKLEVBQUU7Ozs7Ozt5REFJS0csT0FBTzs7aURBR2ZILEVBQUU7O2lEQUlGLENBQUk7Ozs7Ozs7Ozs7Ozs7OztJQUVuQixDQUFDO1dBcENxQkgsTUFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21tYW5kcy9wYXJzZXIudHM/YzMyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9TdG9yZSdcclxuaW1wb3J0IGNvbm5lY3RNZXRhbWFzayBmcm9tICcuLi91dGlscy9BUEkvd2ViMy9jb25uZWN0LW1ldGFtYXNrJztcclxuaW1wb3J0IHsgc3Rha2UgfSBmcm9tICcuLi91dGlscy9BUEkvd2ViMy9zdGFrZSdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQYXJzZShDb21tYW5kKVxyXG57XHJcbiAgICBpZihDb21tYW5kID09IE1lc3NhZ2VzLkhlbHBbMF0pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1lc3NhZ2VzLkhlbHBbMV07XHJcbiAgICB9XHJcbiAgICBpZihDb21tYW5kID09IE1lc3NhZ2VzLkpvaW5bMF0pXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSBhd2FpdCBjb25uZWN0TWV0YW1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYWRkcmVzcztcclxuICAgIH1cclxuICAgIGlmKENvbW1hbmQuc3BsaXQoJyAnKVswXSA9PSBNZXNzYWdlcy5TdGFrZSlcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0eCA9IGF3YWl0IHN0YWtlKENvbW1hbmQuc3BsaXQoJyAnKVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0eDtcclxuICAgIH1cclxuICAgIGVsc2UgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICdubyc7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiTWVzc2FnZXMiLCJjb25uZWN0TWV0YW1hc2siLCJzdGFrZSIsIlBhcnNlIiwiQ29tbWFuZCIsImFkZHJlc3MiLCJ0eCIsIkhlbHAiLCJKb2luIiwibWVzc2FnZSIsInNwbGl0IiwiU3Rha2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Commands/parser.ts\n");

/***/ })

});