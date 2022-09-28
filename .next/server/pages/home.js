"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        width: \"100%\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                color: \"gray.400\",\n                fontSize: \"md\",\n                children: \"Welcome abord\"\n            }, void 0, false, {\n                fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                marginTop: \"1rem\",\n                alignItems: \"center\",\n                children: [\n                    session?.user?.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: session.user.image,\n                        alt: \"User avatar\",\n                        width: \"88px\",\n                        height: \"88px\",\n                        borderRadius: \"full\",\n                        marginRight: \"1rem\"\n                    }, void 0, false, {\n                        fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"gray.100\",\n                        marginTop: \"0.5rem\",\n                        fontSize: \"xl\",\n                        children: session?.user?.name\n                    }, void 0, false, {\n                        fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                type: \"submit\",\n                marginTop: \"2rem\",\n                marginBottom: \"1rem\",\n                width: \"256px\",\n                backgroundColor: \"secondary.500\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)()\n                ,\n                children: \"Sair\"\n            }, void 0, false, {\n                fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZEO0FBQ1A7QUFFdEQsU0FBU00sSUFBSSxHQUFHO0lBQ2QsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLE9BQU8sR0FBQyxHQUFHSCwyREFBVSxFQUFFO0lBRXBDLHFCQUNFLDhEQUFDSixrREFBSTtRQUNIUSxLQUFLLEVBQUMsTUFBTTtRQUNaQyxNQUFNLEVBQUMsT0FBTztRQUNkQyxhQUFhLEVBQUMsUUFBUTtRQUN0QkMsVUFBVSxFQUFDLFFBQVE7UUFDbkJDLGNBQWMsRUFBQyxRQUFROzswQkFDdkIsOERBQUNWLGtEQUFJO2dCQUFDVyxLQUFLLEVBQUMsVUFBVTtnQkFBQ0MsUUFBUSxFQUFDLElBQUk7MEJBQUMsZUFBYTs7Ozs7b0JBQU87MEJBQ3pELDhEQUFDZCxrREFBSTtnQkFBQ2UsU0FBUyxFQUFDLE1BQU07Z0JBQUNKLFVBQVUsRUFBQyxRQUFROztvQkFDdkNKLE9BQU8sRUFBRVMsSUFBSSxFQUFFQyxLQUFLLGtCQUNuQiw4REFBQ2hCLG1EQUFLO3dCQUNKaUIsR0FBRyxFQUFFWCxPQUFPLENBQUNTLElBQUksQ0FBQ0MsS0FBSzt3QkFDdkJFLEdBQUcsRUFBQyxhQUFhO3dCQUNqQlgsS0FBSyxFQUFDLE1BQU07d0JBQ1pDLE1BQU0sRUFBQyxNQUFNO3dCQUNiVyxZQUFZLEVBQUMsTUFBTTt3QkFDbkJDLFdBQVcsRUFBQyxNQUFNOzs7Ozs0QkFBRztrQ0FFekIsOERBQUNuQixrREFBSTt3QkFBQ1csS0FBSyxFQUFDLFVBQVU7d0JBQUNFLFNBQVMsRUFBQyxRQUFRO3dCQUFDRCxRQUFRLEVBQUMsSUFBSTtrQ0FBRVAsT0FBTyxFQUFFUyxJQUFJLEVBQUVNLElBQUk7Ozs7OzRCQUFROzs7Ozs7b0JBQy9FOzBCQUVQLDhEQUFDdkIsb0RBQU07Z0JBQ0x3QixJQUFJLEVBQUMsUUFBUTtnQkFDYlIsU0FBUyxFQUFDLE1BQU07Z0JBQ2hCUyxZQUFZLEVBQUMsTUFBTTtnQkFDbkJoQixLQUFLLEVBQUMsT0FBTztnQkFDYmlCLGVBQWUsRUFBQyxlQUFlO2dCQUMvQkMsT0FBTyxFQUFFLElBQU12Qix3REFBTyxFQUFFO2dCQUFBOzBCQUFFLE1BQUk7Ozs7O29CQUFTOzs7Ozs7WUFDcEMsQ0FDUjtDQUNGO0FBRUQsaUVBQWVFLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3g/NzU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZsZXgsIEltYWdlLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICA8VGV4dCBjb2xvcj1cImdyYXkuNDAwXCIgZm9udFNpemU9XCJtZFwiPldlbGNvbWUgYWJvcmQ8L1RleHQ+XG4gICAgICA8RmxleCBtYXJnaW5Ub3A9XCIxcmVtXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICB7c2Vzc2lvbj8udXNlcj8uaW1hZ2UgJiYgKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJVc2VyIGF2YXRhclwiXG4gICAgICAgICAgICB3aWR0aD1cIjg4cHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiODhweFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMXJlbVwiIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheS4xMDBcIiBtYXJnaW5Ub3A9XCIwLjVyZW1cIiBmb250U2l6ZT1cInhsXCI+e3Nlc3Npb24/LnVzZXI/Lm5hbWV9PC9UZXh0PlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBtYXJnaW5Ub3A9XCIycmVtXCJcbiAgICAgICAgbWFyZ2luQm90dG9tPVwiMXJlbVwiXG4gICAgICAgIHdpZHRoPVwiMjU2cHhcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJzZWNvbmRhcnkuNTAwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TYWlyPC9CdXR0b24+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZsZXgiLCJJbWFnZSIsIlRleHQiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJ1c2VyIiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5SaWdodCIsIm5hbWUiLCJ0eXBlIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/home/index.tsx"));
module.exports = __webpack_exports__;

})();