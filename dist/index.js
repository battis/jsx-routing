(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@battis/require-init"), require("path-browserify"), require("vanilla-router"));
	else if(typeof define === 'function' && define.amd)
		define(["@battis/require-init", "path-browserify", "vanilla-router"], factory);
	else if(typeof exports === 'object')
		exports["BattisJsxRouting"] = factory(require("@battis/require-init"), require("path-browserify"), require("vanilla-router"));
	else
		root["BattisJsxRouting"] = factory(root["@battis/require-init"], root["path-browserify"], root["vanilla-router"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__battis_require_init__, __WEBPACK_EXTERNAL_MODULE_path_browserify__, __WEBPACK_EXTERNAL_MODULE_vanilla_router__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vanilla_router_1 = __importDefault(__webpack_require__(/*! vanilla-router */ "vanilla-router"));
const require_init_1 = __importDefault(__webpack_require__(/*! @battis/require-init */ "@battis/require-init"));
const path_browserify_1 = __importDefault(__webpack_require__(/*! path-browserify */ "path-browserify"));
/**
 * Static wrapper for vanilla-router/Router instance
 * TODO automate wrapping Router instance?
 */
class Routing extends require_init_1.default {
    static get root() {
        Routing.requireInitialization();
        return Routing.router.root;
    }
    static get currentPath() {
        return location.pathname.replace(RegExp(`^${Routing.router.root}(.*)`), "$1");
    }
    static init(options) {
        Routing.router = new vanilla_router_1.default(options);
        Routing.markInitialized();
        return Routing;
    }
    static add(rule, handler, options) {
        Routing.requireInitialization();
        Routing.router.add(rule, handler, options);
        return Routing;
    }
    static addRedirect(rule, redirect) {
        Routing.requireInitialization();
        Routing.router.add(rule, () => Routing.navigateTo(redirect));
        return Routing;
    }
    static navigateTo(path, state, silent) {
        Routing.requireInitialization();
        Routing.router.navigateTo(path, state, silent);
        return Routing;
    }
    static addUriListener() {
        Routing.router.addUriListener();
        return Routing;
    }
    static redirectTo(path, state, silent) {
        Routing.router.redirectTo(path, state, silent);
        return Routing;
    }
    static check() {
        Routing.router.check();
        return Routing;
    }
    static buildUrl(urlPath) {
        return (`${window.location.protocol}//` +
            path_browserify_1.default.join(window.location.host, Routing.router.root, urlPath));
    }
}
exports["default"] = Routing;


/***/ }),

/***/ "@battis/require-init":
/*!***************************************!*\
  !*** external "@battis/require-init" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_require_init__;

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_path_browserify__;

/***/ }),

