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
exports.id = "pages/api/employeesAccess";
exports.ids = ["pages/api/employeesAccess"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "(api)/./src/pages/api/employeesAccess.js":
/*!******************************************!*\
  !*** ./src/pages/api/employeesAccess.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* Employee */ \nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n        return;\n    }\n    const client = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"ehotel\",\n        port: 3306,\n        password: \"2132ehotel!\",\n        database: \"Hotels\"\n    });\n    try {\n        const { employeeID  } = req.body; // Retrieve the entered employee ID from the request body\n        client.connect();\n        const result = await new Promise((resolve, reject)=>{\n            client.query(`SELECT COUNT(*) AS count FROM Employee WHERE Employee_ID = ${employeeID}`, (error, results)=>{\n                if (error) {\n                    reject(error);\n                } else {\n                    resolve(results);\n                }\n            });\n        });\n        const count = result[0].count;\n        if (count > 0) {\n            // The entered employee ID is valid\n            res.status(200).json({\n                success: true,\n                message: \"Access granted\"\n            });\n        } else {\n            // The entered employee ID is invalid\n            res.status(403).json({\n                success: false,\n                message: \"Access denied\"\n            });\n        }\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        client.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2VtcGxveWVlc0FjY2Vzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxZQUFZLEdBQ2M7QUFFWCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QkQsSUFBSUUsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFTCxJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3REO0lBQ0YsQ0FBQztJQUVELE1BQU1JLFNBQVNSLDZEQUFzQixDQUFDO1FBQ3BDVSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVBLElBQUk7UUFDRixNQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHYixJQUFJYyxJQUFJLEVBQUUseURBQXlEO1FBQzFGUixPQUFPUyxPQUFPO1FBQ2QsTUFBTUMsU0FBUyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztZQUNwRGIsT0FBT2MsS0FBSyxDQUFDLENBQUMsMkRBQTJELEVBQUVQLFdBQVcsQ0FBQyxFQUFFLENBQUNRLE9BQU9DLFVBQVk7Z0JBQzNHLElBQUlELE9BQU87b0JBQ1RGLE9BQU9FO2dCQUNULE9BQU87b0JBQ0xILFFBQVFJO2dCQUNWLENBQUM7WUFDSDtRQUNGO1FBQ0EsTUFBTUMsUUFBUVAsTUFBTSxDQUFDLEVBQUUsQ0FBQ08sS0FBSztRQUM3QixJQUFJQSxRQUFRLEdBQUc7WUFDYixtQ0FBbUM7WUFDbkN0QixJQUFJRyxNQUFNLENBQUMsS0FBS29CLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO2dCQUFFQyxTQUFTO1lBQWlCO1FBQ2xFLE9BQU87WUFDTCxxQ0FBcUM7WUFDckN6QixJQUFJRyxNQUFNLENBQUMsS0FBS29CLElBQUksQ0FBQztnQkFBRUMsU0FBUyxLQUFLO2dCQUFFQyxTQUFTO1lBQWdCO1FBQ2xFLENBQUM7SUFDSCxFQUFFLE9BQU9DLEtBQUs7UUFDWkMsUUFBUVAsS0FBSyxDQUFDTTtRQUNkMUIsSUFBSUcsTUFBTSxDQUFDLEtBQUtvQixJQUFJLENBQUM7WUFBRUgsT0FBTztRQUF3QjtJQUN4RCxTQUFVO1FBQ1JmLE9BQU9ELEdBQUc7SUFDWjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9laG90ZWwvLi9zcmMvcGFnZXMvYXBpL2VtcGxveWVlc0FjY2Vzcy5qcz9kNWRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEVtcGxveWVlICovXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgdXNlcjogXCJlaG90ZWxcIixcbiAgICBwb3J0OiAzMzA2LFxuICAgIHBhc3N3b3JkOiBcIjIxMzJlaG90ZWwhXCIsXG4gICAgZGF0YWJhc2U6IFwiSG90ZWxzXCIsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbXBsb3llZUlEIH0gPSByZXEuYm9keTsgLy8gUmV0cmlldmUgdGhlIGVudGVyZWQgZW1wbG95ZWUgSUQgZnJvbSB0aGUgcmVxdWVzdCBib2R5XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjbGllbnQucXVlcnkoYFNFTEVDVCBDT1VOVCgqKSBBUyBjb3VudCBGUk9NIEVtcGxveWVlIFdIRVJFIEVtcGxveWVlX0lEID0gJHtlbXBsb3llZUlEfWAsIChlcnJvciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvdW50ID0gcmVzdWx0WzBdLmNvdW50O1xuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgIC8vIFRoZSBlbnRlcmVkIGVtcGxveWVlIElEIGlzIHZhbGlkXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdBY2Nlc3MgZ3JhbnRlZCcgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBlbnRlcmVkIGVtcGxveWVlIElEIGlzIGludmFsaWRcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdBY2Nlc3MgZGVuaWVkJyB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuZW5kKCk7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNldEhlYWRlciIsInN0YXR1cyIsImVuZCIsImNsaWVudCIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBvcnQiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwiZW1wbG95ZWVJRCIsImJvZHkiLCJjb25uZWN0IiwicmVzdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJxdWVyeSIsImVycm9yIiwicmVzdWx0cyIsImNvdW50IiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/employeesAccess.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/employeesAccess.js"));
module.exports = __webpack_exports__;

})();