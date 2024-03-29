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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_utils_customElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_components_pageDirectory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _js_components_getPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _js_components_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _src_js_components_setDraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);


/* utils */



/* components */




document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('html').classList.remove('no-js');
  Object(_js_utils_customElement__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])();
  Object(_js_components_modal__WEBPACK_IMPORTED_MODULE_3__["modal"])();
  Object(_js_components_pageDirectory__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_js_components_getPosts__WEBPACK_IMPORTED_MODULE_4__["getPosts"])();
  Object(_js_components_admin__WEBPACK_IMPORTED_MODULE_5__["admin"])();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomElement", function() { return createCustomElement; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var createCustomElement = function createCustomElement() {
  return customElements.define('ui-include', /*#__PURE__*/function (_HTMLElement) {
    _inherits(_class, _HTMLElement);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "connectedCallback",
      value: function () {
        var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var src;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                src = this.getAttribute('src');
                _context.next = 3;
                return fetch(src);
              case 3:
                _context.next = 5;
                return _context.sent.text();
              case 5:
                this.innerHTML = _context.sent;
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function connectedCallback() {
          return _connectedCallback.apply(this, arguments);
        }
        return connectedCallback;
      }()
    }]);
    return _class;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var modal = function modal() {
  var modalClass = 'modal';
  var openClass = "".concat(modalClass, "__open");
  var closeClass = "".concat(modalClass, "__close");
  var modalElem;
  document.addEventListener('click', function (event) {
    modalElem = document.querySelector('.modal');
    var current = event.target.closest('.post-trigger');
    if (current && modalElem) {
      modalElem.classList.add(openClass);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["addScrollLock"])();
    }
  });
  document.addEventListener('click', function (event) {
    var close = event.target.classList.contains(closeClass);
    if (close && modalElem) {
      closeModal();
    }
  });
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  var closeModal = function closeModal() {
    var modalContent = document.querySelector(".".concat(modalClass, "__content--inner"));
    var modalList = document.querySelector(".".concat(modalClass, "__list"));
    modalElem.classList.remove(openClass);
    modalContent.replaceChildren();
    modalList.replaceChildren();
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["removeScrollLock"])();
  };
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementScroll", function() { return getElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollLocked", function() { return isScrollLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollLock", function() { return addScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollLock", function() { return removeScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceSpaces", function() { return replaceSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceUnderscores", function() { return replaceUnderscores; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/**
 * Find out whether or not the given argument is an element that would react somewhat normally to DOM-manipulations.
 *
 * @since 3.7.0
 * @param {*} element - The element to check.
 * @returns {boolean} `true` if the given argument is an element (or document, or window), and `false` otherwise.
 */
function isElement(element) {
  return element instanceof Element || element instanceof Document || element instanceof Window;
}

/**
 * Get the current scroll values of the given element (or window). Will return an object containing
 * "left" and "top" properties, which are set to the scroll values, or false if no compatible element
 * was given.
 *
 * @param {Element|Window} [element=window]
 * @returns {{ left: number, top: number } | boolean}
 */
function getElementScroll() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  if (isElement(element)) {
    if (element instanceof Window) {
      return {
        left: element.pageXOffset || document.documentElement.scrollLeft,
        top: element.pageYOffset || document.documentElement.scrollTop
      };
    } else {
      return {
        left: element.scrollX || element.scrollLeft,
        top: element.scrollY || element.scrollTop
      };
    }
  } else {
    return false;
  }
}
var scrollLockClass = 'scroll-lock';
var scrollTop = 0;
var isScrollLocked = false;
var addScrollLock = function addScrollLock() {
  if (!isScrollLocked) {
    // Get scroll position
    var scrollPosition = getElementScroll();
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.style.marginTop = "".concat(-scrollPosition.top, "px");
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.add(scrollLockClass);
    // Remember state
    isScrollLocked = true;
    scrollTop = scrollPosition.top;
  }
};
var removeScrollLock = function removeScrollLock() {
  if (isScrollLocked) {
    var scrollPosition = getElementScroll();
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.remove(scrollLockClass);
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.style.marginTop = '';
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.style.marginLeft = '';
    // Set the scroll position to what it was before
    window.scrollTo(scrollPosition.left, scrollTop);
    // Remember state
    isScrollLocked = false;
  }
};
var replaceSpaces = function replaceSpaces(elem) {
  return elem.replace(/\s/g, '_');
};
var replaceUnderscores = function replaceUnderscores(elem) {
  return elem.replace(/_/g, ' ');
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
var global = {
  protocol: document.location.protocol,
  apiBaseURL: 'api.tumblr.com/v2/blog/',
  apiBlog: 'jessicaharbydotcom.tumblr.com',
  //apiBlog: 'jh-test.tumblr.com',
  oAuthConsumerKey: atob('MW5KZmtyMG9XZzBzTmxHS0ttNXB4NG43TVBETWFZb2x1R0NwbkZuRk1WejlJbHlIUFc='),
  blogURL: 'https://jessicaharbydotcom.tumblr.com/',
  docLocation: document.location,
  DOC: document.querySelector('html')
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var pageDirectory = function pageDirectory() {
  var dir = _global__WEBPACK_IMPORTED_MODULE_0__["global"].docLocation.pathname.split('/');
  var primaryDir = dir[1];
  var secondaryDir = dir[2];
  if (!primaryDir || primaryDir === 'public') {
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.add('index');
  } else if (secondaryDir) {
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.add(primaryDir);
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.add(secondaryDir);
  } else if (primaryDir) {
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.add(primaryDir);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (pageDirectory);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_attachDraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var postWrapper = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelector('ul.posts');
var postIndexWrapper = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelector('ul.index-posts');
var tagWrapper = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelector('ul.tags');
var dataWrapper = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelector('pre.data');
var loadingClass = 'loading';
var indexPage;
var tags = [];
var arrTags = [];
var allPosts = [];
var posts;
var resultFinal = [];
var getPosts = function getPosts() {
  var limit = 20;
  var options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  var retrieveMore = function retrieveMore(offset) {
    var url = new URL("https://".concat(_global__WEBPACK_IMPORTED_MODULE_0__["global"].apiBaseURL).concat(_global__WEBPACK_IMPORTED_MODULE_0__["global"].apiBlog, "/posts?offset=").concat(offset));
    url.searchParams.set('api_key', _global__WEBPACK_IMPORTED_MODULE_0__["global"].oAuthConsumerKey);
    _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.add(loadingClass);
    fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (response) {
      indexPage = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.contains('index');
      if (response) {
        var postLength = response.response.posts.length;
        var totalPosts = response.response.total_posts;
        posts = response.response.posts;
        posts.forEach(function (item) {
          allPosts.push(item);
          var parser = new DOMParser();
          var doc = parser.parseFromString(item.body, 'text/html');
          var type = 'text';
          if (doc.querySelectorAll('[data-provider]').length) {
            type = 'video';
          } else if (doc.querySelectorAll('.npf_link').length) {
            type = 'video video-embed';
          } else if (doc.querySelectorAll('audio').length) {
            type = 'audio';
          } else if (doc.querySelectorAll('.npf_quote').length) {
            type = 'quote';
          } else if (doc.querySelectorAll('.npf_chat').length) {
            type = 'chat';
          }
          if (postWrapper) {
            var tag = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["replaceSpaces"])(item.tags[0]);
            var template = "<li class=\"el ".concat(type, "\"><a href=").concat(tag, " class=\"post-trigger\">").concat(item.body, "</a></li>");
            postWrapper.insertAdjacentHTML('beforeend', template);
          }
        });
        if (dataWrapper) {
          dataWrapper.textContent = JSON.stringify(posts[0], null, 4);
          resetAjaxState();
          return;
        }

        /*
        Lets keep pushing all of the tags to the tag array
        */
        posts.map(function (item) {
          return item.tags.map(function (tag) {
            return tags.push(tag.toLowerCase());
          });
        });

        /* 
        As long as our total no of posts is greater than our counter keep iterating over the posts
        */
        if (totalPosts >= offset && postLength !== 0) {
          retrieveMore(offset + limit);
        }
        /* 
        Once our counter is larger or the same size as
        the total number of posts, 
        lets output the array of unique tags. 
        */
        if (offset >= totalPosts) {
          arrTags = _toConsumableArray(new Set(tags.sort()));
          setAllPostsToObjects();
          attachClickEvent();
          resetAjaxState();
          if (tagWrapper) {
            setTags();
          }
          if (indexPage) {
            indexPagePosts();
          }
        }
      }
    })["catch"](function (error) {
      console.error('Error:', error.message);
      resetAjaxState();
    })["finally"](function () {
      console.log('all posts loaded');
    });
  };
  retrieveMore(0);
};
var setTags = function setTags() {
  arrTags.forEach(function (item) {
    var itemHREF = item.replaceAll(' ', '+');
    var template = "<li><a href=".concat(_global__WEBPACK_IMPORTED_MODULE_0__["global"].blogURL, "/tagged/").concat(itemHREF, " target=\"_blank\">").concat(item, "</li>");
    tagWrapper.innerHTML += template;
  });
};
var setAllPostsToObjects = function setAllPostsToObjects() {
  var newSets = arrTags.map(function (item) {
    return allPosts.filter(function (postItem) {
      return postItem.tags[0] === item;
    });
  });
  resultFinal = arrTags.map(function (key, i) {
    key = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["replaceSpaces"])(key);
    return {
      name: key,
      value: newSets[i]
    };
  });
};
var attachClickEvent = function attachClickEvent() {
  var modalContent = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelector('.modal__content--inner');
  var modalList = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelector('.modal__list');
  _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.addEventListener('click', function (event) {
    var current = event.target.closest('.post-trigger');
    if (current) {
      event.preventDefault();
      var parser = new DOMParser();
      return resultFinal.forEach(function (item, index) {
        var itemName = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["replaceUnderscores"])(item.name);
        var targetName = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["replaceUnderscores"])(current.getAttribute('href'));
        var setName = resultFinal[index].value;
        if (itemName === targetName) {
          var firstItem = setName[0].body;
          setName.forEach(function (item) {
            var doc = parser.parseFromString(item.body, 'text/html');
            var images = doc.querySelectorAll('img');
            images.forEach(function (imageItem) {
              var thumbnail = imageItem.srcset.split(',')[0].split(' ')[0];
              var template = "<li><a href=\"#".concat(item.id, "\" class=\"thumbnail-trigger\"><img src=").concat(thumbnail, " /></a></li>");
              thumbnail ? modalList.insertAdjacentHTML('beforeend', template) : null;
            });
          });
          modalContent.insertAdjacentHTML('beforeend', firstItem);
        }
      });
    }
  });
  _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.addEventListener('click', function (event) {
    var current = event.target.closest('.thumbnail-trigger');
    if (current) {
      event.preventDefault();
      modalContent.replaceChildren();
      var href = current.href.split('#')[1];
      allPosts.forEach(function () {
        var newPost = allPosts.filter(function (item) {
          return item.id.toString() === href;
        });
        modalContent.innerHTML = newPost[0].body;
      });
    }
  });
};
var indexPagePosts = function indexPagePosts() {
  resultFinal.map(function (item) {
    var rndLeft = Math.round(Math.random() * 100);
    var rndTop = Math.round(Math.random() * 300);
    var template = "<li id=".concat(item.name, " style=\"left: ").concat(rndLeft, "px; top: ").concat(rndTop, "px\">\n            <a href=\"#\" class=\"post-trigger\">\n                <p class=\"item-name\">").concat(item.name, "<p>\n                <p>").concat(item.value[0].body, "</p>\n            </a>\n        </li>");
    postIndexWrapper.insertAdjacentHTML('beforeend', template);
    Object(_components_attachDraggable__WEBPACK_IMPORTED_MODULE_2__["attachDraggable"])();
  });
};
var resetAjaxState = function resetAjaxState() {
  return _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.remove(loadingClass);
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var admin = function admin() {
  _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.addEventListener('click', function (event) {
    var href = event.target.href && event.target.getAttribute('href') === 'admin';
    if (href) {
      event.preventDefault();
      _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.classList.toggle('admin');
    }
  });
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/


var arrLayout;
_global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.addEventListener('click', function (event) {
  var href = event.target.href && event.target.getAttribute('href') === 'save';
  if (href) {
    event.preventDefault();
    arrLayout = [];
    var boxes = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelectorAll('.index-posts > li');
    boxes.forEach(function (item) {
      var layout = {
        id: item.id,
        left: item.style.left,
        top: item.style.top,
        width: item.style.width,
        height: item.style.height
      };
      layout = JSON.stringify(layout);
      arrLayout.push(layout);
    });
    console.log(arrLayout);
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachDraggable", function() { return attachDraggable; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _utils_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/



var attachDraggable = function attachDraggable() {
  var boxes = _global__WEBPACK_IMPORTED_MODULE_0__["global"].DOC.querySelectorAll('.index-posts > li');
  var arrBoxes = _toConsumableArray(boxes);
  var draggableItem;
  for (var i = 0; i < arrBoxes.length; i++) {
    draggableItem = new _utils_draggable__WEBPACK_IMPORTED_MODULE_1__["draggable"](boxes[i]);
  }
  draggableItem.run();
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggable", function() { return draggable; });
/* harmony import */ var _components_attachDraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var draggingClass = 'is-dragging';
var draggable = /*#__PURE__*/function () {
  function draggable(element) {
    var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [document];
    _classCallCheck(this, draggable);
    this.node = node;
    this.el = element;
    if (this.el) {
      this.mouseDown = this.mouseDown.bind(this);
      this.mouseUp = this.mouseUp.bind(this);
      this.mouseMove = this.mouseMove.bind(this);
    }
  }
  _createClass(draggable, [{
    key: "setHandle",
    value: function setHandle(handle) {
      this.handle = handle;
      return this;
    }
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      this.callback = callback;
      return this;
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      var _this$callback;
      if ((_this$callback = this.callback) !== null && _this$callback !== void 0 && _this$callback.start) {
        this.callback.start(event, this.el);
      } else {
        this.el.classList.add(draggingClass);
      }
      var _iterator = _createForOfIteratorHelper(this.node),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          node.addEventListener('mouseup', this.mouseUp);
          node.addEventListener('mousemove', this.mouseMove);
          node.addEventListener('mouseleave', this.mouseUp);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.el.addEventListener('mouseleave', this.mouseUp);
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      var _this$callback2;
      if ((_this$callback2 = this.callback) !== null && _this$callback2 !== void 0 && _this$callback2.end) {
        this.callback.end(event, this.el);
      } else {
        this.el.classList.remove(draggingClass);
      }
      var _iterator2 = _createForOfIteratorHelper(this.node),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var node = _step2.value;
          node.removeEventListener('mouseup', this.mouseUp);
          node.removeEventListener('mousemove', this.mouseMove);
          node.removeEventListener('mouseleave', this.mouseUp);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.el.removeEventListener('mouseleave', this.mouseUp);
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      var _this$callback3;
      if ((_this$callback3 = this.callback) !== null && _this$callback3 !== void 0 && _this$callback3.move) {
        this.callback.move(event, this.el);
      } else {
        var style = window.getComputedStyle(this.el);
        var x = (parseFloat(style.getPropertyValue('left')) || 0) + event.movementX;
        var y = (parseFloat(style.getPropertyValue('top')) || 0) + event.movementY;
        var rect = this.el.getBoundingClientRect();
        var viewHeight = window.innerHeight || document.documentElement.clientHeight;
        var viewWidth = window.innerWidth || document.documentElement.clientWidth;
        var maxX = viewWidth - rect.width;
        var maxY = viewHeight - rect.height;
        var constrainedX = Math.max(0, Math.min(x, maxX));
        var constrainedY = Math.max(0, Math.min(y, maxY));
        this.el.style.position = 'absolute';
        this.el.style.top = constrainedY + 'px';
        this.el.style.left = constrainedX + 'px';
      }
    }
  }, {
    key: "run",
    value: function run() {
      var _this$handle;
      var handle = (_this$handle = this.handle) !== null && _this$handle !== void 0 ? _this$handle : this.el;
      handle.addEventListener('mousedown', this.mouseDown);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this$handle2;
      var handle = (_this$handle2 = this.handle) !== null && _this$handle2 !== void 0 ? _this$handle2 : this.el;
      handle.removeEventListener('mousedown', this.mouseDown);
    }
  }]);
  return draggable;
}();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map