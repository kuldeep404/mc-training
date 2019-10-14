import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

// big-commerce
const bulkPriceSchema = new Schema({
  ...baseSchema,

  amount: { // integer or string
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
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
  productId: {
    ref : 'product',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  quantityMax: {
    required,
    trim: true,
    type: Number,
  },
  quantityMin: {
    required,
    trim: true,
    type: Number,
  },
  storeBulkPriceId: {
    trim: true,
    type: Number,
  },
  storeProductId: {
    trim: true,
    type: Number,
  },
  type: {
    trim: true,
    type: String,
  },
}, { collection: 'productBulkPrice', timestamps: true });

export default model('ProductBulkPrice', bulkPriceSchema);

