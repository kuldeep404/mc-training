import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

import configSchema from './configSchema';
import optionValueSchema from './optionValueSchema';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

// attribute for woo-commerce
// To Do: StoreOption(attribute) & StoreOptionValue(attribute term) for woo-commerce
const optionSchema = new Schema({
  ...baseSchema,

  config: { // big-commerce
    trim: true,
    type: configSchema,
  },
  displayName: { // big-commerce
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  imageUrl: { // big-commerce
    trim: true,
    type: String,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  isVariant: { // woo-commerce // variation
    trim: true,
    type: Boolean,
  },
  isVisible: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  name: {
    trim: true,
    type: String,
  },
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  position: { // woo-commerce
    trim: true,
    type: String,
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
  storeOptionId: {
    trim: true,
    type: Number,
  },
  storeProductId: {
    trim: true,
    type: Number,
  },
  storeVariantId: {
    trim: true,
    type: Number,
  },
  type: { // big-commerce // woo-commerce
    enum: modelHelper.optionType(),
    trim: true,
    type: String,
  },
  values: [{ // big-commerce // woo-commerce
    trim: true,
    type: optionValueSchema,
  }],
  variantId: {
    ref : 'productVariant',
    type: mongoose.Schema.Types.ObjectId,
  },
}, { collection: 'productOption', timestamps: true });

export default model('ProductOption', optionSchema);

