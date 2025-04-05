"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var AdminSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  email: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  password: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  created_at: {
    type: Date,
    "default": Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    "default": Date.now,
    required: true
  }
});
var _default = exports["default"] = (0, _mongoose.model)("Admin", AdminSchema);