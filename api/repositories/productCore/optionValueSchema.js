import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();

export default new Schema({
  isDefault: { // big-commerce
    trim: true,
    type: Boolean,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  label: { // big-commerce // woo-commerce
    required,
    type: String,
  },
  // optionId: {
  //   ref : 'productOption',
  //   required,
  //   type: mongoose.Schema.Types.ObjectId,
  // },
  sortOrder: { // big-commerce
    // required,
    type: Number,
  },
  // storeOptionId: {
  //   trim: true,
  //   type: Number,
  // },
  storeOptionValueId: { // big-commerce
    trim: true,
    type: Number,
  },
  valueData: { // big-commerce
    trim: true,
    type: Object,
  },
});

