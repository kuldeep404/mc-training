"use strict";

var mongoose = require('mongoose');

var modelHelper = require('../../utils/model');

var Schema = mongoose.Schema;
var required = modelHelper.required();
var productTagSchema = new Schema({
  seller: {
    type: String,
    required: required,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  collection: 'productTags'
});
productTagSchema.index({
  seller: 1
}, {
  unique: true
});
/**
 * Statics
 */

productTagSchema.statics = {
  /**
   * Find product tag
   *
   * @param {Object} data
   * @api private
   */
  load: function load(data) {
    return this.findOne(data).exec();
  }
};
var ProductTags = mongoose.model('ProductTags', productTagSchema);
module.exports = ProductTags;