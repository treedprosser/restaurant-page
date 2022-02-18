/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial.js */ \"./src/modules/initial.js\");\n/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main.js */ \"./src/modules/main.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n\ninit();\n\nfunction addNavElements() {\n    const mainBtn = document.getElementById('main');\n    const menuBtn = document.getElementById('menu');\n    const contactBtn = document.getElementById('contact');\n\n    mainBtn.addEventListener('click', _modules_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    menuBtn.addEventListener('click', _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    contactBtn.addEventListener('click', _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n}\n\nfunction init() {\n    (0,_modules_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_modules_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    addNavElements();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setBtnActive(id) {\n    const activeBtn = document.querySelector('.tab.active');\n    if (activeBtn) activeBtn.classList.remove('active');\n\n    const mainBtn = document.getElementById(id);\n    mainBtn.classList.add('active');\n}\n\nfunction createSection(name, data) {\n    const section = document.createElement('section');\n    section.classList.add('section');\n\n    const title = document.createElement('h2');\n    title.classList.add('section-title');\n    title.textContent = name;\n    section.appendChild(title);\n\n    data.forEach((d) => {\n        const para = document.createElement('p');\n        para.classList.add('section-descriptions');\n        para.textContent = d;\n        section.appendChild(para);\n    });\n\n    return section;\n}\n\nfunction loadContact() {\n    const content = document.getElementById('tab-content');\n    content.classList.add('flex-lay');\n    content.classList.add('grid-lay');\n    content.textContent = '';\n    setBtnActive('contact');\n\n    const phoneSection = createSection('Phones', [\n        'Emilio: 403-535-2525',\n        'Francesa: 587-245-2511'\n    ]);\n\n    const addressSection = createSection('address', ['Little Italy']);\n\n    content.appendChild(phoneSection);\n    content.appendChild(addressSection);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, text) {\n    const header = document.createElement('header');\n    header.setAttribute('id', id);\n    const title = document.createElement('h1');\n    title.textContent = text;\n    header.appendChild(title);\n    return header;\n}\n\nfunction createBtn(id, text) {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', id);\n    const span = document.createElement('span');\n    span.textContent = text;\n    btn.appendChild(span);\n    btn.classList.add('tab');\n    return btn;\n}\n\nfunction createNav(id) {\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', id);\n\n    const mainBtn = createBtn('main', 'main');\n    const menuBtn = createBtn('menu', 'menu');\n    const contactBtn = createBtn('contact', 'contact');\n\n    nav.appendChild(mainBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    return nav;\n}\n\nfunction createMain(id) {\n    const main = document.createElement('div');\n    main.setAttribute('id', id);\n    return main;\n}\n\nfunction createFooter(id, text) {\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', id);\n    const h3 = document.createElement('h3');\n    h3.textContent = text;\n    footer.appendChild(h3);\n    return footer;\n}\n\nfunction loadPage() {\n    const content = document.getElementById('content');\n\n    const header = createHeader('header', \"Emilio's\");\n    content.appendChild(header);\n\n    const nav = createNav('nav');\n    content.appendChild(nav);\n\n    const tabContent = createMain('tab-content');\n    content.appendChild(tabContent);\n\n    const footer = createFooter('footer', 'Made with love');\n    content.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAboutSection() {\n    const about = document.createElement('section');\n    about.classList.add('section');\n\n    const title = document.createElement('h2');\n    title.classList.add('section-title');\n    title.textContent = 'About';\n\n    about.appendChild(title);\n\n    const para = document.createElement('p');\n    para.classList.add('section-description');\n    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\n\n    about.appendChild(para);\n    return about;\n}\n\nfunction setBtnActive(id) {\n    const activeBtn = document.querySelector('.tab.active');\n    if (activeBtn) activeBtn.classList.remove('active');\n\n    const mainBtn = document.getElementById(id);\n    mainBtn.classList.add('active');\n}\n\nfunction loadMain() {\n    const content = document.getElementById('tab-content');\n    content.classList.add('flex-lay');\n    content.classList.add('grid-lay');\n\n    content.textContent = '';\n\n    const aboutSection = createAboutSection();\n\n    setBtnActive('main');\n\n    content.appendChild(aboutSection);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setBtnActive(id) {\n    const activeBtn = document.getElementById('.tab.active');\n    if (activeBtn) activeBtn.classList.remove('active');\n\n    const mainBtn = document.getElementById(id);\n    mainBtn.classList.add('active');\n}\n\nfunction createFood(text, price) {\n    const food = document.createElement('div');\n    food.classList.add('food');\n\n    const description = document.createElement('div');\n    description.classList.add('description');\n\n    const foodName = document.createElement('h3');\n    foodName.textContent = text;\n\n    const foodPrice = document.createElement('h2');\n    foodPrice.textContent = price;\n\n    description.appendChild(foodName);\n    description.appendChild(foodPrice);\n\n    food.appendChild(description);\n    return food;\n}\n\nfunction loadMenu() {\n    const content = document.getElementById('tab-content');\n    content.classList.add('grid-lay');\n    content.classList.add('flex-lay');\n\n    content.textContent = '';\n    setBtnActive('menu');\n\n    const foods = [\n        createFood('Pizza', '$50'),\n        createFood('Cacio e Pepe', '$40'),\n        createFood('Bruschetta', '$30'),\n        createFood('Gelatto', '$10'),\n        createFood('Spaghetti', '$100'),\n        createFood('Gnocchi', '$20'),\n        createFood('Pasta Primavera', '$70'),\n        createFood('Antipasta', '$10'),\n    ];\n\n    foods.forEach((food) => {\n        content.appendChild(food);\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;