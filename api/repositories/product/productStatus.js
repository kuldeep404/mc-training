const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();

const productStatusSchema   = new Schema({
  brandName : { type: String, required, trim: true },
  productId : { type: String, required, trim: true },
  supplierId: { type: String, required, trim: true },
  sellerId  : { type: String, trim: true },
  store     : { type: String, trim: true },
  status    : { type: String, trim: true },

}, { collection: 'productStatus' });

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
  load(data) {
    return this.findOne(data)
      .exec();
  },

  /**
   * Find user row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne(data) {
    return this.findOne(data)
      // .populate('username', 'title vendorId')
      .exec();
  },
};
const ProductStatus = mongoose.model('ProductStatus', productStatusSchema);

module.exports = ProductStatus;
