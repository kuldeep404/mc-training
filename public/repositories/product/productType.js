"use strict";

var mongoose = require('mongoose');

var modelHelper = require('../../utils/model');

var Schema = mongoose.Schema;
var required = modelHelper.required();
var productSchema = new Schema({
  seller: {
    type: String,
    required: required,
    trim: true
  },
  type: {
    type: String,
    required: required,
    trim: true
  },
  commission: {
    type: String,
    required: false
  }
}, {
  collection: 'productTypes'
}); // index

productSchema.index({
  seller: 1,
  type: 1
});
/**
 * Statics
 */

productSchema.statics = {
  /**
   * Find product type
   *
   * @param {Object} data
   * @api private
   */
  load: function load(data) {
    return this.findOne(data).exec();
  }
};
var ProductTypes = mongoose.model('ProductTypes', productSchema);
module.exports = ProductTypes;