import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const imageSchema = new Schema({
  ...baseSchema,

  alt: {  // woo-commerce
    trim: true,
    type: String,
  },
  description: {  // big-commerce
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  imageId: {
    ref : 'images',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  imageUrl: { // src // image_url
    required,
    trim: true,
    type: String,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  isThumbnail: { // big-commerce
    trim: true,
    type: Boolean,
  },
  name: {  // woo-commerce
    trim: true,
    type: String,
  },
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  productId: {
    ref : 'product',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  sortOrder: { // big-commerce
    trim: true,
    type: Number,
  },
  storeDateCreated: {
    trim: true,
    type: Date,
  },
  storeDateCreatedGMT: { // woo-commerce
    trim: true,
    type: Date,
  },
  storeDateModified: {
    trim: true,
    type: Date,
  },
  storeDateModifiedGMT: { // woo-commerce
    trim: true,
    type: Date,
  },
  storeImageId: {
    trim: true,
    type: Number,
  },
  storeImagePath: { // big-commerce
    trim: true,
    type: String,
  },
  storeProductId: {
    trim: true,
    type: Number,
  },
  storeUrl: { // big-commerce
    standard : String,
    thumbnail: String,
    tiny     : String,
    zoom     : String,
  },
  storeVariantId: {
    trim: true,
    type: Number,
  },
  variantId: {
    ref : 'productVariant',
    type: mongoose.Schema.Types.ObjectId,
  },
}, { collection: 'productImage', timestamps: true });


export default model('ProductImage', imageSchema);
