"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isAutenticated;
require("dotenv/config");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var verify = _jsonwebtoken["default"].verify;

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function isAutenticated(req, res, next) {
  var authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({
      message: "não autorizado"
    }).end();
  }
  var _authToken$split = authToken.split(" "),
    _authToken$split2 = _slicedToArray(_authToken$split, 2),
    token = _authToken$split2[1];
  try {
    var _verify = verify(token, process.env.JWT_SECRET),
      sub = _verify.sub;
    req.admin_id = sub;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: "Falha na requisição"
    }).end();
  }
}