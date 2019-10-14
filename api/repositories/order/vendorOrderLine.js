const mongoose    = require('mongoose');
import modelHelper from '../utils/model';

const { Schema } = mongoose;
const required   = modelHelper.required();

const orderLinesSchema   = new Schema({
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
  sellerShopifyOrderId: {
    type: String,
    required,
    trim: true,
  },
  shopifyLineItemId: {
    type: String,
    required,
    trim: true,
  },
  sellerShopifyLineItemId: {
    type: String,
    required,
    trim: true,
  },
  productId: {
    type: String,
    required,
    trim: true,
  },
  shop: {
    type: String,
    required,
    trim: true,
  },
  sellerId: {
    type: String,
    required,
    trim: true,
  },
  vendor: {
    type: String,
    trim: true,
  },
  vendorId: {
    type: String,
    required,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  shopifyProductId: {
    type: String,
    required,
    trim: true,
  },
  variantId: {
    type: String,
    trim: true,
  },
  variantTitle: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
    required,
    trim: true,
  },
  price: {
    type: String,
    required,
    trim: true,
  },
  totalDiscount: {
    type: String,
    trim: true,
  },
  taxable: {
    type: String,
    trim: true,
  },
  requiresShipping: {
    type: String,
    trim: true,
  },
  fulfillmentService: {
    type: String,
    trim: true,
  },
  sku: {
    type: String,
    trim: true,
  },
  fulfillmentStatus: {
    type: String,
    trim: true,
  },
  orderNumber: {
    type: String,
    required,
    trim: true,
  },
  taxLines: Schema.Types.Mixed,
  status  : {
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
  commissionSysAdmin: {
    type: String,
    trim: true,
  },
  commissionSeller: {
    type: String,
    trim: true,
  },
  commissionVendor: {
    type: String,
    trim: true,
  },
  dueDate: {
    type: Date,
    trim: true,
  },
  shopifyOrderDate: {
    type: Date,
    trim: true,
  },
  shopifyOrderUpdateDate: {
    type: Date,
    trim: true,
  },
  isDeleted: {
    type   : Boolean,
    default: false,
  },
  isProductDeleted: {
    type   : Boolean,
    default: false,
  },
  isVendorDeleted: {
    type   : Boolean,
    default: false,
  },
  accountingStatus: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  moneyFormat: {
    type: String,
    trim: true,
  },
}, { collection: 'vendorOrderLines', timestamps: true });

/**
 * Statics
 */

orderLinesSchema.statics = {

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

  /**
   * Function to update multiple docs
   *
   * @param {object} query
   * @param {object} data
   * @param {function} callback
   * @api private
  */
  // findAndModify(query, data, callback) {
  //   return this.collection.updateMany(query, { $set: data }, callback);
  // },
};

const VendorOrderLines = mongoose.model('VendorOrderLines', orderLinesSchema);

module.exports = VendorOrderLines;
