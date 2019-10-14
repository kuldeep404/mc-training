const mongoose    = require('mongoose');
import modelHelper from '../utils/model';

const { Schema } = mongoose;
const required   = modelHelper.required();
const paidBy     = modelHelper.paidBy();
const priceSet   = modelHelper.priceSet();
const shippingType = modelHelper.shippingType();
const standardType = modelHelper.standardType();

const orderLinesSchema   = new Schema({
  accountingStatus: {
    default: modelHelper.unpaid,
    trim   : true,
    type   : String,
  },
  commissionSeller: {
    trim: true,
    type: String,
  },
  commissionSysAdmin: {
    trim: true,
    type: String,
  },
  commissionVendor: {
    trim: true,
    type: String,
  },
  customCharge: {
    trim: true,
    type: Number,
  },
  customLabel: {
    trim: true,
    type: String,
  },
  discountAllocations: {
    trim: true,
    type: Array,
  },
  dueDate: {
    trim: true,
    type: Date,
  },
  fulfillableQuantity: {
    trim: true,
    type: Number,
  },
  fulfillmentService: {
    trim: true,
    type: String,
  },
  fulfillmentStatus: {
    trim: true,
    type: String,
  },
  grams: {
    trim: true,
    type: Number,
  },
  image: {
    trim: true,
    type: String,
  },
  isDeleted: {
    default: false,
    type   : Boolean,
  },
  isGiftCard: {
    trim: true,
    type: Boolean,
  },
  isProductDeleted: {
    default: false,
    type   : Boolean,
  },
  isVendorDeleted: {
    default: false,
    type   : Boolean,
  },
  markUpPrice: {
    trim: true,
    type: String,
  },
  moneyFormat: {
    trim: true,
    type: String,
  },
  name: {
    trim: true,
    type: String,
  },
  orderId: {
    required,
    trim: true,
    type: String,
  },
  orderNumber: {
    required,
    trim: true,
    type: String,
  },
  paidVia: {
    enum: paidBy,
    trim: true,
    type: String,
  },
  price: {
    required,
    trim: true,
    type: String,
  },
  priceSet,
  productExists: {
    trim: true,
    type: Boolean,
  },
  productId: {
    required,
    trim: true,
    type: String,
  },
  properties: {
    trim: true,
    type: Array,
  },
  quantity: {
    required,
    trim: true,
    type: Number,
  },
  requiresShipping: {
    trim: true,
    type: String,
  },
  sellerDiscount: {
    default: 0,
    trim   : true,
    type   : Number,
  },
  sellerId: {
    required,
    trim: true,
    type: String,
  },
  shippingAmount: { type: Number, default: 0 },
  isShippingPaid: { type: Boolean, default: false },
  shop          : {
    required,
    trim: true,
    type: String,
  },
  shopifyLineItemId: {
    required,
    trim: true,
    type: String,
  },
  shopifyOrderDate: {
    trim: true,
    type: Date,
  },
  shopifyOrderId: {
    required,
    trim: true,
    type: String,
  },
  shopifyOrderUpdateDate: {
    trim: true,
    type: Date,
  },
  shopifyProductId: {
    required,
    trim: true,
    type: String,
  },
  sku: {
    trim: true,
    type: String,
  },
  status: {
    trim: true,
    type: String,
  },
  taxable: {
    trim: true,
    type: Boolean,
  },
  taxLines: Schema.Types.Mixed,
  title   : {
    trim: true,
    type: String,
  },
  // discount via mc
  totalDiscount: {
    trim: true,
    type: String,
  },
  totalDiscountSet: priceSet,
  // discount via shopify
  totalTax        : {
    trim: true,
    type: String,
  },
  trackingCompany: {
    trim: true,
    type: String,
  },
  trackingNumber: {
    trim: true,
    type: String,
  },
  variantId: {
    trim: true,
    type: String,
  },
  variantInventoryManagement: {
    trim: true,
    type: String,
  },
  variantTitle: {
    trim: true,
    type: String,
  },
  vendor: {
    trim: true,
    type: String,
  },
  // discount via mc
  vendorDiscount: {
    default: 0,
    trim   : true,
    type   : Number,
  },
  vendorId: {
    required,
    trim: true,
    type: String,
  },
}, { collection: 'orderLines', timestamps: true });

// index
orderLinesSchema.index({ sellerId: 1, isDeleted: 1, createdAt: -1 });

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

const OrderLines = mongoose.model('OrderLines', orderLinesSchema);

module.exports = OrderLines;
