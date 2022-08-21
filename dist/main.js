/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/aboreto.ttf */ "./src/asset/aboreto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/inspiration.ttf */ "./src/asset/inspiration.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"subTitle\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"mainTitle\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n    min-height: 850px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    min-height: 100vh;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"mainTitle\";\r\n    text-align: center;\r\n    font-size: 90px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    font-family: \"subTitle\";\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n    height: 100%;\r\n}\r\n\r\n.knife-img {\r\n    width: 80px;\r\n    height: 480px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    font-family: \"subTitle\";\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(50%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    width: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    pointer-events: none;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    height: 830px;\r\n    margin: 0 21.50px;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n    height: 170px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.review-name {\r\n    letter-spacing: 1.4px;\r\n}\r\n\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    min-height: 90px;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n    min-height: 520px;;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n    min-height: 520px;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    min-height: 375px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"subTitle\";\r\n    src: url(\"./asset/aboreto.ttf\") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"mainTitle\";\r\n    src: url(\"./asset/inspiration.ttf\") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n    min-height: 850px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    min-height: 100vh;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"mainTitle\";\r\n    text-align: center;\r\n    font-size: 90px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    font-family: \"subTitle\";\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n    height: 100%;\r\n}\r\n\r\n.knife-img {\r\n    width: 80px;\r\n    height: 480px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    font-family: \"subTitle\";\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(50%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    width: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    pointer-events: none;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    height: 830px;\r\n    margin: 0 21.50px;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n    height: 170px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.review-name {\r\n    letter-spacing: 1.4px;\r\n}\r\n\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    min-height: 90px;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n    min-height: 520px;;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n    min-height: 520px;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    min-height: 375px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appComponent)
/* harmony export */ });
/* harmony import */ var _asset_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/home.png */ "./src/asset/home.png");
/* harmony import */ var _asset_reservation_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/reservation.png */ "./src/asset/reservation.png");
/* harmony import */ var _asset_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/menu.png */ "./src/asset/menu.png");
/* harmony import */ var _asset_contactus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/contactus.png */ "./src/asset/contactus.png");





function appComponent(){
    return `
        ${titleComponent("Yves Ibyang", "VEGETARIAN STEAK HOUSE")}
        ${generateNavContainer()}
        <div class = "main-content">
        </div>
    `
    
    function titleComponent(pageTitle, pageSubTitle) {
        return `
        <div class = "title-container">
            <h1 class = "main-title">${pageTitle}</h1>
            <h2 class = "sub-title">${pageSubTitle}</h2>
        </div>
       `
    }

    function generateNavContainer() {
        return `
            <div class = "nav-container">
                ${createTabButton("Home", _asset_home_png__WEBPACK_IMPORTED_MODULE_0__, "0")}
                ${createTabButton("Reservation", _asset_reservation_png__WEBPACK_IMPORTED_MODULE_1__, "1")}
                ${createTabButton("Menu", _asset_menu_png__WEBPACK_IMPORTED_MODULE_2__, "2")}
                ${createTabButton("Contact Us", _asset_contactus_png__WEBPACK_IMPORTED_MODULE_3__, "3")}
            </div>
        `
    }

    function createTabButton(text, iconImage, dataAttribute) {
        return `
            <div class = "nav-single-container" id = "nav-button--unselected" data-id = ${dataAttribute}>
                <img src = ${iconImage} class = "nav-icons" alt = "nav icons">
                <div class = "nav-text">${text}</div>
            </div>
        `
    }
}


/***/ }),

/***/ "./src/contactuspage.js":
/*!******************************!*\
  !*** ./src/contactuspage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactUsComponent)
/* harmony export */ });
function contactUsComponent(){
    return `
        <div class = "contactus-container">
            ${generateAddressContext("Yves Resto New York City", "2299 West Albert, New York City, 22092", "(212) 234 4421", "yvesibyang@restorant.ingnore") }
            ${generateAddressContext("Yves Resto Signapore", "4299 Okatokat, Singapore City, 22092", "(2222) 234 4421", "yvesibyangsingapore@restorant.ingnore") }
            ${generateAddressContext("Yves Resto Phillipines", "399 Okatokat, Rizal City, 2214", "(932) 234 4421", "yvesibyangphilippines@restorant.ingnore") }
            ${generateSubscribeInput()}
        </div>
    `;

    function generateAddressContext(title, address, number, email) {
        return `
        <div class = "contactus_single-container">
            <div class = "contactus_title">${title}</div>
            <div class = "contactus_location">${address}</div>
            <div class = "contactus_tel">${number}</div>
            <div class = "contactus_email">${email}</div>
        </div>
    `
    };

    function generateSubscribeInput() {
        return `
        <div class = "contactus_subscribe-container">
            <div class = "contactus_subscriber-name">Subscribe for news and promos.</div>
            <input class = "contactus_subscribe-input"></input>
            <button class = "contactus_subscribe-button">subscribe</button> 
        </div>
    `
    }
}




