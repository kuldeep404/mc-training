"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _model = _interopRequireDefault(require("../utils/model"));

var required = _model["default"].required();

var _default = new _mongoose.Schema({
  isDefault: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  label: {
    // big-commerce // woo-commerce
    required: required,
    type: String
  },
  // optionId: {
  //   ref : 'productOption',
  //   required,
  //   type: mongoose.Schema.Types.ObjectId,
  // },
  sortOrder: {
    // big-commerce
    // required,
    type: Number
  },
  // storeOptionId: {
  //   trim: true,
  //   type: Number,
  // },
  storeOptionValueId: {
    // big-commerce
    trim: true,
    type: Number
  },
  valueData: {
    // big-commerce
    trim: true,
    type: Object
  }
});

exports["default"] = _default;