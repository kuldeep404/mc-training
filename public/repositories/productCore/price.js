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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var required = _model["default"].required();

var baseSchema = _model["default"].baseSchema();

var priceSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  calculatedPrice: {
    // big-commerce
    trim: true,
    type: Number
  },
  costPrice: {
    // big-commerce
    trim: true,
    type: Number
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  isSale: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  ownerId: {
    ref: 'users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  price: {
    trim: true,
    type: Number
  },
  priceHtml: {
    // woo-commerce
    trim: true,
    type: String
  },
  priceQuantity: {
    trim: true,
    type: Number
  },
  productId: {
    ref: 'product',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  regularPrice: {
    // woo-commerce
    trim: true,
    type: Number
  },
  retailPrice: {
    // big-commerce
    trim: true,
    type: Number
  },
  salePrice: {
    // if value, overwrite price field value
    trim: true,
    type: Number
  },
  storeSaleFrom: {
    // woo-commerce
    trim: true,
    type: Date
  },
  storeSaleFromGMT: {
    // woo-commerce
    trim: true,
    type: Date
  },
  storeSaleTo: {
    // woo-commerce
    trim: true,
    type: Date
  },
  storeSaleToGMT: {
    // woo-commerce
    trim: true,
    type: Date
  },
  storeProductId: {
    trim: true,
    type: Number
  },
  storeVariantId: {
    trim: true,
    type: Number
  },
  variantId: {
    ref: 'productVariant',
    type: _mongoose["default"].Schema.Types.ObjectId
  }
}), {
  collection: 'productPrice',
  timestamps: true
});

var _default = (0, _mongoose.model)('ProductPrice', priceSchema);

exports["default"] = _default;