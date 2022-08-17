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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./aboreto-regular.ttf */ "./src/aboreto-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"titleFont\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"titleFont\";\r\n    text-align: center;\r\n    font-size: 70px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-style: italic;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n}\r\n\r\n.knife-img {\r\n    width: 35%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(30%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price {}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: \"titleFont\";\r\n    src: url(\"./aboreto-regular.ttf\") format(\"ttf\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"titleFont\";\r\n    text-align: center;\r\n    font-size: 70px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-style: italic;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n}\r\n\r\n.knife-img {\r\n    width: 35%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(30%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price {}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "appComponent": () => (/* binding */ appComponent)
/* harmony export */ });
/* harmony import */ var _home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.png */ "./src/home.png");
/* harmony import */ var _reservation_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.png */ "./src/reservation.png");
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.png */ "./src/menu.png");
/* harmony import */ var _contactus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus.png */ "./src/contactus.png");





function appComponent(){
    const contentContainer = document.querySelector("#content");
    //create title
    function generateTitleContainer() {
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");

        const title = document.createElement("h1");
        title.classList.add("main-title");
        title.textContent = "Yves Ibyang";

        const subTitle = document.createElement("h2");
        subTitle.classList.add("sub-title");
        subTitle.textContent = "Vegetarian Steak House"

        contentContainer.appendChild(titleContainer);
        titleContainer.appendChild(title);
        titleContainer.appendChild(subTitle);
    }

    //create nav bar
    function generateNavContainer() {
        const navContainer = document.createElement("div");
        navContainer.classList.add("nav-container");
        contentContainer.appendChild(navContainer);

        createTabButton("Home", _home_png__WEBPACK_IMPORTED_MODULE_0__, "0" );
        createTabButton("Reservation", _reservation_png__WEBPACK_IMPORTED_MODULE_1__, "1");
        createTabButton("Menu", _menu_png__WEBPACK_IMPORTED_MODULE_2__, "2");
        createTabButton("Contact Us", _contactus_png__WEBPACK_IMPORTED_MODULE_3__, "3");
    }

    function generateMainContainer(){
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("main-content");
        contentContainer.appendChild(mainContainer);
    }

    function createTabButton(text, iconImage, dataAttribute) {
        const icon = document.createElement("img");
        icon.src = iconImage;
        icon.classList.add("nav-icons");

        const title = document.createElement("div");
        title.textContent = text;
        title.classList.add("nav-text");

        const singleContainer = document.createElement("div");
        singleContainer.classList.add("nav-single-container");
        singleContainer.setAttribute("data-id", dataAttribute);
        singleContainer.setAttribute("id", "nav-button--unselected");
        singleContainer.appendChild(icon);
        singleContainer.appendChild(title);

        const navContainer = document.querySelector(".nav-container");
        navContainer.appendChild(singleContainer);
    }

    generateTitleContainer();
    generateNavContainer();
    generateMainContainer();
}



/***/ }),

/***/ "./src/contactuspage.js":
/*!******************************!*\
  !*** ./src/contactuspage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContactUsPage": () => (/* binding */ displayContactUsPage)
/* harmony export */ });

function generateAddressContext(nameraw, address, number, email){
    const container = document.createElement("div");
    container.classList.add("contactus_single-container");

    const name = document.createElement("div");
    name.classList.add("contactus_title");
    name.textContent = nameraw;

    const location = document.createElement("div");
    location.classList.add("contactus_location");
    location.textContent = address;

    const tel = document.createElement("div");
    tel.classList.add("contactus_tel");
    tel.textContent = number;

    const emailTx = document.createElement("div");
    emailTx.classList.add("contactus_email");
    emailTx.textContent = email;

    container.appendChild(name);
    container.appendChild(location);
    container.appendChild(tel);
    container.appendChild(emailTx);

    const contactUsContainer = document.querySelector(".contactus-container");
    contactUsContainer.appendChild(container);
}

function generateSubscribeInput(){
    const subscribeContainer = document.createElement("div");
    subscribeContainer.classList.add("contactus_subscribe-container");

    const title = document.createElement("div");
    title.classList.add("contactus_subscriber-name");
    title.textContent = "Subscribe for news and promos.";

    const textInput = document.createElement("input");
    textInput.classList.add("contactus_subscribe-input");

    subscribeContainer.appendChild(title);
    subscribeContainer.appendChild(textInput);

    const button = document.createElement("button");
    button.classList.add("contactus_subscribe-button");
    button.textContent = "subscribe";

    subscribeContainer.appendChild(button);


    const contactUsContainer = document.querySelector(".contactus-container");
    contactUsContainer.appendChild(subscribeContainer);
}

function displayContactUsPage(){
    const mainContainer = document.querySelector(".main-content");
    const contactUsContainer = document.createElement("div");
    contactUsContainer.classList.add("contactus-container");
    mainContainer.appendChild(contactUsContainer);

    generateAddressContext("Yves Resto New York City", "2299 West Albert, New York City, 22092", "(212) 234 4421", "yvesibyang@restorant.ingnore");
    generateAddressContext("Yves Resto Signapore", "4299 Okatokat, Singapore City, 22092", "(2222) 234 4421", "yvesibyangsingapore@restorant.ingnore");
    generateAddressContext("Yves Resto Phillipines", "399 Okatokat, Rizal City, 2214", "(932) 234 4421", "yvesibyangphilippines@restorant.ingnore");

    generateSubscribeInput();


}



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeComponent": () => (/* binding */ homeComponent)
/* harmony export */ });
/* harmony import */ var _staricon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staricon.svg */ "./src/staricon.svg");
/* harmony import */ var _kitchenknife_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kitchenknife.png */ "./src/kitchenknife.png");
/* harmony import */ var _webtext_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webtext.json */ "./src/webtext.json");




