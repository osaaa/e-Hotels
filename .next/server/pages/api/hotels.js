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
exports.id = "pages/api/hotels";
exports.ids = ["pages/api/hotels"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "(api)/./src/pages/api/hotels.js":
/*!*********************************!*\
  !*** ./src/pages/api/hotels.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"ehotel\",\n        port: 3306,\n        password: \"2132ehotel!\",\n        database: \"Hotels\"\n    });\n    try {\n        client.connect();\n        const result = await new Promise((resolve, reject)=>{\n            client.query(\"SELECT * FROM Hotel\", (error, results)=>{\n                if (error) {\n                    reject(error);\n                } else {\n                    resolve(results);\n                }\n            });\n        });\n        res.status(200).json(result);\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        client.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hvdGVscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxNQUFNQyxTQUFTSiw2REFBc0IsQ0FBQztRQUNwQ00sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFFQSxJQUFJO1FBQ0ZOLE9BQU9PLE9BQU87UUFDZCxNQUFNQyxTQUFTLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1lBQ3BEWCxPQUFPWSxLQUFLLENBQUMsdUJBQXVCLENBQUNDLE9BQU9DLFVBQVk7Z0JBQ3RELElBQUlELE9BQU87b0JBQ1RGLE9BQU9FO2dCQUNULE9BQU87b0JBQ0xILFFBQVFJO2dCQUNWLENBQUM7WUFDSDtRQUNGO1FBQ0FmLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUjtJQUN2QixFQUFFLE9BQU9TLEtBQUs7UUFDWkMsUUFBUUwsS0FBSyxDQUFDSTtRQUNkbEIsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUgsT0FBTztRQUF3QjtJQUN4RCxTQUFVO1FBQ1JiLE9BQU9tQixHQUFHO0lBQ1o7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWhvdGVsLy4vc3JjL3BhZ2VzL2FwaS9ob3RlbHMuanM/ZmMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgY2xpZW50ID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICB1c2VyOiBcImVob3RlbFwiLFxuICAgIHBvcnQ6IDMzMDYsXG4gICAgcGFzc3dvcmQ6IFwiMjEzMmVob3RlbCFcIixcbiAgICBkYXRhYmFzZTogXCJIb3RlbHNcIixcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNsaWVudC5xdWVyeSgnU0VMRUNUICogRlJPTSBIb3RlbCcsIChlcnJvciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuZW5kKCk7XG4gIH1cbn0iXSwibmFtZXMiOlsibXlzcWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicG9ydCIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJjb25uZWN0IiwicmVzdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJxdWVyeSIsImVycm9yIiwicmVzdWx0cyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hotels.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hotels.js"));
module.exports = __webpack_exports__;

})();