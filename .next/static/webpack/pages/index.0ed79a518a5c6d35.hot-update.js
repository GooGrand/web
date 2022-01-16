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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stake\": function() { return /* binding */ stake; },\n/* harmony export */   \"unstake\": function() { return /* binding */ unstake; }\n/* harmony export */ });\n/* harmony import */ var C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Errors/ErrorCodes */ \"./pages/Errors/ErrorCodes.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./pages/Parser/GTONCapitalProjects/WEB3/config.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_staking_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi/staking.json */ \"./pages/Parser/GTONCapitalProjects/WEB3/abi/staking.json\");\n/* harmony import */ var _API_balance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API/balance */ \"./pages/Parser/GTONCapitalProjects/WEB3/API/balance.ts\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar stake = _asyncToGenerator(C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(amount) {\n    var chainId, provider, signer, contract, tx, receipt;\n    return C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (!(!window.ethereum || !window.ethereum.isMetaMask)) {\n                    _ctx.next = 2;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'NO_METAMASK'\n                });\n            case 2:\n                if (window.ethereum.request) {\n                    _ctx.next = 4;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 4:\n                _ctx.next = 6;\n                return window.ethereum.request({\n                    method: 'net_version'\n                });\n            case 6:\n                chainId = _ctx.sent;\n                if (!(chainId !== _config__WEBPACK_IMPORTED_MODULE_2__.network)) {\n                    _ctx.next = 9;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 9:\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_2__.stakingAddress, _abi_staking_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                _ctx.t0 = contract;\n                _ctx.t1 = (0,_API_balance__WEBPACK_IMPORTED_MODULE_4__.toWei)(new (bignumber_js__WEBPACK_IMPORTED_MODULE_5___default())(web3__WEBPACK_IMPORTED_MODULE_6___default().utils.toWei(amount, 'wei')));\n                _ctx.next = 16;\n                return signer.getAddress();\n            case 16:\n                _ctx.t2 = _ctx.sent;\n                _ctx.next = 19;\n                return _ctx.t0.mint.call(_ctx.t0, _ctx.t1, _ctx.t2);\n            case 19:\n                tx = _ctx.sent;\n                _ctx.next = 22;\n                return tx.wait();\n            case 22:\n                receipt = _ctx.sent;\n                return _ctx.abrupt(\"return\", receipt.transactionHash);\n            case 24:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar unstake = _asyncToGenerator(C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(amount) {\n    var chainId, provider, signer, contract, share, tx, receipt;\n    return C_Users_eureq_Desktop_GTOMTERMINAL_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (!(!window.ethereum || !window.ethereum.isMetaMask)) {\n                    _ctx.next = 2;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'NO_METAMASK'\n                });\n            case 2:\n                if (window.ethereum.request) {\n                    _ctx.next = 4;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 4:\n                _ctx.next = 6;\n                return window.ethereum.request({\n                    method: 'net_version'\n                });\n            case 6:\n                chainId = _ctx.sent;\n                if (!(chainId !== _config__WEBPACK_IMPORTED_MODULE_2__.network)) {\n                    _ctx.next = 9;\n                    break;\n                }\n                throw new _Errors_ErrorCodes__WEBPACK_IMPORTED_MODULE_1__.TerminalError({\n                    code: 'METAMASK_WRONG_NETWORK'\n                });\n            case 9:\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(window.ethereum);\n                signer = provider.getSigner();\n                contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_2__.stakingAddress, _abi_staking_json__WEBPACK_IMPORTED_MODULE_3__, signer);\n                _ctx.next = 14;\n                return contract.balanceToShare(amount);\n            case 14:\n                share = _ctx.sent;\n                _ctx.t0 = contract;\n                _ctx.next = 18;\n                return signer.getAddress();\n            case 18:\n                _ctx.t1 = _ctx.sent;\n                _ctx.t2 = share;\n                _ctx.next = 22;\n                return _ctx.t0.burn.call(_ctx.t0, _ctx.t1, _ctx.t2);\n            case 22:\n                tx = _ctx.sent;\n                _ctx.next = 25;\n                return tx.wait();\n            case 25:\n                receipt = _ctx.sent;\n                return _ctx.abrupt(\"return\", receipt.transactionHash);\n            case 27:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QYXJzZXIvR1RPTkNhcGl0YWxQcm9qZWN0cy9XRUIzL1N0YWtlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwRDtBQUl6QztBQUNjO0FBQ2E7QUFFRTtBQUNWO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixHQUFLLENBQUNRLEtBQUssc0tBQUcsUUFBUSxTQUFEQyxNQUFjLEVBQXNCLENBQUM7UUFTekRDLE9BQU8sRUFLUEMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsRUFBRSxFQUNGQyxPQUFPOzs7O3VCQWpCUkMsTUFBTSxDQUFDQyxRQUFRLEtBQUtELE1BQU0sQ0FBQ0MsUUFBUSxDQUFFQyxVQUFVOzs7O2dCQUVsRCxLQUFLLENBQUMsR0FBRyxDQUFDbEIsNkRBQWEsQ0FBQyxDQUFDO29CQUFDbUIsSUFBSSxFQUFFLENBQWE7Z0JBQUMsQ0FBQzs7b0JBRTVDSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0csT0FBTzs7OztnQkFFMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQ3BCLDZEQUFhLENBQUMsQ0FBQztvQkFBQ21CLElBQUksRUFBRSxDQUF3QjtnQkFBQyxDQUFDOzs7dUJBRTlCSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7b0JBQUNDLE1BQU0sRUFBRSxDQUFhO2dCQUFDLENBQUM7O2dCQUF6RVgsT0FBTztzQkFDVEEsT0FBTyxLQUFLUiw0Q0FBTzs7OztnQkFFckIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0YsNkRBQWEsQ0FBQyxDQUFDO29CQUFDbUIsSUFBSSxFQUFFLENBQXdCO2dCQUFDLENBQUM7O2dCQUV0RFIsUUFBUSxHQUFHLEdBQUcsQ0FBQ1IsaUVBQTZCLENBQUNhLE1BQU0sQ0FBQ0MsUUFBUTtnQkFDNURMLE1BQU0sR0FBR0QsUUFBUSxDQUFDYSxTQUFTO2dCQUMzQlgsUUFBUSxHQUFHLEdBQUcsQ0FBQ1YsbURBQWUsQ0FBQ0YsbURBQWMsRUFBRUcsOENBQVcsRUFBRVEsTUFBTTswQkFDdkRDLFFBQVE7MEJBQU1SLG1EQUFLLENBQUMsR0FBRyxDQUFDQyxxREFBUyxDQUFDQyx1REFBZ0IsQ0FBQ0UsTUFBTSxFQUFFLENBQUs7O3VCQUFXRyxNQUFNLENBQUNlLFVBQVU7Ozs7K0JBQW5GQyxJQUFJOztnQkFBeEJkLEVBQUU7O3VCQUNjQSxFQUFFLENBQUNlLElBQUk7O2dCQUF2QmQsT0FBTzs2Q0FDTkEsT0FBTyxDQUFDZSxlQUFlOzs7Ozs7QUFDaEMsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsT0FBTyxzS0FBRyxRQUFRLFNBQUR0QixNQUFjLEVBQXNCLENBQUM7UUFPM0RDLE9BQU8sRUFJUEMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLFFBQVEsRUFDUm1CLEtBQUssRUFDTGxCLEVBQUUsRUFDRkMsT0FBTzs7Ozt1QkFmUkMsTUFBTSxDQUFDQyxRQUFRLEtBQUtELE1BQU0sQ0FBQ0MsUUFBUSxDQUFFQyxVQUFVOzs7O2dCQUNsRCxLQUFLLENBQUMsR0FBRyxDQUFDbEIsNkRBQWEsQ0FBQyxDQUFDO29CQUFDbUIsSUFBSSxFQUFFLENBQWE7Z0JBQUMsQ0FBQzs7b0JBRTVDSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0csT0FBTzs7OztnQkFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQ3BCLDZEQUFhLENBQUMsQ0FBQztvQkFBQ21CLElBQUksRUFBRSxDQUF3QjtnQkFBQyxDQUFDOzs7dUJBRTlCSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7b0JBQUNDLE1BQU0sRUFBRSxDQUFhO2dCQUFDLENBQUM7O2dCQUF6RVgsT0FBTztzQkFDVEEsT0FBTyxLQUFLUiw0Q0FBTzs7OztnQkFDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0YsNkRBQWEsQ0FBQyxDQUFDO29CQUFDbUIsSUFBSSxFQUFFLENBQXdCO2dCQUFDLENBQUM7O2dCQUV0RFIsUUFBUSxHQUFHLEdBQUcsQ0FBQ1IsaUVBQTZCLENBQUNhLE1BQU0sQ0FBQ0MsUUFBUTtnQkFDNURMLE1BQU0sR0FBR0QsUUFBUSxDQUFDYSxTQUFTO2dCQUMzQlgsUUFBUSxHQUFHLEdBQUcsQ0FBQ1YsbURBQWUsQ0FBQ0YsbURBQWMsRUFBRUcsOENBQVcsRUFBRVEsTUFBTTs7dUJBQ3BEQyxRQUFRLENBQUNvQixjQUFjLENBQUN4QixNQUFNOztnQkFBNUN1QixLQUFLOzBCQUNNbkIsUUFBUTs7dUJBQVlELE1BQU0sQ0FBQ2UsVUFBVTs7OzBCQUFJSyxLQUFLOzsrQkFBckNFLElBQUk7O2dCQUF4QnBCLEVBQUU7O3VCQUNjQSxFQUFFLENBQUNlLElBQUk7O2dCQUF2QmQsT0FBTzs2Q0FDTkEsT0FBTyxDQUFDZSxlQUFlOzs7Ozs7QUFDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QYXJzZXIvR1RPTkNhcGl0YWxQcm9qZWN0cy9XRUIzL1N0YWtlLnRzP2RmZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmltcG9ydCB7IFRlcm1pbmFsRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9FcnJvcnMvRXJyb3JDb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgc3Rha2luZ0FkZHJlc3MsXHJcbiAgbmV0d29yayxcclxufSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcbmltcG9ydCBTVEFLSU5HX0FCSSBmcm9tICcuL2FiaS9zdGFraW5nLmpzb24nO1xyXG5pbXBvcnQgeyBFdmVudFF1ZXVlIH0gZnJvbSAnY3J0LXRlcm1pbmFsJztcclxuaW1wb3J0IHsgZnJvbVdlaSwgdG9XZWkgfSBmcm9tICcuL0FQSS9iYWxhbmNlJztcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICd3ZWIzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdGFrZSA9IGFzeW5jIChhbW91bnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XHJcbiAgaWYgKCF3aW5kb3cuZXRoZXJldW0gfHwgIXdpbmRvdy5ldGhlcmV1bSEuaXNNZXRhTWFzaykgXHJcbiAge1xyXG4gICAgdGhyb3cgbmV3IFRlcm1pbmFsRXJyb3IoeyBjb2RlOiAnTk9fTUVUQU1BU0snIH0pO1xyXG4gIH1cclxuICBpZiAoIXdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KSBcclxuICB7XHJcbiAgICB0aHJvdyBuZXcgVGVybWluYWxFcnJvcih7IGNvZGU6ICdNRVRBTUFTS19XUk9OR19ORVRXT1JLJyB9KTtcclxuICB9XHJcbiAgY29uc3QgY2hhaW5JZDogc3RyaW5nID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICduZXRfdmVyc2lvbicgfSk7XHJcbiAgaWYgKGNoYWluSWQgIT09IG5ldHdvcmspIFxyXG4gIHtcclxuICAgIHRocm93IG5ldyBUZXJtaW5hbEVycm9yKHsgY29kZTogJ01FVEFNQVNLX1dST05HX05FVFdPUksnIH0pO1xyXG4gIH1cclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChzdGFraW5nQWRkcmVzcywgU1RBS0lOR19BQkksIHNpZ25lcik7XHJcbiAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50KHRvV2VpKG5ldyBCaWdOdW1iZXIod2ViMy51dGlscy50b1dlaShhbW91bnQsICd3ZWknKSkpLCBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpKTtcclxuICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xyXG4gIHJldHVybiByZWNlaXB0LnRyYW5zYWN0aW9uSGFzaDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bnN0YWtlID0gYXN5bmMgKGFtb3VudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICBpZiAoIXdpbmRvdy5ldGhlcmV1bSB8fCAhd2luZG93LmV0aGVyZXVtIS5pc01ldGFNYXNrKSB7XHJcbiAgICB0aHJvdyBuZXcgVGVybWluYWxFcnJvcih7IGNvZGU6ICdOT19NRVRBTUFTSycgfSk7XHJcbiAgfVxyXG4gIGlmICghd2luZG93LmV0aGVyZXVtLnJlcXVlc3QpIHtcclxuICAgIHRocm93IG5ldyBUZXJtaW5hbEVycm9yKHsgY29kZTogJ01FVEFNQVNLX1dST05HX05FVFdPUksnIH0pO1xyXG4gIH1cclxuICBjb25zdCBjaGFpbklkOiBzdHJpbmcgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ25ldF92ZXJzaW9uJyB9KTtcclxuICBpZiAoY2hhaW5JZCAhPT0gbmV0d29yaykge1xyXG4gICAgdGhyb3cgbmV3IFRlcm1pbmFsRXJyb3IoeyBjb2RlOiAnTUVUQU1BU0tfV1JPTkdfTkVUV09SSycgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHN0YWtpbmdBZGRyZXNzLCBTVEFLSU5HX0FCSSwgc2lnbmVyKTtcclxuICBjb25zdCBzaGFyZSA9IGF3YWl0IGNvbnRyYWN0LmJhbGFuY2VUb1NoYXJlKGFtb3VudCk7XHJcbiAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5idXJuKGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCksIHNoYXJlKTtcclxuICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xyXG4gIHJldHVybiByZWNlaXB0LnRyYW5zYWN0aW9uSGFzaDtcclxufTsiXSwibmFtZXMiOlsiVGVybWluYWxFcnJvciIsInN0YWtpbmdBZGRyZXNzIiwibmV0d29yayIsImV0aGVycyIsIlNUQUtJTkdfQUJJIiwidG9XZWkiLCJCaWdOdW1iZXIiLCJ3ZWIzIiwic3Rha2UiLCJhbW91bnQiLCJjaGFpbklkIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsInR4IiwicmVjZWlwdCIsIndpbmRvdyIsImV0aGVyZXVtIiwiaXNNZXRhTWFzayIsImNvZGUiLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJ1dGlscyIsImdldEFkZHJlc3MiLCJtaW50Iiwid2FpdCIsInRyYW5zYWN0aW9uSGFzaCIsInVuc3Rha2UiLCJzaGFyZSIsImJhbGFuY2VUb1NoYXJlIiwiYnVybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Parser/GTONCapitalProjects/WEB3/Stake.ts\n");

/***/ })

});