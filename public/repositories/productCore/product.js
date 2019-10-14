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

var _store = require("../store");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var required = _model["default"].required();

var baseSchema = _model["default"].baseSchema(); // To DO: Store Shipping Class woo-commerce


var productSchema = new _mongoose.Schema(_objectSpread({}, baseSchema, {
  availability: {
    // big-commerce
    trim: true,
    type: String
  },
  availabilityDescription: {
    // big-commerce
    trim: true,
    type: String
  },
  averageRating: {
    // woo-commerce
    trim: true,
    type: Number
  },
  baseVariantId: {
    // big-commerce
    ref: _.ProductVariant,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  binPickingNumber: {
    // big-commerce
    trim: true,
    type: String
  },
  brand: {
    // big-commerce
    ref: _store.StoreBrand,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  bulkPrices: [{
    ref: _.ProductBulkPrice,
    type: _mongoose["default"].Schema.Types.ObjectId
  }],
  // calculatedWeight: {
  //   trim: true,
  //   type: Number,
  // },
  // catalogId: {
  //   type: [{
  //     ref : StoreCatalog,
  //     type: mongoose.Schema.Types.ObjectId,
  //   }],
  // },
  catalogVisibility: {
    // woo-commerce
    "enum": _model["default"].wooCommerceCatalogVisibility(),
    trim: true,
    type: String
  },
  categories: {
    type: [{
      ref: _store.StoreCategory,
      type: _mongoose["default"].Schema.Types.ObjectId
    }]
  },
  condition: {
    // big-commerce
    "enum": _model["default"].bigCommerceProductCondition(),
    trim: true,
    type: String
  },
  customUrl: {
    // big-commerce
    isCustomized: {
      trim: true,
      type: Boolean
    },
    url: {
      trim: true,
      type: String
    }
  },
  defaultOptions: [{
    // woo-commerce // default_attributes
    name: {
      trim: true,
      type: String
    },
    storeOptionId: {
      trim: true,
      type: Number
    },
    value: {
      // option
      trim: true,
      type: String
    }
  }],
  description: {
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
  externalUrl: {
    // woo-commerce
    trim: true,
    type: String
  },
  externalUrlButtonText: {
    // woo-commerce
    trim: true,
    type: String
  },
  fixedCostShippingPrice: {
    // big-commerce
    trim: true,
    type: Number
  },
  giftWrappingOptions: [Number],
  // big-commerce gift_wrapping_options_list
  giftWrappingType: {
    // big-commerce
    "enum": _model["default"].bigCommerceGiftWrappingType(),
    trim: true,
    type: String
  },
  gtin: {
    // big-commerce
    trim: true,
    type: String
  },
  handle: {
    trim: true,
    type: String
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
  isConditionShown: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isDownloadable: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  isFeatured: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isFreeShipping: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isOpenGraphUseImage: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isOpenGraphUseMetaDescription: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isOpenGraphUseProductName: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isPreOrderOnly: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isPriceHidden: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  isPurchasable: {
    // woo-commerce // data is coming via isPurchaseable: "purchaseable",
    trim: true,
    type: Boolean
  },
  isReviewAllowed: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  isShipping: {
    // woo-commerce // shipping_required
    trim: true,
    type: Boolean
  },
  isShippingTaxable: {
    // woo-commerce
    trim: true,
    type: Boolean
  },
  isStock: {
    // woo-commerce
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
  isVisible: {
    // big-commerce
    trim: true,
    type: Boolean
  },
  layoutFile: {
    // big-commerce
    trim: true,
    type: String
  },
  maxOrderQuantity: {
    // big-commerce
    trim: true,
    type: Number
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
      type: _mongoose.Schema.Types.Mixed
    }
  }],
  metaDescription: {
    // big-commerce
    trim: true,
    type: String
  },
  metaKeywords: {
    // big-commerce
    trim: true,
    type: [String]
  },
  minOrderQuantity: {
    // big-commerce
    trim: true,
    type: Number
  },
  modifiers: [{
    // To Discuss
    ref: _.ProductModifier,
    type: _mongoose["default"].Schema.Types.ObjectId
  }],
  mpn: {
    // big-commerce
    trim: true,
    type: String
  },
  name: {
    required: required,
    trim: true,
    type: String
  },
  openGraphDescription: {
    // big-commerce
    trim: true,
    type: String
  },
  openGraphTitle: {
    // big-commerce
    trim: true,
    type: String
  },
  openGraphType: {
    // big-commerce
    "enum": _model["default"].bigCommerceProductGraphType(),
    trim: true,
    type: String
  },
  options: [{
    ref: _.ProductOption,
    type: _mongoose["default"].Schema.Types.ObjectId
  }],
  ownerId: {
    ref: 'Users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  pageTitle: {
    // big-commerce
    trim: true,
    type: String
  },
  preOrderMessage: {
    // big-commerce
    trim: true,
    type: String
  },
  preOrderReleaseDate: {
    // big-commerce
    trim: true,
    type: Date
  },
  price: {
    trim: true,
    type: Number
  },
  priceHiddenLabel: {
    // big-commerce
    trim: true,
    type: String
  },
  priceId: {
    ref: _.ProductPrice,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  primaryImage: Object,
  // To Discuss
  productTaxCode: {
    // big-commerce
    trim: true,
    type: String
  },
  purchaseNote: {
    // woo-commerce
    trim: true,
    type: String
  },
  ratingCount: {
    // rating_count reviews_count
    trim: true,
    type: Number
  },
  reviewRatingSum: {
    // big-commerce
    trim: true,
    type: Number
  },
  searchKeyword: {
    // big-commerce
    trim: true,
    type: String
  },
  shortDescription: {
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
    // sort_order, menu_order
    trim: true,
    type: Number
  },
  storeBaseVariantId: {
    // big-commerce
    trim: true,
    type: Number
  },
  storeCrossSellProductIds: Array,
  // woo-commerce
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
  storeDeletedAt: {
    trim: true,
    type: Date
  },
  storeDeletedBy: {
    trim: true,
    type: String
  },
  storeGroupedProductIds: Array,
  // woo-commerce
  storeProductId: {
    trim: true,
    type: Number
  },
  storeProductLink: {
    // woo-commerce
    trim: true,
    type: String
  },
  storeProductParentId: {
    trim: true,
    type: Number
  },
  storeRelatedProductIds: Array,
  // woo-commerce related_ids related_products
  storeStatus: {
    // woo-commerce
    "enum": _model["default"].wooCommerceProductStatus(),
    trim: true,
    type: String
  },
  storeUpsellProductIds: Array,
  // woo-commerce
  storeShippingClassId: {
    // woo-commerce
    trim: true,
    type: Number
  },
  // summary: {
  //   trim: true,
  //   type: String,
  // },
  tags: {
    // woo-commerce
    type: [{
      ref: _store.StoreTag,
      type: _mongoose["default"].Schema.Types.ObjectId
    }]
  },
  taxId: {
    ref: _.ProductTax,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  thumbnails: Array,
  // To Discuss
  totalSold: {
    trim: true,
    type: Number
  },
  type: {
    "enum": _model["default"].storeProductType(),
    trim: true,
    type: String
  },
  unitId: {
    ref: _store.Unit,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  upc: {
    // big-commerce
    trim: true,
    type: String
  },
  variants: {
    trim: true,
    type: [{
      ref: _.ProductVariant,
      type: _mongoose["default"].Schema.Types.ObjectId
    }]
  },
  viewCount: {
    // big-commerce
    trim: true,
    type: Number
  },
  warranty: {
    // big-commerce
    trim: true,
    type: String
  },
  weight: {
    trim: true,
    type: Number
  }
}), {
  collection: 'product',
  timestamps: true
}); // index

productSchema.index({
  name: 1
}, {
  unique: true
});

var _default = (0, _mongoose.model)('ProductCore', productSchema);

exports["default"] = _default;