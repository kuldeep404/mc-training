import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const categorySchema = new Schema({
  ...baseSchema,

  customUrl: { // big-commerce
    isCustomized: {
      type: Boolean,
    },
    url: {
      trim: true,
      type: String,
    },
  },
  defaultProductSort: { // big-commerce
    enum: modelHelper.bigCommerceCategoryProductSort(),
    trim: true,
    type: String,
  },
  description: {
    trim: true,
    type: String,
  },
  display: { // woo-commerce
    enum: modelHelper.wooCommerceCategoryDisplay(),
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  handle: { // unique // woo-commerce //slug
    trim: true,
    type: String,
  },
  imageId: {
    ref : 'images',
    type: mongoose.Schema.Types.ObjectId,
  },
  imageUrl: {
    trim: true,
    type: String,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  isVisible: { // big-commerce
    type: Boolean,
  },
  layoutFile: { // big-commerce
    trim: true,
    type: String,
  },
  metaDescription: { // big-commerce
    trim: true,
    type: String,
  },
  metaKeywords: [{ // big-commerce
    trim: true,
    type: String,
  }],
  name: { // woo-commerce
    required,
    trim: true,
    type: String,
  },
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  pageTitle: { // big-commerce
    trim: true,
    type: String,
  },
  publishedProductCount: { // woo-commerce
    trim: true,
    type: Number,
  },
  searchKeyword: { // big-commerce
    trim: true,
    type: String,
  },
  storeImage: { // woo-commerce
    alt: {
      trim: true,
      type: String,
    },
    name: {
      trim: true,
      type: String,
    },
    src: {
      trim: true,
      type: String,
    },
    storeDateCreated: {
      trim: true,
      type: Date,
    },
    storeDateCreatedGMT: {
      trim: true,
      type: Date,
    },
    storeDateModified: {
      trim: true,
      type: Date,
    },
    storeDateModifiedGMT: {
      trim: true,
      type: Date,
    },
  },
  sortOrder: { // big-commerce, woo-commerce (menu_order)
    trim: true,
    type: Number,
  },
  storeCategoryId: { // big-commerce, woo-commerce
    trim: true,
    type: Number,
  },
  storeParentCategoryId: { // big-commerce, woo-commerce
    trim: true,
    type: String,
  },
  totalView: { // big-commerce
    trim: true,
    type: Number,
  },
}, { collection: 'storeCategory', timestamps: true });

export default model('StoreCategory', categorySchema);

