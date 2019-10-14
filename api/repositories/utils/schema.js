// import packages
const { Schema }    = require('mongoose');

class SchemaHelper {
  baseSchema() {
    const required = this.required();
    return {
      createdBy: {
        ref : 'users',
        required,
        type: Schema.Types.ObjectId,
      },
      deletedAt: {
        trim: true,
        type: Date,
      },
      deletedBy: {
        ref : 'users',
        // required,
        type: Schema.Types.ObjectId,
      },
      updatedBy: {
        ref : 'users',
        required,
        type: Schema.Types.ObjectId,
      },
    };
  }

  billingSchema() {
    return {
      ...this.shippingSchema(),

      email: {
        trim: true,
        type: String,
      },
      phone: {
        trim: true,
        type: String,
      },
    };
  }

  metaDataSchema() {
    return {
      key: { // woo-commerce
        trim: true,
        type: String,
      },
      storeMetaDataId: { // woo-commerce
        trim: true,
        type: Number,
      },
      value: { // woo-commerce
        trim: true,
        type: String,
      },
    };
  }

  required(label = '') {
    if (label) {
      return [true, `${label} is required`];
    }

    return [true, '{PATH} is required'];
  }

  shippingSchema() {
    return {
      addressLineOne: {
        trim: true,
        type: String,
      },
      addressLineTwo: {
        trim: true,
        type: String,
      },
      city: {
        trim: true,
        type: String,
      },
      company: {
        trim: true,
        type: String,
      },
      country: { // ISO code or name of the state, province or district.
        trim: true,
        type: String,
      },
      firstName: {
        trim: true,
        type: String,
      },
      lastName: {
        trim: true,
        type: String,
      },
      postcode: {
        trim: true,
        type: String,
      },
      state: { // ISO code or name of the state, province or district.
        trim: true,
        type: String,
      },
    };
  }

  taxSchema() {
    return {
      isCompound: { // woo-commerce
        trim: true,
        type: Boolean,
      },
      label: { // woo-commerce
        trim: true,
        type: String,
      },
      metaData: [{ // woo-commerce
        trim: true,
        type: new Schema(this.metaDataSchema()),
      }],
      rateCode: { // woo-commerce
        trim: true,
        type: String,
      },
      shippingTaxTotal: { // woo-commerce
        trim: true,
        type: String,
      },
      storeRateId: { // woo-commerce
        trim: true,
        type: String,
      },
      storeTaxId: { // woo-commerce
        trim: true,
        type: Number,
      },
      subtotal: { // woo-commerce - used in orderRefund.lineItems.taxes
        trim: true,
        type: String,
      },
      taxTotal: { // woo-commerce
        trim: true,
        type: String,
      },
      total: { // woo-commerce - used in orderRefund.lineItems.taxes
        trim: true,
        type: String,
      },
    };
  }

  unique(label = '') {
    if (label) {
      return [true, `${label} for this {PATH} already exists`];
    }

    return [true, '{PATH} must be unique'];
  }
}

module.exports = new SchemaHelper();