const homeComponent = (() => {
    function generateMainContainer(firstText = "Put history story here.", secondText = "Put paragraphs of history manifestation here.", knifeImage){
        const mainContent = document.querySelector(".main-content");

        const mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");

        const historyContainer = document.createElement("div");
        historyContainer.classList.add("history-container");
        historyContainer.textContent = firstText;

        const knifeContainer = document.createElement("div");
        knifeContainer.classList.add("knife-container");
        const knifeImg = document.createElement("img");
        knifeImg.src = knifeImage;
        knifeImg.classList.add("knife-img");
        knifeContainer.appendChild(knifeImg);

        const manifestContainer = document.createElement("div");
        manifestContainer.classList.add("manifest-container");
        manifestContainer.textContent = secondText;

        mainContent.appendChild(mainContainer);
        mainContainer.appendChild(historyContainer);
        mainContainer.appendChild(knifeContainer);
        mainContainer.appendChild(manifestContainer);
    }

    function generateReviewsContainer(){
        const mainContent = document.querySelector(".main-content");

        const reviewsContainer = document.createElement("div");
        reviewsContainer.classList.add("reviews-container");
        mainContent.appendChild(reviewsContainer);

        //for each reviews in JSON file, we add it to our review container
        _webtext_json__WEBPACK_IMPORTED_MODULE_2__.reviews.forEach(review => {
            const name = document.createElement("h3");
            name.textContent = review.name;

            const blockqoute = document.createElement("blockquote");
            const comment = document.createElement("p");
            blockqoute.appendChild(comment);
            comment.textContent = review.comment;
            const scoreContainer = document.createElement("div");

            scoreContainer.classList.add("score-container");
            for(let i = 0; i < review.score; i++){
                const icon = document.createElement("img");
                icon.classList.add("star-icon");
                icon.src = _staricon_svg__WEBPACK_IMPORTED_MODULE_0__;
                scoreContainer.appendChild(icon);
            }

            const singleReviewContainer = document.createElement("div");
            singleReviewContainer.classList.add("single-review-container");
            singleReviewContainer.appendChild(name);
            singleReviewContainer.appendChild(blockqoute);
            singleReviewContainer.appendChild(scoreContainer);

            reviewsContainer.appendChild(singleReviewContainer);
        })
    }

    function generateFootnote(){
        const mainContent = document.querySelector(".main-content");

        const footContainer = document.createElement("div");
        footContainer.classList.add("foot-container");
        mainContent.appendChild(footContainer);

        //for each notes in webtext.footernotes
            //create one p element for each single value in footerNotes array,
            //footContainer

        _webtext_json__WEBPACK_IMPORTED_MODULE_2__.footerNotes.forEach(note => {
            const text = document.createElement("p");
            text.textContent = note;
            footContainer.appendChild(text);
        })
    }

    function initialize(){
        generateMainContainer(_webtext_json__WEBPACK_IMPORTED_MODULE_2__.restaurantHistory, _webtext_json__WEBPACK_IMPORTED_MODULE_2__.manifestation, _kitchenknife_png__WEBPACK_IMPORTED_MODULE_1__);
        generateReviewsContainer();
        generateFootnote();
    }

    return { initialize };
})()



/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenuPage": () => (/* binding */ displayMenuPage)
/* harmony export */ });
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ "./src/menu.json");


function generateMenuContainer(){
    const mainContent = document.querySelector(".main-content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    mainContent.append(menuContainer);
}

function generateSubContainer(prop){

    let itemCounter = 1;

    for(const subMenu in prop){
        const container = document.createElement("div");
        container.classList.add("menu-sub-containers");

        const titleContainer = document.createElement("div");
        titleContainer.classList.add("sub-menu-title-containers");
        titleContainer.textContent = subMenu;
        container.appendChild(titleContainer);

        prop[subMenu].forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("menu-item-container");

            const topSection = document.createElement("div");
            topSection.classList.add("menu_top-section");

            const menuNumber = document.createElement("h3");
            menuNumber.classList.add("menu-number");
            menuNumber.textContent = itemCounter;
            itemCounter++;

            const itemName = document.createElement("div");
            itemName.classList.add("menu-item-name");
            itemName.textContent = item.name;

            topSection.appendChild(menuNumber);
            topSection.appendChild(itemName);

            const bottomSection = document.createElement("div");
            bottomSection.classList.add("menu_bottom-section");

            const itemDescription = document.createElement("div");
            itemDescription.classList.add("menu_item-description");
            itemDescription.textContent = item.description;

            const itemPrice = document.createElement("div");
            itemPrice.classList.add("menu_item-price");
            itemPrice.textContent = item.price;

            bottomSection.appendChild(itemDescription);
            bottomSection.appendChild(itemPrice);

            itemContainer.appendChild(topSection);
            itemContainer.appendChild(bottomSection);

            container.appendChild(itemContainer);
        })

        const parentContainer = document.querySelector(".menu-container");
        parentContainer.appendChild(container);
    }
}

function displayMenuPage(){
    generateMenuContainer();
    generateSubContainer(_menu_json__WEBPACK_IMPORTED_MODULE_0__);
}



