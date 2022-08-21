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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"subTitle\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"mainTitle\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n    min-height: 850px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    min-height: 100vh;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"mainTitle\";\r\n    text-align: center;\r\n    font-size: 90px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    font-family: \"subTitle\";\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n    height: 100%;\r\n}\r\n\r\n.knife-img {\r\n    width: 80px;\r\n    height: 480px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    font-family: \"subTitle\";\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(50%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    width: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    pointer-events: none;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    height: 830px;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n    height: 170px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.review-name {\r\n    letter-spacing: 1.4px;\r\n}\r\n\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    min-height: 90px;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n    min-height: 520px;;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n    min-height: 520px;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    min-height: 375px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"subTitle\";\r\n    src: url(\"./asset/aboreto.ttf\") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"mainTitle\";\r\n    src: url(\"./asset/inspiration.ttf\") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n    min-height: 850px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    min-height: 100vh;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"mainTitle\";\r\n    text-align: center;\r\n    font-size: 90px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    font-family: \"subTitle\";\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n    height: 100%;\r\n}\r\n\r\n.knife-img {\r\n    width: 80px;\r\n    height: 480px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    font-family: \"subTitle\";\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(50%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    width: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    pointer-events: none;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    height: 830px;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n    height: 170px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.review-name {\r\n    letter-spacing: 1.4px;\r\n}\r\n\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    min-height: 90px;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n    min-height: 520px;;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n    min-height: 520px;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    min-height: 375px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtB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QUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMERBQWtCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnREFBWTtBQUMvRDtBQUNBLDRCQUE0QixxREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2NvbnRhY3R1c3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvcmVzZXJ2YXRpb25wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L2Fib3JldG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9pbnNwaXJhdGlvbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpblRpdGxlXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogODUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1haW5UaXRsZVxcXCI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zdWItdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHJnYigyMDgsIDIwOCwgMjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpc3RvcnktY29udGFpbmVyLFxcclxcbi5tYW5pZmVzdC1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmtuaWZlLWltZyB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oaXN0b3J5LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlJlc3RhdXJhbnQgSGlzdG9yeTogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hbmlmZXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlNlcnZpY2UgQ29tbWl0bWVudDogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWIENvbnRhaW5lciovXFxyXFxuLm5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zaW5nbGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS1zZWxlY3RlZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS11bnNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSg1MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaWNvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCovXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFJFVklFVyBDb250YWluZXIgKi9cXHJcXG4ucmV2aWV3cy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3LW5hbWUge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXJldmlldy1jb250YWluZXIgcCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGhlaWdodDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDIxMywgMjEzLCAyMTMpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuLmZvb3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3QtY29udGFpbmVyPioge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zdWItY29udGFpbmVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1tZW51LXRpdGxlLWNvbnRhaW5lcnMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW51bWJlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNilcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV90b3Atc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDAuNXB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1wcmljZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9ib3R0b20tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2VydmF0aW9uICovXFxyXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNTIwcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2xlZnQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUge1xcclxcbiAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2d1ZXN0LWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90aW1lLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90ZWwtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2VtYWlsLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3RpbWUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNDAsIDExNSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9kaXNjbGFpbWVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM3LCAxMzcsIDEzNyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QgVXMqL1xcclxcbi5jb250YWN0dXMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAzNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIgKiB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3NpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGdyYXk7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19zdWJzY3JpYmUtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBzYWxtb247XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJEQUE4QztJQUM5QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkRBQWtEO0lBQ2xELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIs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LGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9hc3NldC9hYm9yZXRvLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1haW5UaXRsZVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuL2Fzc2V0L2luc3BpcmF0aW9uLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogODUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1haW5UaXRsZVxcXCI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zdWItdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHJnYigyMDgsIDIwOCwgMjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpc3RvcnktY29udGFpbmVyLFxcclxcbi5tYW5pZmVzdC1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmtuaWZlLWltZyB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oaXN0b3J5LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlJlc3RhdXJhbnQgSGlzdG9yeTogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hbmlmZXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlNlcnZpY2UgQ29tbWl0bWVudDogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWIENvbnRhaW5lciovXFxyXFxuLm5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zaW5nbGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS1zZWxlY3RlZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS11bnNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSg1MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaWNvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCovXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFJFVklFVyBDb250YWluZXIgKi9cXHJcXG4ucmV2aWV3cy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3LW5hbWUge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXJldmlldy1jb250YWluZXIgcCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGhlaWdodDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDIxMywgMjEzLCAyMTMpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuLmZvb3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3QtY29udGFpbmVyPioge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzk5cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zdWItY29udGFpbmVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1tZW51LXRpdGxlLWNvbnRhaW5lcnMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW51bWJlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNilcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV90b3Atc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDAuNXB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1wcmljZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9ib3R0b20tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2VydmF0aW9uICovXFxyXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNTIwcHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2xlZnQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUge1xcclxcbiAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2d1ZXN0LWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90aW1lLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90ZWwtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2VtYWlsLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3RpbWUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNDAsIDExNSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9kaXNjbGFpbWVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM3LCAxMzcsIDEzNyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QgVXMqL1xcclxcbi5jb250YWN0dXMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAzNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIgKiB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3NpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGdyYXk7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19zdWJzY3JpYmUtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBzYWxtb247XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcblxyXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuXHJcblxyXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcclxuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG5cclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBob21lSW1nIGZyb20gXCIuL2Fzc2V0L2hvbWUucG5nXCI7XHJcbmltcG9ydCByZXNlcnZhdGlvbkltZyBmcm9tIFwiLi9hc3NldC9yZXNlcnZhdGlvbi5wbmdcIjtcclxuaW1wb3J0IG1lbnVJbWcgZnJvbSBcIi4vYXNzZXQvbWVudS5wbmdcIjtcclxuaW1wb3J0IGNvbnRhY3R1c0ltZyBmcm9tIFwiLi9hc3NldC9jb250YWN0dXMucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBDb21wb25lbnQoKXtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgJHt0aXRsZUNvbXBvbmVudChcIll2ZXMgSWJ5YW5nXCIsIFwiVkVHRVRBUklBTiBTVEVBSyBIT1VTRVwiKX1cclxuICAgICAgICAke2dlbmVyYXRlTmF2Q29udGFpbmVyKCl9XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHRpdGxlQ29tcG9uZW50KHBhZ2VUaXRsZSwgcGFnZVN1YlRpdGxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJtYWluLXRpdGxlXCI+JHtwYWdlVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJzdWItdGl0bGVcIj4ke3BhZ2VTdWJUaXRsZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTmF2Q29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICR7Y3JlYXRlVGFiQnV0dG9uKFwiSG9tZVwiLCBob21lSW1nLCBcIjBcIil9XHJcbiAgICAgICAgICAgICAgICAke2NyZWF0ZVRhYkJ1dHRvbihcIlJlc2VydmF0aW9uXCIsIHJlc2VydmF0aW9uSW1nLCBcIjFcIil9XHJcbiAgICAgICAgICAgICAgICAke2NyZWF0ZVRhYkJ1dHRvbihcIk1lbnVcIiwgbWVudUltZywgXCIyXCIpfVxyXG4gICAgICAgICAgICAgICAgJHtjcmVhdGVUYWJCdXR0b24oXCJDb250YWN0IFVzXCIsIGNvbnRhY3R1c0ltZywgXCIzXCIpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFiQnV0dG9uKHRleHQsIGljb25JbWFnZSwgZGF0YUF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm5hdi1zaW5nbGUtY29udGFpbmVyXCIgaWQgPSBcIm5hdi1idXR0b24tLXVuc2VsZWN0ZWRcIiBkYXRhLWlkID0gJHtkYXRhQXR0cmlidXRlfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJHtpY29uSW1hZ2V9IGNsYXNzID0gXCJuYXYtaWNvbnNcIiBhbHQgPSBcIm5hdiBpY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2LXRleHRcIj4ke3RleHR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0VXNDb21wb25lbnQoKXtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGFjdHVzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAke2dlbmVyYXRlQWRkcmVzc0NvbnRleHQoXCJZdmVzIFJlc3RvIE5ldyBZb3JrIENpdHlcIiwgXCIyMjk5IFdlc3QgQWxiZXJ0LCBOZXcgWW9yayBDaXR5LCAyMjA5MlwiLCBcIigyMTIpIDIzNCA0NDIxXCIsIFwieXZlc2lieWFuZ0ByZXN0b3JhbnQuaW5nbm9yZVwiKSB9XHJcbiAgICAgICAgICAgICR7Z2VuZXJhdGVBZGRyZXNzQ29udGV4dChcIll2ZXMgUmVzdG8gU2lnbmFwb3JlXCIsIFwiNDI5OSBPa2F0b2thdCwgU2luZ2Fwb3JlIENpdHksIDIyMDkyXCIsIFwiKDIyMjIpIDIzNCA0NDIxXCIsIFwieXZlc2lieWFuZ3NpbmdhcG9yZUByZXN0b3JhbnQuaW5nbm9yZVwiKSB9XHJcbiAgICAgICAgICAgICR7Z2VuZXJhdGVBZGRyZXNzQ29udGV4dChcIll2ZXMgUmVzdG8gUGhpbGxpcGluZXNcIiwgXCIzOTkgT2thdG9rYXQsIFJpemFsIENpdHksIDIyMTRcIiwgXCIoOTMyKSAyMzQgNDQyMVwiLCBcInl2ZXNpYnlhbmdwaGlsaXBwaW5lc0ByZXN0b3JhbnQuaW5nbm9yZVwiKSB9XHJcbiAgICAgICAgICAgICR7Z2VuZXJhdGVTdWJzY3JpYmVJbnB1dCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KHRpdGxlLCBhZGRyZXNzLCBudW1iZXIsIGVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250YWN0dXNfc2luZ2xlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250YWN0dXNfdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250YWN0dXNfbG9jYXRpb25cIj4ke2FkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3R1c190ZWxcIj4ke251bWJlcn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGFjdHVzX2VtYWlsXCI+JHtlbWFpbH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTdWJzY3JpYmVJbnB1dCgpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3R1c19zdWJzY3JpYmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRhY3R1c19zdWJzY3JpYmVyLW5hbWVcIj5TdWJzY3JpYmUgZm9yIG5ld3MgYW5kIHByb21vcy48L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJjb250YWN0dXNfc3Vic2NyaWJlLWlucHV0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiY29udGFjdHVzX3N1YnNjcmliZS1idXR0b25cIj5zdWJzY3JpYmU8L2J1dHRvbj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgc3RhcnRJY29uIGZyb20gXCIuL2Fzc2V0L3N0YXJpY29uLnN2Z1wiO1xyXG5pbXBvcnQga25pZmVJbWFnZSBmcm9tIFwiLi9hc3NldC9raXRjaGVua25pZmUucG5nXCI7XHJcbmltcG9ydCB3ZWJUZXh0IGZyb20gXCIuL3Jlc3RhdXJhbnRfY29udGVudC93ZWJ0ZXh0Lmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKXtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiaGlzdG9yeS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICR7d2ViVGV4dC5yZXN0YXVyYW50SGlzdG9yeX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImtuaWZlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwia25pZmUtaW1nXCIgc3JjID0gJHtrbmlmZUltYWdlfSBhbHQgPSBcImtuaWZlIGJhY2tncm91bmQgcGhvdG9cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1hbmlmZXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgJHt3ZWJUZXh0Lm1hbmlmZXN0YXRpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICR7cmV2aWV3c0NvbXBvbmVudCgpfVxyXG4gICAgICAgICR7Zm9vdGVyQ29tcG9uZW50KCl9XHJcbiAgICBgO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJldmlld3NDb21wb25lbnQoKXtcclxuICAgICAgICBsZXQgdGVtcFRleHQgPSBcIlwiO1xyXG4gICAgICAgIHdlYlRleHQucmV2aWV3cy5mb3JFYWNoKHJldmlldyA9PiB7XHJcbiAgICAgICAgICAgIHRlbXBUZXh0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJzaW5nbGUtcmV2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3MgPSBcInJldmlldy1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Jldmlldy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cmV2aWV3LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInNjb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtnZW5lcmF0ZVN0YXIocmV2aWV3LnNjb3JlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTdGFyKHNjb3JlKXtcclxuICAgICAgICAgICAgbGV0IHRlbXBTdHIgPSBcIlwiXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzY29yZTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wU3RyKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYyA9ICR7c3RhcnRJY29ufSBjbGFzcz1cInN0YXItaWNvblwiIGFsdCA9IFwicmV2aWV3IHN0YXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGVtcFN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicmV2aWV3cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICR7dGVtcFRleHR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCl7XHJcbiAgICAgICAgbGV0IHRlbXBTdHIgPSBcIlwiO1xyXG4gICAgICAgIHdlYlRleHQuZm9vdGVyTm90ZXMuZm9yRWFjaChwYXJhZyA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3RyICs9IGA8cD4ke3BhcmFnfTwvcD5gXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImZvb3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAke3RlbXBTdHJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgbWVudSBmcm9tIFwiLi9yZXN0YXVyYW50X2NvbnRlbnQvbWVudS5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCl7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICR7Z2VuZXJhdGVNZW51Q29sbGVjdGlvbihtZW51KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVDb2xsZWN0aW9uKHByb3Ape1xyXG4gICAgICAgIGxldCB0ZW1wU3RyTWFpbiA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGl0ZW1Db3VudGVyID0gMTtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IHN1Yk1lbnUgaW4gcHJvcCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICB0ZW1wU3RyTWFpbiArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnUtc3ViLWNvbnRhaW5lcnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInN1Yi1tZW51LXRpdGxlLWNvbnRhaW5lcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3N1Yk1lbnV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICR7Z2VuZXJhdGVMaXN0T2ZJdGVtcyhwcm9wLCBzdWJNZW51KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wU3RyTWFpbjtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVMaXN0T2ZJdGVtcyhwcm9wLCBwcm9wTmFtZSl7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wU3RyID0gXCJcIjtcclxuICAgICAgICAgICAgcHJvcFtwcm9wTmFtZV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRlbXBTdHIgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnUtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibWVudV90b3Atc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzID0gXCJtZW51LW51bWJlclwiPiR7aXRlbUNvdW50ZXJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm1lbnUtaXRlbS1uYW1lXCI+JHtpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJtZW51X2JvdHRvbS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJtZW51X2l0ZW0tZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJtZW51X2l0ZW0tcHJpY2VcIj4ke2l0ZW0ucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaXRlbUNvdW50ZXIrKztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wU3RyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCByZXN0YXVyYW50SW1nIGZyb20gXCIuL2Fzc2V0L3Jlc3RhdXJhbnQucG5nXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2VydmF0aW9uQ29tcG9uZW50KCl7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInJlc2VydmF0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyZXNlcnZhdGlvbl9sZWZ0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICR7Z2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIk5hbWU6XCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcInRleHRcIiwgXCJyZXNlcnZhdGlvbl9uYW1lLWlucHV0XCIpfVxyXG4gICAgICAgICAgICAgICAgJHtnZW5lcmF0ZUlucHV0Q29udGFpbmVyKFwiTnVtYmVyIG9mIGd1ZXN0czpcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwidGV4dFwiLCBcInJlc2VydmF0aW9uX2d1ZXN0LWlucHV0XCIpIH1cclxuICAgICAgICAgICAgICAgICR7Z2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIlRpbWU6XCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcInNlbGVjdFwiLCBcInJlc2VydmF0aW9uX3RpbWUtaW5wdXRcIil9XHJcbiAgICAgICAgICAgICAgICAke2dlbmVyYXRlSW5wdXRDb250YWluZXIoXCJQaG9uZSBudW1iZXI6XCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcInRlbFwiLCBcInJlc2VydmF0aW9uX3RlbC1pbnB1dFwiKX1cclxuICAgICAgICAgICAgICAgICR7Z2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIkVtYWlsXCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcImVtYWlsXCIsIFwicmVzZXJ2YXRpb25fZW1haWwtaW5wdXRcIil9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJyZXNlcnZhdGlvbl9zdWJtaXQtYnV0dG9uXCIgdHlwZSA9IFwic3VibWl0XCI+U1VCTUlUPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicmVzZXJ2YXRpb25fZGlzY2xhaW1lci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2FkZERpc2NsYWltZXIoXCJDdWxwYSBwcm9pZGVudCBjb25zZWN0ZXR1ciBvZmZpY2lhIG9mZmljaWEgbWluaW0gbm9zdHJ1ZCBldS5cIikgfVxyXG4gICAgICAgICAgICAgICAgICAgICR7YWRkRGlzY2xhaW1lcihcIlF1aSBldCBhZCB2b2x1cHRhdGUgZXggcXVpIG9jY2FlY2F0IGF1dGUgdmVuaWFtIGxhYm9yaXMgZG9sb3IgcmVwcmVoZW5kZXJpdC5cIikgfVxyXG4gICAgICAgICAgICAgICAgICAgICR7YWRkRGlzY2xhaW1lcihcIkNvbnNlcXVhdCBkdWlzIGFkIGR1aXMgbWluaW0gbGFib3JlIG51bGxhIHV0IGV4LlwiKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHthZGREaXNjbGFpbWVyKFwiTGFib3J1bSBhbmltIGVzdCBzdW50IG5vc3RydWQgZXNzZSBkZXNlcnVudCBjdXBpZGF0YXQgdm9sdXB0YXRlIGR1aXMgZnVnaWF0IG5pc2kgY29uc2VjdGV0dXIgY3VscGEuXCIpIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJlc2VydmF0aW9uX3JpZ2h0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID0gJHtyZXN0YXVyYW50SW1nfSBjbGFzcyA9IFwicmVzZXJ2YXRpb25faW1nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZERpc2NsYWltZXIoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcInJlc2VydmF0aW9uX2Rpc2NsYWltZXItdGV4dFwiPiR7c3RyfTwvcD5cclxuICAgICAgICBgO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUlucHV0Q29udGFpbmVyKHRpdGxlLCB0aXRsZUNsYXNzTmFtZSwgaW5wdXRUeXBlLCBpbnB1dENsYXNzTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJlc2VydmF0aW9uX2lucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSAke3RpdGxlQ2xhc3NOYW1lfT4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gJHtpbnB1dFR5cGV9IGNsYXNzID0gJHtpbnB1dENsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICBhcHBDb21wb25lbnQgIGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgIGhvbWVDb21wb25lbnQgIGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL21lbnVwYWdlXCI7XHJcbmltcG9ydCByZXNlcnZhdGlvbkNvbXBvbmVudCAgZnJvbSBcIi4vcmVzZXJ2YXRpb25wYWdlXCI7XHJcbmltcG9ydCAgY29udGFjdFVzQ29tcG9uZW50ICBmcm9tIFwiLi9jb250YWN0dXNwYWdlXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxubGV0IGN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHJcbndlYlN0YXJ0VXAoKTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFBhZ2VzKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IGlucHV0VmFsdWUpIHJldHVybjtcclxuXHJcbiAgICBuYXZJY29uVXBkYXRlcihldmVudCk7XHJcbiAgICBcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG4gICAgc3dpdGNoIChpbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgLy9ob21lXHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBob21lQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy9yZXNlcnZhdGlvblxyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSByZXNlcnZhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvL21lbnVcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IG1lbnVDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvL2NvbnRhY3QgdXNcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IGNvbnRhY3RVc0NvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5hdkljb25VcGRhdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zaW5nbGUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYnV0dG9uLS11bnNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWJ1dHRvbi0tc2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlYlN0YXJ0VXAoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5pbm5lckhUTUwgPSBhcHBDb21wb25lbnQoKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBob21lQ29tcG9uZW50KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zaW5nbGUtY29udGFpbmVyXCIpO1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFBhZ2VzKSk7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgaWYoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT0gMCl7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1idXR0b24tLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==