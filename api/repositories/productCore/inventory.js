import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const inventorySchema = new Schema({
  ...baseSchema,

  backOrder: { // woo-commerce
    enum: modelHelper.wooCommerceBackOrder(),
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  isBackOrderAllowed: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  isBackOrdered: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  isManagingStock: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  isSoldIndividually: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  productId: {
    ref : 'product',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  quantity: { // inventory_level OR stock_quantity
    trim: true,
    type: Number,
  },
  sku: {
    trim: true,
    type: String,
  },
  status: { // woo-commerce
    enum: modelHelper.wooCommerceInventoryStatus(),
    trim: true,
    type: String,
  },
  storeProductId: {
    trim: true,
    type: Number,
  },
  storeVariantId: {
    trim: true,
    type: Number,
  },
  tracking: { // big-commerce // inventory_tracking
    enum: modelHelper.bigCommerceInventoryTracking(),
    trim: true,
    type: String,
  },
  warningLevel: { // big-commerce // inventory_warning_level
    trim: true,
    type: Number,
  },
  variantId: {
    ref : 'productVariant',
    type: mongoose.Schema.Types.ObjectId,
  },
}, { collection: 'productInventory', timestamps: true });

export default model('ProductInventory', inventorySchema);

