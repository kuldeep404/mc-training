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

var brandSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  customUrl: {
    // To Discuss
    isCustomized: {
      trim: true,
      type: Boolean
    },
    url: {
      trim: true,
      type: String
    }
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  imageId: {
    ref: 'images',
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  imageUrl: {
    trim: true,
    type: String
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  metaDescription: {
    trim: true,
    type: String
  },
  metaKeywords: [{
    trim: true,
    type: String
  }],
  name: {
    required: required,
    trim: true,
    type: String
  },
  ownerId: {
    ref: 'users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  pageTitle: {
    trim: true,
    type: String
  },
  searchKeyword: {
    trim: true,
    type: String
  },
  storeBrandId: {
    trim: true,
    type: Number
  }
}), {
  collection: 'storeBrand',
  timestamps: true
}); // index

brandSchema.index({
  name: 1,
  ownerId: 1
}, {
  unique: true
});

var _default = (0, _mongoose.model)('StoreBrand', brandSchema);

exports["default"] = _default;