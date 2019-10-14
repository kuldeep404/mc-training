import mongoose, { model, Schema } from 'mongoose';
import modelHelper from '../utils/model';

import {
  ProductImage,
  ProductInventory,
  ProductOption,
  ProductPrice,
  ProductTax
} from '.';


const required   = modelHelper.required();
const baseSchema = modelHelper.baseSchema();

const variantSchema = new Schema({
  ...baseSchema,

  binPickingNumber: { // big-commerce
    trim: true,
    type: String,
  },
  description: { // woo-commerce
    trim: true,
    type: String,
  },
  dimension: {
    depth: {
      trim: true,
      type: Number,
    },
    height: {
      trim: true,
      type: Number,
    },
    width: {
      trim: true,
      type: Number,
    },
  },
  downloads: [{ // woo-commerce
    fileId: {
      required,
      trim: true,
      type: String,
    },
    name: {
      required,
      trim: true,
      type: String,
    },
    url: {
      required,
      trim: true,
      type: String,
    },
  }],
  downloadLimit: { // woo-commerce
    trim: true,
    type: Number,
  },
  downloadExpiry: { // woo-commerce
    trim: true,
    type: Number,
  },
  ecommercePlatform: {
    enum: modelHelper.ecommercePlatform(),
    required,
    trim: true,
    type: String,
  },
  fixedCostShippingPrice: { // big-commerce
    trim: true,
    type: Number,
  },
  images: { // woo-commerce
    trim: true,
    type: [{
      ref : ProductImage,
      type: mongoose.Schema.Types.ObjectId,
    }],
  },
  inventoryId: {
    ref : ProductInventory,
    type: mongoose.Schema.Types.ObjectId,
  },
  isDownloadable: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  isFreeShipping: { // big-commerce
    trim: true,
    type: Boolean,
  },
  isPurchasable: { // woo-commerce purchaseable
    trim: true,
    type: Boolean,
  },
  isPurchasingDisabled: { // big-commerce purchasing_disabled
    default: false,
    trim   : true,
    type   : Boolean,
  },
  isSynced: {
    trim: true,
    type: Boolean,
  },
  isVirtual: { // woo-commerce
    trim: true,
    type: Boolean,
  },
  metaData: [{ // woo-commerce // meta_data
    key: {
      trim: true,
      type: String,
    },
    storeMetaId: {
      trim: true,
      type: Number,
    },
    value: {
      trim: true,
      type: String,
    },
  }],
  options: [{
    ref : ProductOption,
    type: mongoose.Schema.Types.ObjectId,
  }],
  ownerId: {
    ref : 'users',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  price: {
    trim: true,
    type: Number,
  },
  priceId: {
    ref : ProductPrice,
    type: mongoose.Schema.Types.ObjectId,
  },
  productId: {
    ref : 'product',
    required,
    type: mongoose.Schema.Types.ObjectId,
  },
  purchasingDisabledMessage: { // big-commerce
    trim: true,
    type: String,
  },
  shippingClass: { // woo-commerce
    trim: true,
    type: String,
  },
  shippingClassId: { // woo-commerce
    trim: true,
    type: Number,
  },
  sortOrder: { // woo-commerce menu_order
    trim: true,
    type: Number,
  },
  // status: {
  //   trim: true,
  //   type: String,
  // },
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
  storeProductId: {
    trim: true,
    type: Number,
  },
  storeShippingClassId: { // woo-commerce
    trim: true,
    type: Number,
  },
  storeSkuId: { // big-commerce
    trim: true,
    type: Number,
  },
  storeVariantId: {
    trim: true,
    type: Number,
  },
  storeVariantLink: { // woo-commerce
    trim: true,
    type: String,
  },
  storeStatus: { // woo-commerce
    enum: modelHelper.wooCommerceProductStatus(),
    trim: true,
    type: String,
  },
  taxId: {
    ref : ProductTax,
    type: mongoose.Schema.Types.ObjectId,
  },
  // thumbnails: [{ // To Discuss
  //   code    : String,
  //   name    : String,
  //   position: Number,
  //   url     : {
  //     type: String,
  //   },
  // }],
  // type: { // To Discuss
  //   trim: true,
  //   type: String,
  // },
  upc: { // big-commerce
    trim: true,
    type: String,
  },
  // variantAttribute: [{ // To Discuss
  //   name : String,
  //   style: {
  //     type: String,
  //   },
  //   value: String,
  // }],
  weight: {
    trim: true,
    type: Number,
  },
}, { collection: 'productVariant', timestamps: true });

export default model('ProductVariant', variantSchema);
