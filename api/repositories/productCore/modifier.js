import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

import optionValueSchema from './optionValueSchema';
import productConfigSchema from './configSchema';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

// To Discuss
const productModifierSchema = new Schema({
  ...baseSchema,

  config: {
    type: productConfigSchema,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  isRequired: {
    required,
    trim: true,
    type: Boolean,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  name: {
    trim: true,
    type: String,
  },
  optionValues: [{
    trim: true,
    type: optionValueSchema,
  }],
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
  sortOrder: { // To Discuss
    trim: true,
    type: Number,
  },
  storeModifierId: {
    trim: true,
    type: Number,
  },
  storeProductId: {
    trim: true,
    type: Number,
  },
  type: { // To Discuss
    required,
    trim: true,
    type: String,
  },
}, { collection: 'productModifier', timestamps: true });

// index
productModifierSchema.index({ name: 1 }, { unique: true });

export default model('ProductModifier', productModifierSchema);

