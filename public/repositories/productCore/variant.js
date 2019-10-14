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

var _ = require(".");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var required = _model["default"].required();

var baseSchema = _model["default"].baseSchema();

var variantSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  binPickingNumber: {
    // big-commerce
    trim: true,
    type: String
  },
  description: {
    // woo-commerce
    trim: true,
    type: String
  },
  dimension: {
    depth: {
      trim: true,
      type: Number
    },
    height: {
      trim: true,
      type: Number
    },
    width: {
      trim: true,
      type: Number
    }
  },
  downloads: [{
    // woo-commerce
    fileId: {
      required: required,
      trim: true,
      type: String
    },
    name: {
      required: required,
      trim: true,
      type: String
    },
    url: {
      required: required,
      trim: true,
      type: String
    }
  }],
  downloadLimit: {
    // woo-commerce
    trim: true,
    type: Number
  },
  downloadExpiry: {
    // woo-commerce
    trim: true,
    type: Number
  },
  ecommercePlatform: {
    "enum": _model["default"].ecommercePlatform(),
    required: required,
    trim: true,
    type: String
  },
  fixedCostShippingPrice: {
    // big-commerce
    trim: true,
    type: Number
  },
  images: {
    // woo-commerce
    trim: true,
    type: [{
      ref: _.ProductImage,
      type: _mongoose["default"].Schema.Types.ObjectId
    }]
  },
  inventoryId: {
    ref: _.ProductInventory,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  isDownloadable: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  isFreeShipping: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isPurchasable: {
    // woo-commerce purchaseable
    trim: true,
    type: Boolean
  },
  isPurchasingDisabled: {
    // big-commerce purchasing_disabled
    "default": false,
    trim: true,
    type: Boolean
  },
  isSynced: {
    trim: true,
    type: Boolean
  },
  isVirtual: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  metaData: [{
    // woo-commerce // meta_data
    key: {
      trim: true,
      type: String
    },
    storeMetaId: {
      trim: true,
      type: Number
    },
    value: {
      trim: true,
      type: String
    }
  }],
  options: [{
    ref: _.ProductOption,
    type: _mongoose["default"].Schema.Types.ObjectId
  }],
  ownerId: {
    ref: 'users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  price: {
    trim: true,
    type: Number
  },
  priceId: {
    ref: _.ProductPrice,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  productId: {
    ref: 'product',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  purchasingDisabledMessage: {
    // big-commerce
    trim: true,
    type: String
  },
  shippingClass: {
    // woo-commerce
    trim: true,
    type: String
  },
  shippingClassId: {
    // woo-commerce
    trim: true,
    type: Number
  },
  sortOrder: {
    // woo-commerce menu_order
    trim: true,
    type: Number
  },
  // status: {
  //   trim: true,
  //   type: String,
  // },
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
  storeProductId: {
    trim: true,
    type: Number
  },
  storeShippingClassId: {
    // woo-commerce
    trim: true,
    type: Number
  },
  storeSkuId: {
    // big-commerce
    trim: true,
    type: Number
  },
  storeVariantId: {
    trim: true,
    type: Number
  },
  storeVariantLink: {
    // woo-commerce
    trim: true,
    type: String
  },
  storeStatus: {
    // woo-commerce
    "enum": _model["default"].wooCommerceProductStatus(),
    trim: true,
    type: String
  },
  taxId: {
    ref: _.ProductTax,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  // thumbnails: [{ // To Discuss
  //   code    : String,
  //   name    : String,
  //   position: Number,
  //   url     : {
  //     type: String,
  //   },
  // }],
  // type: { // To Discuss
  //   trim: true,
  //   type: String,
  // },
  upc: {
    // big-commerce
    trim: true,
    type: String
  },
  // variantAttribute: [{ // To Discuss
  //   name : String,
  //   style: {
  //     type: String,
  //   },
  //   value: String,
  // }],
  weight: {
    trim: true,
    type: Number
  }
}), {
  collection: 'productVariant',
  timestamps: true
});

var _default = (0, _mongoose.model)('ProductVariant', variantSchema);

exports["default"] = _default;