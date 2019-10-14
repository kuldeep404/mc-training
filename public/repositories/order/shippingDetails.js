"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _model = _interopRequireDefault(require("../utils/model"));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var required = _model["default"].required();

var unpaid = 'unpaid';
var shippingSchema = new Schema({
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
  vendorId: {
    type: String,
    required: required,
    trim: true
  },
  sellerId: {
    type: String,
    required: required,
    trim: true
  },
  lineItemId: {
    type: String,
    trim: true
  },
  charge: {
    type: Number,
    required: required,
    trim: true,
    "default": 0
  },
  terms: {
    type: {
      type: String,
      trim: true
    },
    cost: {
      type: Number,
      trim: true,
      "default": 0
    }
  },
  paymentStatus: {
    type: String,
    trim: true,
    "default": unpaid
  }
}, {
  collection: 'shippingDetails',
  timestamps: true
});
/**
 * Statics
 */

shippingSchema.statics = {
  /**
   * Find order by id
   *
   * @param {ObjectId} id
   * @api private
   */
  load: function load(_id) {
    return this.findOne({
      _id: _id
    }) // .populate('order', 'title vendorId')
    .exec();
  },

  /**
   * Find order row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne: function loadOne(data) {
    return this.findOne(data) // .populate('order', 'title vendorId')
    .exec();
  }
};
var Shipping = mongoose.model('ShippingDetails', shippingSchema);
module.exports = Shipping;