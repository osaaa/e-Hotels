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
exports.id = "pages/api/availableRooms";
exports.ids = ["pages/api/availableRooms"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "(api)/./src/pages/api/availableRooms.js":
/*!*****************************************!*\
  !*** ./src/pages/api/availableRooms.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* This code will return the name, price, area, hotel chain, category,\n * total number of rooms, and number of available rooms for each hotel \n * that meets the given criteria.\n */ \nasync function handler(req, res) {\n    const client = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"ehotel\",\n        port: 3306,\n        password: \"2132ehotel!\",\n        database: \"Hotels\"\n    });\n    const { startDate =\"2023-04-09\" , endDate =\"2023-04-23\" , roomCapacity =\"Double\" , hotelCategory =\"4\" , priceRangeMin =100 , priceRangeMax =600 , area =\"NY\" , hotelChain =\"Hilton Worldwide\"  } = req.query;\n    console.log(\"Request body: \", req.body);\n    try {\n        client.connect();\n        let query = `\n    SELECT h.Hotel_ID as id, h.Name, h.imageUrl, r.Price, h.City, h.Street, h.Email, h.Phone, h.State_or_province, hc.Name AS Hotel_Chain, h.Star_rating, h.Number_of_rooms, COUNT(r.Room_ID) AS Available_Rooms, r.Amenities, r.View\n      FROM Room r\n      JOIN Hotel h ON r.Hotel_ID = h.Hotel_ID\n      JOIN Hotel_chain hc ON h.Chain_ID = hc.Chain_ID\n      WHERE r.Capacity = ?\n        AND r.Price >= ? AND r.Price <= ?\n        AND r.Room_ID NOT IN (\n          SELECT Room_ID\n          FROM Booking\n          WHERE Check_in_date <= ? \n            AND Check_out_date >= ?)\n    `;\n        let queryParams = [\n            roomCapacity,\n            priceRangeMin,\n            priceRangeMax,\n            startDate,\n            endDate\n        ];\n        if (area) {\n            query += \" AND h.State_or_province = ?\";\n            queryParams.push(area);\n        }\n        if (hotelChain) {\n            query += \" AND hc.Name = ?\";\n            queryParams.push(hotelChain);\n        }\n        if (hotelCategory) {\n            query += \" AND h.Star_rating = ?\";\n            queryParams.push(hotelCategory);\n        }\n        query += \" GROUP BY h.Hotel_ID, h.Name, r.Price, h.City, h.State_or_province, hc.Name, h.Star_rating, h.Number_of_rooms, r.Amenities, r.View\";\n        console.log(\"Query: \", query);\n        console.log(\"Final query: \", query);\n        console.log(\"Query parameters: \", queryParams);\n        const result = await new Promise((resolve, reject)=>{\n            client.query(query, queryParams, (error, results)=>{\n                if (error) {\n                    reject(error);\n                } else {\n                    resolve(results);\n                }\n            });\n        });\n        console.log(\"Result: \", result);\n        res.status(200).json(result);\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    } finally{\n        client.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F2YWlsYWJsZVJvb21zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Q0FHQyxHQUN5QjtBQUVYLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVNKLDZEQUFzQixDQUFDO1FBQ3BDTSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVBLE1BQU0sRUFBRUMsV0FBWSxhQUFZLEVBQUVDLFNBQVUsYUFBWSxFQUFFQyxjQUFlLFNBQVEsRUFBRUMsZUFBZ0IsSUFBRyxFQUFFQyxlQUFnQixJQUFHLEVBQUVDLGVBQWdCLElBQUcsRUFBRUMsTUFBTyxLQUFJLEVBQUVDLFlBQWEsbUJBQWtCLEVBQUUsR0FBR2hCLElBQUlpQixLQUFLO0lBQzVNQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCbkIsSUFBSW9CLElBQUk7SUFFdEMsSUFBSTtRQUNGbEIsT0FBT21CLE9BQU87UUFFZCxJQUFJSixRQUFRLENBQUM7Ozs7Ozs7Ozs7OztJQVliLENBQUM7UUFFRCxJQUFJSyxjQUFjO1lBQUNYO1lBQWNFO1lBQWVDO1lBQWVMO1lBQVdDO1NBQVE7UUFFbEYsSUFBSUssTUFBTTtZQUNSRSxTQUFTO1lBQ1RLLFlBQVlDLElBQUksQ0FBQ1I7UUFDbkIsQ0FBQztRQUVELElBQUlDLFlBQVk7WUFDZEMsU0FBUztZQUNUSyxZQUFZQyxJQUFJLENBQUNQO1FBQ25CLENBQUM7UUFFRCxJQUFJSixlQUFlO1lBQ2pCSyxTQUFTO1lBQ1RLLFlBQVlDLElBQUksQ0FBQ1g7UUFDbkIsQ0FBQztRQUVESyxTQUFTO1FBQ1RDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRjtRQUV2QkMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkY7UUFDN0JDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JHO1FBRWxDLE1BQU1FLFNBQVMsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDcER6QixPQUFPZSxLQUFLLENBQUNBLE9BQU9LLGFBQWEsQ0FBQ00sT0FBT0MsVUFBWTtnQkFDbkQsSUFBSUQsT0FBTztvQkFDVEQsT0FBT0M7Z0JBQ1QsT0FBTztvQkFDTEYsUUFBUUc7Z0JBQ1YsQ0FBQztZQUNIO1FBQ0Y7UUFFQVgsUUFBUUMsR0FBRyxDQUFDLFlBQVlLO1FBRXhCdkIsSUFBSTZCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNQO0lBQ3ZCLEVBQUUsT0FBT1EsS0FBSztRQUNaZCxRQUFRVSxLQUFLLENBQUNJO1FBQ2QvQixJQUFJNkIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFSCxPQUFPO1FBQXdCO0lBQ3hELFNBQVU7UUFDUjFCLE9BQU8rQixHQUFHO0lBQ1o7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWhvdGVsLy4vc3JjL3BhZ2VzL2FwaS9hdmFpbGFibGVSb29tcy5qcz8yMjE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgY29kZSB3aWxsIHJldHVybiB0aGUgbmFtZSwgcHJpY2UsIGFyZWEsIGhvdGVsIGNoYWluLCBjYXRlZ29yeSxcbiAqIHRvdGFsIG51bWJlciBvZiByb29tcywgYW5kIG51bWJlciBvZiBhdmFpbGFibGUgcm9vbXMgZm9yIGVhY2ggaG90ZWwgXG4gKiB0aGF0IG1lZXRzIHRoZSBnaXZlbiBjcml0ZXJpYS5cbiAqL1xuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjbGllbnQgPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgIHVzZXI6IFwiZWhvdGVsXCIsXG4gICAgcG9ydDogMzMwNixcbiAgICBwYXNzd29yZDogXCIyMTMyZWhvdGVsIVwiLFxuICAgIGRhdGFiYXNlOiBcIkhvdGVsc1wiLFxuICB9KTtcblxuICBjb25zdCB7IHN0YXJ0RGF0ZSA9ICcyMDIzLTA0LTA5JywgZW5kRGF0ZSA9ICcyMDIzLTA0LTIzJywgcm9vbUNhcGFjaXR5ID0gJ0RvdWJsZScsIGhvdGVsQ2F0ZWdvcnkgPSAnNCcsIHByaWNlUmFuZ2VNaW4gPSAxMDAsIHByaWNlUmFuZ2VNYXggPSA2MDAsIGFyZWEgPSAnTlknLCBob3RlbENoYWluID0gJ0hpbHRvbiBXb3JsZHdpZGUnIH0gPSByZXEucXVlcnk7XG4gIGNvbnNvbGUubG9nKFwiUmVxdWVzdCBib2R5OiBcIiwgcmVxLmJvZHkpO1xuXG4gIHRyeSB7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcblxuICAgIGxldCBxdWVyeSA9IGBcbiAgICBTRUxFQ1QgaC5Ib3RlbF9JRCBhcyBpZCwgaC5OYW1lLCBoLmltYWdlVXJsLCByLlByaWNlLCBoLkNpdHksIGguU3RyZWV0LCBoLkVtYWlsLCBoLlBob25lLCBoLlN0YXRlX29yX3Byb3ZpbmNlLCBoYy5OYW1lIEFTIEhvdGVsX0NoYWluLCBoLlN0YXJfcmF0aW5nLCBoLk51bWJlcl9vZl9yb29tcywgQ09VTlQoci5Sb29tX0lEKSBBUyBBdmFpbGFibGVfUm9vbXMsIHIuQW1lbml0aWVzLCByLlZpZXdcbiAgICAgIEZST00gUm9vbSByXG4gICAgICBKT0lOIEhvdGVsIGggT04gci5Ib3RlbF9JRCA9IGguSG90ZWxfSURcbiAgICAgIEpPSU4gSG90ZWxfY2hhaW4gaGMgT04gaC5DaGFpbl9JRCA9IGhjLkNoYWluX0lEXG4gICAgICBXSEVSRSByLkNhcGFjaXR5ID0gP1xuICAgICAgICBBTkQgci5QcmljZSA+PSA/IEFORCByLlByaWNlIDw9ID9cbiAgICAgICAgQU5EIHIuUm9vbV9JRCBOT1QgSU4gKFxuICAgICAgICAgIFNFTEVDVCBSb29tX0lEXG4gICAgICAgICAgRlJPTSBCb29raW5nXG4gICAgICAgICAgV0hFUkUgQ2hlY2tfaW5fZGF0ZSA8PSA/IFxuICAgICAgICAgICAgQU5EIENoZWNrX291dF9kYXRlID49ID8pXG4gICAgYDtcblxuICAgIGxldCBxdWVyeVBhcmFtcyA9IFtyb29tQ2FwYWNpdHksIHByaWNlUmFuZ2VNaW4sIHByaWNlUmFuZ2VNYXgsIHN0YXJ0RGF0ZSwgZW5kRGF0ZV07XG5cbiAgICBpZiAoYXJlYSkge1xuICAgICAgcXVlcnkgKz0gXCIgQU5EIGguU3RhdGVfb3JfcHJvdmluY2UgPSA/XCI7XG4gICAgICBxdWVyeVBhcmFtcy5wdXNoKGFyZWEpO1xuICAgIH1cblxuICAgIGlmIChob3RlbENoYWluKSB7XG4gICAgICBxdWVyeSArPSBcIiBBTkQgaGMuTmFtZSA9ID9cIjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goaG90ZWxDaGFpbik7XG4gICAgfVxuXG4gICAgaWYgKGhvdGVsQ2F0ZWdvcnkpIHtcbiAgICAgIHF1ZXJ5ICs9IFwiIEFORCBoLlN0YXJfcmF0aW5nID0gP1wiO1xuICAgICAgcXVlcnlQYXJhbXMucHVzaChob3RlbENhdGVnb3J5KTtcbiAgICB9XG5cbiAgICBxdWVyeSArPSBcIiBHUk9VUCBCWSBoLkhvdGVsX0lELCBoLk5hbWUsIHIuUHJpY2UsIGguQ2l0eSwgaC5TdGF0ZV9vcl9wcm92aW5jZSwgaGMuTmFtZSwgaC5TdGFyX3JhdGluZywgaC5OdW1iZXJfb2Zfcm9vbXMsIHIuQW1lbml0aWVzLCByLlZpZXdcIjtcbiAgICBjb25zb2xlLmxvZyhcIlF1ZXJ5OiBcIiwgcXVlcnkpO1xuXG4gICAgY29uc29sZS5sb2coXCJGaW5hbCBxdWVyeTogXCIsIHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhcIlF1ZXJ5IHBhcmFtZXRlcnM6IFwiLCBxdWVyeVBhcmFtcyk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjbGllbnQucXVlcnkocXVlcnksIHF1ZXJ5UGFyYW1zLCAoZXJyb3IsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuZW5kKCk7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBvcnQiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInJvb21DYXBhY2l0eSIsImhvdGVsQ2F0ZWdvcnkiLCJwcmljZVJhbmdlTWluIiwicHJpY2VSYW5nZU1heCIsImFyZWEiLCJob3RlbENoYWluIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNvbm5lY3QiLCJxdWVyeVBhcmFtcyIsInB1c2giLCJyZXN1bHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yIiwicmVzdWx0cyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/availableRooms.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/availableRooms.js"));
module.exports = __webpack_exports__;

})();