/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeComponent)
/* harmony export */ });
/* harmony import */ var _asset_staricon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/staricon.svg */ "./src/asset/staricon.svg");
/* harmony import */ var _asset_kitchenknife_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/kitchenknife.png */ "./src/asset/kitchenknife.png");
/* harmony import */ var _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant_content/webtext.json */ "./src/restaurant_content/webtext.json");




function homeComponent(){
    return `
        <div class = "main-container">
            <div class = "history-container">
                ${_restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.restaurantHistory}
            </div>
            <div class = "knife-container">
                <img class = "knife-img" src = ${_asset_kitchenknife_png__WEBPACK_IMPORTED_MODULE_1__} alt = "knife background photo">
            </div>
            <div class = "manifest-container">
                ${_restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.manifestation}
            </div>
        </div>
        ${reviewsComponent()}
        ${footerComponent()}
    `;

    function reviewsComponent(){
        let tempText = "";
        _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.reviews.forEach(review => {
            tempText += `
                    <div class = "single-review-container">
                        <h3 class = "review-name">
                            ${review.name}
                        </h3>
                        <blockquote>
                            <p>${review.comment}</p>
                        </blockquote>
                        <div class = "score-container">
                            ${generateStar(review.score)}
                        </div>
                    </div>
                `
        })

        function generateStar(score){
            let tempStr = ""
            for(let i = 0; i < score; i++){
                    tempStr+= `
                        <img src = ${_asset_staricon_svg__WEBPACK_IMPORTED_MODULE_0__} class="star-icon" alt = "review stars">
                    `
            };
            return tempStr;
        }
        return `
            <div class = "reviews-container">
                ${tempText}
            </div>
        `;
    }

    function footerComponent(){
        let tempStr = "";
        _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.footerNotes.forEach(parag =>
            {
                tempStr += `<p>${parag}</p>`
            })

        return `
            <div class = "foot-container">
                ${tempStr}
            </div>
        `
    }
}


/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _restaurant_content_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant_content/menu.json */ "./src/restaurant_content/menu.json");


function menuComponent(){
    return `
        <div class = "menu-container">
            ${generateMenuCollection(_restaurant_content_menu_json__WEBPACK_IMPORTED_MODULE_0__)}
        </div>
    `

    function generateMenuCollection(prop){
        let tempStrMain = "";
        let itemCounter = 1;

        for(const subMenu in prop){
            console.log("called");
            tempStrMain += `
            <div class = "menu-sub-containers">
                <div class = "sub-menu-title-containers">
                    ${subMenu}
                </div>
                ${generateListOfItems(prop, subMenu)}
            </div>
        `
        };

        return tempStrMain;

        function generateListOfItems(prop, propName){
            let tempStr = "";
            prop[propName].forEach(item => {
                tempStr += `
                    <div class = "menu-item-container">
                        <div class = "menu_top-section">
                            <h3 class = "menu-number">${itemCounter}</h3>
                            <div class = "menu-item-name">${item.name}</div>
                        </div>
                        <div class = "menu_bottom-section">
                            <div class = "menu_item-description">${item.description}</div>
                            <div class = "menu_item-price">${item.price}</div>
                        </div>
                    </div>
                `
            })

            itemCounter++;

            return tempStr;
        }
    }
}

/***/ }),

/***/ "./src/reservationpage.js":
/*!********************************!*\
  !*** ./src/reservationpage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reservationComponent)
/* harmony export */ });
/* harmony import */ var _asset_restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/restaurant.png */ "./src/asset/restaurant.png");


function reservationComponent(){
    return `
        <div class = "reservation-container">
            <div class = "reservation_left-section">
                ${generateInputContainer("Name:", "reservation_name", "text", "reservation_name-input")}
                ${generateInputContainer("Number of guests:", "reservation_name", "text", "reservation_guest-input") }
                ${generateInputContainer("Time:", "reservation_name", "select", "reservation_time-input")}
                ${generateInputContainer("Phone number:", "reservation_name", "tel", "reservation_tel-input")}
                ${generateInputContainer("Email", "reservation_name", "email", "reservation_email-input")}
                <button class = "reservation_submit-button" type = "submit">SUBMIT</button>

                <div class = "reservation_disclaimer-container">
                    ${addDisclaimer("Culpa proident consectetur officia officia minim nostrud eu.") }
                    ${addDisclaimer("Qui et ad voluptate ex qui occaecat aute veniam laboris dolor reprehenderit.") }
                    ${addDisclaimer("Consequat duis ad duis minim labore nulla ut ex.") }
                    ${addDisclaimer("Laborum anim est sunt nostrud esse deserunt cupidatat voluptate duis fugiat nisi consectetur culpa.") }
                </div>
            </div>

            <div class = "reservation_right-section">
                <img src = ${_asset_restaurant_png__WEBPACK_IMPORTED_MODULE_0__} class = "reservation_img">
            </div>
        </div>
    `

    function addDisclaimer(str) {
        return `
            <p class = "reservation_disclaimer-text">${str}</p>
        `;
    };

    function generateInputContainer(title, titleClassName, inputType, inputClassName) {
        return `
            <div class = "reservation_input-container">
                    <div class = ${titleClassName}>${title}</div>
                    <input type = ${inputType} class = ${inputClassName}>
            </div>
        `
    };
}

