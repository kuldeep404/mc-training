import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

const required   = modelHelper.required();

// big-commerce
export default new Schema({
  checkboxLabel: {
    trim: true,
    type: String,
  },
  dateEarliestValue: {
    trim: true,
    type: String,
  },
  dateLatestValue: {
    trim: true,
    type: String,
  },
  dateLimitMode: {
    enum: modelHelper.bigCommerceConfigDateLimit(),
    trim: true,
    type: String,
  },
  defaultValue: {
    trim: true,
    type: String,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  fileMaxSize: {
    trim: true,
    type: Number,
  },
  fileTypeMode: {
    enum: modelHelper.bigCommerceConfigFileType(),
    trim: true,
    type: String,
  },
  fileTypeOther: [{
    trim: true,
    type: String,
  }],
  fileTypeSupported: [{
    trim: true,
    type: String,
  }],
  isCheckedByDefault: {
    trim: true,
    type: Boolean,
  },
  isDateLimited: {
    trim: true,
    type: Boolean,
  },
  isNumberIntegerOnly: {
    trim: true,
    type: Boolean,
  },
  isNumberLimited: {
    trim: true,
    type: Boolean,
  },
  isProductListAdjustPricing: {
    trim: true,
    type: Boolean,
  },
  isProductListAdjustInventory: {
    trim: true,
    type: Boolean,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  isTextCharacterLimited: {
    trim: true,
    type: Boolean,
  },
  isTextLineLimited: {
    trim: true,
    type: Boolean,
  },
  numberHighestValue: {
    trim: true,
    type: Number,
  },
  numberLimitMode: {
    enum: modelHelper.bigCommerceConfigNumberLimit(),
    trim: true,
    type: String,
  },
  numberLowestValue: {
    trim: true,
    type: Number,
  },
  productListShipping: { // product_list_shipping_calc
    enum: modelHelper.bigCommerceConfigProductListShipping(),
    trim: true,
    type: String,
  },
  textMaxLength: {
    trim: true,
    type: Number,
  },
  textMaxLine: {
    trim: true,
    type: Number,
  },
  textMinLength: {
    trim: true,
    type: Number,
  },
});

