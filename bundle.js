/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar chats = {\n  'Дженнифер': [{\n    \"name\": \"Дженнифер\",\n    \"time\": \"10:40\",\n    \"content\": \"Я тут кое-что нарисовала. Напиши, как освободишься.\"\n  }, {\n    \"name\": \"Мое имя\",\n    \"time\": \"10:50\",\n    \"content\": \"Хорошо. Освобожусь где-то через час.\"\n  }, {\n    \"name\": \"Дженнифер\",\n    \"time\": \"10:55\",\n    \"content\": \"Жду!\"\n  }],\n  'Сара': [{\n    \"name\": \"Сара\",\n    \"time\": \"10:39\",\n    \"content\": \"Привет. Можешь мне немного помочь?\"\n  }, {\n    \"name\": \"Мое имя\",\n    \"time\": \"10:40\",\n    \"content\": \"Да, конечно. Что такое?\"\n  }, {\n    \"name\": \"Сара\",\n    \"time\": \"10:45\",\n    \"content\": \"Рассказываю\"\n  }]\n};\nmain();\nfunction main() {\n  var pathname = document.location.pathname;\n  var filename = pathname.split('/').slice(-1)[0];\n  if (filename === 'chat_list.html') {\n    var dialogue_list = document.querySelector(\".messages\");\n    restoreDialogues(dialogue_list);\n  } else if (filename === 'index.html' || filename === '') {\n    var myUrl = new URL(document.location.href);\n    var userName = myUrl.searchParams.get('name');\n    userName = userName ? userName : \"Дженнифер\";\n    chat_page(userName);\n  }\n}\nfunction chat_page(name) {\n  console.log(name);\n  // document.location.pathname = '/index.html'\n  var chatName = document.querySelector('.name');\n  chatName.textContent = name;\n  var myName = \"Мое имя\";\n  var form = document.querySelector('form');\n  var input = document.querySelector('.form-input');\n  var message_list = document.querySelector('.message-list');\n  if (!localStorage.getItem(\"chats\")) {\n    localStorage.setItem(\"chats\", JSON.stringify(chats));\n  }\n  var chatHistory = JSON.parse(localStorage.getItem(\"chats\"));\n  var messages = chatHistory[name];\n  restoreHistory(messages, message_list, myName);\n  form.addEventListener('submit', handleSubmit);\n  form.addEventListener('keypress', handleKeyPress);\n  function handleSubmit(event) {\n    event.preventDefault();\n    if (input.value === \"\") return;\n    var message = {\n      name: myName,\n      time: new Date().toLocaleTimeString().slice(0, -3),\n      content: input.value\n    };\n    chatHistory[name].push(message);\n    document.querySelector('.form-input').value = \"\";\n    localStorage.setItem(\"chats\", JSON.stringify(chatHistory));\n    var localData = JSON.parse(localStorage.getItem(\"chats\"))[name];\n    var last = localData.length - 1;\n    var templateDiv = \"\\n            <div class='message-bubble my-message'>\\n                <div class='message'>\\n                     <p>\".concat(localData[last].content, \"</p>\\n                      <div class=\\\"info\\\">\\n                         <time>\").concat(localData[last].time, \"</time>\\n                        <i class=\\\"material-icons\\\">done_all</i>\\n                     </div>\\n                 </div>\\n            </div>\");\n    message_list.innerHTML += templateDiv;\n  }\n  function handleKeyPress(event) {\n    if (event.keyCode === 13) {\n      form.dispatchEvent(new Event('submit'));\n    }\n  }\n}\nfunction restoreHistory(messages, message_list, myName) {\n  messages.forEach(function (message) {\n    var class_name = message.name === myName ? \"my-message\" : \"\";\n    var check = message.name === myName ? \"done_all\" : \"\";\n    var templateDiv = \"\\n            <div class='message-bubble \".concat(class_name, \"'>\\n                <div class='message'>\\n                     <p>\").concat(message.content, \"</p>\\n                     <div class=\\\"info\\\">\\n                         <time>\").concat(message.time, \"</time>\\n                        <i class=\\\"material-icons\\\">\").concat(check, \"</i>\\n                     </div>\\n                 </div>\\n            </div>\");\n    message_list.innerHTML += templateDiv;\n  });\n}\nfunction restoreDialogues(dialogue_list) {\n  if (!localStorage.getItem(\"chats\")) {\n    localStorage.setItem(\"chats\", JSON.stringify(chats));\n  }\n  var chatHistory = JSON.parse(localStorage.getItem(\"chats\"));\n  for (var key in chatHistory) {\n    var templateDiv = \"\\n                <a href=\\\"index.html?name=\".concat(key, \"\\\" class=\\\"dialogue\\\">\\n                    <i class=\\\"material-icons\\\">account_circle</i>\\n                    <div class=\\\"dialogue-text\\\">\\n                        <div class=\\\"dialogue-user-text\\\">\\n                            <p class=\\\"dialogue-name\\\">\").concat(key, \"</p>\\n                            <p class=\\\"dialogue-message\\\">\").concat(chatHistory[key].slice(-1)[0][\"content\"], \"</p>\\n                        </div>\\n                        <div class=\\\"dialogue-nums\\\">\\n                            <p class=\\\"dialogue-time\\\">\").concat(chatHistory[key].slice(-1)[0][\"time\"], \"</p>\\n                            <i class=\\\"material-icons\\\">done_all</i>\\n                            <!--                        <p class=\\\"dialogue-counter\\\">99</p>-->\\n                        </div>\\n                    </div>\\n                </a> \");\n    dialogue_list.innerHTML += templateDiv;\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });