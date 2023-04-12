"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./src/pages/admin.tsx":
/*!*****************************!*\
  !*** ./src/pages/admin.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AdminPage = ()=>{\n    _s();\n    const [table, setTable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Customer\");\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"insert\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Remove empty fields from the data object\n        const filteredData = Object.fromEntries(Object.entries(data).filter((param)=>{\n            let [_, value] = param;\n            return value !== \"\";\n        }));\n        // Construct data for update action\n        let sendData = filteredData;\n        if (action === \"update\") {\n            const idColumn = \"\".concat(table, \"_ID\");\n            const id = data[idColumn];\n            const updates = {\n                ...filteredData\n            };\n            delete updates[idColumn];\n            sendData = {\n                idColumn,\n                id,\n                updates\n            };\n        }\n        try {\n            const response = await fetch(\"/api/admin\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    action,\n                    table,\n                    data: sendData\n                })\n            });\n            const result = await response.json();\n            console.log(result);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    const handleInputChange = (event)=>{\n        const { name , value  } = event.target;\n        setData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const renderInputFields = ()=>{\n        var _fields_table;\n        const fields = {\n            Customer: [\n                {\n                    name: \"Customer_ID\",\n                    label: \"Customer ID\"\n                },\n                {\n                    name: \"Name\",\n                    label: \"Name\"\n                },\n                {\n                    name: \"SSN_SIN\",\n                    label: \"SSN/SIN\"\n                },\n                {\n                    name: \"Registration_date\",\n                    label: \"Registration Date\"\n                }\n            ],\n            Employee: [\n                {\n                    name: \"Employee_ID\",\n                    label: \"Employee ID\"\n                },\n                {\n                    name: \"Name\",\n                    label: \"Name\"\n                },\n                {\n                    name: \"Address\",\n                    label: \"Address\"\n                },\n                {\n                    name: \"SSN_SIN\",\n                    label: \"SSN/SIN\"\n                },\n                {\n                    name: \"Rate\",\n                    label: \"Rate\"\n                },\n                {\n                    name: \"Role\",\n                    label: \"Role\"\n                }\n            ],\n            Hotel: [\n                {\n                    name: \"Hotel_ID\",\n                    label: \"Hotel ID\"\n                },\n                {\n                    name: \"Chain_ID\",\n                    label: \"Chain ID\"\n                },\n                {\n                    name: \"Name\",\n                    label: \"Name\"\n                },\n                {\n                    name: \"Street\",\n                    label: \"Street\"\n                },\n                {\n                    name: \"City\",\n                    label: \"City\"\n                },\n                {\n                    name: \"State_or_province\",\n                    label: \"State or Province\"\n                },\n                {\n                    name: \"Country\",\n                    label: \"Country\"\n                },\n                {\n                    name: \"Postal_code\",\n                    label: \"Postal Code\"\n                },\n                {\n                    name: \"Email\",\n                    label: \"Email\"\n                },\n                {\n                    name: \"Phone\",\n                    label: \"Phone\"\n                },\n                {\n                    name: \"Star_rating\",\n                    label: \"Star Rating\"\n                },\n                {\n                    name: \"Number_of_rooms\",\n                    label: \"Number of Rooms\"\n                }\n            ],\n            Room: [\n                {\n                    name: \"Room_ID\",\n                    label: \"Room ID\"\n                },\n                {\n                    name: \"Hotel_ID\",\n                    label: \"Hotel ID\"\n                },\n                {\n                    name: \"Price\",\n                    label: \"Price\"\n                },\n                {\n                    name: \"Amenities\",\n                    label: \"Amenities\"\n                },\n                {\n                    name: \"Capacity\",\n                    label: \"Capacity\"\n                },\n                {\n                    name: \"View\",\n                    label: \"View\"\n                },\n                {\n                    name: \"Extended\",\n                    label: \"Extended\"\n                },\n                {\n                    name: \"Problem\",\n                    label: \"Problem\"\n                }\n            ]\n        };\n        return (_fields_table = fields[table]) === null || _fields_table === void 0 ? void 0 : _fields_table.map((field, index)=>{\n            if (action === \"delete\" && !field.name.endsWith(\"_ID\")) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: field.name,\n                        children: [\n                            field.label,\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: field.name === \"Registration_date\" ? \"date\" : \"text\",\n                        id: field.name,\n                        name: field.name,\n                        value: data[field.name] || \"\",\n                        onChange: handleInputChange,\n                        required: action !== \"update\" || field.name.endsWith(\"_ID\")\n                    }, void 0, false, {\n                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, field.name, true, {\n                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, undefined);\n        });\n    };\n    function handleTableChange(event) {\n        const { value  } = event.target;\n        setTable(value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Admin Page\"\n            }, void 0, false, {\n                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"table\",\n                                children: \"Table:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"table\",\n                                value: table,\n                                onChange: handleTableChange,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Customer\",\n                                        children: \"Customer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Employee\",\n                                        children: \"Employee\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Hotel\",\n                                        children: \"Hotel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Room\",\n                                        children: \"Room\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"action\",\n                                children: \"Action:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"action\",\n                                value: action,\n                                onChange: (e)=>setAction(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"insert\",\n                                        children: \"Insert\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"delete\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"update\",\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, undefined),\n                    renderInputFields(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cattuongle/Desktop/ehotel/src/pages/admin.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdminPage, \"R/kBLROcztFchrbTGErdagrKLeo=\");\n_c = AdminPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminPage);\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3dCO3dCQUFPVixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0EzSk1uRDtLQUFBQTtBQTZKTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWRtaW4udHN4P2U2YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbn1cblxuXG5jb25zdCBBZG1pblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUoJ0N1c3RvbWVyJyk7XG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgnaW5zZXJ0Jyk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAvLyBSZW1vdmUgZW1wdHkgZmllbGRzIGZyb20gdGhlIGRhdGEgb2JqZWN0XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gJycpXG4gICAgKTtcbiAgXG4gICAgLy8gQ29uc3RydWN0IGRhdGEgZm9yIHVwZGF0ZSBhY3Rpb25cbiAgICBsZXQgc2VuZERhdGEgPSBmaWx0ZXJlZERhdGE7XG4gICAgaWYgKGFjdGlvbiA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgY29uc3QgaWRDb2x1bW4gPSBgJHt0YWJsZX1fSURgO1xuICAgICAgY29uc3QgaWQgPSBkYXRhW2lkQ29sdW1uXTtcbiAgICAgIGNvbnN0IHVwZGF0ZXMgPSB7IC4uLmZpbHRlcmVkRGF0YSB9O1xuICAgICAgZGVsZXRlIHVwZGF0ZXNbaWRDb2x1bW5dO1xuICAgICAgc2VuZERhdGEgPSB7IGlkQ29sdW1uLCBpZCwgdXBkYXRlcyB9O1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWRtaW4nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICB0YWJsZSxcbiAgICAgICAgICBkYXRhOiBzZW5kRGF0YSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIFxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXREYXRhKChwcmV2RGF0YSkgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgaW50ZXJmYWNlIEZpZWxkIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgfVxuICBcbiAgaW50ZXJmYWNlIEZpZWxkcyB7XG4gICAgW2tleTogc3RyaW5nXTogRmllbGRbXTtcbiAgfVxuICBcbiAgY29uc3QgcmVuZGVySW5wdXRGaWVsZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzOiBGaWVsZHMgPSB7XG4gICAgICBDdXN0b21lcjogW1xuICAgICAgICB7IG5hbWU6ICdDdXN0b21lcl9JRCcsIGxhYmVsOiAnQ3VzdG9tZXIgSUQnIH0sXG4gICAgICAgIHsgbmFtZTogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgICAgIHsgbmFtZTogJ1NTTl9TSU4nLCBsYWJlbDogJ1NTTi9TSU4nIH0sXG4gICAgICAgIHsgbmFtZTogJ1JlZ2lzdHJhdGlvbl9kYXRlJywgbGFiZWw6ICdSZWdpc3RyYXRpb24gRGF0ZScgfSxcbiAgICAgIF0sXG4gICAgICBFbXBsb3llZTogW1xuICAgICAgICB7IG5hbWU6ICdFbXBsb3llZV9JRCcsIGxhYmVsOiAnRW1wbG95ZWUgSUQnIH0sXG4gICAgICAgIHsgbmFtZTogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgICAgIHsgbmFtZTogJ0FkZHJlc3MnLCBsYWJlbDogJ0FkZHJlc3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ1NTTl9TSU4nLCBsYWJlbDogJ1NTTi9TSU4nIH0sXG4gICAgICAgIHsgbmFtZTogJ1JhdGUnLCBsYWJlbDogJ1JhdGUnIH0sXG4gICAgICAgIHsgbmFtZTogJ1JvbGUnLCBsYWJlbDogJ1JvbGUnIH0sXG4gICAgICBdLFxuICAgICAgSG90ZWw6IFtcbiAgICAgICAgeyBuYW1lOiAnSG90ZWxfSUQnLCBsYWJlbDogJ0hvdGVsIElEJyB9LFxuICAgICAgICB7IG5hbWU6ICdDaGFpbl9JRCcsIGxhYmVsOiAnQ2hhaW4gSUQnIH0sXG4gICAgICAgIHsgbmFtZTogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXG4gICAgICAgIHsgbmFtZTogJ1N0cmVldCcsIGxhYmVsOiAnU3RyZWV0JyB9LFxuICAgICAgICB7IG5hbWU6ICdDaXR5JywgbGFiZWw6ICdDaXR5JyB9LFxuICAgICAgICB7IG5hbWU6ICdTdGF0ZV9vcl9wcm92aW5jZScsIGxhYmVsOiAnU3RhdGUgb3IgUHJvdmluY2UnIH0sXG4gICAgICAgIHsgbmFtZTogJ0NvdW50cnknLCBsYWJlbDogJ0NvdW50cnknIH0sXG4gICAgICAgIHsgbmFtZTogJ1Bvc3RhbF9jb2RlJywgbGFiZWw6ICdQb3N0YWwgQ29kZScgfSxcbiAgICAgICAgeyBuYW1lOiAnRW1haWwnLCBsYWJlbDogJ0VtYWlsJyB9LFxuICAgICAgICB7IG5hbWU6ICdQaG9uZScsIGxhYmVsOiAnUGhvbmUnIH0sXG4gICAgICAgIHsgbmFtZTogJ1N0YXJfcmF0aW5nJywgbGFiZWw6ICdTdGFyIFJhdGluZycgfSxcbiAgICAgICAgeyBuYW1lOiAnTnVtYmVyX29mX3Jvb21zJywgbGFiZWw6ICdOdW1iZXIgb2YgUm9vbXMnIH0sXG4gICAgICBdLFxuICAgICAgUm9vbTogW1xuICAgICAgICB7IG5hbWU6ICdSb29tX0lEJywgbGFiZWw6ICdSb29tIElEJyB9LFxuICAgICAgICB7IG5hbWU6ICdIb3RlbF9JRCcsIGxhYmVsOiAnSG90ZWwgSUQnIH0sXG4gICAgICAgIHsgbmFtZTogJ1ByaWNlJywgbGFiZWw6ICdQcmljZScgfSxcbiAgICAgICAgeyBuYW1lOiAnQW1lbml0aWVzJywgbGFiZWw6ICdBbWVuaXRpZXMnIH0sXG4gICAgICAgIHsgbmFtZTogJ0NhcGFjaXR5JywgbGFiZWw6ICdDYXBhY2l0eScgfSxcbiAgICAgICAgeyBuYW1lOiAnVmlldycsIGxhYmVsOiAnVmlldycgfSxcbiAgICAgICAgeyBuYW1lOiAnRXh0ZW5kZWQnLCBsYWJlbDogJ0V4dGVuZGVkJyB9LFxuICAgICAgICB7IG5hbWU6ICdQcm9ibGVtJywgbGFiZWw6ICdQcm9ibGVtJyB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpZWxkc1t0YWJsZV0/Lm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiICYmICFmaWVsZC5uYW1lLmVuZHNXaXRoKFwiX0lEXCIpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLm5hbWV9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5uYW1lfT57ZmllbGQubGFiZWx9OjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPXtmaWVsZC5uYW1lID09PSAnUmVnaXN0cmF0aW9uX2RhdGUnID8gJ2RhdGUnIDogJ3RleHQnfVxuICAgICAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XG4gICAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxuICAgICAgICAgICAgdmFsdWU9e2RhdGFbZmllbGQubmFtZV0gfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZD17YWN0aW9uICE9PSBcInVwZGF0ZVwiIHx8IGZpZWxkLm5hbWUuZW5kc1dpdGgoXCJfSURcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVGFibGVDaGFuZ2UoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHNldFRhYmxlKHZhbHVlKTtcbiAgICAgIH1cbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QWRtaW4gUGFnZTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhYmxlXCI+VGFibGU6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGlkPVwidGFibGVcIiB2YWx1ZT17dGFibGV9IG9uQ2hhbmdlPXtoYW5kbGVUYWJsZUNoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3VzdG9tZXJcIj5DdXN0b21lcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVtcGxveWVlXCI+RW1wbG95ZWU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIb3RlbFwiPkhvdGVsPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUm9vbVwiPlJvb208L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY3Rpb25cIj5BY3Rpb246PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGlkPVwiYWN0aW9uXCIgdmFsdWU9e2FjdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpb24oZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnNlcnRcIj5JbnNlcnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5EZWxldGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1cGRhdGVcIj5VcGRhdGU8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtyZW5kZXJJbnB1dEZpZWxkcygpfVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkbWluUGFnZSIsInRhYmxlIiwic2V0VGFibGUiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJlZERhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXIiLCJ2YWx1ZSIsIl8iLCJzZW5kRGF0YSIsImlkQ29sdW1uIiwiaWQiLCJ1cGRhdGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsInJlbmRlcklucHV0RmllbGRzIiwiZmllbGRzIiwiQ3VzdG9tZXIiLCJsYWJlbCIsIkVtcGxveWVlIiwiSG90ZWwiLCJSb29tIiwibWFwIiwiZmllbGQiLCJpbmRleCIsImVuZHNXaXRoIiwiZGl2IiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJoYW5kbGVUYWJsZUNoYW5nZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0Iiwic2VsZWN0Iiwib3B0aW9uIiwiZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/admin.tsx\n"));

/***/ })

});