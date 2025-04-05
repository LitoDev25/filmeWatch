"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _index = _interopRequireDefault(require("./controllers/AdminController/index.js"));
var _isAutenticated = _interopRequireDefault(require("./middlewares/isAutenticated.js"));
var _index2 = _interopRequireDefault(require("./controllers/GenderController/index.js"));
var _index3 = _interopRequireDefault(require("./controllers/MovieController/index.js"));
var _index4 = _interopRequireDefault(require("./controllers/SeasonController/index.js"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var resolve = _path["default"].resolve;
var _filename = (0, _url.fileURLToPath)(import.meta.url); // get the resolved path to the file
var _dirname = _path["default"].dirname(_filename);
var _default = exports["default"] = new (/*#__PURE__*/function () {
  function RouterApp() {
    _classCallCheck(this, RouterApp);
    this.routes = (0, _express.Router)();
    this.setRoutes();
  }

  /**
   * @param {Request} req 
   * @param {Response} res 
   */
  return _createClass(RouterApp, [{
    key: "home",
    value: function home(req, res) {
      return res.sendFile(_path["default"].join(_dirname, 'static', 'index.html'));
    }
  }, {
    key: "admin",
    value: function admin() {
      this.routes.post('/admin', _index["default"].create);
      this.routes.post('/session', _index["default"].auth);
      this.routes.get('/admin', _isAutenticated["default"], _index["default"].index);
      this.routes.get('/admin/:id', _isAutenticated["default"], _index["default"].show);
      this.routes.put('/admin/:id', _isAutenticated["default"], _index["default"].update);
      this.routes["delete"]('/admin/:id', _isAutenticated["default"], _index["default"]["delete"]);
    }
  }, {
    key: "gender",
    value: function gender() {
      this.routes.get('/gender', _isAutenticated["default"], _index2["default"].index);
      this.routes.post('/gender', _isAutenticated["default"], _index2["default"].create);
      this.routes.get('/gender/:id', _isAutenticated["default"], _index2["default"].show);
      this.routes.put('/gender/:id', _isAutenticated["default"], _index2["default"].update);
      this.routes["delete"]('/gender/:id', _isAutenticated["default"], _index2["default"]["delete"]);
    }
  }, {
    key: "movie",
    value: function movie() {
      this.routes.post('/movie', _isAutenticated["default"], _index3["default"].create);
      this.routes.get('/movie', _index3["default"].index);
      this.routes.get('/movie/:id', _index3["default"].show);
    }
  }, {
    key: "season",
    value: function season() {
      this.routes.post('/season', _isAutenticated["default"], _index4["default"].create);
      this.routes.get('/season', _index4["default"].index);
      this.routes.get('/season/:id', _index4["default"].show);
    }
  }, {
    key: "setRoutes",
    value: function setRoutes() {
      this.routes.get('/', this.home);
      this.admin();
      this.gender();
      this.movie();
      this.season();
    }
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      return this.routes;
    }
  }]);
}())();