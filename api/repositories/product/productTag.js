const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();

const productTagSchema   = new Schema({
  seller: { type: String, required, trim: true },
  tags  : [
    { type: String, trim: true },
  ],
}, { collection: 'productTags' });

productTagSchema.index({ seller: 1 }, { unique: true });

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
  load(data) {
    return this.findOne(data)
      .exec();
  },
};

const ProductTags = mongoose.model('ProductTags', productTagSchema);

module.exports = ProductTags;
