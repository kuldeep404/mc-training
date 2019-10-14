"use strict";

var mongoose = require('mongoose');

var modelHelper = require('../../utils/model');

var Schema = mongoose.Schema;
var required = modelHelper.required();
var productStatusSchema = new Schema({
  brandName: {
    type: String,
    required: required,
    trim: true
  },
  productId: {
    type: String,
    required: required,
    trim: true
  },
  supplierId: {
    type: String,
    required: required,
    trim: true
  },
  sellerId: {
    type: String,
    trim: true
  },
  store: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    trim: true
  }
}, {
  collection: 'productStatus'
});
/**
 * Statics
 */

productStatusSchema.statics = {
  /**
   * Find product type
   *
   * @param {Data} data
   * @api private
   */
  load: function load(data) {
    return this.findOne(data).exec();
  },

  /**
   * Find user row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne: function loadOne(data) {
    return this.findOne(data) // .populate('username', 'title vendorId')
    .exec();
  }
};
var ProductStatus = mongoose.model('ProductStatus', productStatusSchema);
module.exports = ProductStatus;