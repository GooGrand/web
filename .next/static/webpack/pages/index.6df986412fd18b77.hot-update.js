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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Parse\": function() { return /* binding */ Parse; }\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ \"./pages/Commands/Store.js\");\n/* harmony import */ var _utils_API_web3_connect_metamask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/API/web3/connect-metamask */ \"./pages/utils/API/web3/connect-metamask.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Parse(Command) {\n    if (Command == _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Help[0]) {\n        return _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Help[1];\n    }\n    if (Command == _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Join[0]) {\n        try {\n            var address = (0,_utils_API_web3_connect_metamask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        } catch (err) {\n            return err;\n        }\n        return address;\n    } else {\n        return 'no';\n    }\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21tYW5kcy9wYXJzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNrQztBQUd6RCxTQUFTRSxLQUFLLENBQUNDLE9BQU8sRUFDN0IsQ0FBQztJQUNHLEVBQUUsRUFBQ0EsT0FBTyxJQUFJSCxzREFBZ0IsRUFDOUIsQ0FBQztRQUNHLE1BQU0sQ0FBQ0Esc0RBQWdCO0lBQzNCLENBQUM7SUFDRCxFQUFFLEVBQUNHLE9BQU8sSUFBSUgsc0RBQWdCLEVBQzlCLENBQUM7UUFDRyxHQUFHLENBQ0gsQ0FBQztZQUNHLEdBQUcsQ0FBQ00sT0FBTyxHQUFHTCw0RUFBZTtRQUNqQyxDQUFDLENBQ0QsS0FBSyxFQUFDTSxHQUFHLEVBQ1QsQ0FBQztZQUNHLE1BQU0sQ0FBQ0EsR0FBRztRQUNkLENBQUM7UUFFRCxNQUFNLENBQUNELE9BQU87SUFDbEIsQ0FBQyxNQUVELENBQUM7UUFDRyxNQUFNLENBQUMsQ0FBSTtJQUNmLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbW1hbmRzL3BhcnNlci50cz9jMzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlcyBmcm9tICcuL1N0b3JlJ1xyXG5pbXBvcnQgY29ubmVjdE1ldGFtYXNrIGZyb20gJy4uL3V0aWxzL0FQSS93ZWIzL2Nvbm5lY3QtbWV0YW1hc2snO1xyXG5pbXBvcnQgeyBUZXJtaW5hbEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL1Rlcm1pbmFsRXJyb3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlKENvbW1hbmQpXHJcbntcclxuICAgIGlmKENvbW1hbmQgPT0gTWVzc2FnZXMuSGVscFswXSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZXMuSGVscFsxXTtcclxuICAgIH1cclxuICAgIGlmKENvbW1hbmQgPT0gTWVzc2FnZXMuSm9pblswXSlcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhZGRyZXNzID0gY29ubmVjdE1ldGFtYXNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZHJlc3M7XHJcbiAgICB9XHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnbm8nO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY29ubmVjdE1ldGFtYXNrIiwiUGFyc2UiLCJDb21tYW5kIiwiSGVscCIsIkpvaW4iLCJhZGRyZXNzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Commands/parser.ts\n");

/***/ })

});