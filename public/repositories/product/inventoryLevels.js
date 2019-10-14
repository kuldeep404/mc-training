"use strict";

var mongoose = require('mongoose');

var modelHelper = require('../../utils/model');

var Schema = mongoose.Schema;
var required = modelHelper.required();
var inventoryLevelSchema = new Schema({
  sellerId: {
    type: String,
    required: required,
    trim: true
  },
  productId: {
    type: String,
    required: required,
    trim: true
  },
  shopifyUpdatedAt: {
    type: Date
  },
  shopifyProductId: {
    type: Number,
    required: required,
    trim: true
  },
  shopifyVariantId: {
    type: Number,
    unique: true,
    required: required,
    trim: true
  },
  locationId: {
    type: Number,
    required: required,
    trim: true
  },
  inventoryItemId: {
    type: Number,
    unique: true,
    required: required,
    trim: true
  },
  available: Number
}, {
  collection: 'inventoryLevels',
  timestamps: true
});
/**
 * Statics
 */

inventoryLevelSchema.statics = {
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
var InventoryLevels = mongoose.model('InventoryLevel', inventoryLevelSchema);
module.exports = InventoryLevels;