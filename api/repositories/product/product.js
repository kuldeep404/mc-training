import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const sRequired  = modelHelper.required('Supplier');

// const fulfillmentService   = modelHelper.fulfillmentService();
// const inventoryManagement  = modelHelper.inventoryManagement();
const inventoryPolicy      = modelHelper.inventoryPolicy();
const standardType         = modelHelper.standardType();
const weightUnit           = modelHelper.weightUnit();

const advancePricing = {
  price: { type: Number, trim: true, default: 0 },
  type : { type: String, default: modelHelper.flat, enum: standardType },
};

const imageSchema = new Schema({
  imageId             : { type: String, trim: true }, // required
  position            : { type: Number, trim: true },
  url                 : { type: String, trim: true }, // deprecated
  imageUrl            : { type: String, trim: true }, // required
  vendorShopifyImageId: Number,
}, { _id: false });

const variantSchema = new Schema({
  position  : { type: Number, trim: true },
  option1   : { type: String, trim: true, default: modelHelper.size },
  option1Val: { type: String, trim: true },
  option2   : { type: String, trim: true, default: modelHelper.color },
  option2Val: { type: String, trim: true },
  option3   : { type: String, trim: true, default: modelHelper.material },
  option3Val: { type: String, trim: true },
  price     : { type: Number, trim: true },
  sku       : { type: String, trim: true },
  barcode   : { type: String, trim: true },

  comparePrice      : { type: Number, trim: true },
  fulfillmentService: {
    type   : String, trim   : true, default: modelHelper.manual, // enum: fulfillmentService
  },
  grams              : { type: Number, trim: true },
  quantity           : { type: Number, trim: true },
  inventoryQuantity  : { type: Number, trim: true },
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
  image     : { type: String, trim: true }, // deprecated
  imageUrl  : { type: String, trim: true },
  imageId   : { type: String, trim: true },

  customLabel   : { type: String, trim: true },
  customCharge  : { type: Number, trim: true, default: 0 },
  customRule    : { type: String, enum: modelHelper.customRule() },
  vendorDiscount: advancePricing,

  vendorShopifyVariantId: Number,
  vendorShopifyImageId  : Number,
});

const productSchema   = new Schema({
  sellerId              : Array,
  shopifyProductId      : Array,
  sellerProduct         : Schema.Types.Mixed,
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

  price       : { type: Number, default: 0 },
  comparePrice: { type: Number },
  isTaxable   : { type: Boolean, default: false },

  sku                : { type: String, trim: true },
  quantity           : { type: Number, trim: true },
  barcode            : { type: String, trim: true },
  inventoryManagement: {
    type   : String, trim   : true, default: modelHelper.shopify, // enum: inventoryManagement
  },

  isShipping: { type: Boolean, default: false },
  weight    : Number,
  weightUnit: {
    type   : String, trim   : true, default: modelHelper.lb, enum   : weightUnit,
  },
  fulfillmentService: {
    type   : String, trim   : true, default: modelHelper.manual, // enum: fulfillmentService
  },

  option1: { type: String, trim: true, default: modelHelper.size },
  option2: { type: String, trim: true, default: modelHelper.color },
  option3: { type: String, trim: true, default: modelHelper.material },

  lastVariantPosition: { type: Number, default: 0 },
  lastImagePosition  : { type: Number, default: 0 },
  images             : [imageSchema],
  variants           : [variantSchema],

  // part of imageSync script, remove after use
  isImageSynced: { type: Boolean },
  // oldImages    : [imageSchema], // deprecated
  // oldVariants  : [variantSchema], // deprecated

  customLabel : { type: String, trim: true },
  customCharge: { type: Number, trim: true, default: 0 },
  customRule  : { type: String, enum: modelHelper.customRule() },

  primaryImageUrl: { type: String, trim: true },
  status         : { type: String, required, default: modelHelper.review },
  approved       : { type: Boolean, default: false },
  addedBy        : String,
  editData       : Schema.Types.Mixed,
  moneyFormat    : { type: String, trim: true },

  vendorDiscount: advancePricing,

}, { collection: 'products', timestamps: true });

// index
productSchema.index({ vendorId: 1, updatedAt: -1 });
productSchema.index({ status: 1, vendorId: 1, updatedAt: -1 });
productSchema.index({ status: 1, isDeleted: 1 });
productSchema.index({ vendorShopifyProductId: 1 });
productSchema.index({ handle: 1 }, { unique: true });
productSchema.index({ vendor: 1 });
productSchema.index({ status: 1 });
productSchema.index({ updatedAt: -1 });
productSchema.index({ isDeleted: 1 });

/**
 * Statics
 */

productSchema.statics = {

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

productSchema.pre('save', true, function (next, done){
  this.inventoryManagement = this.inventoryManagement && this.inventoryManagement === modelHelper.shopify
    ? modelHelper.shopify
    : '';
  this.fulfillmentService  = modelHelper.manual;

  done();
  next();
});

productSchema.post('save', (error, doc, next) => {
  next(error);
});

export default model('Product', productSchema);