/***/ }),

/***/ "./src/reservationpage.js":
/*!********************************!*\
  !*** ./src/reservationpage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayReservationPage": () => (/* binding */ displayReservationPage)
/* harmony export */ });
/* harmony import */ var _restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.png */ "./src/restaurant.png");


function generateReservationContainer(){
    const reservationContainer = document.createElement("div");
    reservationContainer.classList.add("reservation-container");

    const leftSection = document.createElement("div");
    leftSection.classList.add("reservation_left-section");

    const rightSection = document.createElement("div");
    rightSection.classList.add("reservation_right-section");

    reservationContainer.appendChild(leftSection);
    reservationContainer.appendChild(rightSection);

    const mainContainer = document.querySelector(".main-content");
    mainContainer.appendChild(reservationContainer);
}

function leftSectionComponent(){
    
    generateInputContainer("Name:", "reservation_name", "text", "reservation_name-input");
    generateInputContainer("Number of guests:", "reservation_name", "text", "reservation_guest-input");
    generateInputContainer("Time:", "reservation_name", "select", "reservation_time-input");
    generateInputContainer("Phone number:", "reservation_name", "tel", "reservation_tel-input");
    generateInputContainer("Email", "reservation_name", "email", "reservation_email-input");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("reservation_input-container");

    const submitButton = document.createElement("button");
    submitButton.classList.add("reservation_submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "SUBMIT";

    buttonContainer.appendChild(submitButton);

    const leftSectionContainer = document.querySelector(".reservation_left-section");
    leftSectionContainer.appendChild(buttonContainer);

    const disclaimerContainer = document.createElement("div");
    disclaimerContainer.classList.add("reservation_disclaimer-container");
    leftSectionContainer.appendChild(disclaimerContainer);

    addDisclaimer("Culpa proident consectetur officia officia minim nostrud eu.");
    addDisclaimer("Qui et ad voluptate ex qui occaecat aute veniam laboris dolor reprehenderit.");
    addDisclaimer("Consequat duis ad duis minim labore nulla ut ex.");
    addDisclaimer("Laborum anim est sunt nostrud esse deserunt cupidatat voluptate duis fugiat nisi consectetur culpa.");


    function addDisclaimer(str){
        const text = document.createElement("p");
        text.classList.add("reservation_disclaimer-text");
        text.textContent = str;

        const disclaimerContainer = document.querySelector(".reservation_disclaimer-container");
        disclaimerContainer.append(text);
    }


    function generateInputContainer(title, titleClassName, inputType, inputClassName ){
        const container = document.createElement("div");
        container.classList.add("reservation_input-container");
        const name = document.createElement("div");
        name.textContent = title;
        name.classList.add(titleClassName);

        const input = document.createElement("input");
        input.classList.add(inputClassName);
        input.setAttribute("type", inputType);

        container.appendChild(name);
        container.appendChild(input);
        
        const leftSectionCOntainer = document.querySelector(".reservation_left-section");
        leftSectionCOntainer.appendChild(container);
    }
}

function rightSectionComponent(){
    const rightSectionContainer = document.querySelector(".reservation_right-section");
    const img = document.createElement("img");
    img.classList.add("reservation_img");
    img.src = _restaurant_png__WEBPACK_IMPORTED_MODULE_0__;

    rightSectionContainer.appendChild(img);
}


function displayReservationPage(){
    generateReservationContainer();
    leftSectionComponent();
    rightSectionComponent();
}



/***/ }),

/***/ "./src/aboreto-regular.ttf":
/*!*********************************!*\
  !*** ./src/aboreto-regular.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c5655d7b7541650e02d.ttf";

/***/ }),

/***/ "./src/contactus.png":
/*!***************************!*\
  !*** ./src/contactus.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16d64816ed5b7eeddb88.png";

/***/ }),

/***/ "./src/home.png":
/*!**********************!*\
  !*** ./src/home.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4cfa69c936bf9e4f152.png";

/***/ }),

/***/ "./src/kitchenknife.png":
/*!******************************!*\
  !*** ./src/kitchenknife.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9761f2a79529683015c4.png";

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3897760173f699d9a97c.png";

/***/ }),

/***/ "./src/reservation.png":
/*!*****************************!*\
  !*** ./src/reservation.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7ab8ae01af2c770a916.png";

/***/ }),

/***/ "./src/restaurant.png":
/*!****************************!*\
  !*** ./src/restaurant.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9fbe343cf45ae53da35.png";

/***/ }),

/***/ "./src/staricon.svg":
/*!**************************!*\
  !*** ./src/staricon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "466e2d90e36842c1363a.svg";

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"appetizer":[{"name":"Red Dragon Sashimi","description":"made in the sizzling cold of alaska","price":"70.0"},{"name":"Bacon Burn Bites","description":"Cooked bacon to crisp","price":"140.0"},{"name":"Crab and Corn Hell Soup","description":"Yes, they can be cooked together nad it tastes great","price":"440.0"},{"name":"Mushroom ala Soupe","description":"Fresh mushroom forage from the backyard","price":"40.0"}],"steaks":[{"name":"Wagyu Beef","description":"Meat of the Gods. 8 oz","price":"240.0"},{"name":"Tenderloin Steak aka Filet Mignon","description":"Non voluptate nulla et in ex reprehenderit officia dolore ex occaecat amet. 12 oz","price":"240.0"},{"name":"Strip Steak","description":"Hanger Steak. 12 oz","price":"240.0"},{"name":"Porterhouse / T-Bone Steak","description":"Proident officia proident non adipisicing laboris velit. 24 oz","price":"240.0"},{"name":"Flank Steak","description":"Dolore occaecat officia nulla aute. 100 oz","price":"240.0"},{"name":"Skirt Steak","description":"Laborum non veniam anim aliquip consectetur commodo ut deserunt. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"}],"wine":[{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"}],"dessert":[{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"},{"name":"Short Rib","description":"Aute ea excepteur do Lorem irure nostrud aliqua voluptate cupidatat. 12 oz","price":"240.0"}]}');

/***/ }),

