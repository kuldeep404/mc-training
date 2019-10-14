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

var _optionValueSchema = _interopRequireDefault(require("./optionValueSchema"));

var _configSchema = _interopRequireDefault(require("./configSchema"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var required = _model["default"].required();

var baseSchema = _model["default"].baseSchema(); // To Discuss


var productModifierSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  config: {
    type: _configSchema["default"]
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  isRequired: {
    required: required,
    trim: true,
    type: Boolean
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  name: {
    trim: true,
    type: String
  },
  optionValues: [{
    trim: true,
    type: _optionValueSchema["default"]
  }],
  ownerId: {
    ref: 'users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  productId: {
    ref: 'product',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  sortOrder: {
    // To Discuss
    trim: true,
    type: Number
  },
  storeModifierId: {
    trim: true,
    type: Number
  },
  storeProductId: {
    trim: true,
    type: Number
  },
  type: {
    // To Discuss
    required: required,
    trim: true,
    type: String
  }
}), {
  collection: 'productModifier',
  timestamps: true
}); // index

productModifierSchema.index({
  name: 1
}, {
  unique: true
});

var _default = (0, _mongoose.model)('ProductModifier', productModifierSchema);

exports["default"] = _default;