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
exports.id = "pages/api/customerBooking";
exports.ids = ["pages/api/customerBooking"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "(api)/./src/pages/api/customerBooking.js":
/*!******************************************!*\
  !*** ./src/pages/api/customerBooking.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"ehotel\",\n        port: 3306,\n        password: \"2132ehotel!\",\n        database: \"Hotels\"\n    });\n    const { name , ssn_sin , registrationDate , roomId , checkInDate , checkOutDate  } = req.body;\n    try {\n        client.connect();\n        const insertCustomerQuery = `\n      INSERT INTO Customer (Name, SSN_SIN, Registration_Date)\n      VALUES (?, ?, ?);\n    `;\n        const customerParams = [\n            name,\n            ssn_sin,\n            registrationDate\n        ];\n        const customerInsertResult = await new Promise((resolve, reject)=>{\n            client.query(insertCustomerQuery, customerParams, (error, results)=>{\n                if (error) {\n                    reject(error);\n                } else {\n                    resolve(results);\n                }\n            });\n        });\n        const customerId = customerInsertResult.insertId;\n        const insertBookingQuery = `\n      INSERT INTO Booking (Customer_ID, Room_ID, Check_in_date, Check_out_date)\n      VALUES (?, ?, ?, ?);\n    `;\n        const bookingParams = [\n            customerId,\n            roomId,\n            checkInDate,\n            checkOutDate\n        ];\n        const bookingInsertResult = await new Promise((resolve, reject)=>{\n            client.query(insertBookingQuery, bookingParams, (error, results)=>{\n                if (error) {\n                    reject(error);\n                } else {\n                    resolve(results);\n                }\n            });\n        });\n        const bookingNumber = bookingInsertResult.insertId;\n        res.status(200).json({\n            bookingNumber,\n            customerId\n        });\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        client.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2N1c3RvbWVyQm9va2luZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxTQUFTSiw2REFBc0IsQ0FBQztRQUNwQ00sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFFQSxNQUFNLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxpQkFBZ0IsRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUVDLGFBQVksRUFBRSxHQUFHZCxJQUFJZSxJQUFJO0lBRXZGLElBQUk7UUFDRmIsT0FBT2MsT0FBTztRQUVkLE1BQU1DLHNCQUFzQixDQUFDOzs7SUFHN0IsQ0FBQztRQUNELE1BQU1DLGlCQUFpQjtZQUFDVDtZQUFNQztZQUFTQztTQUFpQjtRQUV4RCxNQUFNUSx1QkFBdUIsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDbEVwQixPQUFPcUIsS0FBSyxDQUFDTixxQkFBcUJDLGdCQUFnQixDQUFDTSxPQUFPQyxVQUFZO2dCQUNwRSxJQUFJRCxPQUFPO29CQUNURixPQUFPRTtnQkFDVCxPQUFPO29CQUNMSCxRQUFRSTtnQkFDVixDQUFDO1lBQ0g7UUFDRjtRQUVBLE1BQU1DLGFBQWFQLHFCQUFxQlEsUUFBUTtRQUVoRCxNQUFNQyxxQkFBcUIsQ0FBQzs7O0lBRzVCLENBQUM7UUFDRCxNQUFNQyxnQkFBZ0I7WUFBQ0g7WUFBWWQ7WUFBUUM7WUFBYUM7U0FBYTtRQUVyRSxNQUFNZ0Isc0JBQXNCLE1BQU0sSUFBSVYsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1lBQ2pFcEIsT0FBT3FCLEtBQUssQ0FBQ0ssb0JBQW9CQyxlQUFlLENBQUNMLE9BQU9DLFVBQVk7Z0JBQ2xFLElBQUlELE9BQU87b0JBQ1RGLE9BQU9FO2dCQUNULE9BQU87b0JBQ0xILFFBQVFJO2dCQUNWLENBQUM7WUFDSDtRQUNGO1FBRUEsTUFBTU0sZ0JBQWdCRCxvQkFBb0JILFFBQVE7UUFFbEQxQixJQUFJK0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRjtZQUFlTDtRQUFXO0lBQ25ELEVBQUUsT0FBT1EsS0FBSztRQUNaQyxRQUFRWCxLQUFLLENBQUNVO1FBQ2RqQyxJQUFJK0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFVCxPQUFPO1FBQXdCO0lBQ3hELFNBQVU7UUFDUnRCLE9BQU9rQyxHQUFHO0lBQ1o7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWhvdGVsLy4vc3JjL3BhZ2VzL2FwaS9jdXN0b21lckJvb2tpbmcuanM/MWM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNsaWVudCA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgdXNlcjogXCJlaG90ZWxcIixcbiAgICBwb3J0OiAzMzA2LFxuICAgIHBhc3N3b3JkOiBcIjIxMzJlaG90ZWwhXCIsXG4gICAgZGF0YWJhc2U6IFwiSG90ZWxzXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHsgbmFtZSwgc3NuX3NpbiwgcmVnaXN0cmF0aW9uRGF0ZSwgcm9vbUlkLCBjaGVja0luRGF0ZSwgY2hlY2tPdXREYXRlIH0gPSByZXEuYm9keTtcblxuICB0cnkge1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG5cbiAgICBjb25zdCBpbnNlcnRDdXN0b21lclF1ZXJ5ID0gYFxuICAgICAgSU5TRVJUIElOVE8gQ3VzdG9tZXIgKE5hbWUsIFNTTl9TSU4sIFJlZ2lzdHJhdGlvbl9EYXRlKVxuICAgICAgVkFMVUVTICg/LCA/LCA/KTtcbiAgICBgO1xuICAgIGNvbnN0IGN1c3RvbWVyUGFyYW1zID0gW25hbWUsIHNzbl9zaW4sIHJlZ2lzdHJhdGlvbkRhdGVdO1xuXG4gICAgY29uc3QgY3VzdG9tZXJJbnNlcnRSZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjbGllbnQucXVlcnkoaW5zZXJ0Q3VzdG9tZXJRdWVyeSwgY3VzdG9tZXJQYXJhbXMsIChlcnJvciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3VzdG9tZXJJZCA9IGN1c3RvbWVySW5zZXJ0UmVzdWx0Lmluc2VydElkO1xuXG4gICAgY29uc3QgaW5zZXJ0Qm9va2luZ1F1ZXJ5ID0gYFxuICAgICAgSU5TRVJUIElOVE8gQm9va2luZyAoQ3VzdG9tZXJfSUQsIFJvb21fSUQsIENoZWNrX2luX2RhdGUsIENoZWNrX291dF9kYXRlKVxuICAgICAgVkFMVUVTICg/LCA/LCA/LCA/KTtcbiAgICBgO1xuICAgIGNvbnN0IGJvb2tpbmdQYXJhbXMgPSBbY3VzdG9tZXJJZCwgcm9vbUlkLCBjaGVja0luRGF0ZSwgY2hlY2tPdXREYXRlXTtcblxuICAgIGNvbnN0IGJvb2tpbmdJbnNlcnRSZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjbGllbnQucXVlcnkoaW5zZXJ0Qm9va2luZ1F1ZXJ5LCBib29raW5nUGFyYW1zLCAoZXJyb3IsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvb2tpbmdOdW1iZXIgPSBib29raW5nSW5zZXJ0UmVzdWx0Lmluc2VydElkO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBib29raW5nTnVtYmVyLCBjdXN0b21lcklkIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50LmVuZCgpO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJteXNxbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwb3J0IiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsIm5hbWUiLCJzc25fc2luIiwicmVnaXN0cmF0aW9uRGF0ZSIsInJvb21JZCIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwiYm9keSIsImNvbm5lY3QiLCJpbnNlcnRDdXN0b21lclF1ZXJ5IiwiY3VzdG9tZXJQYXJhbXMiLCJjdXN0b21lckluc2VydFJlc3VsdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicXVlcnkiLCJlcnJvciIsInJlc3VsdHMiLCJjdXN0b21lcklkIiwiaW5zZXJ0SWQiLCJpbnNlcnRCb29raW5nUXVlcnkiLCJib29raW5nUGFyYW1zIiwiYm9va2luZ0luc2VydFJlc3VsdCIsImJvb2tpbmdOdW1iZXIiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/customerBooking.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/customerBooking.js"));
module.exports = __webpack_exports__;

})();