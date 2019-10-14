import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const priceSchema = new Schema({
  ...baseSchema,

  calculatedPrice: { // big-commerce
    trim: true,
    type: Number,
  },
  costPrice: { // big-commerce
    trim: true,
    type: Number,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  isSale: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  price: {
    trim: true,
    type: Number,
  },
  priceHtml: { // woo-commerce
    trim: true,
    type: String,
  },
  priceQuantity: {
    trim: true,
    type: Number,
  },
  productId: {
    ref : 'product',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  regularPrice: { // woo-commerce
    trim: true,
    type: Number,
  },
  retailPrice: { // big-commerce
    trim: true,
    type: Number,
  },
  salePrice: { // if value, overwrite price field value
    trim: true,
    type: Number,
  },
  storeSaleFrom: { // woo-commerce
    trim: true,
    type: Date,
  },
  storeSaleFromGMT: { // woo-commerce
    trim: true,
    type: Date,
  },
  storeSaleTo: { // woo-commerce
    trim: true,
    type: Date,
  },
  storeSaleToGMT: { // woo-commerce
    trim: true,
    type: Date,
  },
  storeProductId: {
    trim: true,
    type: Number,
  },
  storeVariantId: {
    trim: true,
    type: Number,
  },
  variantId: {
    ref : 'productVariant',
    type: mongoose.Schema.Types.ObjectId,
  },
}, { collection: 'productPrice', timestamps: true });

export default model('ProductPrice', priceSchema);
