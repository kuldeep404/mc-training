import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const taxSchema = new Schema({
  ...baseSchema,

  class: { // woo-commerce
    trim: true,
    type: String,
  },
  code: { // big-commerce taxCode
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
  isTaxable: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  name: { // big-commerce
    trim: true,
    type: String,
  },
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  storeTaxId: { // big-commerce
    // required,
    trim: true,
    type: Number,
  },
  status: { // woo-commerce
    enum: modelHelper.wooCommerceTaxStatus(),
    trim: true,
    type: String,
  },
}, { collection: 'productTax', timestamps: true });

export default model('ProductTax', taxSchema);