/***/ }),

/***/ "./src/asset/aboreto.ttf":
/*!*******************************!*\
  !*** ./src/asset/aboreto.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c5655d7b7541650e02d.ttf";

/***/ }),

/***/ "./src/asset/contactus.png":
/*!*********************************!*\
  !*** ./src/asset/contactus.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16d64816ed5b7eeddb88.png";

/***/ }),

/***/ "./src/asset/home.png":
/*!****************************!*\
  !*** ./src/asset/home.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4cfa69c936bf9e4f152.png";

/***/ }),

/***/ "./src/asset/inspiration.ttf":
/*!***********************************!*\
  !*** ./src/asset/inspiration.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62cd0b06540e461d7656.ttf";

/***/ }),

/***/ "./src/asset/kitchenknife.png":
/*!************************************!*\
  !*** ./src/asset/kitchenknife.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9761f2a79529683015c4.png";

/***/ }),

/***/ "./src/asset/menu.png":
/*!****************************!*\
  !*** ./src/asset/menu.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3897760173f699d9a97c.png";

/***/ }),

/***/ "./src/asset/reservation.png":
/*!***********************************!*\
  !*** ./src/asset/reservation.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7ab8ae01af2c770a916.png";

/***/ }),

/***/ "./src/asset/restaurant.png":
/*!**********************************!*\
  !*** ./src/asset/restaurant.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9fbe343cf45ae53da35.png";

/***/ }),

/***/ "./src/asset/staricon.svg":
/*!********************************!*\
  !*** ./src/asset/staricon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "466e2d90e36842c1363a.svg";

/***/ }),

/***/ "./src/restaurant_content/menu.json":
/*!******************************************!*\
  !*** ./src/restaurant_content/menu.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"appetizer":[{"name":"Red Dragon Sashimi","description":"made in the sizzling cold of alaska","price":"70.0"},{"name":"Bacon Burn Bites","description":"Cooked bacon to crisp","price":"140.0"},{"name":"Crab and Corn Hell Soup","description":"Yes, they can be cooked together nad it tastes great","price":"440.0"},{"name":"Mushroom ala Soupe","description":"Fresh mushroom forage from the backyard","price":"40.0"}],"steaks":[{"name":"Wagyu Beef","description":"Meat of the Gods. 8 oz","price":"240.0"},{"name":"Tenderloin Steak aka Filet Mignon","description":"Non voluptate nulla et in ex reprehenderit officia dolore ex occaecat amet. 12 oz","price":"240.0"},{"name":"Strip Steak","description":"Hanger Steak. 12 oz","price":"240.0"},{"name":"Porterhouse / T-Bone Steak","description":"Proident officia proident non adipisicing laboris velit. 24 oz","price":"240.0"},{"name":"Flank Steak","description":"Dolore occaecat officia nulla aute. 100 oz","price":"240.0"},{"name":"Skirt Steak","description":"Laborum non veniam anim aliquip consectetur commodo ut deserunt. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"}],"wine":[{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"}],"dessert":[{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"}]}');

/***/ }),

