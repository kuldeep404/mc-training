const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();

const productHandleSchema   = new Schema({
  handle: {
    type     : String, required, unique   : true, trim     : true, index    : true, lowercase: true,
  },
  count: { type: Number, required },
}, { collection: 'productHandle', timestamps: true });

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
  load(_id) {
    return this.findOne({ _id })
      .exec();
  },

  /**
   * Find row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne(data) {
    return this.findOne(data)
      .exec();
  },
};

const ProductHandle = mongoose.model('ProductHandle', productHandleSchema);

module.exports = ProductHandle;
