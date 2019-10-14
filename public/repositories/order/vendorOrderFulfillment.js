"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _model = _interopRequireDefault(require("../utils/model"));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var required = _model["default"].required();

var orderFulfillmentSchema = new Schema({
  orderId: {
    type: String,
    required: required,
    trim: true
  },
  shopifyOrderId: {
    type: String,
    required: required,
    trim: true
  },
  sellerShopifyOrderId: {
    type: String,
    required: required,
    trim: true
  },
  shopifyFulfillmentId: {
    type: String,
    required: required,
    trim: true
  },
  sellerShopifyFulfillmentId: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    trim: true
  },
  trackingNumber: {
    type: String,
    trim: true
  },
  trackingCompany: {
    type: String,
    trim: true
  },
  trackingUrl: {
    type: String,
    trim: true
  },
  shipmentStatus: {
    type: String,
    trim: true
  },
  trackingNumbers: [],
  trackingUrls: [],
  lineItems: Schema.Types.Mixed,
  isDeleted: {
    type: Boolean,
    Default: false
  }
}, {
  collection: 'vendorOrderFulfillments',
  timestamps: true
});
/**
 * Statics
 */

orderFulfillmentSchema.statics = {
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
};
var VendorOrderFulfillments = mongoose.model('VendorOrderFulfillments', orderFulfillmentSchema);
module.exports = VendorOrderFulfillments;