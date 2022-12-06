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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmU4NDYxYWFkYTdiMDk1Mzk0NTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUN1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWEsUUFBUSwySUFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xyXG4vLyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcbi8vICAgcmV0dXJuIGltcG9ydChcImxvZGFzaFwiKVxyXG4vLyAgICAgLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcclxuLy8gICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4gXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnRcIik7XHJcbi8vIH1cclxuLy8gZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XHJcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xyXG4vLyB9KTtcclxuXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydChcImxvZGFzaFwiKTtcclxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9