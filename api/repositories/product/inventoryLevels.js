const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();

const inventoryLevelSchema = new Schema({
  sellerId        : { type: String, required, trim: true },
  productId       : { type: String, required, trim: true },
  shopifyUpdatedAt: { type: Date },
  shopifyProductId: { type: Number, required, trim: true },
  shopifyVariantId: {
    type  : Number, unique: true, required, trim  : true,
  },
  locationId     : { type: Number, required, trim: true },
  inventoryItemId: {
    type  : Number, unique: true, required, trim  : true,
  },
  available: Number,
}, { collection: 'inventoryLevels', timestamps: true });

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
  load(_id) {
    return this.findOne({ _id })
      // .populate('product', 'title vendorId')
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
      // .populate('product', 'title vendorId')
      .exec();
  },
};

const InventoryLevels = mongoose.model('InventoryLevel', inventoryLevelSchema);

module.exports = InventoryLevels;
