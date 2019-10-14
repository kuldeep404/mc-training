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

var sRequired = _model["default"].required('Supplier'); // const fulfillmentService   = modelHelper.fulfillmentService();
// const inventoryManagement  = modelHelper.inventoryManagement();


var inventoryPolicy = _model["default"].inventoryPolicy();

var standardType = _model["default"].standardType();

var weightUnit = _model["default"].weightUnit();

var advancePricing = {
  price: {
    type: Number,
    trim: true,
    "default": 0
  },
  type: {
    type: String,
    "default": _model["default"].flat,
    "enum": standardType
  }
};
var imageSchema = new _mongoose.Schema({
  imageId: {
    type: String,
    trim: true
  },
  // required
  position: {
    type: Number,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
  // deprecated
  imageUrl: {
    type: String,
    trim: true
  },
  // required
  vendorShopifyImageId: Number
}, {
  _id: false
});
var variantSchema = new _mongoose.Schema({
  position: {
    type: Number,
    trim: true
  },
  option1: {
    type: String,
    trim: true,
    "default": _model["default"].size
  },
  option1Val: {
    type: String,
    trim: true
  },
  option2: {
    type: String,
    trim: true,
    "default": _model["default"].color
  },
  option2Val: {
    type: String,
    trim: true
  },
  option3: {
    type: String,
    trim: true,
    "default": _model["default"].material
  },
  option3Val: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  sku: {
    type: String,
    trim: true
  },
  barcode: {
    type: String,
    trim: true
  },
  comparePrice: {
    type: Number,
    trim: true
  },
  fulfillmentService: {
    type: String,
    trim: true,
    "default": _model["default"].manual // enum: fulfillmentService

  },
  grams: {
    type: Number,
    trim: true
  },
  quantity: {
    type: Number,
    trim: true
  },
  inventoryQuantity: {
    type: Number,
    trim: true
  },
  inventoryManagement: {
    type: String,
    trim: true,
    "default": _model["default"].shopify // enum: inventoryManagement

  },
  inventoryPolicy: {
    type: String,
    trim: true,
    "default": _model["default"].deny,
    "enum": inventoryPolicy
  },
  isShipping: {
    type: Boolean,
    "default": false
  },
  isTaxable: {
    type: Boolean,
    "default": false
  },
  title: {
    type: String,
    trim: true
  },
  weight: Number,
  weightUnit: {
    type: String,
    trim: true,
    "default": _model["default"].lb,
    "enum": weightUnit
  },
  image: {
    type: String,
    trim: true
  },
  // deprecated
  imageUrl: {
    type: String,
    trim: true
  },
  imageId: {
    type: String,
    trim: true
  },
  customLabel: {
    type: String,
    trim: true
  },
  customCharge: {
    type: Number,
    trim: true,
    "default": 0
  },
  customRule: {
    type: String,
    "enum": _model["default"].customRule()
  },
  vendorDiscount: advancePricing,
  vendorShopifyVariantId: Number,
  vendorShopifyImageId: Number
});
var productSchema = new _mongoose.Schema({
  sellerId: Array,
  shopifyProductId: Array,
  sellerProduct: _mongoose.Schema.Types.Mixed,
  vendorShopifyProductId: {
    type: Number,
    trim: true
  },
  title: {
    type: String,
    required: required,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  handle: {
    type: String,
    required: required,
    trim: true,
    lowercase: true
  },
  vendor: {
    type: String,
    required: sRequired,
    trim: true
  },
  vendorId: {
    type: String,
    required: required,
    trim: true
  },
  productType: {
    type: String,
    trim: true
  },
  collections: String,
  // collection, restricted keyword
  tags: [String],
  // earlier category,
  price: {
    type: Number,
    "default": 0
  },
  comparePrice: {
    type: Number
  },
  isTaxable: {
    type: Boolean,
    "default": false
  },
  sku: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    trim: true
  },
  barcode: {
    type: String,
    trim: true
  },
  inventoryManagement: {
    type: String,
    trim: true,
    "default": _model["default"].shopify // enum: inventoryManagement

  },
  isShipping: {
    type: Boolean,
    "default": false
  },
  weight: Number,
  weightUnit: {
    type: String,
    trim: true,
    "default": _model["default"].lb,
    "enum": weightUnit
  },
  fulfillmentService: {
    type: String,
    trim: true,
    "default": _model["default"].manual // enum: fulfillmentService

  },
  option1: {
    type: String,
    trim: true,
    "default": _model["default"].size
  },
  option2: {
    type: String,
    trim: true,
    "default": _model["default"].color
  },
  option3: {
    type: String,
    trim: true,
    "default": _model["default"].material
  },
  lastVariantPosition: {
    type: Number,
    "default": 0
  },
  lastImagePosition: {
    type: Number,
    "default": 0
  },
  images: [imageSchema],
  variants: [variantSchema],
  // part of imageSync script, remove after use
  isImageSynced: {
    type: Boolean
  },
  // oldImages    : [imageSchema], // deprecated
  // oldVariants  : [variantSchema], // deprecated
  customLabel: {
    type: String,
    trim: true
  },
  customCharge: {
    type: Number,
    trim: true,
    "default": 0
  },
  customRule: {
    type: String,
    "enum": _model["default"].customRule()
  },
  primaryImageUrl: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    required: required,
    "default": _model["default"].review
  },
  approved: {
    type: Boolean,
    "default": false
  },
  addedBy: String,
  editData: _mongoose.Schema.Types.Mixed,
  moneyFormat: {
    type: String,
    trim: true
  },
  vendorDiscount: advancePricing
}, {
  collection: 'products',
  timestamps: true
}); // index

productSchema.index({
  vendorId: 1,
  updatedAt: -1
});
productSchema.index({
  status: 1,
  vendorId: 1,
  updatedAt: -1
});
productSchema.index({
  status: 1,
  isDeleted: 1
});
productSchema.index({
  vendorShopifyProductId: 1
});
productSchema.index({
  handle: 1
}, {
  unique: true
});
productSchema.index({
  vendor: 1
});
productSchema.index({
  status: 1
});
productSchema.index({
  updatedAt: -1
});
productSchema.index({
  isDeleted: 1
});
/**
 * Statics
 */

productSchema.statics = {
  /**
   * Find product by id
   *
   * @param {ObjectId} id
   * @api private
   */
  load: function load(_id) {
    return this.findOne({
      _id: _id
    }) // .populate('product', 'title vendorId')
    .exec();
  },

  /**
   * Find row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne: function loadOne(data) {
    return this.findOne(data) // .populate('product', 'title vendorId')
    .exec();
  }
};
productSchema.pre('save', true, function (next, done) {
  this.inventoryManagement = this.inventoryManagement && this.inventoryManagement === _model["default"].shopify ? _model["default"].shopify : '';
  this.fulfillmentService = _model["default"].manual;
  done();
  next();
});
productSchema.post('save', function (error, doc, next) {
  next(error);
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports["default"] = _default;