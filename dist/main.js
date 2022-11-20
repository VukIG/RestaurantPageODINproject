/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurantpageodinproject/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n\n<div class=\"formandh1\">\n            <h1>Let's do this!</h1>\n            <form action=\"#\">\n                <div class=\"inputandlabel\">\n                    <label for=\"fname\">First name</label>\n                    <input type=\"text\" class=\"name\" id=\"uname\">\n                </div>\n                <div class=\"inputandlabel\">\n                    <label for=\"lname\">Last name</label>\n                    <input type=\"text\" class=\"name\" id=\"usrname\">\n                </div>\n                <div class=\"inputandlabel\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" name=\"email\" id=\"email\">\n                </div>\n                <div class=\"inputandlabel\">\n                    <label for=\"phone\">Phone number</label>\n                    <input type=\"text\" id=\"phonenumber\">\n                </div>\n                <div class=\"inputandlabel\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\">\n                </div>\n                <div class=\"inputandlabel\">\n                    <label for=\"rpassword\">Repeat password</label>\n                    <input type=\"password\" id=\"rpassword\">\n                </div>\n                <div class=\"submitorlogin\">\n                    <button type=\"submit\">Submit</button>\n                    <p>Already have an account?<a href=\"#\" class=\"jovana\">Log in</a></p>\n                </div>\n            </form>\n        </div>\n\n*/ \n\n\nfunction contactModule() {\n    let formandh1=document.createElement('div');\n    let h1=document.createElement('h1');\n    let form=document.createElement('form');\n    form.appendChild(inputOrLabel('First name','text','name'));\n    form.appendChild(inputOrLabel('Last name','text','name'));\n    form.appendChild(inputOrLabel('Email','email','email'));\n    form.appendChild(inputOrLabel('Phonenumber','phone','phone'));\n    let button=document.createElement('button');\n    button.innerHTML='Submit';\n    let p=document.createElement('p');\n    p.innerHTML='Already have an account?';\n    let a=document.createElement('a');\n    a.innerHTML='Log in'\n    a.classList.add('jovana')\n    p.appendChild(a);\n    let submitorlogin=document.createElement('div');\n    submitorlogin.classList.add('submitorlogin');\n    submitorlogin.appendChild(button);\n    submitorlogin.appendChild(p);\n    form.appendChild(submitorlogin);\n    formandh1.appendChild(h1);\n    formandh1.appendChild(form);\n    return formandh1;\n}\n\nfunction inputOrLabel(naslov,tip,klasa) {\n    let inputandlabel=document.createElement('div');\n    let label=document.createElement('label');\n    label.innerHTML=naslov;\n    let input=document.createElement('input');\n    input.classList.add(klasa);\n    return inputandlabel;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactModule);\n\n//# sourceURL=webpack://restaurantpageodinproject/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n<main>\n            <div class=\"mainHeading\">\n                <h1>Shoes and sneakers</h1>\n            </div>\n            <div class=\"slobodailismrt\">    \n                <article>\n                    <img src=\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png\" alt=\"\">\n                    <h1>Lorem ipsum</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>\n                    <button>Add to cart</button>\n                </article>\n                <article>\n                    <img src=\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png\" alt=\"\">\n                    <h1>Lorem ipsum</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>\n                    <button>Add to cart</button>\n                </article>\n                <article>\n                    <img src=\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png\" alt=\"\">\n                    <h1>Lorem ipsum</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>\n                    <button>Add to cart</button>\n                </article>\n                <article>\n                    <img src=\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png\" alt=\"\">\n                    <h1>Lorem ipsum</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>\n                    <button>Add to cart</button>\n                </article>\n                <article>\n                    <img src=\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png\" alt=\"\">\n                    <h1>Lorem ipsum</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>\n                    <button>Add to cart</button>\n                </article>\n                <article>\n                    <img src=\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png\" alt=\"\">\n                    <h1>Lorem ipsum</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!</p>\n                    <button>Add to cart</button>\n                </article>\n            </div>\n            \n            \n        </main>\n*/\n\n\nfunction homeModule() {\n    let main=document.createElement('main');\n    let slobodailismrt=document.createElement('div');\n    let naslov=document.createElement('h1');\n    let mainHeading=document.createElement('div');\n    slobodailismrt.classList.add('slobodailismrt');\n    mainHeading.classList.add('mainHeading');\n    mainHeading.appendChild(naslov);\n    \n    \n    naslov.innerHTML='Shoes and sneakers';\n    for (let i = 0; i < 6; i++) {\n        slobodailismrt.appendChild(createArticle());     \n    }\n    main.appendChild(mainHeading);\n    main.appendChild(slobodailismrt);\n    \n    return main;\n}\n\nfunction createArticle() {\n    let article=document.createElement('article');\n    let image=document.createElement('img');\n    let heading=document.createElement('h1');\n    let paragraph=document.createElement('p');\n    let btn=document.createElement('button');\n    heading.innerHTML='Lorem ipsum';\n    paragraph.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique tempore eveniet, temporibus adipisci illum in eius voluptatibus natus! Tempore eum non, dolores dignissimos amet exercitationem quia beatae reiciendis harum!';\n    btn.innerHTML='Add to cart';\n    image.src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78e78695-74ab-4162-b052-67f004aad13b/air-max-270-g-golf-shoe-GVHWZK.png';\n    article.appendChild(image);\n    article.appendChild(heading);\n    article.appendChild(paragraph);\n    article.appendChild(btn);\n    return article;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeModule);\n\n//# sourceURL=webpack://restaurantpageodinproject/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst content=document.querySelector('#content');\nlet nav=document.createElement('nav');\nlet ul=document.createElement('ul');\n\nconst home=document.createElement('a');\nconst about=document.createElement('a');\nconst contact=document.createElement('a');\nhome.innerHTML='Home';\nabout.innerHTML='About';\ncontact.innerHTML='Contact';\nhome.classList.add('home');\nabout.classList.add('about');\ncontact.classList.add('contact');\n\n/*\n<nav>\n            <img src=\"https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png\" alt=\"\">\n            <ul>\n                <li><a id=\"home\" href=\"\">Home</a></li>\n                <li><a id=\"about\" href=\"\">About</a></li>\n                <li><a id=\"contact\" href=\"\">Contact</a></li>\n            </ul>\n        </nav>\n        \n*/\n\n\nlet li1 = document.createElement('li');\nli1.appendChild(home);\nul.appendChild(li1);\nlet li2 = document.createElement('li');\nli2.appendChild(about);\nul.appendChild(li2);\nlet li3 = document.createElement('li');\nli3.appendChild(contact);\nul.appendChild(li3);\nlet logo=document.createElement('img');\nlogo.src='https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png';\n\nnav.appendChild(logo);\nnav.appendChild(ul);\ncontent.appendChild(nav);\n\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\nhome.addEventListener('click',(e)=>{\n    content.innerHTML='';\n    console.log('jes')\n    e.preventDefault();\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n});\n\nabout.addEventListener('click',(e)=>{\n    content.innerHTML='';\n    console.log('jes')\n    e.preventDefault();\n    content.appendChild(_about__WEBPACK_IMPORTED_MODULE_1___default()());\n});\n\ncontact.addEventListener('click',(e)=>{\n    content.innerHTML='';\n    console.log('jes')\n    e.preventDefault();\n    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\n//# sourceURL=webpack://restaurantpageodinproject/./src/index.js?");

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