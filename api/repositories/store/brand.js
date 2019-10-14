import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const brandSchema = new Schema({
  ...baseSchema,

  customUrl: { // To Discuss
    isCustomized: {
      trim: true,
      type: Boolean,
    },
    url: {
      trim: true,
      type: String,
    },
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
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
  metaDescription: {
    trim: true,
    type: String,
  },
  metaKeywords: [{
    trim: true,
    type: String,
  }],
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
  pageTitle: {
    trim: true,
    type: String,
  },
  searchKeyword: {
    trim: true,
    type: String,
  },
  storeBrandId: {
    trim: true,
    type: Number,
  },
}, { collection: 'storeBrand', timestamps: true });

// index
brandSchema.index({ name: 1, ownerId: 1 }, { unique: true });

export default model('StoreBrand', brandSchema);

