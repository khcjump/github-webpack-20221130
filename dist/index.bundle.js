"use strict";
(self["webpackChunkgetting_started_using_a_configuration"] = self["webpackChunkgetting_started_using_a_configuration"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
// import _ from "lodash";
// import "./style.css";
// import printMe from "./print.js";
// function getComponent() {
//   return import("lodash")
//     .then(({ default: _ }) => {
//       const element = document.createElement("div");
//       element.innerHTML = _.join(["Hello", "webpack"], " ");
//       return element;
//     })
//     .catch((error) => "An error occurred while loading the component");
// }
// getComponent().then((component) => {
//   document.body.appendChild(component);
// });



async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsVUFBVSxhQUFhLFFBQVEsMklBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuLy8gaW1wb3J0IHByaW50TWUgZnJvbSBcIi4vcHJpbnQuanNcIjtcclxuLy8gZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4vLyAgIHJldHVybiBpbXBvcnQoXCJsb2Rhc2hcIilcclxuLy8gICAgIC50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG9cIiwgXCJ3ZWJwYWNrXCJdLCBcIiBcIik7XHJcbi8vICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB0aGUgY29tcG9uZW50XCIpO1xyXG4vLyB9XHJcbi8vIGdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xyXG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcclxuLy8gfSk7XHJcblxyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoXCJsb2Rhc2hcIik7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG9cIiwgXCJ3ZWJwYWNrXCJdLCBcIiBcIik7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==