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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        width: \"100%\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                color: \"gray.400\",\n                fontSize: \"md\",\n                children: \"Welcome abord\"\n            }, void 0, false, {\n                fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                marginTop: \"1rem\",\n                alignItems: \"center\",\n                children: [\n                    session?.user?.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: session.user.image,\n                        alt: \"User avatar\",\n                        width: \"88px\",\n                        height: \"88px\",\n                        borderRadius: \"full\",\n                        marginRight: \"1rem\"\n                    }, void 0, false, {\n                        fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"gray.100\",\n                        marginTop: \"0.5rem\",\n                        fontSize: \"xl\",\n                        children: session?.user?.name\n                    }, void 0, false, {\n                        fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                type: \"submit\",\n                marginTop: \"2rem\",\n                marginBottom: \"1rem\",\n                width: \"256px\",\n                backgroundColor: \"secondary.500\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)()\n                ,\n                children: \"Sair\"\n            }, void 0, false, {\n                fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/omatheusfc/Documentos/www/NextAuth-start-kit/src/pages/home/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nconst getServerSideProps = async (context)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (session) {\n        return {\n            redirect: {\n                destination: \"/login\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUVLO0FBRWxFLFNBQVNPLElBQUksR0FBRztJQUNkLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEdBQUMsR0FBR0gsMkRBQVUsRUFBRTtJQUVwQyxxQkFDRSw4REFBQ0wsa0RBQUk7UUFDSFMsS0FBSyxFQUFDLE1BQU07UUFDWkMsTUFBTSxFQUFDLE9BQU87UUFDZEMsYUFBYSxFQUFDLFFBQVE7UUFDdEJDLFVBQVUsRUFBQyxRQUFRO1FBQ25CQyxjQUFjLEVBQUMsUUFBUTs7MEJBQ3ZCLDhEQUFDWCxrREFBSTtnQkFBQ1ksS0FBSyxFQUFDLFVBQVU7Z0JBQUNDLFFBQVEsRUFBQyxJQUFJOzBCQUFDLGVBQWE7Ozs7O29CQUFPOzBCQUN6RCw4REFBQ2Ysa0RBQUk7Z0JBQUNnQixTQUFTLEVBQUMsTUFBTTtnQkFBQ0osVUFBVSxFQUFDLFFBQVE7O29CQUN2Q0osT0FBTyxFQUFFUyxJQUFJLEVBQUVDLEtBQUssa0JBQ25CLDhEQUFDakIsbURBQUs7d0JBQ0prQixHQUFHLEVBQUVYLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLO3dCQUN2QkUsR0FBRyxFQUFDLGFBQWE7d0JBQ2pCWCxLQUFLLEVBQUMsTUFBTTt3QkFDWkMsTUFBTSxFQUFDLE1BQU07d0JBQ2JXLFlBQVksRUFBQyxNQUFNO3dCQUNuQkMsV0FBVyxFQUFDLE1BQU07Ozs7OzRCQUFHO2tDQUV6Qiw4REFBQ3BCLGtEQUFJO3dCQUFDWSxLQUFLLEVBQUMsVUFBVTt3QkFBQ0UsU0FBUyxFQUFDLFFBQVE7d0JBQUNELFFBQVEsRUFBQyxJQUFJO2tDQUFFUCxPQUFPLEVBQUVTLElBQUksRUFBRU0sSUFBSTs7Ozs7NEJBQVE7Ozs7OztvQkFDL0U7MEJBRVAsOERBQUN4QixvREFBTTtnQkFDTHlCLElBQUksRUFBQyxRQUFRO2dCQUNiUixTQUFTLEVBQUMsTUFBTTtnQkFDaEJTLFlBQVksRUFBQyxNQUFNO2dCQUNuQmhCLEtBQUssRUFBQyxPQUFPO2dCQUNiaUIsZUFBZSxFQUFDLGVBQWU7Z0JBQy9CQyxPQUFPLEVBQUUsSUFBTXZCLHdEQUFPLEVBQUU7Z0JBQUE7MEJBQUUsTUFBSTs7Ozs7b0JBQVM7Ozs7OztZQUNwQyxDQUNSO0NBQ0Y7QUFFTSxNQUFNd0Isa0JBQWtCLEdBQXVCLE9BQU9DLE9BQU8sR0FBTTtJQUN4RSxNQUFNckIsT0FBTyxHQUFHLE1BQU1MLDJEQUFVLENBQUMwQixPQUFPLENBQUM7SUFFekMsSUFBR3JCLE9BQU8sRUFBRTtRQUNWLE9BQU87WUFDTHNCLFFBQVEsRUFBRTtnQkFDUkMsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCQyxTQUFTLEVBQUUsS0FBSzthQUNqQjtTQUNGO0tBQ0Y7SUFFRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMekIsT0FBTztTQUNSO0tBQ0Y7Q0FDRjtBQUdELGlFQUFlRixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Pzc1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGbGV4LCBJbWFnZSwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qge2RhdGE6IHNlc3Npb259ID0gdXNlU2Vzc2lvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheS40MDBcIiBmb250U2l6ZT1cIm1kXCI+V2VsY29tZSBhYm9yZDwvVGV4dD5cbiAgICAgIDxGbGV4IG1hcmdpblRvcD1cIjFyZW1cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIHtzZXNzaW9uPy51c2VyPy5pbWFnZSAmJiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cbiAgICAgICAgICAgIGFsdD1cIlVzZXIgYXZhdGFyXCJcbiAgICAgICAgICAgIHdpZHRoPVwiODhweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI4OHB4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxcmVtXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjEwMFwiIG1hcmdpblRvcD1cIjAuNXJlbVwiIGZvbnRTaXplPVwieGxcIj57c2Vzc2lvbj8udXNlcj8ubmFtZX08L1RleHQ+XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIG1hcmdpblRvcD1cIjJyZW1cIlxuICAgICAgICBtYXJnaW5Cb3R0b209XCIxcmVtXCJcbiAgICAgICAgd2lkdGg9XCIyNTZweFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cInNlY29uZGFyeS41MDBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNhaXI8L0J1dHRvbj5cbiAgICA8L0ZsZXg+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+ICB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG5cbiAgaWYoc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvbG9naW5cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlc3Npb25cbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJGbGV4IiwiSW1hZ2UiLCJUZXh0IiwiZ2V0U2Vzc2lvbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiSG9tZSIsImRhdGEiLCJzZXNzaW9uIiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInVzZXIiLCJpbWFnZSIsInNyYyIsImFsdCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInR5cGUiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkNsaWNrIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

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