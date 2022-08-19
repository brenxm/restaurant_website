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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"subTitle\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"mainTitle\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"mainTitle\";\r\n    text-align: center;\r\n    font-size: 90px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    font-family: \"subTitle\";\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n}\r\n\r\n.knife-img {\r\n    width: 35%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    font-family: \"subTitle\";\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(50%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    pointer-events: none;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.review-name {\r\n    letter-spacing: 1.4px;\r\n}\r\n\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price {}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,2DAA8C;IAC9C,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,2DAAkD;IAClD,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,aAAa;IACb,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,OAAO;AACX;;AAEA;;IAEI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,WAAW;AACf;;AAEA,gBAAgB;AAChB;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,SAAS;AACb;;AAEA;IACI,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,4CAA4C;IAC5C,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,iBAAiB;IACjB,SAAS;IACT,yBAAyB;;AAE7B;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,WAAW;AACf;;AAEA,WAAW;AACX;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,eAAe;AACnB;;AAEA,SAAS;AACT;IACI,eAAe;IACf,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,cAAc;IACd;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA,kBAAkB;;AAElB;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;;;;;IAKI,sBAAsB;IACtB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,SAAS;IACT,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,cAAc;AACd;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: \"subTitle\";\r\n    src: url(\"./asset/aboreto.ttf\") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"mainTitle\";\r\n    src: url(\"./asset/inspiration.ttf\") format(\"woff\");\r\n    font-style: normal;\r\n}\r\n\r\n* {\r\n    color: white;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n    margin-top: 40px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n.main-title {\r\n    font-family: \"mainTitle\";\r\n    text-align: center;\r\n    font-size: 90px;\r\n    margin: 0;\r\n}\r\n\r\n.sub-title {\r\n    font-family: \"subTitle\";\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n    color: rgb(208, 208, 208);\r\n}\r\n\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n    padding: 0 10px;\r\n    height: 500px;\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.main-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.history-container,\r\n.manifest-container {\r\n    color: rgb(187, 187, 187);\r\n    font-style: italic;\r\n}\r\n\r\n.knife-img {\r\n    width: 35%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.history-container::before {\r\n    content: \"Restaurant History: \";\r\n    font-size: 25px;\r\n    color: rgb(228, 228, 228);\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.manifest-container::before {\r\n    content: \"Service Commitment: \";\r\n    font-size: 25px;\r\n    font-family: \"subTitle\";\r\n    color: rgb(228, 228, 228);\r\n}\r\n\r\n/* NAV Container*/\r\n.nav-container {\r\n    width: 750px;\r\n    height: 100px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.nav-single-container {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-button--selected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n#nav-button--unselected {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    filter: opacity(50%);\r\n    transition: 0.5s;\r\n    transform: scale(0.7);\r\n}\r\n\r\n.nav-icons {\r\n    margin: auto;\r\n    display: block;\r\n    height: 70px;\r\n    pointer-events: none;\r\n}\r\n\r\n.nav-text {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    pointer-events: none;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.nav-link {\r\n    margin: auto;\r\n    display: block;\r\n    width: 70px;\r\n}\r\n\r\n/* Main Content*/\r\n.main-content {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n/* REVIEW Container */\r\n.reviews-container {\r\n    width: 750px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.single-review-container {\r\n    background-color: rgb(75, 75, 75);\r\n    height: 180px;\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.review-name {\r\n    letter-spacing: 1.4px;\r\n}\r\n\r\n\r\n.single-review-container>* {\r\n    margin: 0;\r\n}\r\n\r\n.single-review-container p {\r\n    flex: 1;\r\n    height: 105px;\r\n}\r\n\r\nblockquote p {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    line-height: 17px;\r\n    margin: 0;\r\n    color: rgb(213, 213, 213);\r\n\r\n}\r\n\r\nblockquote p:before {\r\n    content: open-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\nblockquote p::after {\r\n    content: close-quote;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.star-icon {\r\n    width: 20px;\r\n}\r\n\r\n/* FOOTER */\r\n.foot-container {\r\n    width: 750px;\r\n    margin: auto;\r\n}\r\n\r\n.foot-container>* {\r\n    text-align: center;\r\n    margin: 0;\r\n    color: rgb(102, 102, 102);\r\n    font-size: 13px;\r\n}\r\n\r\n/* MENU */\r\n.menu-container {\r\n    padding: 0 40px;\r\n    overflow: auto;\r\n    height: calc(100vh - 399px);\r\n}\r\n\r\n.menu-sub-containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sub-menu-title-containers {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: \"subTitle\";\r\n}\r\n\r\n.menu-number {\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    color: rgb(136, 136, 136)\r\n}\r\n\r\n.menu-number::after {\r\n    content: \".\";\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 20px;\r\n}\r\n\r\n.menu_top-section {\r\n    display: flex;\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    border-bottom: dotted 0.5px rgb(160, 160, 160);\r\n}\r\n\r\n.menu_item-price {}\r\n\r\n.menu_item-price::before {\r\n    content: \"$\";\r\n}\r\n\r\n.menu_bottom-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.menu_item-description {\r\n    font-style: italic;\r\n    color: rgb(185, 185, 185);\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    background: transparent;\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(250, 250, 250, 0.1);\r\n}\r\n\r\n/* Reservation */\r\n.reservation-container {\r\n    display: flex;\r\n    padding: 0 30px;\r\n}\r\n\r\n.reservation-container>* {\r\n    flex: 1;\r\n}\r\n\r\n.reservation_left-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.reservation_name {\r\n    color: rgb(192, 192, 192);\r\n    font-size: 15px;\r\n}\r\n\r\n.reservation_img {\r\n    width: 100%;\r\n}\r\n\r\n.reservation_name-input,\r\n.reservation_guest-input,\r\n.reservation_time-input,\r\n.reservation_tel-input,\r\n.reservation_email-input {\r\n    background-color: gray;\r\n    border: none;\r\n    width: 90%;\r\n}\r\n\r\n.reservation_guest-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_time-input {\r\n    width: 50px;\r\n}\r\n\r\n.reservation_submit-button {\r\n    display: block;\r\n    margin: auto;\r\n    color: black;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 8px 20px;\r\n    letter-spacing: 2px;\r\n    font-weight: 600;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: rgb(231, 140, 115);\r\n}\r\n\r\n.reservation_disclaimer-text {\r\n    font-size: 12px;\r\n    color: rgb(137, 137, 137);\r\n    margin: 0;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* Contact Us*/\r\n.contactus-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.contactus-container * {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.contactus_single-container {\r\n    border-bottom: 1px dotted gray;\r\n    width: 500px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.contactus_title {\r\n    font-size: 25px;\r\n}\r\n\r\n.contactus_location {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n}\r\n\r\n.contactus_subscribe-button {\r\n    color: black;\r\n    background: salmon;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _asset_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/home.png */ "./src/asset/home.png");
/* harmony import */ var _asset_reservation_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/reservation.png */ "./src/asset/reservation.png");
/* harmony import */ var _asset_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/menu.png */ "./src/asset/menu.png");
/* harmony import */ var _asset_contactus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/contactus.png */ "./src/asset/contactus.png");





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

        createTabButton("Home", _asset_home_png__WEBPACK_IMPORTED_MODULE_0__, "0" );
        createTabButton("Reservation", _asset_reservation_png__WEBPACK_IMPORTED_MODULE_1__, "1");
        createTabButton("Menu", _asset_menu_png__WEBPACK_IMPORTED_MODULE_2__, "2");
        createTabButton("Contact Us", _asset_contactus_png__WEBPACK_IMPORTED_MODULE_3__, "3");
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
/* harmony import */ var _asset_staricon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/staricon.svg */ "./src/asset/staricon.svg");
/* harmony import */ var _asset_kitchenknife_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/kitchenknife.png */ "./src/asset/kitchenknife.png");
/* harmony import */ var _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant_content/webtext.json */ "./src/restaurant_content/webtext.json");




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
        _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.reviews.forEach(review => {
            const name = document.createElement("h3");
            name.classList.add("review-name");
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
                icon.src = _asset_staricon_svg__WEBPACK_IMPORTED_MODULE_0__;
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

        _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.footerNotes.forEach(note => {
            const text = document.createElement("p");
            text.textContent = note;
            footContainer.appendChild(text);
        })
    }

    function initialize(){
        generateMainContainer(_restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.restaurantHistory, _restaurant_content_webtext_json__WEBPACK_IMPORTED_MODULE_2__.manifestation, _asset_kitchenknife_png__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _restaurant_content_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant_content/menu.json */ "./src/restaurant_content/menu.json");


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
    generateSubContainer(_restaurant_content_menu_json__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _asset_restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/restaurant.png */ "./src/asset/restaurant.png");


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
    img.src = _asset_restaurant_png__WEBPACK_IMPORTED_MODULE_0__;

    rightSectionContainer.appendChild(img);
}


function displayReservationPage(){
    generateReservationContainer();
    leftSectionComponent();
    rightSectionComponent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxTQUFTLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRTZDO0FBQ0s7QUFDTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlGQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtFQUF5QixFQUFFLDJFQUFxQixFQUFFLG9EQUFVO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ga0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQUk7QUFDN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ007QUFDRTtBQUNjO0FBQ0o7QUFDakM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQXdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBWTtBQUNoQixJQUFJLCtEQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9jb250YWN0dXNwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlLy4vc3JjL3Jlc2VydmF0aW9ucGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF93ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3dlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9hYm9yZXRvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXQvaW5zcGlyYXRpb24udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1haW5UaXRsZVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpblRpdGxlXFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDkwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIwOCwgMjA4LCAyMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpc3RvcnktY29udGFpbmVyLFxcclxcbi5tYW5pZmVzdC1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5rbmlmZS1pbWcge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1jb250YWluZXI6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJSZXN0YXVyYW50IEhpc3Rvcnk6IFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tYW5pZmVzdC1jb250YWluZXI6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJTZXJ2aWNlIENvbW1pdG1lbnQ6IFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XFxyXFxufVxcclxcblxcclxcbi8qIE5BViBDb250YWluZXIqL1xcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXNpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1idXR0b24tLXVuc2VsZWN0ZWQge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDUwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pY29ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIENvbnRlbnQqL1xcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogUkVWSUVXIENvbnRhaW5lciAqL1xcclxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1yZXZpZXctY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xcclxcbiAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXctbmFtZSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpbmdsZS1yZXZpZXctY29udGFpbmVyPioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSBwIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjEzLCAyMTMsIDIxMyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBvcGVuLXF1b3RlO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zdGFyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuLmZvb3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSAqL1xcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM5OXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc3ViLWNvbnRhaW5lcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWItbWVudS10aXRsZS1jb250YWluZXJzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1udW1iZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpXFxyXFxufVxcclxcblxcclxcbi5tZW51LW51bWJlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiLlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfdG9wLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9ib3R0b20tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IGRvdHRlZCAwLjVweCByZ2IoMTYwLCAxNjAsIDE2MCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2l0ZW0tcHJpY2Uge31cXHJcXG5cXHJcXG4ubWVudV9pdGVtLXByaWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiJFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2JvdHRvbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzZXJ2YXRpb24gKi9cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyPioge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fbGVmdC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fbmFtZSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2ltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fbmFtZS1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX3RpbWUtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX3RlbC1pbnB1dCxcXHJcXG4ucmVzZXJ2YXRpb25fZW1haWwtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9ndWVzdC1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fdGltZS1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNDAsIDExNSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9kaXNjbGFpbWVyLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTM3LCAxMzcsIDEzNyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3QgVXMqL1xcclxcbi5jb250YWN0dXMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzLWNvbnRhaW5lciAqIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfc2luZ2xlLWNvbnRhaW5lciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgZ3JheTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19sb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3N1YnNjcmliZS1idXR0b24ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHNhbG1vbjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsMkRBQThDO0lBQzlDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyREFBa0Q7SUFDbEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFF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Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7Ozs7O0lBS0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzdWJUaXRsZVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuL2Fzc2V0L2Fib3JldG8udHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpblRpdGxlXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvaW5zcGlyYXRpb24udHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm1haW5UaXRsZVxcXCI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zdWItdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgY29sb3I6IHJnYigyMDgsIDIwOCwgMjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXI+KiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5oaXN0b3J5LWNvbnRhaW5lcixcXHJcXG4ubWFuaWZlc3QtY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ua25pZmUtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhpc3RvcnktY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiUmVzdGF1cmFudCBIaXN0b3J5OiBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuaWZlc3QtY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiU2VydmljZSBDb21taXRtZW50OiBcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOQVYgQ29udGFpbmVyKi9cXHJcXG4ubmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zaW5nbGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS1zZWxlY3RlZCB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbiNuYXYtYnV0dG9uLS11bnNlbGVjdGVkIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogb3BhY2l0eSg1MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaWNvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwic3ViVGl0bGVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBDb250ZW50Ki9cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFJFVklFVyBDb250YWluZXIgKi9cXHJcXG4ucmV2aWV3cy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3LW5hbWUge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaW5nbGUtcmV2aWV3LWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXJldmlldy1jb250YWluZXIgcCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGhlaWdodDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUgcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDIxMywgMjEzLCAyMTMpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlIHA6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcbi5mb290LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdC1jb250YWluZXI+KiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1FTlUgKi9cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOTlweCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXN1Yi1jb250YWluZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLW1lbnUtdGl0bGUtY29udGFpbmVycyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInN1YlRpdGxlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbnVtYmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1udW1iZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIi5cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X3RvcC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYm90dG9tLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMC41cHggcmdiKDE2MCwgMTYwLCAxNjApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9pdGVtLXByaWNlIHt9XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1wcmljZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9ib3R0b20tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2VydmF0aW9uICovXFxyXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX2xlZnQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUge1xcclxcbiAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbl9pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX25hbWUtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2d1ZXN0LWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90aW1lLWlucHV0LFxcclxcbi5yZXNlcnZhdGlvbl90ZWwtaW5wdXQsXFxyXFxuLnJlc2VydmF0aW9uX2VtYWlsLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fZ3Vlc3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3RpbWUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uX3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTQwLCAxMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25fZGlzY2xhaW1lci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBjb2xvcjogcmdiKDEzNywgMTM3LCAxMzcpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0IFVzKi9cXHJcXG4uY29udGFjdHVzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1cy1jb250YWluZXIgKiB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHVzX3NpbmdsZS1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGdyYXk7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0dXNfbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R1c19zdWJzY3JpYmUtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBzYWxtb247XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcblxyXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuXHJcblxyXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcclxuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG5cclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBob21lSW1nIGZyb20gXCIuL2Fzc2V0L2hvbWUucG5nXCI7XHJcbmltcG9ydCByZXNlcnZhdGlvbkltZyBmcm9tIFwiLi9hc3NldC9yZXNlcnZhdGlvbi5wbmdcIjtcclxuaW1wb3J0IG1lbnVJbWcgZnJvbSBcIi4vYXNzZXQvbWVudS5wbmdcIjtcclxuaW1wb3J0IGNvbnRhY3R1c0ltZyBmcm9tIFwiLi9hc3NldC9jb250YWN0dXMucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBhcHBDb21wb25lbnQoKXtcclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICAvL2NyZWF0ZSB0aXRsZVxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUNvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tdGl0bGVcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIll2ZXMgSWJ5YW5nXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdWItdGl0bGVcIik7XHJcbiAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIlZlZ2V0YXJpYW4gU3RlYWsgSG91c2VcIlxyXG5cclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY3JlYXRlIG5hdiBiYXJcclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTmF2Q29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY3JlYXRlVGFiQnV0dG9uKFwiSG9tZVwiLCBob21lSW1nLCBcIjBcIiApO1xyXG4gICAgICAgIGNyZWF0ZVRhYkJ1dHRvbihcIlJlc2VydmF0aW9uXCIsIHJlc2VydmF0aW9uSW1nLCBcIjFcIik7XHJcbiAgICAgICAgY3JlYXRlVGFiQnV0dG9uKFwiTWVudVwiLCBtZW51SW1nLCBcIjJcIik7XHJcbiAgICAgICAgY3JlYXRlVGFiQnV0dG9uKFwiQ29udGFjdCBVc1wiLCBjb250YWN0dXNJbWcsIFwiM1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1haW5Db250YWluZXIoKXtcclxuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJCdXR0b24odGV4dCwgaWNvbkltYWdlLCBkYXRhQXR0cmlidXRlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaWNvbi5zcmMgPSBpY29uSW1hZ2U7XHJcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25zXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJuYXYtdGV4dFwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2luZ2xlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzaW5nbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zaW5nbGUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHNpbmdsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGRhdGFBdHRyaWJ1dGUpO1xyXG4gICAgICAgIHNpbmdsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1idXR0b24tLXVuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgc2luZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIHNpbmdsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRpdGxlQ29udGFpbmVyKCk7XHJcbiAgICBnZW5lcmF0ZU5hdkNvbnRhaW5lcigpO1xyXG4gICAgZ2VuZXJhdGVNYWluQ29udGFpbmVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFwcENvbXBvbmVudCB9OyIsIlxyXG5mdW5jdGlvbiBnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KG5hbWVyYXcsIGFkZHJlc3MsIG51bWJlciwgZW1haWwpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzX3NpbmdsZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNfdGl0bGVcIik7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gbmFtZXJhdztcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzX2xvY2F0aW9uXCIpO1xyXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBhZGRyZXNzO1xyXG5cclxuICAgIGNvbnN0IHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZWwuY2xhc3NMaXN0LmFkZChcImNvbnRhY3R1c190ZWxcIik7XHJcbiAgICB0ZWwudGV4dENvbnRlbnQgPSBudW1iZXI7XHJcblxyXG4gICAgY29uc3QgZW1haWxUeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbWFpbFR4LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNfZW1haWxcIik7XHJcbiAgICBlbWFpbFR4LnRleHRDb250ZW50ID0gZW1haWw7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsVHgpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RVc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdHVzLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVN1YnNjcmliZUlucHV0KCl7XHJcbiAgICBjb25zdCBzdWJzY3JpYmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3Vic2NyaWJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXNfc3Vic2NyaWJlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzX3N1YnNjcmliZXItbmFtZVwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJTdWJzY3JpYmUgZm9yIG5ld3MgYW5kIHByb21vcy5cIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3R1c19zdWJzY3JpYmUtaW5wdXRcIik7XHJcblxyXG4gICAgc3Vic2NyaWJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHN1YnNjcmliZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3R1c19zdWJzY3JpYmUtYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJzdWJzY3JpYmVcIjtcclxuXHJcbiAgICBzdWJzY3JpYmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFjdFVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0dXMtY29udGFpbmVyXCIpO1xyXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnNjcmliZUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDb250YWN0VXNQYWdlKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBjb250YWN0VXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0dXMtY29udGFpbmVyXCIpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VXNDb250YWluZXIpO1xyXG5cclxuICAgIGdlbmVyYXRlQWRkcmVzc0NvbnRleHQoXCJZdmVzIFJlc3RvIE5ldyBZb3JrIENpdHlcIiwgXCIyMjk5IFdlc3QgQWxiZXJ0LCBOZXcgWW9yayBDaXR5LCAyMjA5MlwiLCBcIigyMTIpIDIzNCA0NDIxXCIsIFwieXZlc2lieWFuZ0ByZXN0b3JhbnQuaW5nbm9yZVwiKTtcclxuICAgIGdlbmVyYXRlQWRkcmVzc0NvbnRleHQoXCJZdmVzIFJlc3RvIFNpZ25hcG9yZVwiLCBcIjQyOTkgT2thdG9rYXQsIFNpbmdhcG9yZSBDaXR5LCAyMjA5MlwiLCBcIigyMjIyKSAyMzQgNDQyMVwiLCBcInl2ZXNpYnlhbmdzaW5nYXBvcmVAcmVzdG9yYW50LmluZ25vcmVcIik7XHJcbiAgICBnZW5lcmF0ZUFkZHJlc3NDb250ZXh0KFwiWXZlcyBSZXN0byBQaGlsbGlwaW5lc1wiLCBcIjM5OSBPa2F0b2thdCwgUml6YWwgQ2l0eSwgMjIxNFwiLCBcIig5MzIpIDIzNCA0NDIxXCIsIFwieXZlc2lieWFuZ3BoaWxpcHBpbmVzQHJlc3RvcmFudC5pbmdub3JlXCIpO1xyXG5cclxuICAgIGdlbmVyYXRlU3Vic2NyaWJlSW5wdXQoKTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGFjdFVzUGFnZSB9OyIsImltcG9ydCBzdGFydEljb24gZnJvbSBcIi4vYXNzZXQvc3Rhcmljb24uc3ZnXCI7XHJcbmltcG9ydCBrbmlmZUltYWdlIGZyb20gXCIuL2Fzc2V0L2tpdGNoZW5rbmlmZS5wbmdcIjtcclxuaW1wb3J0IHdlYlRleHQgZnJvbSBcIi4vcmVzdGF1cmFudF9jb250ZW50L3dlYnRleHQuanNvblwiO1xyXG5cclxuY29uc3QgaG9tZUNvbXBvbmVudCA9ICgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1haW5Db250YWluZXIoZmlyc3RUZXh0ID0gXCJQdXQgaGlzdG9yeSBzdG9yeSBoZXJlLlwiLCBzZWNvbmRUZXh0ID0gXCJQdXQgcGFyYWdyYXBocyBvZiBoaXN0b3J5IG1hbmlmZXN0YXRpb24gaGVyZS5cIiwga25pZmVJbWFnZSl7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGhpc3RvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhpc3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpc3RvcnktY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGhpc3RvcnlDb250YWluZXIudGV4dENvbnRlbnQgPSBmaXJzdFRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGtuaWZlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBrbmlmZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwia25pZmUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGtuaWZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBrbmlmZUltZy5zcmMgPSBrbmlmZUltYWdlO1xyXG4gICAgICAgIGtuaWZlSW1nLmNsYXNzTGlzdC5hZGQoXCJrbmlmZS1pbWdcIik7XHJcbiAgICAgICAga25pZmVDb250YWluZXIuYXBwZW5kQ2hpbGQoa25pZmVJbWcpO1xyXG5cclxuICAgICAgICBjb25zdCBtYW5pZmVzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFuaWZlc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1hbmlmZXN0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBtYW5pZmVzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IHNlY29uZFRleHQ7XHJcblxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGlzdG9yeUNvbnRhaW5lcik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChrbmlmZUNvbnRhaW5lcik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYW5pZmVzdENvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSZXZpZXdzQ29udGFpbmVyKCl7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmV2aWV3c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV2aWV3cy1jb250YWluZXJcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3c0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vZm9yIGVhY2ggcmV2aWV3cyBpbiBKU09OIGZpbGUsIHdlIGFkZCBpdCB0byBvdXIgcmV2aWV3IGNvbnRhaW5lclxyXG4gICAgICAgIHdlYlRleHQucmV2aWV3cy5mb3JFYWNoKHJldmlldyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInJldmlldy1uYW1lXCIpO1xyXG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcmV2aWV3Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBibG9ja3FvdXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJsb2NrcXVvdGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgYmxvY2txb3V0ZS5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICAgICAgICAgICAgY29tbWVudC50ZXh0Q29udGVudCA9IHJldmlldy5jb21tZW50O1xyXG4gICAgICAgICAgICBjb25zdCBzY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgICAgICBzY29yZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2NvcmUtY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmV2aWV3LnNjb3JlOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJzdGFyLWljb25cIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLnNyYyA9IHN0YXJ0SWNvbjtcclxuICAgICAgICAgICAgICAgIHNjb3JlQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVSZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzaW5nbGVSZXZpZXdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpbmdsZS1yZXZpZXctY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBzaW5nbGVSZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgICAgIHNpbmdsZVJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChibG9ja3FvdXRlKTtcclxuICAgICAgICAgICAgc2luZ2xlUmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlUmV2aWV3Q29udGFpbmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRm9vdG5vdGUoKXtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBmb290Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb290Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChmb290Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy9mb3IgZWFjaCBub3RlcyBpbiB3ZWJ0ZXh0LmZvb3Rlcm5vdGVzXHJcbiAgICAgICAgICAgIC8vY3JlYXRlIG9uZSBwIGVsZW1lbnQgZm9yIGVhY2ggc2luZ2xlIHZhbHVlIGluIGZvb3Rlck5vdGVzIGFycmF5LFxyXG4gICAgICAgICAgICAvL2Zvb3RDb250YWluZXJcclxuXHJcbiAgICAgICAgd2ViVGV4dC5mb290ZXJOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBub3RlO1xyXG4gICAgICAgICAgICBmb290Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIGdlbmVyYXRlTWFpbkNvbnRhaW5lcih3ZWJUZXh0LnJlc3RhdXJhbnRIaXN0b3J5LCB3ZWJUZXh0Lm1hbmlmZXN0YXRpb24sIGtuaWZlSW1hZ2UpO1xyXG4gICAgICAgIGdlbmVyYXRlUmV2aWV3c0NvbnRhaW5lcigpO1xyXG4gICAgICAgIGdlbmVyYXRlRm9vdG5vdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBpbml0aWFsaXplIH07XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7IGhvbWVDb21wb25lbnQgfTsiLCJpbXBvcnQgbWVudSBmcm9tIFwiLi9yZXN0YXVyYW50X2NvbnRlbnQvbWVudS5qc29uXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnVDb250YWluZXIoKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBtYWluQ29udGVudC5hcHBlbmQobWVudUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3ViQ29udGFpbmVyKHByb3Ape1xyXG5cclxuICAgIGxldCBpdGVtQ291bnRlciA9IDE7XHJcblxyXG4gICAgZm9yKGNvbnN0IHN1Yk1lbnUgaW4gcHJvcCl7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtc3ViLWNvbnRhaW5lcnNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ViLW1lbnUtdGl0bGUtY29udGFpbmVyc1wiKTtcclxuICAgICAgICB0aXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHN1Yk1lbnU7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcHJvcFtzdWJNZW51XS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51X3RvcC1zZWN0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVudU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgbWVudU51bWJlci5jbGFzc0xpc3QuYWRkKFwibWVudS1udW1iZXJcIik7XHJcbiAgICAgICAgICAgIG1lbnVOdW1iZXIudGV4dENvbnRlbnQgPSBpdGVtQ291bnRlcjtcclxuICAgICAgICAgICAgaXRlbUNvdW50ZXIrKztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1uYW1lXCIpO1xyXG4gICAgICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudU51bWJlcik7XHJcbiAgICAgICAgICAgIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVfYm90dG9tLXNlY3Rpb25cIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVfaXRlbS1kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudV9pdGVtLXByaWNlXCIpO1xyXG4gICAgICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XHJcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZW51UGFnZSgpe1xyXG4gICAgZ2VuZXJhdGVNZW51Q29udGFpbmVyKCk7XHJcbiAgICBnZW5lcmF0ZVN1YkNvbnRhaW5lcihtZW51KTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheU1lbnVQYWdlIH07IiwiaW1wb3J0IHJlc3RhdXJhbnRJbWcgZnJvbSBcIi4vYXNzZXQvcmVzdGF1cmFudC5wbmdcIlxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSZXNlcnZhdGlvbkNvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzZXJ2YXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZWZ0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25fbGVmdC1zZWN0aW9uXCIpO1xyXG5cclxuICAgIGNvbnN0IHJpZ2h0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByaWdodFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uX3JpZ2h0LXNlY3Rpb25cIik7XHJcblxyXG4gICAgcmVzZXJ2YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNlY3Rpb24pO1xyXG4gICAgcmVzZXJ2YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRTZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGVmdFNlY3Rpb25Db21wb25lbnQoKXtcclxuICAgIFxyXG4gICAgZ2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIk5hbWU6XCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcInRleHRcIiwgXCJyZXNlcnZhdGlvbl9uYW1lLWlucHV0XCIpO1xyXG4gICAgZ2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIk51bWJlciBvZiBndWVzdHM6XCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcInRleHRcIiwgXCJyZXNlcnZhdGlvbl9ndWVzdC1pbnB1dFwiKTtcclxuICAgIGdlbmVyYXRlSW5wdXRDb250YWluZXIoXCJUaW1lOlwiLCBcInJlc2VydmF0aW9uX25hbWVcIiwgXCJzZWxlY3RcIiwgXCJyZXNlcnZhdGlvbl90aW1lLWlucHV0XCIpO1xyXG4gICAgZ2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIlBob25lIG51bWJlcjpcIiwgXCJyZXNlcnZhdGlvbl9uYW1lXCIsIFwidGVsXCIsIFwicmVzZXJ2YXRpb25fdGVsLWlucHV0XCIpO1xyXG4gICAgZ2VuZXJhdGVJbnB1dENvbnRhaW5lcihcIkVtYWlsXCIsIFwicmVzZXJ2YXRpb25fbmFtZVwiLCBcImVtYWlsXCIsIFwicmVzZXJ2YXRpb25fZW1haWwtaW5wdXRcIik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25faW5wdXQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uX3N1Ym1pdC1idXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU1VCTUlUXCI7XHJcblxyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgbGVmdFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2VydmF0aW9uX2xlZnQtc2VjdGlvblwiKTtcclxuICAgIGxlZnRTZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZGlzY2xhaW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXNjbGFpbWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbl9kaXNjbGFpbWVyLWNvbnRhaW5lclwiKTtcclxuICAgIGxlZnRTZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2NsYWltZXJDb250YWluZXIpO1xyXG5cclxuICAgIGFkZERpc2NsYWltZXIoXCJDdWxwYSBwcm9pZGVudCBjb25zZWN0ZXR1ciBvZmZpY2lhIG9mZmljaWEgbWluaW0gbm9zdHJ1ZCBldS5cIik7XHJcbiAgICBhZGREaXNjbGFpbWVyKFwiUXVpIGV0IGFkIHZvbHVwdGF0ZSBleCBxdWkgb2NjYWVjYXQgYXV0ZSB2ZW5pYW0gbGFib3JpcyBkb2xvciByZXByZWhlbmRlcml0LlwiKTtcclxuICAgIGFkZERpc2NsYWltZXIoXCJDb25zZXF1YXQgZHVpcyBhZCBkdWlzIG1pbmltIGxhYm9yZSBudWxsYSB1dCBleC5cIik7XHJcbiAgICBhZGREaXNjbGFpbWVyKFwiTGFib3J1bSBhbmltIGVzdCBzdW50IG5vc3RydWQgZXNzZSBkZXNlcnVudCBjdXBpZGF0YXQgdm9sdXB0YXRlIGR1aXMgZnVnaWF0IG5pc2kgY29uc2VjdGV0dXIgY3VscGEuXCIpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGREaXNjbGFpbWVyKHN0cil7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uX2Rpc2NsYWltZXItdGV4dFwiKTtcclxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gc3RyO1xyXG5cclxuICAgICAgICBjb25zdCBkaXNjbGFpbWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNlcnZhdGlvbl9kaXNjbGFpbWVyLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBkaXNjbGFpbWVyQ29udGFpbmVyLmFwcGVuZCh0ZXh0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVJbnB1dENvbnRhaW5lcih0aXRsZSwgdGl0bGVDbGFzc05hbWUsIGlucHV0VHlwZSwgaW5wdXRDbGFzc05hbWUgKXtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25faW5wdXQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQodGl0bGVDbGFzc05hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGlucHV0Q2xhc3NOYW1lKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0VHlwZSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxlZnRTZWN0aW9uQ09udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNlcnZhdGlvbl9sZWZ0LXNlY3Rpb25cIik7XHJcbiAgICAgICAgbGVmdFNlY3Rpb25DT250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmlnaHRTZWN0aW9uQ29tcG9uZW50KCl7XHJcbiAgICBjb25zdCByaWdodFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2VydmF0aW9uX3JpZ2h0LXNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbl9pbWdcIik7XHJcbiAgICBpbWcuc3JjID0gcmVzdGF1cmFudEltZztcclxuXHJcbiAgICByaWdodFNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlSZXNlcnZhdGlvblBhZ2UoKXtcclxuICAgIGdlbmVyYXRlUmVzZXJ2YXRpb25Db250YWluZXIoKTtcclxuICAgIGxlZnRTZWN0aW9uQ29tcG9uZW50KCk7XHJcbiAgICByaWdodFNlY3Rpb25Db21wb25lbnQoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVJlc2VydmF0aW9uUGFnZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgaG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51UGFnZSB9IGZyb20gXCIuL21lbnVwYWdlXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlSZXNlcnZhdGlvblBhZ2UgfSBmcm9tIFwiLi9yZXNlcnZhdGlvbnBhZ2VcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRhY3RVc1BhZ2UgfSBmcm9tIFwiLi9jb250YWN0dXNwYWdlXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxubGV0IGN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHJcbndlYlN0YXJ0VXAoKTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFBhZ2VzKGlucHV0KSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gcGFyc2VJbnQoaW5wdXQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IGlucHV0VmFsdWUpIHJldHVybjtcclxuXHJcbiAgICBjbGVhck1haW5Db250ZW50KCk7XHJcbiAgICBuYXZJY29uVXBkYXRlcihpbnB1dFZhbHVlKTtcclxuICAgIGlucHV0LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1idXR0b24tLXNlbGVjdGVkXCIpO1xyXG5cclxuICAgIHN3aXRjaCAoaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgIC8vaG9tZVxyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgaG9tZUNvbXBvbmVudC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy9yZXNlcnZhdGlvblxyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBkaXNwbGF5UmVzZXJ2YXRpb25QYWdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vbWVudVxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgZGlzcGxheU1lbnVQYWdlKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy9jb250YWN0IHVzXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBkaXNwbGF5Q29udGFjdFVzUGFnZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyTWFpbkNvbnRlbnQoKXtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gICAgICAgIHdoaWxlKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdkljb25VcGRhdGVyKCl7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LXNpbmdsZS1jb250YWluZXJcIik7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYnV0dG9uLS11bnNlbGVjdGVkXCIpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlYlN0YXJ0VXAoKXtcclxuICAgIGFwcENvbXBvbmVudCgpO1xyXG4gICAgaG9tZUNvbXBvbmVudC5pbml0aWFsaXplKCk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtc2luZ2xlLWNvbnRhaW5lclwiKTtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQYWdlcykpO1xyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGlmKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID09IDApe1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYnV0dG9uLS1zZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=