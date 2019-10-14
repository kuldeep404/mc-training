const mongoose    = require('mongoose');
import modelHelper from '../utils/model';

const { Schema } = mongoose;
const required   = modelHelper.required();

const orderFulfillmentSchema   = new Schema({
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
  shopifyFulfillmentId: {
    type: String,
    required,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  service: {
    type: String,
    trim: true,
  },
  trackingNumber: {
    type: String,
    trim: true,
  },
  trackingCompany: {
    type: String,
    trim: true,
  },
  trackingUrl: {
    type: String,
    trim: true,
  },
  shipmentStatus: {
    type: String,
    trim: true,
  },
  trackingNumbers: [],
  trackingUrls   : [],
  lineItems      : Schema.Types.Mixed,
  isDeleted      : {
    type   : Boolean,
    Default: false,
  },
}, { collection: 'orderFulfillments', timestamps: true });

/**
 * Statics
 */
orderFulfillmentSchema.statics = {

  /**
   * Find order line items by id, orderId
   *
   * @param {ObjectId} id
   * @param {orderId} orderId
   * @api private
   */

  load(_id, orderId) {
    return this.findOne({ _id, orderId })
    // .populate('order', 'title vendorId')
      .exec();
  },

  /**
   * Find order line items by orderId
   *
   * @param {orderId} orderId
   * @api private
   */

  loadAll(orderId) {
    return this.find({ orderId })
    // .populate('order', 'title vendorId')
      .exec();
  },
};


const OrderFulfillments = mongoose.model('OrderFulfillments', orderFulfillmentSchema);

module.exports = OrderFulfillments;
