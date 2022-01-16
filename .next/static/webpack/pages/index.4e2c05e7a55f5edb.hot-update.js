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

/***/ "./pages/Parser/GTONCapitalProjects/WEB3/Stake.ts":
/*!********************************************************!*\
  !*** ./pages/Parser/GTONCapitalProjects/WEB3/Stake.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stake\": function() { return /* binding */ stake; },\n/* harmony export */   \"unstake\": function() { return /* binding */ unstake; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Errors/ErrorCodes */ \"./pages/Errors/ErrorCodes.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./pages/Parser/GTONCapitalProjects/WEB3/config.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_staking_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi/staking.json */ \"./pages/Parser/GTONCapitalProjects/WEB3/abi/staking.json\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers/lib/utils */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar stake = _asyncToGenerator(C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(amount) {\n    var chainId, provider, signer, contract, tx, receipt;\n    return C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (!(!window.ethereum || !window.ethereum.isMetaMask)) {\n                    _ctx.next = 2;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'NO_METAMASK'\n                });\n            case 2:\n                if (window.ethereum.request) {\n                    _ctx.next = 4;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 4:\n                _ctx.next = 6;\n                return window.ethereum.request({\n                    method: 'net_version'\n                });\n            case 6:\n                chainId = _ctx.sent;\n                if (!(chainId !== _config__WEBPACK_IMPORTED_MODULE_2__.network)) {\n                    _ctx.next = 9;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 9:\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_2__.stakingAddress, _abi_staking_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                _ctx.t0 = contract;\n                _ctx.t1 = (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_5__.parseEther)(amount);\n                _ctx.next = 16;\n                return signer.getAddress();\n            case 16:\n                _ctx.t2 = _ctx.sent;\n                _ctx.next = 19;\n                return _ctx.t0.mint.call(_ctx.t0, _ctx.t1, _ctx.t2);\n            case 19:\n                tx = _ctx.sent;\n                _ctx.next = 22;\n                return tx.wait();\n            case 22:\n                receipt = _ctx.sent;\n                return _ctx.abrupt(\"return\", receipt.transactionHash);\n            case 24:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar unstake = _asyncToGenerator(C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(amount) {\n    var chainId, provider, signer, contract, share, tx, receipt;\n    return C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (!(!window.ethereum || !window.ethereum.isMetaMask)) {\n                    _ctx.next = 2;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'NO_METAMASK'\n                });\n            case 2:\n                if (window.ethereum.request) {\n                    _ctx.next = 4;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 4:\n                _ctx.next = 6;\n                return window.ethereum.request({\n                    method: 'net_version'\n                });\n            case 6:\n                chainId = _ctx.sent;\n                if (!(chainId !== _config__WEBPACK_IMPORTED_MODULE_2__.network)) {\n                    _ctx.next = 9;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 9:\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_2__.stakingAddress, _abi_staking_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                _ctx.next = 14;\n                return contract.balanceToShare(amount);\n            case 14:\n                share = _ctx.sent;\n                _ctx.t0 = contract;\n                _ctx.next = 18;\n                return signer.getAddress();\n            case 18:\n                _ctx.t1 = _ctx.sent;\n                _ctx.t2 = share;\n                _ctx.next = 22;\n                return _ctx.t0.burn.call(_ctx.t0, _ctx.t1, _ctx.t2);\n            case 22:\n                tx = _ctx.sent;\n                _ctx.next = 25;\n                return tx.wait();\n            case 25:\n                receipt = _ctx.sent;\n                return _ctx.abrupt(\"return\", receipt.transactionHash);\n            case 27:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QYXJzZXIvR1RPTkNhcGl0YWxQcm9qZWN0cy9XRUIzL1N0YWtlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMwRDtBQUl6QztBQUNjO0FBQ2E7QUFLQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLEdBQUssQ0FBQ00sS0FBSyxzS0FBRyxRQUFRLFNBQURDLE1BQWMsRUFBc0IsQ0FBQztRQVN6REMsT0FBTyxFQUtQQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxFQUFFLEVBQ0ZDLE9BQU87Ozs7dUJBakJSQyxNQUFNLENBQUNDLFFBQVEsS0FBS0QsTUFBTSxDQUFDQyxRQUFRLENBQUVDLFVBQVU7Ozs7Z0JBRWxELEtBQUssQ0FBQyxHQUFHLENBQUNoQiw2REFBYSxDQUFDLENBQUM7b0JBQUNpQixJQUFJLEVBQUUsQ0FBYTtnQkFBQyxDQUFDOztvQkFFNUNILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPOzs7O2dCQUUxQixLQUFLLENBQUMsR0FBRyxDQUFDbEIsNkRBQWEsQ0FBQyxDQUFDO29CQUFDaUIsSUFBSSxFQUFFLENBQXdCO2dCQUFDLENBQUM7Ozt1QkFFOUJILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPLENBQUMsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFLENBQWE7Z0JBQUMsQ0FBQzs7Z0JBQXpFWCxPQUFPO3NCQUNUQSxPQUFPLEtBQUtOLDRDQUFPOzs7O2dCQUVyQixLQUFLLENBQUMsR0FBRyxDQUFDRiw2REFBYSxDQUFDLENBQUM7b0JBQUNpQixJQUFJLEVBQUUsQ0FBd0I7Z0JBQUMsQ0FBQzs7Z0JBRXREUixRQUFRLEdBQUcsR0FBRyxDQUFDTixpRUFBNkIsQ0FBQ1csTUFBTSxDQUFDQyxRQUFRO2dCQUM1REwsTUFBTSxHQUFHRCxRQUFRLENBQUNhLFNBQVM7Z0JBQzNCWCxRQUFRLEdBQUcsR0FBRyxDQUFDUixtREFBZSxDQUFDRixtREFBYyxFQUFFRyw4Q0FBVyxFQUFFTSxNQUFNOzBCQUN2REMsUUFBUTswQkFBTU4sNERBQVUsQ0FBQ0UsTUFBTTs7dUJBQVNHLE1BQU0sQ0FBQ2MsVUFBVTs7OzsrQkFBaERDLElBQUk7O2dCQUF4QmIsRUFBRTs7dUJBQ2NBLEVBQUUsQ0FBQ2MsSUFBSTs7Z0JBQXZCYixPQUFPOzZDQUNOQSxPQUFPLENBQUNjLGVBQWU7Ozs7OztBQUNoQyxDQUFDO0FBRU0sR0FBSyxDQUFDQyxPQUFPLHNLQUFHLFFBQVEsU0FBRHJCLE1BQWMsRUFBc0IsQ0FBQztRQU8zREMsT0FBTyxFQUlQQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsUUFBUSxFQUNSa0IsS0FBSyxFQUNMakIsRUFBRSxFQUNGQyxPQUFPOzs7O3VCQWZSQyxNQUFNLENBQUNDLFFBQVEsS0FBS0QsTUFBTSxDQUFDQyxRQUFRLENBQUVDLFVBQVU7Ozs7Z0JBQ2xELEtBQUssQ0FBQyxHQUFHLENBQUNoQiw2REFBYSxDQUFDLENBQUM7b0JBQUNpQixJQUFJLEVBQUUsQ0FBYTtnQkFBQyxDQUFDOztvQkFFNUNILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPOzs7O2dCQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDbEIsNkRBQWEsQ0FBQyxDQUFDO29CQUFDaUIsSUFBSSxFQUFFLENBQXdCO2dCQUFDLENBQUM7Ozt1QkFFOUJILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPLENBQUMsQ0FBQztvQkFBQ0MsTUFBTSxFQUFFLENBQWE7Z0JBQUMsQ0FBQzs7Z0JBQXpFWCxPQUFPO3NCQUNUQSxPQUFPLEtBQUtOLDRDQUFPOzs7O2dCQUNyQixLQUFLLENBQUMsR0FBRyxDQUFDRiw2REFBYSxDQUFDLENBQUM7b0JBQUNpQixJQUFJLEVBQUUsQ0FBd0I7Z0JBQUMsQ0FBQzs7Z0JBRXREUixRQUFRLEdBQUcsR0FBRyxDQUFDTixpRUFBNkIsQ0FBQ1csTUFBTSxDQUFDQyxRQUFRO2dCQUM1REwsTUFBTSxHQUFHRCxRQUFRLENBQUNhLFNBQVM7Z0JBQzNCWCxRQUFRLEdBQUcsR0FBRyxDQUFDUixtREFBZSxDQUFDRixtREFBYyxFQUFFRyw4Q0FBVyxFQUFFTSxNQUFNOzt1QkFDcERDLFFBQVEsQ0FBQ21CLGNBQWMsQ0FBQ3ZCLE1BQU07O2dCQUE1Q3NCLEtBQUs7MEJBQ01sQixRQUFROzt1QkFBWUQsTUFBTSxDQUFDYyxVQUFVOzs7MEJBQUlLLEtBQUs7OytCQUFyQ0UsSUFBSTs7Z0JBQXhCbkIsRUFBRTs7dUJBQ2NBLEVBQUUsQ0FBQ2MsSUFBSTs7Z0JBQXZCYixPQUFPOzZDQUNOQSxPQUFPLENBQUNjLGVBQWU7Ozs7OztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1BhcnNlci9HVE9OQ2FwaXRhbFByb2plY3RzL1dFQjMvU3Rha2UudHM/ZGZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuaW1wb3J0IHsgVGVybWluYWxFcnJvciB9IGZyb20gJy4uLy4uLy4uL0Vycm9ycy9FcnJvckNvZGVzJztcclxuaW1wb3J0IHtcclxuICBzdGFraW5nQWRkcmVzcyxcclxuICBuZXR3b3JrLFxyXG59IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IFNUQUtJTkdfQUJJIGZyb20gJy4vYWJpL3N0YWtpbmcuanNvbic7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tICdjcnQtdGVybWluYWwnO1xyXG5pbXBvcnQgeyBmcm9tV2VpLCB0b1dlaSB9IGZyb20gJy4vQVBJL2JhbGFuY2UnO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgeyBwYXJzZUV0aGVyIH0gZnJvbSAnZXRoZXJzL2xpYi91dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3Rha2UgPSBhc3luYyAoYW1vdW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gIGlmICghd2luZG93LmV0aGVyZXVtIHx8ICF3aW5kb3cuZXRoZXJldW0hLmlzTWV0YU1hc2spIFxyXG4gIHtcclxuICAgIHRocm93IG5ldyBUZXJtaW5hbEVycm9yKHsgY29kZTogJ05PX01FVEFNQVNLJyB9KTtcclxuICB9XHJcbiAgaWYgKCF3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCkgXHJcbiAge1xyXG4gICAgdGhyb3cgbmV3IFRlcm1pbmFsRXJyb3IoeyBjb2RlOiAnTUVUQU1BU0tfV1JPTkdfTkVUV09SSycgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGNoYWluSWQ6IHN0cmluZyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnbmV0X3ZlcnNpb24nIH0pO1xyXG4gIGlmIChjaGFpbklkICE9PSBuZXR3b3JrKSBcclxuICB7XHJcbiAgICB0aHJvdyBuZXcgVGVybWluYWxFcnJvcih7IGNvZGU6ICdNRVRBTUFTS19XUk9OR19ORVRXT1JLJyB9KTtcclxuICB9XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3Qoc3Rha2luZ0FkZHJlc3MsIFNUQUtJTkdfQUJJLCBzaWduZXIpO1xyXG4gIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWludChwYXJzZUV0aGVyKGFtb3VudCksIGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCkpO1xyXG4gIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XHJcbiAgcmV0dXJuIHJlY2VpcHQudHJhbnNhY3Rpb25IYXNoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuc3Rha2UgPSBhc3luYyAoYW1vdW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gIGlmICghd2luZG93LmV0aGVyZXVtIHx8ICF3aW5kb3cuZXRoZXJldW0hLmlzTWV0YU1hc2spIHtcclxuICAgIHRocm93IG5ldyBUZXJtaW5hbEVycm9yKHsgY29kZTogJ05PX01FVEFNQVNLJyB9KTtcclxuICB9XHJcbiAgaWYgKCF3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCkge1xyXG4gICAgdGhyb3cgbmV3IFRlcm1pbmFsRXJyb3IoeyBjb2RlOiAnTUVUQU1BU0tfV1JPTkdfTkVUV09SSycgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGNoYWluSWQ6IHN0cmluZyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnbmV0X3ZlcnNpb24nIH0pO1xyXG4gIGlmIChjaGFpbklkICE9PSBuZXR3b3JrKSB7XHJcbiAgICB0aHJvdyBuZXcgVGVybWluYWxFcnJvcih7IGNvZGU6ICdNRVRBTUFTS19XUk9OR19ORVRXT1JLJyB9KTtcclxuICB9XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3Qoc3Rha2luZ0FkZHJlc3MsIFNUQUtJTkdfQUJJLCBzaWduZXIpO1xyXG4gIGNvbnN0IHNoYXJlID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZVRvU2hhcmUoYW1vdW50KTtcclxuICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmJ1cm4oYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKSwgc2hhcmUpO1xyXG4gIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XHJcbiAgcmV0dXJuIHJlY2VpcHQudHJhbnNhY3Rpb25IYXNoO1xyXG59OyJdLCJuYW1lcyI6WyJUZXJtaW5hbEVycm9yIiwic3Rha2luZ0FkZHJlc3MiLCJuZXR3b3JrIiwiZXRoZXJzIiwiU1RBS0lOR19BQkkiLCJwYXJzZUV0aGVyIiwic3Rha2UiLCJhbW91bnQiLCJjaGFpbklkIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsInR4IiwicmVjZWlwdCIsIndpbmRvdyIsImV0aGVyZXVtIiwiaXNNZXRhTWFzayIsImNvZGUiLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJnZXRBZGRyZXNzIiwibWludCIsIndhaXQiLCJ0cmFuc2FjdGlvbkhhc2giLCJ1bnN0YWtlIiwic2hhcmUiLCJiYWxhbmNlVG9TaGFyZSIsImJ1cm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Parser/GTONCapitalProjects/WEB3/Stake.ts\n");

/***/ })

});