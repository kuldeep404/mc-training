const mongoose    = require('mongoose');
const modelHelper = require('../../utils/model');

const { Schema } = mongoose;
const required   = modelHelper.required();
const sRequired   = modelHelper.required('Supplier');

// const fulfillmentService   = modelHelper.fulfillmentService();
// const inventoryManagement  = modelHelper.inventoryManagement();
const inventoryPolicy      = modelHelper.inventoryPolicy();
const weightUnit           = modelHelper.weightUnit();

const tempProductSchema   = new Schema({
  vendorShopifyProductId: { type: Number, trim: true },
  title                 : { type: String, required, trim: true },
  description           : { type: String, trim: true },
  handle                : {
    type     : String, required, trim     : true, lowercase: true,
  },

  vendor  : { type: String, required: sRequired, trim: true },
  vendorId: { type: String, required, trim: true },

  productType: { type: String, trim: true },
  collections: String, // collection, restricted keyword
  tags       : [String], // earlier category,

  price       : { type: Number, default: 0 },
  comparePrice: { type: Number, default: 0 },
  isTaxable   : { type: Boolean, default: false },

  sku                : { type: String, trim: true },
  barcode            : { type: String, trim: true },
  inventoryManagement: {
    type   : String, trim   : true, default: modelHelper.shopify, // enum   : inventoryManagement,
  },
  quantity: { type: Number, trim: true },

  isShipping: { type: Boolean, default: false },
  weight    : Number,
  weightUnit: {
    type   : String, trim   : true, default: modelHelper.lb, enum   : weightUnit,
  },
  fulfillmentService: {
    type   : String, trim   : true, default: modelHelper.manual, // enum   : fulfillmentService,
  },

  option1: { type: String, trim: true, default: modelHelper.size },
  option2: { type: String, trim: true, default: modelHelper.color },
  option3: { type: String, trim: true, default: modelHelper.material },

  lastVariantPosition: { type: Number, default: 0 },
  lastImagePosition  : { type: Number, default: 0 },
  shop               : { type: String, required: false, trim: true },

  images: [
    {
      position            : { type: Number, trim: true },
      url                 : { type: String, trim: true },
      vendorShopifyImageId: Number,
    },
  ],

  variants: [
    {
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
        type   : String, trim   : true, default: modelHelper.manual, // enum   : fulfillmentService,
      },
      grams              : { type: Number, trim: true },
      quantity           : { type: Number, trim: true },
      inventoryQuantity  : { type: Number, trim: true },
      inventoryManagement: {
        type   : String, trim   : true, default: modelHelper.shopify, // enum   : inventoryManagement,
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
      image                 : { type: String, trim: true },
      vendorShopifyVariantId: Number,
      vendorShopifyImageId  : Number,
    },
  ],

  primaryImageUrl: { type: String, trim: true },
  status         : { type: String, required, default: modelHelper.review },
  approved       : { type: Boolean, default: false },
  published      : { type: Boolean, default: false },
  editData       : Schema.Types.Mixed,

}, { collection: 'tempProducts', timestamps: true });

// index
tempProductSchema.index({ handle: 1 });
tempProductSchema.index({ vendor: 1 });
tempProductSchema.index({ vendorId: 1 });
tempProductSchema.index({ shop: 1 });

/**
 * Statics
 */
tempProductSchema.statics = {

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

tempProductSchema.pre('save', true, (next, done) => {
  // var self = this;

  this.inventoryManagement = this.inventoryManagement && this.inventoryManagement === modelHelper.shopify
    ? modelHelper.shopify
    : '';
  this.fulfillmentService  = modelHelper.manual;

  done();
  next();
});

tempProductSchema.post('save', (error, doc, next) => {
  next(error);
});

const TempProducts = mongoose.model('TempProduct', tempProductSchema);

module.exports = TempProducts;
