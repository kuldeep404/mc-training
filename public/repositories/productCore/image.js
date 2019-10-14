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

var imageSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  alt: {
    // woo-commerce
    trim: true,
    type: String
  },
  description: {
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
  imageId: {
    ref: 'images',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  imageUrl: {
    // src // image_url
    required: required,
    trim: true,
    type: String
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  isThumbnail: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  name: {
    // woo-commerce
    trim: true,
    type: String
  },
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
    // big-commerce
    trim: true,
    type: Number
  },
  storeDateCreated: {
    trim: true,
    type: Date
  },
  storeDateCreatedGMT: {
    // woo-commerce
    trim: true,
    type: Date
  },
  storeDateModified: {
    trim: true,
    type: Date
  },
  storeDateModifiedGMT: {
    // woo-commerce
    trim: true,
    type: Date
  },
  storeImageId: {
    trim: true,
    type: Number
  },
  storeImagePath: {
    // big-commerce
    trim: true,
    type: String
  },
  storeProductId: {
    trim: true,
    type: Number
  },
  storeUrl: {
    // big-commerce
    standard: String,
    thumbnail: String,
    tiny: String,
    zoom: String
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
  collection: 'productImage',
  timestamps: true
});

var _default = (0, _mongoose.model)('ProductImage', imageSchema);

exports["default"] = _default;