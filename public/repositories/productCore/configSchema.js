"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _model = _interopRequireDefault(require("../utils/model"));

var required = _model["default"].required(); // big-commerce


var _default = new _mongoose.Schema({
  checkboxLabel: {
    trim: true,
    type: String
  },
  dateEarliestValue: {
    trim: true,
    type: String
  },
  dateLatestValue: {
    trim: true,
    type: String
  },
  dateLimitMode: {
    "enum": _model["default"].bigCommerceConfigDateLimit(),
    trim: true,
    type: String
  },
  defaultValue: {
    trim: true,
    type: String
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  fileMaxSize: {
    trim: true,
    type: Number
  },
  fileTypeMode: {
    "enum": _model["default"].bigCommerceConfigFileType(),
    trim: true,
    type: String
  },
  fileTypeOther: [{
    trim: true,
    type: String
  }],
  fileTypeSupported: [{
    trim: true,
    type: String
  }],
  isCheckedByDefault: {
    trim: true,
    type: Boolean
  },
  isDateLimited: {
    trim: true,
    type: Boolean
  },
  isNumberIntegerOnly: {
    trim: true,
    type: Boolean
  },
  isNumberLimited: {
    trim: true,
    type: Boolean
  },
  isProductListAdjustPricing: {
    trim: true,
    type: Boolean
  },
  isProductListAdjustInventory: {
    trim: true,
    type: Boolean
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  isTextCharacterLimited: {
    trim: true,
    type: Boolean
  },
  isTextLineLimited: {
    trim: true,
    type: Boolean
  },
  numberHighestValue: {
    trim: true,
    type: Number
  },
  numberLimitMode: {
    "enum": _model["default"].bigCommerceConfigNumberLimit(),
    trim: true,
    type: String
  },
  numberLowestValue: {
    trim: true,
    type: Number
  },
  productListShipping: {
    // product_list_shipping_calc
    "enum": _model["default"].bigCommerceConfigProductListShipping(),
    trim: true,
    type: String
  },
  textMaxLength: {
    trim: true,
    type: Number
  },
  textMaxLine: {
    trim: true,
    type: Number
  },
  textMinLength: {
    trim: true,
    type: Number
  }
});

exports["default"] = _default;