/***/ "vanilla-router":
/*!*********************************!*\
  !*** external "vanilla-router" ***!
  \*********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_vanilla_router__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlDQUF5QyxtQkFBTyxDQUFDLHNDQUFnQjtBQUNqRSx1Q0FBdUMsbUJBQU8sQ0FBQyxrREFBc0I7QUFDckUsMENBQTBDLG1CQUFPLENBQUMsd0NBQWlCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG9CQUFvQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDekRmOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0JhdHRpc0pzeFJvdXRpbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0JhdHRpc0pzeFJvdXRpbmcvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9CYXR0aXNKc3hSb3V0aW5nL2V4dGVybmFsIHVtZCBcIkBiYXR0aXMvcmVxdWlyZS1pbml0XCIiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4Um91dGluZy9leHRlcm5hbCB1bWQgXCJwYXRoLWJyb3dzZXJpZnlcIiIsIndlYnBhY2s6Ly9CYXR0aXNKc3hSb3V0aW5nL2V4dGVybmFsIHVtZCBcInZhbmlsbGEtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4Um91dGluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CYXR0aXNKc3hSb3V0aW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4Um91dGluZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4Um91dGluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGJhdHRpcy9yZXF1aXJlLWluaXRcIiksIHJlcXVpcmUoXCJwYXRoLWJyb3dzZXJpZnlcIiksIHJlcXVpcmUoXCJ2YW5pbGxhLXJvdXRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYmF0dGlzL3JlcXVpcmUtaW5pdFwiLCBcInBhdGgtYnJvd3NlcmlmeVwiLCBcInZhbmlsbGEtcm91dGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJhdHRpc0pzeFJvdXRpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYmF0dGlzL3JlcXVpcmUtaW5pdFwiKSwgcmVxdWlyZShcInBhdGgtYnJvd3NlcmlmeVwiKSwgcmVxdWlyZShcInZhbmlsbGEtcm91dGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCYXR0aXNKc3hSb3V0aW5nXCJdID0gZmFjdG9yeShyb290W1wiQGJhdHRpcy9yZXF1aXJlLWluaXRcIl0sIHJvb3RbXCJwYXRoLWJyb3dzZXJpZnlcIl0sIHJvb3RbXCJ2YW5pbGxhLXJvdXRlclwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX3JlcXVpcmVfaW5pdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BhdGhfYnJvd3NlcmlmeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3ZhbmlsbGFfcm91dGVyX18pID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbmlsbGFfcm91dGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZhbmlsbGEtcm91dGVyXCIpKTtcbmNvbnN0IHJlcXVpcmVfaW5pdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAYmF0dGlzL3JlcXVpcmUtaW5pdFwiKSk7XG5jb25zdCBwYXRoX2Jyb3dzZXJpZnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpKTtcbi8qKlxuICogU3RhdGljIHdyYXBwZXIgZm9yIHZhbmlsbGEtcm91dGVyL1JvdXRlciBpbnN0YW5jZVxuICogVE9ETyBhdXRvbWF0ZSB3cmFwcGluZyBSb3V0ZXIgaW5zdGFuY2U/XG4gKi9cbmNsYXNzIFJvdXRpbmcgZXh0ZW5kcyByZXF1aXJlX2luaXRfMS5kZWZhdWx0IHtcbiAgICBzdGF0aWMgZ2V0IHJvb3QoKSB7XG4gICAgICAgIFJvdXRpbmcucmVxdWlyZUluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgIHJldHVybiBSb3V0aW5nLnJvdXRlci5yb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRQYXRoKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZShSZWdFeHAoYF4ke1JvdXRpbmcucm91dGVyLnJvb3R9KC4qKWApLCBcIiQxXCIpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5pdChvcHRpb25zKSB7XG4gICAgICAgIFJvdXRpbmcucm91dGVyID0gbmV3IHZhbmlsbGFfcm91dGVyXzEuZGVmYXVsdChvcHRpb25zKTtcbiAgICAgICAgUm91dGluZy5tYXJrSW5pdGlhbGl6ZWQoKTtcbiAgICAgICAgcmV0dXJuIFJvdXRpbmc7XG4gICAgfVxuICAgIHN0YXRpYyBhZGQocnVsZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBSb3V0aW5nLnJlcXVpcmVJbml0aWFsaXphdGlvbigpO1xuICAgICAgICBSb3V0aW5nLnJvdXRlci5hZGQocnVsZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBSb3V0aW5nO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkUmVkaXJlY3QocnVsZSwgcmVkaXJlY3QpIHtcbiAgICAgICAgUm91dGluZy5yZXF1aXJlSW5pdGlhbGl6YXRpb24oKTtcbiAgICAgICAgUm91dGluZy5yb3V0ZXIuYWRkKHJ1bGUsICgpID0+IFJvdXRpbmcubmF2aWdhdGVUbyhyZWRpcmVjdCkpO1xuICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICB9XG4gICAgc3RhdGljIG5hdmlnYXRlVG8ocGF0aCwgc3RhdGUsIHNpbGVudCkge1xuICAgICAgICBSb3V0aW5nLnJlcXVpcmVJbml0aWFsaXphdGlvbigpO1xuICAgICAgICBSb3V0aW5nLnJvdXRlci5uYXZpZ2F0ZVRvKHBhdGgsIHN0YXRlLCBzaWxlbnQpO1xuICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICB9XG4gICAgc3RhdGljIGFkZFVyaUxpc3RlbmVyKCkge1xuICAgICAgICBSb3V0aW5nLnJvdXRlci5hZGRVcmlMaXN0ZW5lcigpO1xuICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICB9XG4gICAgc3RhdGljIHJlZGlyZWN0VG8ocGF0aCwgc3RhdGUsIHNpbGVudCkge1xuICAgICAgICBSb3V0aW5nLnJvdXRlci5yZWRpcmVjdFRvKHBhdGgsIHN0YXRlLCBzaWxlbnQpO1xuICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrKCkge1xuICAgICAgICBSb3V0aW5nLnJvdXRlci5jaGVjaygpO1xuICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICB9XG4gICAgc3RhdGljIGJ1aWxkVXJsKHVybFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIChgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly9gICtcbiAgICAgICAgICAgIHBhdGhfYnJvd3NlcmlmeV8xLmRlZmF1bHQuam9pbih3aW5kb3cubG9jYXRpb24uaG9zdCwgUm91dGluZy5yb3V0ZXIucm9vdCwgdXJsUGF0aCkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRpbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2JhdHRpc19yZXF1aXJlX2luaXRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGF0aF9icm93c2VyaWZ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3ZhbmlsbGFfcm91dGVyX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=