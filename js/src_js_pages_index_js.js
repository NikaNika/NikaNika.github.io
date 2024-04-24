"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_index_js"],{

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var index = function index() {
  var openBtn = document.querySelector('.open-btn');
  var closeBtn = document.querySelector('.close-btn');
  var navbarNav = document.querySelector('.navbar_nav');
  var navbarCollapse = document.querySelector('.navbar_collapse');
  openBtn.addEventListener('click', function () {
    navbarCollapse.classList.remove('hidden');
  });
  closeBtn.addEventListener('click', function () {
    navbarCollapse.classList.add('hidden');
  });
  navbarNav.addEventListener('click', function () {
    navbarCollapse.classList.add('hidden');
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ })

}]);
//# sourceMappingURL=src_js_pages_index_js.js.map