/***/ "./src/webtext.json":
/*!**************************!*\
  !*** ./src/webtext.json ***!
  \**************************/
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

function switchPages(input) {
    const inputValue = parseInt(input.target.getAttribute("data-id"));
    
    if (currentPage === inputValue) return;

    clearMainContent();
    navIconUpdater(inputValue);
    input.target.setAttribute("id", "nav-button--selected");

    switch (inputValue) {
        //home
        case 0:
            _homepage__WEBPACK_IMPORTED_MODULE_1__.homeComponent.initialize();
            currentPage = 0;
            break;
        //reservation
        case 1:
            currentPage = 1;
            (0,_reservationpage__WEBPACK_IMPORTED_MODULE_3__.displayReservationPage)();
            break;
        //menu
        case 2:
            (0,_menupage__WEBPACK_IMPORTED_MODULE_2__.displayMenuPage)();
            currentPage = 2;
            break;
        //contact us
        case 3:
            (0,_contactuspage__WEBPACK_IMPORTED_MODULE_4__.displayContactUsPage)();
            currentPage = 3;
            break;
    }

    function clearMainContent(){
        const mainContent = document.querySelector(".main-content");
        while(mainContent.firstChild){
            mainContent.removeChild(mainContent.firstChild);
        }
    }
}

function navIconUpdater(){
  const buttons = document.querySelectorAll(".nav-single-container");
  buttons.forEach(button => {
    button.setAttribute("id", "nav-button--unselected");
  })
}

