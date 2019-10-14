"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _model = _interopRequireDefault(require("../utils/model"));

var _rootTypes = require("../../graphql/rootTypes");

var required = _model["default"].required();

var priceSet = _model["default"].priceSet();

var shippingType = _model["default"].shippingType();

var orderSchema = new _mongoose.Schema({
  appId: {
    trim: true,
    type: Number
  },
  billingAddress: _mongoose.Schema.Types.Mixed,
  browserIp: {
    trim: true,
    type: String
  },
  cancelledAt: {
    trim: true,
    type: Date
  },
  cancelReason: {
    trim: true,
    type: String
  },
  cartToken: {
    trim: true,
    type: String
  },
  checkoutId: {
    trim: true,
    type: Number
  },
  checkoutToken: {
    trim: true,
    type: String
  },
  closedAt: {
    trim: true,
    type: Date
  },
  confirmed: {
    "default": false,
    trim: true,
    type: Boolean
  },
  contactEmail: {
    trim: true,
    type: String
  },
  currency: {
    trim: true,
    type: String
  },
  customer: _mongoose.Schema.Types.Mixed,
  customerLocale: {
    trim: true,
    type: String
  },
  deviceId: {
    trim: true,
    type: Number
  },
  discountApplications: {
    "default": [],
    type: Array
  },
  discountCodes: {
    "default": [],
    type: Array
  },
  email: {
    trim: true,
    type: String
  },
  financialStatus: {
    trim: true,
    type: String
  },
  fulfillments: {
    trim: true,
    type: Array
  },
  fulfillmentStatus: {
    trim: true,
    type: String
  },
  gateway: {
    trim: true,
    type: String
  },
  image: {
    trim: true,
    type: String
  },
  isBuyerAcceptsMarketing: {
    trim: false,
    type: Boolean
  },
  isDeleted: {
    Default: false,
    type: Boolean
  },
  isShippingPaid: {
    "default": false,
    type: Boolean
  },
  isTest: {
    "default": false,
    type: Boolean
  },
  landingSite: {
    trim: true,
    type: String
  },
  landingSiteRef: {
    trim: true,
    type: String
  },
  locationId: {
    trim: true,
    type: Number
  },
  moneyFormat: {
    trim: true,
    type: String
  },
  name: {
    trim: true,
    type: String
  },
  note: {
    trim: true,
    type: String
  },
  noteAttributes: {
    "default": [],
    type: Array
  },
  number: {
    type: Number
  },
  orderNumber: {
    required: required,
    trim: true,
    type: String
  },
  orderStatusUrl: {
    trim: true,
    type: String
  },
  paymentGateway: {
    trim: true,
    type: Array
  },
  phone: {
    trim: true,
    type: String
  },
  presentmentCurrency: {
    trim: true,
    type: String
  },
  processedAt: {
    trim: true,
    type: Date
  },
  processingMethod: {
    trim: true,
    type: String
  },
  reference: {
    trim: true,
    type: String
  },
  referringSite: {
    trim: true,
    type: String
  },
  refunds: {
    trim: true,
    type: Array
  },
  sellerId: {
    ref: 'Users',
    required: required,
    type: _mongoose["default"].Schema.Types.ObjectId
  },
  // x: {
  //   required,
  //   trim: true,
  //   type: String,
  // },
  sellerShippingAmount: {
    "default": 0,
    trim: true,
    type: Number
  },
  shipping: {
    amount: {
      "default": 0,
      type: Number
    },
    perVendorAmount: {
      "default": 0,
      type: Number
    },
    term: {
      "enum": shippingType,
      trim: true,
      type: String
    }
  },
  shippingAddress: _mongoose.Schema.Types.Mixed,
  shippingLines: _mongoose.Schema.Types.Mixed,
  shop: {
    required: required,
    trim: true,
    type: String
  },
  shopifyOrderDate: {
    trim: true,
    type: Date
  },
  shopifyOrderId: {
    required: required,
    trim: true,
    type: String,
    unique: true
  },
  shopifyOrderUpdateDate: {
    trim: true,
    type: Date
  },
  shopifyShippingCharge: {
    "default": 0,
    trim: true,
    type: Number
  },
  sourceIdentifier: {
    trim: true,
    type: String
  },
  sourceName: {
    trim: true,
    type: String
  },
  sourceUrl: {
    trim: true,
    type: String
  },
  status: {
    trim: true,
    type: String
  },
  subtotal: {
    trim: true,
    type: String
  },
  subtotalPriceSet: priceSet,
  tags: {
    trim: true,
    type: String
  },
  taxesIncluded: {
    "default": false,
    type: Boolean
  },
  taxLines: {
    "default": [],
    type: Array
  },
  token: {
    trim: true,
    type: String
  },
  totalDiscount: {
    trim: true,
    type: String
  },
  totalDiscountsSet: priceSet,
  totalLineItemsPrice: {
    trim: true,
    type: String
  },
  totalLineItemsPriceSet: priceSet,
  totalPrice: {
    trim: true,
    type: String
  },
  totalPriceSet: priceSet,
  totalPriceUsd: {
    trim: true,
    type: String
  },
  totalShippingPriceSet: priceSet,
  totalTax: {
    trim: true,
    type: String
  },
  totalTaxSet: priceSet,
  totalTipReceived: {
    trim: true,
    type: String
  },
  totalWeight: {
    trim: true,
    type: Number
  },
  userId: {
    trim: true,
    type: Number
  }
}, {
  collection: 'orders',
  timestamps: true
});
/**
 * Statics
 */

orderSchema.statics = {
  /**
   * Find order by id
   *
   * @param {ObjectId} id
   * @api private
   */
  load: function load(_id) {
    return this.findOne({
      _id: _id
    }) // .populate('order', 'title vendorId')
    .exec();
  },

  /**
   * Find order row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne: function loadOne(data) {
    return this.findOne(data) // .populate('order', 'title vendorId')
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
  findAndModify: function findAndModify(query, data, callback) {
    return this.collection.updateMany(query, {
      $set: data
    }, callback);
  }
};

var _default = (0, _mongoose.model)('Orders', orderSchema);

exports["default"] = _default;