"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var MovieSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  poster: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  audio: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  episode: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  subtitled: {
    type: String,
    required: true,
    maxlenght: 255,
    minlenght: 4
  },
  sinopse: {
    type: String,
    required: true
  },
  gender: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Gender",
    "default": null
  }],
  seasons: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Season',
    "default": null
  }],
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
var _default = exports["default"] = (0, _mongoose.model)("Movie", MovieSchema);