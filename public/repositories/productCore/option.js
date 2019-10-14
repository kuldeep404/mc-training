"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _model = _interopRequireDefault(require("../utils/model"));

var _configSchema = _interopRequireDefault(require("./configSchema"));

var _optionValueSchema = _interopRequireDefault(require("./optionValueSchema"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var required = _model["default"].required();

var baseSchema = _model["default"].baseSchema(); // attribute for woo-commerce
// To Do: StoreOption(attribute) & StoreOptionValue(attribute term) for woo-commerce


var optionSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  config: {
    // big-commerce
    trim: true,
    type: _configSchema["default"]
  },
  displayName: {
    // big-commerce
    trim: true,
    type: String
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  imageUrl: {
    // big-commerce
    trim: true,
    type: String
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  isVariant: {
    // woo-commerce // variation
    trim: true,
    type: Boolean
  },
  isVisible: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  name: {
    trim: true,
    type: String
  },
  ownerId: {
    ref: 'users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  position: {
    // woo-commerce
    trim: true,
    type: String
  },
  productId: {
    ref: 'product',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  sortOrder: {
    // big-commerce
    trim: true,
    type: Number
  },
  storeOptionId: {
    trim: true,
    type: Number
  },
  storeProductId: {
    trim: true,
    type: Number
  },
  storeVariantId: {
    trim: true,
    type: Number
  },
  type: {
    // big-commerce // woo-commerce
    "enum": _model["default"].optionType(),
    trim: true,
    type: String
  },
  values: [{
    // big-commerce // woo-commerce
    trim: true,
    type: _optionValueSchema["default"]
  }],
  variantId: {
    ref: 'productVariant',
    type: _mongoose["default"].Schema.Types.ObjectId
  }
}), {
  collection: 'productOption',
  timestamps: true
});

var _default = (0, _mongoose.model)('ProductOption', optionSchema);

exports["default"] = _default;