function webStartUp(){
    (0,_app__WEBPACK_IMPORTED_MODULE_0__.appComponent)();
    _homepage__WEBPACK_IMPORTED_MODULE_1__.homeComponent.initialize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxTQUFTLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8s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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUNBQUk7QUFDN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRDQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDTTtBQUNFO0FBQ2M7QUFDSjtBQUNqQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBd0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0VBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFZO0FBQ2hCLElBQUksK0RBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2NvbnRhY3R1c3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvcmVzZXJ2YXRpb25wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fib3JldG8tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDcwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjA4LCAyMDgsIDIwOCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1jb250YWluZXIsXFxyXFxuLm1hbmlmZXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmtuaWZlLWltZyB7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oaXN0b3J5LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlJlc3RhdXJhbnQgSGlzdG9yeTogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuaWZlc3QtY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiU2VydmljZSBDb21taXRtZW50OiBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XFxyXFxufVxcclxcblxcclxcbi8qIE5BViBDb250YWluZXIqL1xcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXNpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXVuc2VsZWN0ZWQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDMwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pY29ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCovXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSRVZJRVcgQ29udGFpbmVyICovXFxyXFxuLnJldmlld3MtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXJldmlldy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1yZXZpZXctY29udGFpbmVyPioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjEzLCAyMTMsIDIxMyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBvcGVuLXF1b3RlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zdGFyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuLmZvb3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSAqL1xcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM5OXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc3ViLWNvbnRhaW5lcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWItbWVudS10aXRsZS1jb250YWluZXJzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW51bWJlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNilcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV90b3Atc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDAuNXB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1wcmljZSB7fVxcclxcblxcclxcbi5tZW51X2l0ZW0tcHJpY2U6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIkXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYm90dG9tLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tZW51X2l0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNlcnZhdGlvbiAqL1xcclxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1jb250YWluZXI+KiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9sZWZ0LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9uYW1lIHtcXHJcXG4gICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25faW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9uYW1lLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl9ndWVzdC1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fdGltZS1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fdGVsLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl9lbWFpbC1pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2d1ZXN0LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl90aW1lLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9zdWJtaXQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE0MCwgMTE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2Rpc2NsYWltZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY29sb3I6IHJnYigxMzcsIDEzNywgMTM3KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBVcyovXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXMtY29udGFpbmVyICoge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19zaW5nbGUtY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBncmF5O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX2xvY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfc3Vic2NyaWJlLWJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogc2FsbW9uO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwwREFBK0M7SUFDL0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9C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LFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9hYm9yZXRvLXJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDcwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjA4LCAyMDgsIDIwOCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1jb250YWluZXIsXFxyXFxuLm1hbmlmZXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmtuaWZlLWltZyB7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oaXN0b3J5LWNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlJlc3RhdXJhbnQgSGlzdG9yeTogXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuaWZlc3QtY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiU2VydmljZSBDb21taXRtZW50OiBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XFxyXFxufVxcclxcblxcclxcbi8qIE5BViBDb250YWluZXIqL1xcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXNpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXVuc2VsZWN0ZWQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDMwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pY29ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCovXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSRVZJRVcgQ29udGFpbmVyICovXFxyXFxuLnJldmlld3MtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXJldmlldy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1yZXZpZXctY29udGFpbmVyPioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjEzLCAyMTMsIDIxMyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBvcGVuLXF1b3RlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zdGFyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuLmZvb3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSAqL1xcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM5OXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc3ViLWNvbnRhaW5lcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWItbWVudS10aXRsZS1jb250YWluZXJzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW51bWJlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNilcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV90b3Atc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDAuNXB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1wcmljZSB7fVxcclxcblxcclxcbi5tZW51X2l0ZW0tcHJpY2U6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIkXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYm90dG9tLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tZW51X2l0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNlcnZhdGlvbiAqL1xcclxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1jb250YWluZXI+KiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9sZWZ0LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9uYW1lIHtcXHJcXG4gICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25faW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9uYW1lLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl9ndWVzdC1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fdGltZS1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fdGVsLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl9lbWFpbC1pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2d1ZXN0LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl90aW1lLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9zdWJtaXQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE0MCwgMTE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2Rpc2NsYWltZXItdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY29sb3I6IHJnYigxMzcsIDEzNywgMTM3KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBVcyovXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXMtY29udGFpbmVyICoge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19zaW5nbGUtY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBncmF5O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX2xvY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfc3Vic2NyaWJlLWJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogc2FsbW9uO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcblxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cclxuXHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuXHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG5cclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xyXG4gIGlmICghb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG5cclxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxyXG5cclxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcclxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucy5oYXNoKSB7XHJcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xyXG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xyXG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXHJcblxyXG5cclxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XHJcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1cmw7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuXHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG5cclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuXHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG5cclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuXHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuXHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcblxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcblxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG5cclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcblxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcblxyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICBjc3MgKz0gb2JqLmNzcztcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH0gLy8gRm9yIG9sZCBJRVxyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcblxyXG5cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaG9tZUltZyBmcm9tIFwiLi9ob21lLnBuZ1wiO1xyXG5pbXBvcnQgcmVzZXJ2YXRpb25JbWcgZnJvbSBcIi4vcmVzZXJ2YXRpb24ucG5nXCI7XHJcbmltcG9ydCBtZW51SW1nIGZyb20gXCIuL21lbnUucG5nXCI7XHJcbmltcG9ydCBjb250YWN0dXNJbWcgZnJvbSBcIi4vY29udGFjdHVzLnBuZ1wiO1xyXG5cclxuZnVuY3Rpb24gYXBwQ29tcG9uZW50KCl7XHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgLy9jcmVhdGUgdGl0bGVcclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVDb250YWluZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRpdGxlXCIpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJZdmVzIElieWFuZ1wiO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwic3ViLXRpdGxlXCIpO1xyXG4gICAgICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJWZWdldGFyaWFuIFN0ZWFrIEhvdXNlXCJcclxuXHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NyZWF0ZSBuYXYgYmFyXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU5hdkNvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNyZWF0ZVRhYkJ1dHRvbihcIkhvbWVcIiwgaG9tZUltZywgXCIwXCIgKTtcclxuICAgICAgICBjcmVhdGVUYWJCdXR0b24oXCJSZXNlcnZhdGlvblwiLCByZXNlcnZhdGlvbkltZywgXCIxXCIpO1xyXG4gICAgICAgIGNyZWF0ZVRhYkJ1dHRvbihcIk1lbnVcIiwgbWVudUltZywgXCIyXCIpO1xyXG4gICAgICAgIGNyZWF0ZVRhYkJ1dHRvbihcIkNvbnRhY3QgVXNcIiwgY29udGFjdHVzSW1nLCBcIjNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVNYWluQ29udGFpbmVyKCl7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFiQnV0dG9uKHRleHQsIGljb25JbWFnZSwgZGF0YUF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGljb24uc3JjID0gaWNvbkltYWdlO1xyXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcIm5hdi1pY29uc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmF2LXRleHRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpbmdsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2luZ2xlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2luZ2xlLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBzaW5nbGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBkYXRhQXR0cmlidXRlKTtcclxuICAgICAgICBzaW5nbGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYnV0dG9uLS11bnNlbGVjdGVkXCIpO1xyXG4gICAgICAgIHNpbmdsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICBzaW5nbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb250YWluZXJcIik7XHJcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZUNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVUaXRsZUNvbnRhaW5lcigpO1xyXG4gICAgZ2VuZXJhdGVOYXZDb250YWluZXIoKTtcclxuICAgIGdlbmVyYXRlTWFpbkNvbnRhaW5lcigpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhcHBDb21wb25lbnQgfTsiLCJcclxuZnVuY3Rpb24gZ2VuZXJhdGVBZGRyZXNzQ29udGV4dChuYW1lcmF3LCBhZGRyZXNzLCBudW1iZXIsIGVtYWlsKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3R1c19zaW5nbGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzX3RpdGxlXCIpO1xyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IG5hbWVyYXc7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3R1c19sb2NhdGlvblwiKTtcclxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYWRkcmVzcztcclxuXHJcbiAgICBjb25zdCB0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGVsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNfdGVsXCIpO1xyXG4gICAgdGVsLnRleHRDb250ZW50ID0gbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsVHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZW1haWxUeC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzX2VtYWlsXCIpO1xyXG4gICAgZW1haWxUeC50ZXh0Q29udGVudCA9IGVtYWlsO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVsKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbFR4KTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0VXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3R1cy1jb250YWluZXJcIik7XHJcbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTdWJzY3JpYmVJbnB1dCgpe1xyXG4gICAgY29uc3Qgc3Vic2NyaWJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YnNjcmliZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzX3N1YnNjcmliZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3R1c19zdWJzY3JpYmVyLW5hbWVcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiU3Vic2NyaWJlIGZvciBuZXdzIGFuZCBwcm9tb3MuXCI7XHJcblxyXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNfc3Vic2NyaWJlLWlucHV0XCIpO1xyXG5cclxuICAgIHN1YnNjcmliZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBzdWJzY3JpYmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNfc3Vic2NyaWJlLWJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwic3Vic2NyaWJlXCI7XHJcblxyXG4gICAgc3Vic2NyaWJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RVc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdHVzLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJzY3JpYmVDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdFVzUGFnZSgpe1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gICAgY29uc3QgY29udGFjdFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzLWNvbnRhaW5lclwiKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFVzQ29udGFpbmVyKTtcclxuXHJcbiAgICBnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KFwiWXZlcyBSZXN0byBOZXcgWW9yayBDaXR5XCIsIFwiMjI5OSBXZXN0IEFsYmVydCwgTmV3IFlvcmsgQ2l0eSwgMjIwOTJcIiwgXCIoMjEyKSAyMzQgNDQyMVwiLCBcInl2ZXNpYnlhbmdAcmVzdG9yYW50LmluZ25vcmVcIik7XHJcbiAgICBnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KFwiWXZlcyBSZXN0byBTaWduYXBvcmVcIiwgXCI0Mjk5IE9rYXRva2F0LCBTaW5nYXBvcmUgQ2l0eSwgMjIwOTJcIiwgXCIoMjIyMikgMjM0IDQ0MjFcIiwgXCJ5dmVzaWJ5YW5nc2luZ2Fwb3JlQHJlc3RvcmFudC5pbmdub3JlXCIpO1xyXG4gICAgZ2VuZXJhdGVBZGRyZXNzQ29udGV4dChcIll2ZXMgUmVzdG8gUGhpbGxpcGluZXNcIiwgXCIzOTkgT2thdG9rYXQsIFJpemFsIENpdHksIDIyMTRcIiwgXCIoOTMyKSAyMzQgNDQyMVwiLCBcInl2ZXNpYnlhbmdwaGlsaXBwaW5lc0ByZXN0b3JhbnQuaW5nbm9yZVwiKTtcclxuXHJcbiAgICBnZW5lcmF0ZVN1YnNjcmliZUlucHV0KCk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRhY3RVc1BhZ2UgfTsiLCJpbXBvcnQgc3RhcnRJY29uIGZyb20gXCIuL3N0YXJpY29uLnN2Z1wiO1xyXG5pbXBvcnQga25pZmVJbWFnZSBmcm9tIFwiLi9raXRjaGVua25pZmUucG5nXCI7XHJcbmltcG9ydCB3ZWJUZXh0IGZyb20gXCIuL3dlYnRleHQuanNvblwiO1xyXG5cclxuY29uc3QgaG9tZUNvbXBvbmVudCA9ICgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1haW5Db250YWluZXIoZmlyc3RUZXh0ID0gXCJQdXQgaGlzdG9yeSBzdG9yeSBoZXJlLlwiLCBzZWNvbmRUZXh0ID0gXCJQdXQgcGFyYWdyYXBocyBvZiBoaXN0b3J5IG1hbmlmZXN0YXRpb24gaGVyZS5cIiwga25pZmVJbWFnZSl7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGhpc3RvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhpc3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpc3RvcnktY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGhpc3RvcnlDb250YWluZXIudGV4dENvbnRlbnQgPSBmaXJzdFRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGtuaWZlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBrbmlmZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwia25pZmUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGtuaWZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBrbmlmZUltZy5zcmMgPSBrbmlmZUltYWdlO1xyXG4gICAgICAgIGtuaWZlSW1nLmNsYXNzTGlzdC5hZGQoXCJrbmlmZS1pbWdcIik7XHJcbiAgICAgICAga25pZmVDb250YWluZXIuYXBwZW5kQ2hpbGQoa25pZmVJbWcpO1xyXG5cclxuICAgICAgICBjb25zdCBtYW5pZmVzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFuaWZlc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1hbmlmZXN0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBtYW5pZmVzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IHNlY29uZFRleHQ7XHJcblxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGlzdG9yeUNvbnRhaW5lcik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChrbmlmZUNvbnRhaW5lcik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYW5pZmVzdENvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSZXZpZXdzQ29udGFpbmVyKCl7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmV2aWV3c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV2aWV3cy1jb250YWluZXJcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3c0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vZm9yIGVhY2ggcmV2aWV3cyBpbiBKU09OIGZpbGUsIHdlIGFkZCBpdCB0byBvdXIgcmV2aWV3IGNvbnRhaW5lclxyXG4gICAgICAgIHdlYlRleHQucmV2aWV3cy5mb3JFYWNoKHJldmlldyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSByZXZpZXcubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrcW91dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYmxvY2txdW90ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBibG9ja3FvdXRlLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICBjb21tZW50LnRleHRDb250ZW50ID0gcmV2aWV3LmNvbW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3JlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzY29yZS1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXZpZXcuc2NvcmU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcInN0YXItaWNvblwiKTtcclxuICAgICAgICAgICAgICAgIGljb24uc3JjID0gc3RhcnRJY29uO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNpbmdsZVJldmlld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXJldmlldy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHNpbmdsZVJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICAgICAgc2luZ2xlUmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrcW91dGUpO1xyXG4gICAgICAgICAgICBzaW5nbGVSZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVSZXZpZXdDb250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVGb290bm90ZSgpe1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3QtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGZvb3RDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvL2ZvciBlYWNoIG5vdGVzIGluIHdlYnRleHQuZm9vdGVybm90ZXNcclxuICAgICAgICAgICAgLy9jcmVhdGUgb25lIHAgZWxlbWVudCBmb3IgZWFjaCBzaW5nbGUgdmFsdWUgaW4gZm9vdGVyTm90ZXMgYXJyYXksXHJcbiAgICAgICAgICAgIC8vZm9vdENvbnRhaW5lclxyXG5cclxuICAgICAgICB3ZWJUZXh0LmZvb3Rlck5vdGVzLmZvckVhY2gobm90ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IG5vdGU7XHJcbiAgICAgICAgICAgIGZvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCl7XHJcbiAgICAgICAgZ2VuZXJhdGVNYWluQ29udGFpbmVyKHdlYlRleHQucmVzdGF1cmFudEhpc3RvcnksIHdlYlRleHQubWFuaWZlc3RhdGlvbiwga25pZmVJbWFnZSk7XHJcbiAgICAgICAgZ2VuZXJhdGVSZXZpZXdzQ29udGFpbmVyKCk7XHJcbiAgICAgICAgZ2VuZXJhdGVGb290bm90ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcclxufSkoKVxyXG5cclxuZXhwb3J0IHsgaG9tZUNvbXBvbmVudCB9OyIsImltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNvblwiO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51Q29udGFpbmVyKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcblxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kKG1lbnVDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVN1YkNvbnRhaW5lcihwcm9wKXtcclxuXHJcbiAgICBsZXQgaXRlbUNvdW50ZXIgPSAxO1xyXG5cclxuICAgIGZvcihjb25zdCBzdWJNZW51IGluIHByb3Ape1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXN1Yi1jb250YWluZXJzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Yi1tZW51LXRpdGxlLWNvbnRhaW5lcnNcIik7XHJcbiAgICAgICAgdGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBzdWJNZW51O1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHByb3Bbc3ViTWVudV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9wU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudV90b3Atc2VjdGlvblwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgIG1lbnVOdW1iZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICBtZW51TnVtYmVyLnRleHRDb250ZW50ID0gaXRlbUNvdW50ZXI7XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudGVyKys7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tbmFtZVwiKTtcclxuICAgICAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgICAgICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVOdW1iZXIpO1xyXG4gICAgICAgICAgICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBib3R0b21TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51X2JvdHRvbS1zZWN0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51X2l0ZW0tZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnVfaXRlbS1wcmljZVwiKTtcclxuICAgICAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuXHJcbiAgICAgICAgICAgIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG5cclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uKTtcclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TWVudVBhZ2UoKXtcclxuICAgIGdlbmVyYXRlTWVudUNvbnRhaW5lcigpO1xyXG4gICAgZ2VuZXJhdGVTdWJDb250YWluZXIobWVudSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlNZW51UGFnZSB9OyIsImltcG9ydCByZXN0YXVyYW50SW1nIGZyb20gXCIuL3Jlc3RhdXJhbnQucG5nXCJcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmVzZXJ2YXRpb25Db250YWluZXIoKXtcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlc2VydmF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgbGVmdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uX2xlZnQtc2VjdGlvblwiKTtcclxuXHJcbiAgICBjb25zdCByaWdodFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmlnaHRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbl9yaWdodC1zZWN0aW9uXCIpO1xyXG5cclxuICAgIHJlc2VydmF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRTZWN0aW9uKTtcclxuICAgIHJlc2VydmF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0U2VjdGlvbik7XHJcblxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZnRTZWN0aW9uQ29tcG9uZW50KCl7XHJcbiAgICBcclxuICAgIGdlbmVyYXRlSW5wdXRDb250YWluZXIoXCJOYW1lOlwiLCBcInJlc2VydmF0aW9uX25hbWVcIiwgXCJ0ZXh0XCIsIFwicmVzZXJ2YXRpb25fbmFtZS1pbnB1dFwiKTtcclxuICAgIGdlbmVyYXRlSW5wdXRDb250YWluZXIoXCJOdW1iZXIgb2YgZ3Vlc3RzOlwiLCBcInJlc2VydmF0aW9uX25hbWVcIiwgXCJ0ZXh0XCIsIFwicmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXRcIik7XHJcbiAgICBnZW5lcmF0ZUlucHV0Q29udGFpbmVyKFwiVGltZTpcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwic2VsZWN0XCIsIFwicmVzZXJ2YXRpb25fdGltZS1pbnB1dFwiKTtcclxuICAgIGdlbmVyYXRlSW5wdXRDb250YWluZXIoXCJQaG9uZSBudW1iZXI6XCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcInRlbFwiLCBcInJlc2VydmF0aW9uX3RlbC1pbnB1dFwiKTtcclxuICAgIGdlbmVyYXRlSW5wdXRDb250YWluZXIoXCJFbWFpbFwiLCBcInJlc2VydmF0aW9uX25hbWVcIiwgXCJlbWFpbFwiLCBcInJlc2VydmF0aW9uX2VtYWlsLWlucHV0XCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uX2lucHV0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbl9zdWJtaXQtYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNVQk1JVFwiO1xyXG5cclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGxlZnRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNlcnZhdGlvbl9sZWZ0LXNlY3Rpb25cIik7XHJcbiAgICBsZWZ0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGRpc2NsYWltZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGlzY2xhaW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25fZGlzY2xhaW1lci1jb250YWluZXJcIik7XHJcbiAgICBsZWZ0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNjbGFpbWVyQ29udGFpbmVyKTtcclxuXHJcbiAgICBhZGREaXNjbGFpbWVyKFwiQ3VscGEgcHJvaWRlbnQgY29uc2VjdGV0dXIgb2ZmaWNpYSBvZmZpY2lhIG1pbmltIG5vc3RydWQgZXUuXCIpO1xyXG4gICAgYWRkRGlzY2xhaW1lcihcIlF1aSBldCBhZCB2b2x1cHRhdGUgZXggcXVpIG9jY2FlY2F0IGF1dGUgdmVuaWFtIGxhYm9yaXMgZG9sb3IgcmVwcmVoZW5kZXJpdC5cIik7XHJcbiAgICBhZGREaXNjbGFpbWVyKFwiQ29uc2VxdWF0IGR1aXMgYWQgZHVpcyBtaW5pbSBsYWJvcmUgbnVsbGEgdXQgZXguXCIpO1xyXG4gICAgYWRkRGlzY2xhaW1lcihcIkxhYm9ydW0gYW5pbSBlc3Qgc3VudCBub3N0cnVkIGVzc2UgZGVzZXJ1bnQgY3VwaWRhdGF0IHZvbHVwdGF0ZSBkdWlzIGZ1Z2lhdCBuaXNpIGNvbnNlY3RldHVyIGN1bHBhLlwiKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRGlzY2xhaW1lcihzdHIpe1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbl9kaXNjbGFpbWVyLXRleHRcIik7XHJcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHN0cjtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzY2xhaW1lckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXJ2YXRpb25fZGlzY2xhaW1lci1jb250YWluZXJcIik7XHJcbiAgICAgICAgZGlzY2xhaW1lckNvbnRhaW5lci5hcHBlbmQodGV4dCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSW5wdXRDb250YWluZXIodGl0bGUsIHRpdGxlQ2xhc3NOYW1lLCBpbnB1dFR5cGUsIGlucHV0Q2xhc3NOYW1lICl7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uX2lucHV0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKHRpdGxlQ2xhc3NOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChpbnB1dENsYXNzTmFtZSk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dFR5cGUpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBsZWZ0U2VjdGlvbkNPbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXJ2YXRpb25fbGVmdC1zZWN0aW9uXCIpO1xyXG4gICAgICAgIGxlZnRTZWN0aW9uQ09udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJpZ2h0U2VjdGlvbkNvbXBvbmVudCgpe1xyXG4gICAgY29uc3QgcmlnaHRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNlcnZhdGlvbl9yaWdodC1zZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25faW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IHJlc3RhdXJhbnRJbWc7XHJcblxyXG4gICAgcmlnaHRTZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UmVzZXJ2YXRpb25QYWdlKCl7XHJcbiAgICBnZW5lcmF0ZVJlc2VydmF0aW9uQ29udGFpbmVyKCk7XHJcbiAgICBsZWZ0U2VjdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgcmlnaHRTZWN0aW9uQ29tcG9uZW50KCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlSZXNlcnZhdGlvblBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCB7IGhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51cGFnZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UmVzZXJ2YXRpb25QYWdlIH0gZnJvbSBcIi4vcmVzZXJ2YXRpb25wYWdlXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250YWN0VXNQYWdlIH0gZnJvbSBcIi4vY29udGFjdHVzcGFnZVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmxldCBjdXJyZW50UGFnZSA9IG51bGw7XHJcblxyXG53ZWJTdGFydFVwKCk7XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQYWdlcyhpbnB1dCkge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHBhcnNlSW50KGlucHV0LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcclxuICAgIFxyXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSBpbnB1dFZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgY2xlYXJNYWluQ29udGVudCgpO1xyXG4gICAgbmF2SWNvblVwZGF0ZXIoaW5wdXRWYWx1ZSk7XHJcbiAgICBpbnB1dC50YXJnZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYnV0dG9uLS1zZWxlY3RlZFwiKTtcclxuXHJcbiAgICBzd2l0Y2ggKGlucHV0VmFsdWUpIHtcclxuICAgICAgICAvL2hvbWVcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGhvbWVDb21wb25lbnQuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vcmVzZXJ2YXRpb25cclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICAgICAgZGlzcGxheVJlc2VydmF0aW9uUGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvL21lbnVcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGRpc3BsYXlNZW51UGFnZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vY29udGFjdCB1c1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRhY3RVc1BhZ2UoKTtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhck1haW5Db250ZW50KCl7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICAgICAgICB3aGlsZShtYWluQ29udGVudC5maXJzdENoaWxkKXtcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZJY29uVXBkYXRlcigpe1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zaW5nbGUtY29udGFpbmVyXCIpO1xyXG4gIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWJ1dHRvbi0tdW5zZWxlY3RlZFwiKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWJTdGFydFVwKCl7XHJcbiAgICBhcHBDb21wb25lbnQoKTtcclxuICAgIGhvbWVDb21wb25lbnQuaW5pdGlhbGl6ZSgpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LXNpbmdsZS1jb250YWluZXJcIik7XHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoUGFnZXMpKTtcclxuXHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBpZihidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSA9PSAwKXtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWJ1dHRvbi0tc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9