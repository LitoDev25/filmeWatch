"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;
var _app = _interopRequireDefault(require("./app.js"));
var _serverlessHttp = _interopRequireDefault(require("serverless-http"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_app["default"].run();
var api = _app["default"].app();
var handler = exports.handler = (0, _serverlessHttp["default"])(api);