/***/ "./src/restaurant_content/webtext.json":
/*!*********************************************!*\
  !*** ./src/restaurant_content/webtext.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"restaurantHistory":"Laboris nostrud pariatur Lorem consequat mollit dolore tempor. Commodo cillum sit voluptate laboris do. Ea ipsum id sint qui. Et ullamco labore laboris anim proident cupidatat. Sunt aliquip Lorem quis dolore sunt do elit proident aliqua ut ea minim labore ipsum. Magna eiusmod in veniam velit eu. Nisi sint magna est dolor non quis voluptate Lorem anim. Laboris nostrud pariatur Lorem consequat mollit dolore tempor. Commodo cillum sit voluptate laboris do. Ea ipsum id sint qui. Et ullamco labore laboris anim proident cupidatat. Sunt aliquip Lorem quis dolore sunt do elit proident aliqua ut ea minim labore ipsum. Magna eiusmod in veniam velit eu. Nisi sint magna est dolor non quis voluptate Lorem anim.","manifestation":"Eu do nulla amet reprehenderit veniam amet. Cillum pariatur cillum fugiat quis anim do dolore ad consectetur nisi magna id commodo excepteur. Amet laboris culpa sunt id ipsum aliquip anim nostrud minim sunt. Labore sunt magna veniam sit nulla nulla. u do nulla amet reprehenderit veniam amet. Cillum pariatur cillum fugiat quis anim do dolore ad consectetur nisi magna id commodo excepteur. Amet laboris culpa sunt id ipsum aliquip anim nostrud minim sunt. Labore sunt magna veniam sit nulla nulla. u do nulla amet reprehenderit veniam amet. Cillum pariatur cillum fugiat quis anim do dolore ad consectetur nisi magna id commodo excepteur. Amet laboris culpa sunt id ipsum aliquip anim nostrud minim sunt. Labore sunt magna veniam sit nulla nulla.","reviews":[{"name":"BozzFed","comment":"Lorem ipsum ask holers Cillum eiusmod mollit duis quis sunt in magna ut officia duis minim qui dolor qui.","score":4},{"name":"Houston Times","comment":"Est quis et quis aute excepteur velit aute cillum commodo ipsum. Dolor nostrud labore adipisicing eiusmod duis veniam veniam. dolor.","score":5},{"name":"Meatery","comment":"Proident eiusmod eiusmod est deserunt officia. Ea laboris eu qui laboris sit eiusmod id dolore pariatur.","score":5}],"footerNotes":["Nisi enim ex ipsum id Magna ad sint irure minim elit culpa asalsal buto sarap salsal pa heje iyot na..","Nisi enim ex Eu proident excepteur commodo aliqua eu enim veniam veniam magna sunt esse nostrud labore.","aliqua eu enim veniam veniam magna sunt esse nostrud labore.","Irure adipisicing cillum dolor quis non incididunt laborum velit nulla esse.","developed by Bryan Mina 2022"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ "./src/menupage.js");
/* harmony import */ var _reservationpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservationpage */ "./src/reservationpage.js");
/* harmony import */ var _contactuspage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactuspage */ "./src/contactuspage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







let currentPage = null;

webStartUp();

