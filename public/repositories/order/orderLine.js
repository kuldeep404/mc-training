"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _model = _interopRequireDefault(require("../utils/model"));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var required = _model["default"].required();

var paidBy = _model["default"].paidBy();

var priceSet = _model["default"].priceSet();

var shippingType = _model["default"].shippingType();

var standardType = _model["default"].standardType();

var orderLinesSchema = new Schema({
  accountingStatus: {
    "default": _model["default"].unpaid,
    trim: true,
    type: String
  },
  commissionSeller: {
    trim: true,
    type: String
  },
  commissionSysAdmin: {
    trim: true,
    type: String
  },
  commissionVendor: {
    trim: true,
    type: String
  },
  customCharge: {
    trim: true,
    type: Number
  },
  customLabel: {
    trim: true,
    type: String
  },
  discountAllocations: {
    trim: true,
    type: Array
  },
  dueDate: {
    trim: true,
    type: Date
  },
  fulfillableQuantity: {
    trim: true,
    type: Number
  },
  fulfillmentService: {
    trim: true,
    type: String
  },
  fulfillmentStatus: {
    trim: true,
    type: String
  },
  grams: {
    trim: true,
    type: Number
  },
  image: {
    trim: true,
    type: String
  },
  isDeleted: {
    "default": false,
    type: Boolean
  },
  isGiftCard: {
    trim: true,
    type: Boolean
  },
  isProductDeleted: {
    "default": false,
    type: Boolean
  },
  isVendorDeleted: {
    "default": false,
    type: Boolean
  },
  markUpPrice: {
    trim: true,
    type: String
  },
  moneyFormat: {
    trim: true,
    type: String
  },
  name: {
    trim: true,
    type: String
  },
  orderId: {
    required: required,
    trim: true,
    type: String
  },
  orderNumber: {
    required: required,
    trim: true,
    type: String
  },
  paidVia: {
    "enum": paidBy,
    trim: true,
    type: String
  },
  price: {
    required: required,
    trim: true,
    type: String
  },
  priceSet: priceSet,
  productExists: {
    trim: true,
    type: Boolean
  },
  productId: {
    required: required,
    trim: true,
    type: String
  },
  properties: {
    trim: true,
    type: Array
  },
  quantity: {
    required: required,
    trim: true,
    type: Number
  },
  requiresShipping: {
    trim: true,
    type: String
  },
  sellerDiscount: {
    "default": 0,
    trim: true,
    type: Number
  },
  sellerId: {
    required: required,
    trim: true,
    type: String
  },
  shippingAmount: {
    type: Number,
    "default": 0
  },
  isShippingPaid: {
    type: Boolean,
    "default": false
  },
  shop: {
    required: required,
    trim: true,
    type: String
  },
  shopifyLineItemId: {
    required: required,
    trim: true,
    type: String
  },
  shopifyOrderDate: {
    trim: true,
    type: Date
  },
  shopifyOrderId: {
    required: required,
    trim: true,
    type: String
  },
  shopifyOrderUpdateDate: {
    trim: true,
    type: Date
  },
  shopifyProductId: {
    required: required,
    trim: true,
    type: String
  },
  sku: {
    trim: true,
    type: String
  },
  status: {
    trim: true,
    type: String
  },
  taxable: {
    trim: true,
    type: Boolean
  },
  taxLines: Schema.Types.Mixed,
  title: {
    trim: true,
    type: String
  },
  // discount via mc
  totalDiscount: {
    trim: true,
    type: String
  },
  totalDiscountSet: priceSet,
  // discount via shopify
  totalTax: {
    trim: true,
    type: String
  },
  trackingCompany: {
    trim: true,
    type: String
  },
  trackingNumber: {
    trim: true,
    type: String
  },
  variantId: {
    trim: true,
    type: String
  },
  variantInventoryManagement: {
    trim: true,
    type: String
  },
  variantTitle: {
    trim: true,
    type: String
  },
  vendor: {
    trim: true,
    type: String
  },
  // discount via mc
  vendorDiscount: {
    "default": 0,
    trim: true,
    type: Number
  },
  vendorId: {
    required: required,
    trim: true,
    type: String
  }
}, {
  collection: 'orderLines',
  timestamps: true
}); // index

orderLinesSchema.index({
  sellerId: 1,
  isDeleted: 1,
  createdAt: -1
});
/**
 * Statics
 */

orderLinesSchema.statics = {
  /**
   * Find order line items by id, orderId
   *
   * @param {ObjectId} id
   * @param {orderId} orderId
   * @api private
   */
  load: function load(_id, orderId) {
    return this.findOne({
      _id: _id,
      orderId: orderId
    }) // .populate('order', 'title vendorId')
    .exec();
  },

  /**
   * Find order line items by orderId
   *
   * @param {orderId} orderId
   * @api private
   */
  loadAll: function loadAll(orderId) {
    return this.find({
      orderId: orderId
    }) // .populate('order', 'title vendorId')
    .exec();
  }
  /**
   * Function to update multiple docs
   *
   * @param {object} query
   * @param {object} data
   * @param {function} callback
   * @api private
  */
  // findAndModify(query, data, callback) {
  //   return this.collection.updateMany(query, { $set: data }, callback);
  // },

};
var OrderLines = mongoose.model('OrderLines', orderLinesSchema);
module.exports = OrderLines;