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
exports.id = "pages/api/employees";
exports.ids = ["pages/api/employees"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "(api)/./src/pages/api/employees.js":
/*!************************************!*\
  !*** ./src/pages/api/employees.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* Employee*/ \nasync function handler(req, res) {\n    const client = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"ehotel\",\n        port: 3306,\n        password: \"2132ehotel!\",\n        database: \"Hotels\"\n    });\n    try {\n        client.connect();\n        const result = await new Promise((resolve, reject)=>{\n            client.query(\"SELECT Employee_ID FROM Employee\", (error, results)=>{\n                if (error) {\n                    reject(error);\n                } else {\n                    resolve(results);\n                }\n            });\n        });\n        res.status(200).json(result);\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        client.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2VtcGxveWVlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxXQUFXLEdBQ2U7QUFFWCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxNQUFNQyxTQUFTSiw2REFBc0IsQ0FBQztRQUNwQ00sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFFQSxJQUFJO1FBQ0ZOLE9BQU9PLE9BQU87UUFDZCxNQUFNQyxTQUFTLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1lBQ3BEWCxPQUFPWSxLQUFLLENBQUMsb0NBQW9DLENBQUNDLE9BQU9DLFVBQVk7Z0JBQ25FLElBQUlELE9BQU87b0JBQ1RGLE9BQU9FO2dCQUNULE9BQU87b0JBQ0xILFFBQVFJO2dCQUNWLENBQUM7WUFDSDtRQUNGO1FBQ0FmLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUjtJQUN2QixFQUFFLE9BQU9TLEtBQUs7UUFDWkMsUUFBUUwsS0FBSyxDQUFDSTtRQUNkbEIsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUgsT0FBTztRQUF3QjtJQUN4RCxTQUFVO1FBQ1JiLE9BQU9tQixHQUFHO0lBQ1o7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWhvdGVsLy4vc3JjL3BhZ2VzL2FwaS9lbXBsb3llZXMuanM/NzhhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFbXBsb3llZSovXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgY2xpZW50ID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICB1c2VyOiBcImVob3RlbFwiLFxuICAgIHBvcnQ6IDMzMDYsXG4gICAgcGFzc3dvcmQ6IFwiMjEzMmVob3RlbCFcIixcbiAgICBkYXRhYmFzZTogXCJIb3RlbHNcIixcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNsaWVudC5xdWVyeSgnU0VMRUNUIEVtcGxveWVlX0lEIEZST00gRW1wbG95ZWUnLCAoZXJyb3IsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50LmVuZCgpO1xuICB9XG59Il0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBvcnQiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwiY29ubmVjdCIsInJlc3VsdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicXVlcnkiLCJlcnJvciIsInJlc3VsdHMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/employees.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/employees.js"));
module.exports = __webpack_exports__;

})();