const mongoose    = require('mongoose');
import modelHelper from '../utils/model';

const { Schema } = mongoose;
const required   = modelHelper.required();

const unpaid = 'unpaid';

const shippingSchema   = new Schema({
  orderId: {
    type: String,
    required,
    trim: true,
  },
  shopifyOrderId: {
    type: String,
    required,
    trim: true,
  },
  vendorId: {
    type: String,
    required,
    trim: true,
  },
  sellerId: {
    type: String,
    required,
    trim: true,
  },
  lineItemId: {
    type: String,
    trim: true,
  },
  charge: {
    type   : Number,
    required,
    trim   : true,
    default: 0,
  },
  terms: {
    type: {
      type: String,
      trim: true,
    },
    cost: {
      type   : Number,
      trim   : true,
      default: 0,
    },
  },
  paymentStatus: {
    type   : String,
    trim   : true,
    default: unpaid,
  },
}, { collection: 'shippingDetails', timestamps: true });

/**
 * Statics
 */

shippingSchema.statics = {

  /**
   * Find order by id
   *
   * @param {ObjectId} id
   * @api private
   */

  load(_id) {
    return this.findOne({ _id })
      // .populate('order', 'title vendorId')
      .exec();
  },

  /**
   * Find order row by data
   *
   * @param {Object} data
   * @api private
   */

  loadOne(data) {
    return this.findOne(data)
      // .populate('order', 'title vendorId')
      .exec();
  },
};

const Shipping = mongoose.model('ShippingDetails', shippingSchema);

module.exports = Shipping;
