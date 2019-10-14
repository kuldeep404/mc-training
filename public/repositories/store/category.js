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

var categorySchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  customUrl: {
    // big-commerce
    isCustomized: {
      type: Boolean
    },
    url: {
      trim: true,
      type: String
    }
  },
  defaultProductSort: {
    // big-commerce
    "enum": _model["default"].bigCommerceCategoryProductSort(),
    trim: true,
    type: String
  },
  description: {
    trim: true,
    type: String
  },
  display: {
    // woo-commerce
    "enum": _model["default"].wooCommerceCategoryDisplay(),
    trim: true,
    type: String
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  handle: {
    // unique // woo-commerce //slug
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
  isVisible: {
    // big-commerce
    type: Boolean
  },
  layoutFile: {
    // big-commerce
    trim: true,
    type: String
  },
  metaDescription: {
    // big-commerce
    trim: true,
    type: String
  },
  metaKeywords: [{
    // big-commerce
    trim: true,
    type: String
  }],
  name: {
    // woo-commerce
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
    // big-commerce
    trim: true,
    type: String
  },
  publishedProductCount: {
    // woo-commerce
    trim: true,
    type: Number
  },
  searchKeyword: {
    // big-commerce
    trim: true,
    type: String
  },
  storeImage: {
    // woo-commerce
    alt: {
      trim: true,
      type: String
    },
    name: {
      trim: true,
      type: String
    },
    src: {
      trim: true,
      type: String
    },
    storeDateCreated: {
      trim: true,
      type: Date
    },
    storeDateCreatedGMT: {
      trim: true,
      type: Date
    },
    storeDateModified: {
      trim: true,
      type: Date
    },
    storeDateModifiedGMT: {
      trim: true,
      type: Date
    }
  },
  sortOrder: {
    // big-commerce, woo-commerce (menu_order)
    trim: true,
    type: Number
  },
  storeCategoryId: {
    // big-commerce, woo-commerce
    trim: true,
    type: Number
  },
  storeParentCategoryId: {
    // big-commerce, woo-commerce
    trim: true,
    type: String
  },
  totalView: {
    // big-commerce
    trim: true,
    type: Number
  }
}), {
  collection: 'storeCategory',
  timestamps: true
});

var _default = (0, _mongoose.model)('StoreCategory', categorySchema);

exports["default"] = _default;