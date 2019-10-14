import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

// woo-commerce
const TagSchema = new Schema({
  ...baseSchema,

  description: {
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  handle: { // unique //slug
    trim: true,
    type: String,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  name: {
    required,
    trim: true,
    type: String,
  },
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  publishedProductCount: {
    trim: true,
    type: Number,
  },
  storeTagId: {
    trim: true,
    type: Number,
  },
}, { collection: 'StoreTag', timestamps: true });

export default model('StoreTag', TagSchema);
