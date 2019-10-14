const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();
const sRequired  = modelHelper.required('Supplier');

// const fulfillmentService   = modelHelper.fulfillmentService();
// const inventoryManagement  = modelHelper.inventoryManagement();
const inventoryPolicy      = modelHelper.inventoryPolicy();
const weightUnit           = modelHelper.weightUnit();
const reasonType           = modelHelper.reasonType();
const standardType         = modelHelper.standardType();

const advancePricing = {
  price: { type: Number, trim: true, default: 0 },
  type : { type: String, default: modelHelper.flat, enum: standardType },
};

const imageSchema = new Schema({
  imageId       : { type: String, trim: true }, // required
  position      : { type: Number, trim: true },
  url           : { type: String, trim: true }, // deprecated
  imageUrl      : { type: String, trim: true }, // required
  shopifyImageId: Number,
}, { _id: false });

const reasonSchema = new Schema({
  message  : { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
  type     : { type: String, enum: reasonType },
}, { _id: false });

const variantSchema = new Schema({
  variantId      : String,
  position       : { type: Number, trim: true },
  option1        : { type: String, trim: true, default: modelHelper.size },
  option1Val     : { type: String, trim: true },
  option2        : { type: String, trim: true, default: modelHelper.color },
  option2Val     : { type: String, trim: true },
  option3        : { type: String, trim: true, default: modelHelper.material },
  option3Val     : { type: String, trim: true },
  price          : { type: Number, trim: true },
  priceWithMarkup: { type: Number, trim: true },
  sku            : { type: String, trim: true },
  barcode        : { type: String, trim: true },

  comparePrice      : { type: Number, trim: true },
  fulfillmentService: {
    type   : String, trim   : true, default: modelHelper.manual, // enum: fulfillmentService
  },
  grams            : { type: Number, trim: true },
  inventoryQuantity: { type: Number, trim: true },
  quantity         : { type: Number, trim: true },

  inventoryManagement: {
    type   : String, trim   : true, default: modelHelper.shopify, // enum: inventoryManagement
  },
  inventoryPolicy: {
    type   : String, trim   : true, default: modelHelper.deny, enum   : inventoryPolicy,
  },

  isShipping: { type: Boolean, default: false },
  isTaxable : { type: Boolean, default: false },
  title     : { type: String, trim: true },
  weight    : Number,
  weightUnit: {
    type   : String, trim   : true, default: modelHelper.lb, enum   : weightUnit,
  },

  image   : { type: String, trim: true }, // deprecated
  imageUrl: { type: String, trim: true },
  imageId : { type: String, trim: true },

  inventoryItemId : Number,
  shopifyVariantId: Number, // { type: String, trim: true },
  shopifyImageId  : Number,

  markUp      : advancePricing,
  markUpAmount: { type: Number, trim: true, default: 0 },
  markUpRule  : { type: String, enum: modelHelper.pricingRule() },

  customLabel : { type: String, trim: true },
  customCharge: { type: Number, trim: true, default: 0 },
  customRule  : { type: String, enum: modelHelper.customRule() },

  sellerDiscount: advancePricing,
  vendorDiscount: advancePricing,

  discountAmount: { type: Number, trim: true },
  discountRule  : { type: String, enum: modelHelper.pricingRule() },
}, { _id: false });

const sellerProductSchema   = new Schema({
  productId       : { type: String, required },
  sellerId        : { type: String, required, trim: true },
  shopifyProductId: Number,

  vendorShopifyProductId: { type: Number, trim: true },

  title      : { type: String, required, trim: true },
  description: { type: String, trim: true },
  handle     : {
    type     : String, required, trim     : true, lowercase: true,
  },

  vendor  : { type: String, required: sRequired, trim: true },
  vendorId: { type: String, required, trim: true },

  productType: { type: String, trim: true },
  collections: String, // collection, restricted keyword
  tags       : [String], // earlier category,

  price          : { type: Number, default: 0 },
  priceWithMarkup: { type: Number, default: 0 },
  comparePrice   : { type: Number },
  isTaxable      : { type: Boolean, default: false },

  sku                : { type: String, trim: true },
  barcode            : { type: String, trim: true },
  quantity           : { type: Number, trim: true },
  inventoryManagement: { type: String, trim: true, default: modelHelper.shopify }, // enum: inventoryManagement

  isShipping: { type: Boolean, default: false },
  weight    : Number,
  weightUnit: {
    type   : String, trim   : true, default: modelHelper.lb, enum   : weightUnit,
  },
  fulfillmentService: { type: String, trim: true, default: modelHelper.manual }, // enum: fulfillmentService

  option1: { type: String, trim: true, default: modelHelper.size },
  option2: { type: String, trim: true, default: modelHelper.color },
  option3: { type: String, trim: true, default: modelHelper.material },

  lastVariantPosition: { type: Number, default: 0 },
  lastImagePosition  : { type: Number, default: 0 },

  inventoryItemId: Number,

  images  : [imageSchema],
  variants: [variantSchema],

  // part of imageSync script, remove after use
  isImageSynced: { type: Boolean },
  // oldImages    : [imageSchema], // deprecated
  // oldVariants  : [variantSchema], // deprecated

  primaryImageUrl: { type: String, trim: true },
  status         : { type: String, required, default: modelHelper.review },
  approved       : { type: Boolean, default: false },
  addedBy        : String,
  editData       : Schema.Types.Mixed,
  moneyFormat    : { type: String, trim: true },
  reason         : [reasonSchema],
  deletedBy      : { type: String },
  deletedAt      : { type: Date },
  published      : { type: Boolean },
  publishedAt    : { type: Date },

  markUp      : advancePricing,
  markUpAmount: { type: Number, trim: true, default: 0 },
  markUpRule  : { type: String, enum: modelHelper.pricingRule() },

  customLabel : { type: String, trim: true },
  customCharge: { type: Number, trim: true, default: 0 },
  customRule  : { type: String, enum: modelHelper.customRule() },

  sellerDiscount: advancePricing,
  vendorDiscount: advancePricing,
  discountAmount: { type: Number, trim: true, default: 0 },
  discountRule  : { type: String, enum: modelHelper.pricingRule() },
}, { collection: 'sellerProducts', timestamps: true });

// index
sellerProductSchema.index({ productId: 1 });
sellerProductSchema.index({ sellerId: 1 });
sellerProductSchema.index({ sellerId: 1, isDeleted: 1 });
sellerProductSchema.index({ sellerId: 1, shopifyProductId: 1 });
sellerProductSchema.index({ sellerId: 1, status: 1, isDeleted: 1 });
sellerProductSchema.index({ shopifyProductId: 1 });
sellerProductSchema.index({ handle: 1 });
sellerProductSchema.index({ vendor: 1 });
sellerProductSchema.index({ status: 1 });
sellerProductSchema.index({ updatedAt: -1 });

sellerProductSchema.index({ deletedAt: 1 }, {
  expireAfterSeconds     : 604800, // 7 days
  partialFilterExpression: {
    status: 'Deleted',
  },
});

/**
 * Statics
 */

sellerProductSchema.statics = {
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
    // .populate('sellerProduct', 'title vendorId')
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

sellerProductSchema.pre('save', true, (next, done) => {
  this.inventoryManagement = (this.inventoryManagement
    && this.inventoryManagement === modelHelper.shopify) ? modelHelper.shopify : '';
  this.fulfillmentService  = modelHelper.manual;

  this.shopifyProductId    = parseInt(this.shopifyProductId, 10);

  done();
  next();
});

const SellerProducts = mongoose.model('SellerProduct', sellerProductSchema);

module.exports = SellerProducts;
