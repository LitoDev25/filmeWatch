"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var SeasonSchema = new _mongoose.Schema({
  movieId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  episodesBanner: String,
  episodes: [{
    name: String,
    href: String,
    releaseDate: String
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
var _default = exports["default"] = (0, _mongoose.model)("Season", SeasonSchema);