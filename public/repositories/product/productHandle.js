"use strict";

var mongoose = require('mongoose');

var modelHelper = require('../../utils/model');

var Schema = mongoose.Schema;
var required = modelHelper.required();
var productHandleSchema = new Schema({
  handle: {
    type: String,
    required: required,
    unique: true,
    trim: true,
    index: true,
    lowercase: true
  },
  count: {
    type: Number,
    required: required
  }
}, {
  collection: 'productHandle',
  timestamps: true
});
/**
 * Statics
 */

productHandleSchema.statics = {
  /**
   * Find productHandle by id
   *
   * @param {ObjectId} id
   * @api private
   */
  load: function load(_id) {
    return this.findOne({
      _id: _id
    }).exec();
  },

  /**
   * Find row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne: function loadOne(data) {
    return this.findOne(data).exec();
  }
};
var ProductHandle = mongoose.model('ProductHandle', productHandleSchema);
module.exports = ProductHandle;