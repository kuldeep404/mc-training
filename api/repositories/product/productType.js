const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();

const productSchema   = new Schema({
  seller    : { type: String, required, trim: true },
  type      : { type: String, required, trim: true },
  commission: { type: String, required: false },
}, { collection: 'productTypes' });

// index
productSchema.index({ seller: 1, type: 1 });

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
  load(data) {
    return this.findOne(data)
      .exec();
  },
};

const ProductTypes = mongoose.model('ProductTypes', productSchema);

module.exports = ProductTypes;