function switchPages(event) {
    const inputValue = parseInt(event.target.getAttribute("data-id"));
    
    if (currentPage === inputValue) return;

    navIconUpdater(event);
    
    const mainContent = document.querySelector(".main-content");

    switch (inputValue) {
        //home
        case 0:
            mainContent.innerHTML = (0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();
            currentPage = 0;
            break;
        //reservation
        case 1:
            currentPage = 1;
            mainContent.innerHTML = (0,_reservationpage__WEBPACK_IMPORTED_MODULE_3__["default"])();
            break;
        //menu
        case 2:
            mainContent.innerHTML = (0,_menupage__WEBPACK_IMPORTED_MODULE_2__["default"])();
            currentPage = 2;
            break;
        //contact us
        case 3:
            mainContent.innerHTML = (0,_contactuspage__WEBPACK_IMPORTED_MODULE_4__["default"])();
            currentPage = 3;
            break;
    }

    function navIconUpdater() {
        const buttons = document.querySelectorAll(".nav-single-container");
        buttons.forEach(button => {
            button.setAttribute("id", "nav-button--unselected");
        })
        event.target.setAttribute("id", "nav-button--selected");
    }
}

function webStartUp(){
    document.querySelector("#content").innerHTML = (0,_app__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = (0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
    const buttons = document.querySelectorAll(".nav-single-container");
    buttons.forEach(button => button.addEventListener("click", switchPages));

    buttons.forEach(button => {
        if(button.getAttribute("data-id") == 0){
            button.setAttribute("id", "nav-button--selected");
        }
    })
}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtB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QUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMERBQWtCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnREFBWTtBQUMvRDtBQUNBLDRCQUE0QixxREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2NvbnRhY3R1c3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvcmVzZXJ2YXRpb25wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L2Fib3JldG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9pbnNwaXJhdGlvbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpblRpdGxlXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogODUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1haW5UaXRsZVxcXCI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zdWItdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHJnYigyMDgsIDIwOCwgMjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpc3RvcnktY29udGFpbmVyLFxcclxcbi5tYW5pZmVzdC1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmtuaWZlLWltZyB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oaXN0b3J5LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlJlc3RhdXJhbnQgSGlzdG9yeTogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hbmlmZXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlNlcnZpY2UgQ29tbWl0bWVudDogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWIENvbnRhaW5lciovXFxyXFxuLm5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zaW5nbGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS1zZWxlY3RlZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS11bnNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSg1MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaWNvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCovXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDIxLjUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFJFVklFVyBDb250YWluZXIgKi9cXHJcXG4ucmV2aWV3cy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3LW5hbWUge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXJldmlldy1jb250YWluZXIgcCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGhlaWdodDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDIxMywgMjEzLCAyMTMpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuLmZvb3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3QtY29udGFpbmVyPioge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zdWItY29udGFpbmVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1tZW51LXRpdGxlLWNvbnRhaW5lcnMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW51bWJlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNilcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV90b3Atc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDAuNXB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1wcmljZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9ib3R0b20tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2VydmF0aW9uICovXFxyXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNTIwcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2xlZnQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUge1xcclxcbiAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2d1ZXN0LWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90aW1lLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90ZWwtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2VtYWlsLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3RpbWUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNDAsIDExNSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9kaXNjbGFpbWVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM3LCAxMzcsIDEzNyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QgVXMqL1xcclxcbi5jb250YWN0dXMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAzNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIgKiB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3NpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGdyYXk7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19zdWJzY3JpYmUtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBzYWxtb247XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJEQUE4QztJQUM5QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkRBQWtEO0lBQ2xELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFD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O0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuL2Fzc2V0L2Fib3JldG8udHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpblRpdGxlXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvaW5zcGlyYXRpb24udHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA4NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpblRpdGxlXFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDkwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIwOCwgMjA4LCAyMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1jb250YWluZXIsXFxyXFxuLm1hbmlmZXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ua25pZmUtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogNDgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhpc3RvcnktY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiUmVzdGF1cmFudCBIaXN0b3J5OiBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuaWZlc3QtY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiU2VydmljZSBDb21taXRtZW50OiBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOQVYgQ29udGFpbmVyKi9cXHJcXG4ubmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXNpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXVuc2VsZWN0ZWQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDUwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pY29ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBDb250ZW50Ki9cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgzMHB4O1xcclxcbiAgICBtYXJnaW46IDAgMjEuNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUkVWSUVXIENvbnRhaW5lciAqL1xcclxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1yZXZpZXctY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xcclxcbiAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXctbmFtZSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpbmdsZS1yZXZpZXctY29udGFpbmVyPioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjEzLCAyMTMsIDIxMyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBvcGVuLXF1b3RlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zdGFyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG4uZm9vdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdC1jb250YWluZXI+KiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1FTlUgKi9cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOTlweCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXN1Yi1jb250YWluZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLW1lbnUtdGl0bGUtY29udGFpbmVycyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1udW1iZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIi5cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X3RvcC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYm90dG9tLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMC41cHggcmdiKDE2MCwgMTYwLCAxNjApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9pdGVtLXByaWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiJFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzZXJ2YXRpb24gKi9cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MjBweDs7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1jb250YWluZXI+KiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fbGVmdC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fbmFtZSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2ltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fbmFtZS1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX3RpbWUtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX3RlbC1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fZW1haWwtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9ndWVzdC1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fdGltZS1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE0MCwgMTE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2Rpc2NsYWltZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY29sb3I6IHJnYigxMzcsIDEzNywgMTM3KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBVcyovXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDM3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzLWNvbnRhaW5lciAqIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfc2luZ2xlLWNvbnRhaW5lciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgZ3JheTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19sb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3N1YnNjcmliZS1idXR0b24ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHNhbG1vbjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG5cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHJcblxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcblxyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuXHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcclxuICBpZiAoIW9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIGlmICghdXJsKSB7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cclxuXHJcbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XHJcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xyXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcclxuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cclxuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xyXG5cclxuXHJcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xyXG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXJsO1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcblxyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuXHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuXHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcblxyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcblxyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG5cclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuXHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG5cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG5cclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgY3NzICs9IG9iai5jc3M7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9IC8vIEZvciBvbGQgSUVcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG5cclxuXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGhvbWVJbWcgZnJvbSBcIi4vYXNzZXQvaG9tZS5wbmdcIjtcclxuaW1wb3J0IHJlc2VydmF0aW9uSW1nIGZyb20gXCIuL2Fzc2V0L3Jlc2VydmF0aW9uLnBuZ1wiO1xyXG5pbXBvcnQgbWVudUltZyBmcm9tIFwiLi9hc3NldC9tZW51LnBuZ1wiO1xyXG5pbXBvcnQgY29udGFjdHVzSW1nIGZyb20gXCIuL2Fzc2V0L2NvbnRhY3R1cy5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcENvbXBvbmVudCgpe1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAke3RpdGxlQ29tcG9uZW50KFwiWXZlcyBJYnlhbmdcIiwgXCJWRUdFVEFSSUFOIFNURUFLIEhPVVNFXCIpfVxyXG4gICAgICAgICR7Z2VuZXJhdGVOYXZDb250YWluZXIoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdGl0bGVDb21wb25lbnQocGFnZVRpdGxlLCBwYWdlU3ViVGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3MgPSBcIm1haW4tdGl0bGVcIj4ke3BhZ2VUaXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3MgPSBcInN1Yi10aXRsZVwiPiR7cGFnZVN1YlRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVOYXZDb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgJHtjcmVhdGVUYWJCdXR0b24oXCJIb21lXCIsIGhvbWVJbWcsIFwiMFwiKX1cclxuICAgICAgICAgICAgICAgICR7Y3JlYXRlVGFiQnV0dG9uKFwiUmVzZXJ2YXRpb25cIiwgcmVzZXJ2YXRpb25JbWcsIFwiMVwiKX1cclxuICAgICAgICAgICAgICAgICR7Y3JlYXRlVGFiQnV0dG9uKFwiTWVudVwiLCBtZW51SW1nLCBcIjJcIil9XHJcbiAgICAgICAgICAgICAgICAke2NyZWF0ZVRhYkJ1dHRvbihcIkNvbnRhY3QgVXNcIiwgY29udGFjdHVzSW1nLCBcIjNcIil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJCdXR0b24odGV4dCwgaWNvbkltYWdlLCBkYXRhQXR0cmlidXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2LXNpbmdsZS1jb250YWluZXJcIiBpZCA9IFwibmF2LWJ1dHRvbi0tdW5zZWxlY3RlZFwiIGRhdGEtaWQgPSAke2RhdGFBdHRyaWJ1dGV9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPSAke2ljb25JbWFnZX0gY2xhc3MgPSBcIm5hdi1pY29uc1wiIGFsdCA9IFwibmF2IGljb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYXYtdGV4dFwiPiR7dGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RVc0NvbXBvbmVudCgpe1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250YWN0dXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICR7Z2VuZXJhdGVBZGRyZXNzQ29udGV4dChcIll2ZXMgUmVzdG8gTmV3IFlvcmsgQ2l0eVwiLCBcIjIyOTkgV2VzdCBBbGJlcnQsIE5ldyBZb3JrIENpdHksIDIyMDkyXCIsIFwiKDIxMikgMjM0IDQ0MjFcIiwgXCJ5dmVzaWJ5YW5nQHJlc3RvcmFudC5pbmdub3JlXCIpIH1cclxuICAgICAgICAgICAgJHtnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KFwiWXZlcyBSZXN0byBTaWduYXBvcmVcIiwgXCI0Mjk5IE9rYXRva2F0LCBTaW5nYXBvcmUgQ2l0eSwgMjIwOTJcIiwgXCIoMjIyMikgMjM0IDQ0MjFcIiwgXCJ5dmVzaWJ5YW5nc2luZ2Fwb3JlQHJlc3RvcmFudC5pbmdub3JlXCIpIH1cclxuICAgICAgICAgICAgJHtnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KFwiWXZlcyBSZXN0byBQaGlsbGlwaW5lc1wiLCBcIjM5OSBPa2F0b2thdCwgUml6YWwgQ2l0eSwgMjIxNFwiLCBcIig5MzIpIDIzNCA0NDIxXCIsIFwieXZlc2lieWFuZ3BoaWxpcHBpbmVzQHJlc3RvcmFudC5pbmdub3JlXCIpIH1cclxuICAgICAgICAgICAgJHtnZW5lcmF0ZVN1YnNjcmliZUlucHV0KCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQWRkcmVzc0NvbnRleHQodGl0bGUsIGFkZHJlc3MsIG51bWJlciwgZW1haWwpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3R1c19zaW5nbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3R1c190aXRsZVwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3R1c19sb2NhdGlvblwiPiR7YWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGFjdHVzX3RlbFwiPiR7bnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250YWN0dXNfZW1haWxcIj4ke2VtYWlsfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVN1YnNjcmliZUlucHV0KCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGFjdHVzX3N1YnNjcmliZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGFjdHVzX3N1YnNjcmliZXItbmFtZVwiPlN1YnNjcmliZSBmb3IgbmV3cyBhbmQgcHJvbW9zLjwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImNvbnRhY3R1c19zdWJzY3JpYmUtaW5wdXRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJjb250YWN0dXNfc3Vic2NyaWJlLWJ1dHRvblwiPnN1YnNjcmliZTwvYnV0dG9uPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBzdGFydEljb24gZnJvbSBcIi4vYXNzZXQvc3Rhcmljb24uc3ZnXCI7XHJcbmltcG9ydCBrbmlmZUltYWdlIGZyb20gXCIuL2Fzc2V0L2tpdGNoZW5rbmlmZS5wbmdcIjtcclxuaW1wb3J0IHdlYlRleHQgZnJvbSBcIi4vcmVzdGF1cmFudF9jb250ZW50L3dlYnRleHQuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpe1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJoaXN0b3J5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgJHt3ZWJUZXh0LnJlc3RhdXJhbnRIaXN0b3J5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwia25pZmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJrbmlmZS1pbWdcIiBzcmMgPSAke2tuaWZlSW1hZ2V9IGFsdCA9IFwia25pZmUgYmFja2dyb3VuZCBwaG90b1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibWFuaWZlc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAke3dlYlRleHQubWFuaWZlc3RhdGlvbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgJHtyZXZpZXdzQ29tcG9uZW50KCl9XHJcbiAgICAgICAgJHtmb290ZXJDb21wb25lbnQoKX1cclxuICAgIGA7XHJcblxyXG4gICAgZnVuY3Rpb24gcmV2aWV3c0NvbXBvbmVudCgpe1xyXG4gICAgICAgIGxldCB0ZW1wVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgd2ViVGV4dC5yZXZpZXdzLmZvckVhY2gocmV2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGVtcFRleHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInNpbmdsZS1yZXZpZXctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcyA9IFwicmV2aWV3LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmV2aWV3Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXZpZXcuY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic2NvcmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2dlbmVyYXRlU3RhcihyZXZpZXcuc2NvcmUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVN0YXIoc2NvcmUpe1xyXG4gICAgICAgICAgICBsZXQgdGVtcFN0ciA9IFwiXCJcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNjb3JlOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdHIrPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJHtzdGFydEljb259IGNsYXNzPVwic3Rhci1pY29uXCIgYWx0ID0gXCJyZXZpZXcgc3RhcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyZXZpZXdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgJHt0ZW1wVGV4dH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb290ZXJDb21wb25lbnQoKXtcclxuICAgICAgICBsZXQgdGVtcFN0ciA9IFwiXCI7XHJcbiAgICAgICAgd2ViVGV4dC5mb290ZXJOb3Rlcy5mb3JFYWNoKHBhcmFnID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlbXBTdHIgKz0gYDxwPiR7cGFyYWd9PC9wPmBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZm9vdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICR7dGVtcFN0cn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBtZW51IGZyb20gXCIuL3Jlc3RhdXJhbnRfY29udGVudC9tZW51Lmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb21wb25lbnQoKXtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgJHtnZW5lcmF0ZU1lbnVDb2xsZWN0aW9uKG1lbnUpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWVudUNvbGxlY3Rpb24ocHJvcCl7XHJcbiAgICAgICAgbGV0IHRlbXBTdHJNYWluID0gXCJcIjtcclxuICAgICAgICBsZXQgaXRlbUNvdW50ZXIgPSAxO1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qgc3ViTWVudSBpbiBwcm9wKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIik7XHJcbiAgICAgICAgICAgIHRlbXBTdHJNYWluICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibWVudS1zdWItY29udGFpbmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwic3ViLW1lbnUtdGl0bGUtY29udGFpbmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7c3ViTWVudX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgJHtnZW5lcmF0ZUxpc3RPZkl0ZW1zKHByb3AsIHN1Yk1lbnUpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXBTdHJNYWluO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUxpc3RPZkl0ZW1zKHByb3AsIHByb3BOYW1lKXtcclxuICAgICAgICAgICAgbGV0IHRlbXBTdHIgPSBcIlwiO1xyXG4gICAgICAgICAgICBwcm9wW3Byb3BOYW1lXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGVtcFN0ciArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibWVudS1pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJtZW51X3RvcC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3MgPSBcIm1lbnUtbnVtYmVyXCI+JHtpdGVtQ291bnRlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibWVudS1pdGVtLW5hbWVcIj4ke2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnVfYm90dG9tLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnVfaXRlbS1kZXNjcmlwdGlvblwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnVfaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpdGVtQ291bnRlcisrO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBTdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHJlc3RhdXJhbnRJbWcgZnJvbSBcIi4vYXNzZXQvcmVzdGF1cmFudC5wbmdcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzZXJ2YXRpb25Db21wb25lbnQoKXtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicmVzZXJ2YXRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJlc2VydmF0aW9uX2xlZnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgJHtnZW5lcmF0ZUlucHV0Q29udGFpbmVyKFwiTmFtZTpcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwidGV4dFwiLCBcInJlc2VydmF0aW9uX25hbWUtaW5wdXRcIil9XHJcbiAgICAgICAgICAgICAgICAke2dlbmVyYXRlSW5wdXRDb250YWluZXIoXCJOdW1iZXIgb2YgZ3Vlc3RzOlwiLCBcInJlc2VydmF0aW9uX25hbWVcIiwgXCJ0ZXh0XCIsIFwicmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXRcIikgfVxyXG4gICAgICAgICAgICAgICAgJHtnZW5lcmF0ZUlucHV0Q29udGFpbmVyKFwiVGltZTpcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwic2VsZWN0XCIsIFwicmVzZXJ2YXRpb25fdGltZS1pbnB1dFwiKX1cclxuICAgICAgICAgICAgICAgICR7Z2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIlBob25lIG51bWJlcjpcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwidGVsXCIsIFwicmVzZXJ2YXRpb25fdGVsLWlucHV0XCIpfVxyXG4gICAgICAgICAgICAgICAgJHtnZW5lcmF0ZUlucHV0Q29udGFpbmVyKFwiRW1haWxcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwiZW1haWxcIiwgXCJyZXNlcnZhdGlvbl9lbWFpbC1pbnB1dFwiKX1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcInJlc2VydmF0aW9uX3N1Ym1pdC1idXR0b25cIiB0eXBlID0gXCJzdWJtaXRcIj5TVUJNSVQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyZXNlcnZhdGlvbl9kaXNjbGFpbWVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7YWRkRGlzY2xhaW1lcihcIkN1bHBhIHByb2lkZW50IGNvbnNlY3RldHVyIG9mZmljaWEgb2ZmaWNpYSBtaW5pbSBub3N0cnVkIGV1LlwiKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHthZGREaXNjbGFpbWVyKFwiUXVpIGV0IGFkIHZvbHVwdGF0ZSBleCBxdWkgb2NjYWVjYXQgYXV0ZSB2ZW5pYW0gbGFib3JpcyBkb2xvciByZXByZWhlbmRlcml0LlwiKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHthZGREaXNjbGFpbWVyKFwiQ29uc2VxdWF0IGR1aXMgYWQgZHVpcyBtaW5pbSBsYWJvcmUgbnVsbGEgdXQgZXguXCIpIH1cclxuICAgICAgICAgICAgICAgICAgICAke2FkZERpc2NsYWltZXIoXCJMYWJvcnVtIGFuaW0gZXN0IHN1bnQgbm9zdHJ1ZCBlc3NlIGRlc2VydW50IGN1cGlkYXRhdCB2b2x1cHRhdGUgZHVpcyBmdWdpYXQgbmlzaSBjb25zZWN0ZXR1ciBjdWxwYS5cIikgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicmVzZXJ2YXRpb25fcmlnaHQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPSAke3Jlc3RhdXJhbnRJbWd9IGNsYXNzID0gXCJyZXNlcnZhdGlvbl9pbWdcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRGlzY2xhaW1lcihzdHIpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwicmVzZXJ2YXRpb25fZGlzY2xhaW1lci10ZXh0XCI+JHtzdHJ9PC9wPlxyXG4gICAgICAgIGA7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSW5wdXRDb250YWluZXIodGl0bGUsIHRpdGxlQ2xhc3NOYW1lLCBpbnB1dFR5cGUsIGlucHV0Q2xhc3NOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicmVzZXJ2YXRpb25faW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9ICR7dGl0bGVDbGFzc05hbWV9PiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSAke2lucHV0VHlwZX0gY2xhc3MgPSAke2lucHV0Q2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgIGFwcENvbXBvbmVudCAgZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCAgaG9tZUNvbXBvbmVudCAgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vbWVudXBhZ2VcIjtcclxuaW1wb3J0IHJlc2VydmF0aW9uQ29tcG9uZW50ICBmcm9tIFwiLi9yZXNlcnZhdGlvbnBhZ2VcIjtcclxuaW1wb3J0ICBjb250YWN0VXNDb21wb25lbnQgIGZyb20gXCIuL2NvbnRhY3R1c3BhZ2VcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5sZXQgY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cclxud2ViU3RhcnRVcCgpO1xyXG5cclxuZnVuY3Rpb24gc3dpdGNoUGFnZXMoZXZlbnQpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XHJcbiAgICBcclxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gaW5wdXRWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIG5hdkljb25VcGRhdGVyKGV2ZW50KTtcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbiAgICBzd2l0Y2ggKGlucHV0VmFsdWUpIHtcclxuICAgICAgICAvL2hvbWVcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IGhvbWVDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvL3Jlc2VydmF0aW9uXHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IHJlc2VydmF0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vbWVudVxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gbWVudUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vY29udGFjdCB1c1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gY29udGFjdFVzQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmF2SWNvblVwZGF0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LXNpbmdsZS1jb250YWluZXJcIik7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1idXR0b24tLXVuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYnV0dG9uLS1zZWxlY3RlZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd2ViU3RhcnRVcCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmlubmVySFRNTCA9IGFwcENvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IGhvbWVDb21wb25lbnQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LXNpbmdsZS1jb250YWluZXJcIik7XHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoUGFnZXMpKTtcclxuXHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBpZihidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSA9PSAwKXtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWJ1dHRvbi0tc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9