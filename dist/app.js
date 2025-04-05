"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _routes2 = _interopRequireDefault(require("./routes.js"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
require("dotenv/config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = new (/*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.app = (0, _express["default"])();
    this.port = process.env.PORT;
    _mongoose["default"].connect(process.env.CONNECTION_STRING);
    this.middlewares();
    this.routes();
  }
  return _createClass(App, [{
    key: "port",
    get: function get() {
      return this._port;
    },
    set: function set(prt) {
      var selectPort;
      if (typeof prt === "string") {
        selectPort = Number(prt);
      } else {
        selectPort = prt;
      }
      this._port = selectPort;
    }
  }, {
    key: "middlewares",
    value: function middlewares() {
      this.app.use(_express["default"].json());
      this.app.use((0, _cors["default"])());
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use(_routes2["default"].getRoutes());
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;
      this.app.listen(this.port, function () {
        return console.log("\n                                Servidor Online!\n                        V\xE1 para: http://localhost:".concat(_this.port, "\n            "));
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.listen();
    }
  }]);
}())();