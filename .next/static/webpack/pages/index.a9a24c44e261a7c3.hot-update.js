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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Parse\": function() { return /* binding */ Parse; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ \"./pages/Commands/Store.js\");\n/* harmony import */ var _utils_API_web3_connect_metamask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/API/web3/connect-metamask */ \"./pages/utils/API/web3/connect-metamask.ts\");\n/* harmony import */ var _utils_API_web3_stake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/API/web3/stake */ \"./pages/utils/API/web3/stake.ts\");\n/* harmony import */ var _utils_API_web3_switch_chain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/API/web3/switch-chain */ \"./pages/utils/API/web3/switch-chain.ts\");\n/* harmony import */ var _utils_API_web3_balance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/API/web3/balance */ \"./pages/utils/API/web3/balance.ts\");\n/* harmony import */ var _utils_API_web3_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/API/web3/config */ \"./pages/utils/API/web3/config.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Parse(Command) {\n    return _Parse.apply(this, arguments);\n}\nfunction _Parse() {\n    _Parse = _asyncToGenerator(C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Command) {\n        var address, tx, tx, int;\n        return C_Users_eureq_Desktop_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(Command == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Help[0])) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Help[1]);\n                case 2:\n                    if (!(Command == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Join[0])) {\n                        _ctx.next = 13;\n                        break;\n                    }\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return (0,_utils_API_web3_connect_metamask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                case 6:\n                    address = _ctx.sent;\n                    _ctx.next = 12;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    return _ctx.abrupt(\"return\", _ctx.t0.message);\n                case 12:\n                    return _ctx.abrupt(\"return\", address);\n                case 13:\n                    if (!(Command.split(' ')[0] == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Stake[0])) {\n                        _ctx.next = 24;\n                        break;\n                    }\n                    _ctx.prev = 14;\n                    _ctx.next = 17;\n                    return (0,_utils_API_web3_stake__WEBPACK_IMPORTED_MODULE_3__.stake)(Command.split(' ')[1]);\n                case 17:\n                    tx = _ctx.sent;\n                    _ctx.next = 23;\n                    break;\n                case 20:\n                    _ctx.prev = 20;\n                    _ctx.t1 = _ctx[\"catch\"](14);\n                    return _ctx.abrupt(\"return\", _ctx.t1.message);\n                case 23:\n                    return _ctx.abrupt(\"return\", tx);\n                case 24:\n                    if (!(Command.split(' ')[0] == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Unstake[0])) {\n                        _ctx.next = 35;\n                        break;\n                    }\n                    _ctx.prev = 25;\n                    _ctx.next = 28;\n                    return (0,_utils_API_web3_stake__WEBPACK_IMPORTED_MODULE_3__.unstake)(Command.split(' ')[1]);\n                case 28:\n                    tx = _ctx.sent;\n                    _ctx.next = 34;\n                    break;\n                case 31:\n                    _ctx.prev = 31;\n                    _ctx.t2 = _ctx[\"catch\"](25);\n                    return _ctx.abrupt(\"return\", _ctx.t2.message);\n                case 34:\n                    return _ctx.abrupt(\"return\", tx);\n                case 35:\n                    if (!(Command == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Switch[0])) {\n                        _ctx.next = 45;\n                        break;\n                    }\n                    _ctx.prev = 36;\n                    _ctx.next = 39;\n                    return (0,_utils_API_web3_switch_chain__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                case 39:\n                    _ctx.next = 44;\n                    break;\n                case 41:\n                    _ctx.prev = 41;\n                    _ctx.t3 = _ctx[\"catch\"](36);\n                    return _ctx.abrupt(\"return\", _ctx.t3.message);\n                case 44:\n                    return _ctx.abrupt(\"return\", '');\n                case 45:\n                    if (!(Command.split(' ')[0] == _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Balance[0])) {\n                        _ctx.next = 63;\n                        break;\n                    }\n                    if (!(Command.split(' ')[1] == 'gton')) {\n                        _ctx.next = 60;\n                        break;\n                    }\n                    _ctx.prev = 47;\n                    _ctx.next = 50;\n                    return (0,_utils_API_web3_balance__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_utils_API_web3_config__WEBPACK_IMPORTED_MODULE_6__.tokenAddress);\n                case 50:\n                    int = _ctx.sent;\n                    return _ctx.abrupt(\"return\", int);\n                case 54:\n                    _ctx.prev = 54;\n                    _ctx.t4 = _ctx[\"catch\"](47);\n                    return _ctx.abrupt(\"return\", _ctx.t4.message);\n                case 57:\n                    return _ctx.abrupt(\"return\", int);\n                case 60:\n                    return _ctx.abrupt(\"return\", 'what');\n                case 61:\n                    _ctx.next = 64;\n                    break;\n                case 63:\n                    return _ctx.abrupt(\"return\", 'no');\n                case 64:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                9\n            ],\n            [\n                14,\n                20\n            ],\n            [\n                25,\n                31\n            ],\n            [\n                36,\n                41\n            ],\n            [\n                47,\n                54\n            ]\n        ]);\n    }));\n    return _Parse.apply(this, arguments);\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21tYW5kcy9wYXJzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDa0M7QUFDUjtBQUNBO0FBQ1Q7QUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELFNBQWVPLEtBQUssQ0FBQ0MsT0FBTztXQUFiRCxNQUFLOztTQUFMQSxNQUFLO0lBQUxBLE1BQUssMEpBQXBCLFFBQVEsU0FBYUMsT0FBTyxFQUNuQyxDQUFDO1lBU2VDLE9BQU8sRUFhUEMsRUFBRSxFQWFGQSxFQUFFLEVBNEJFQyxHQUFHOzs7OzBCQTlEaEJILE9BQU8sSUFBSVIsc0RBQWdCOzs7O2lEQUVuQkEsc0RBQWdCOzswQkFFeEJRLE9BQU8sSUFBSVIsc0RBQWdCOzs7Ozs7MkJBSUZDLDRFQUFlOztvQkFBL0JRLE9BQU87Ozs7Ozt5REFJQUssT0FBTzs7aURBR2ZMLE9BQU87OzBCQUVmRCxPQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxLQUFLZix1REFBaUI7Ozs7OzsyQkFJdEJFLDREQUFLLENBQUNNLE9BQU8sQ0FBQ08sS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDOztvQkFBckNMLEVBQUU7Ozs7Ozt5REFJS0ksT0FBTzs7aURBR2ZKLEVBQUU7OzBCQUVWRixPQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxLQUFLZix5REFBbUI7Ozs7OzsyQkFJeEJHLDhEQUFPLENBQUNLLE9BQU8sQ0FBQ08sS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDOztvQkFBdkNMLEVBQUU7Ozs7Ozt5REFJS0ksT0FBTzs7aURBR2ZKLEVBQUU7OzBCQUVWRixPQUFPLElBQUlSLHdEQUFrQjs7Ozs7OzJCQUlsQkksd0VBQVc7Ozs7Ozs7eURBSU5VLE9BQU87O2lEQUdmLENBQUU7OzBCQUVWTixPQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxLQUFLZix5REFBbUI7Ozs7MEJBRXhDUSxPQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxLQUFLLENBQU07Ozs7OzsyQkFJVlYsbUVBQU8sQ0FBQ0MsZ0VBQVk7O29CQUFoQ0ssR0FBRztpREFDQUEsR0FBRzs7Ozt5REFJQ0csT0FBTzs7aURBR2ZILEdBQUc7O2lEQUlILENBQU07Ozs7O2lEQUtWLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQixDQUFDO1dBbkZxQkosTUFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21tYW5kcy9wYXJzZXIudHM/YzMyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9TdG9yZSdcclxuaW1wb3J0IGNvbm5lY3RNZXRhbWFzayBmcm9tICcuLi91dGlscy9BUEkvd2ViMy9jb25uZWN0LW1ldGFtYXNrJztcclxuaW1wb3J0IHsgc3Rha2UsIHVuc3Rha2UgfSBmcm9tICcuLi91dGlscy9BUEkvd2ViMy9zdGFrZSdcclxuaW1wb3J0IHN3aXRjaENoYWluIGZyb20gJy4uL3V0aWxzL0FQSS93ZWIzL3N3aXRjaC1jaGFpbidcclxuaW1wb3J0IGJhbGFuY2UgZnJvbSAnLi4vdXRpbHMvQVBJL3dlYjMvYmFsYW5jZSdcclxuaW1wb3J0IHsgdG9rZW5BZGRyZXNzIH0gZnJvbSAnLi4vdXRpbHMvQVBJL3dlYjMvY29uZmlnJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQYXJzZShDb21tYW5kKVxyXG57XHJcbiAgICBpZihDb21tYW5kID09IE1lc3NhZ2VzLkhlbHBbMF0pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1lc3NhZ2VzLkhlbHBbMV07XHJcbiAgICB9XHJcbiAgICBpZihDb21tYW5kID09IE1lc3NhZ2VzLkpvaW5bMF0pXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSBhd2FpdCBjb25uZWN0TWV0YW1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYWRkcmVzcztcclxuICAgIH1cclxuICAgIGlmKENvbW1hbmQuc3BsaXQoJyAnKVswXSA9PSBNZXNzYWdlcy5TdGFrZVswXSlcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0eCA9IGF3YWl0IHN0YWtlKENvbW1hbmQuc3BsaXQoJyAnKVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0eDtcclxuICAgIH1cclxuICAgIGlmKENvbW1hbmQuc3BsaXQoJyAnKVswXSA9PSBNZXNzYWdlcy5VbnN0YWtlWzBdKVxyXG4gICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHR4ID0gYXdhaXQgdW5zdGFrZShDb21tYW5kLnNwbGl0KCcgJylbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICBpZihDb21tYW5kID09IE1lc3NhZ2VzLlN3aXRjaFswXSlcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHN3aXRjaENoYWluKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGlmKENvbW1hbmQuc3BsaXQoJyAnKVswXSA9PSBNZXNzYWdlcy5CYWxhbmNlWzBdKVxyXG4gICAge1xyXG4gICAgICAgIGlmKENvbW1hbmQuc3BsaXQoJyAnKVsxXSA9PSAnZ3RvbicpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGludCA9IGF3YWl0IGJhbGFuY2UodG9rZW5BZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAnd2hhdCc7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnbm8nO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY29ubmVjdE1ldGFtYXNrIiwic3Rha2UiLCJ1bnN0YWtlIiwic3dpdGNoQ2hhaW4iLCJiYWxhbmNlIiwidG9rZW5BZGRyZXNzIiwiUGFyc2UiLCJDb21tYW5kIiwiYWRkcmVzcyIsInR4IiwiaW50IiwiSGVscCIsIkpvaW4iLCJtZXNzYWdlIiwic3BsaXQiLCJTdGFrZSIsIlVuc3Rha2UiLCJTd2l0Y2giLCJCYWxhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Commands/parser.ts\n");

/***/ })

});