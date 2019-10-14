// import helpers
const schemaHelper = require('./schema');


const shippingKeys = require('./key').getShipping();

class ModelHelper {
  constructor() {
    this.color    = 'Color';
    this.material = 'Material';
    this.size     = 'Size';

    this.all = 'all';

    this.deny    = 'deny';
    this.flat    = 'flat';
    this.lb      = 'lb';
    this.manual  = 'manual';
    this.shopify = 'shopify';
    this.stripe  = 'stripe';

    this.pending = 'pending';
    this.invited = 'invited';

    this.review = 'Needs Review';

    this.unpaid   = 'unpaid';
    this.selected = 'selected';
  }

  activityType() {
    return {
      values: [
        'invite',
        'inviteCsv',
        'order',
        'paypal',
        'product',
        'productCsv',
        'productImport',
        'stripe',
        'vendorCsv',
      ],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  allowedBrowsers() {
    const retVal = {
      values : ['mozilla', 'chrome', 'safari', 'opera', 'ie'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  allowedDays() {
    const retVal = {
      values : ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  allowedWebOs() {
    const retVal = {
      values : ['windows', 'linux', 'mac'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  allowedMobileOs() {
    const retVal = {
      values : ['android', 'ios', 'windows'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  allowedUserRoles() {
    const retVal = {
      values : ['seller', 'vendor', 'system-admin'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  allowedTiers() {
    const retVal = {
      values : ['free', 'bootstrap', 'growth', 'pro'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  allowedVersions() {
    const retVal = {
      values : ['alpha', 'beta', 'live'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  advanceType() {
    const retVal = {
      values : ['vendor', 'productType'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  approvalType() {
    const retVal = {
      values : ['review', 'selected', 'all'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  baseSchema() {
    return schemaHelper.baseSchema();
  }

  bigCommerceCategoryProductSort() {
    const bigCommerce = [
      'alpha_asc',
      'alpha_desc',
      'avg_customer_review',
      'best_selling',
      'featured',
      'newest',
      'price_asc',
      'price_desc',
      'use_store_settings',
    ];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceConfigDateLimit() {
    const bigCommerce = ['earliest', 'latest', 'range'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceConfigFileType() {
    const bigCommerce = ['all', 'specific'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceConfigNumberLimit() {
    const bigCommerce = ['highest', 'lowest', 'range'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceConfigProductListShipping() {
    const bigCommerce = ['none', 'package', 'weight'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceGiftWrappingType() {
    const bigCommerce = ['any', 'list', 'none'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceProductCondition() {
    const bigCommerce = ['New', 'Refurbished', 'Used'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceInventoryTracking() {
    const bigCommerce = ['none', 'product', 'variant'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceProductGraphType() {
    const bigCommerce = [
      'album',
      'book',
      'drink',
      'food',
      'game',
      'movie',
      'product',
      'song',
      'tv_show',
    ];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  bigCommerceProductVideoType() {
    const bigCommerce = ['youtube'];
    return {
      values : ['', ...bigCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  customRule() {
    const retVal = {
      values : ['gloabl', 'vendor'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  ecommercePlatform() {
    const retVal = {
      values : [this.shopify, 'bigCommerce', 'wooCommerce'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  fulfillmentService() {
    const retVal = {
      values : ['', 'manual'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  imageSource() {
    return {
      values : [null, '', 'cloudinary'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  inventoryManagement() {
    const retVal = {
      values : [null, '', this.shopify],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  inventoryPolicy() {
    const retVal = {
      values : ['', 'continue', 'deny'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  offerCriteria() {
    return {
      values : ['greaterThan', 'lessThan'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  optionType() {
    const bigCommerce = [
      'dropdown',
      'product_list',
      'product_list_with_images',
      'radio_buttons',
      'rectangles',
      'swatch',
    ];
    const wooCommerce = [
      'select',
    ];
    return {
      values : ['', ...bigCommerce, ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  paidBy() {
    const retVal = {
      values : [this.stripe, 'paypal'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  paymentStatus() {
    const retVal = {
      values : ['error', 'paid', 'pending'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  priceSet() {
    const priceSet = {
      amount: {
        trim: true,
        type: String,
      },
      currencyCode: {
        trim: true,
        type: String,
      },
    };
    return {
      shopMoney       : priceSet,
      presentmentMoney: priceSet,
    };
  }

  pricingRule() {
    const retVal = {
      values : ['global', 'vendor', 'productType', 'manual'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  reasonType() {
    return {
      values : ['reject', 'unreject', 'delete', 'undelete', 'resubmit'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  required(label = '') {
    return schemaHelper.required(label);
  }

  shippingRuleType() {
    const retVal = {
      values : [shippingKeys.destination, shippingKeys.product],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  shippingOfferType() {
    const retVal = {
      values: [
        shippingKeys.destination,
        shippingKeys.product,
        shippingKeys.productPrice,
        shippingKeys.productQuantity,
      ],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  shippingType() {
    const retVal = {
      values : [shippingKeys.none, shippingKeys.flat, shippingKeys.equal, shippingKeys.vendorManage],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  shippingAllowVendor() {
    const retVal = {
      values : [shippingKeys.all, shippingKeys.selected, shippingKeys.none],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  shippingVendorManageType() {
    const retVal = {
      values : [shippingKeys.free, shippingKeys.fixed],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  standardType() {
    const retVal = {
      values : ['flat', 'percentage'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  storeProductType() {
    const bigCommerce = ['digital', 'physical'];
    const wooCommerce = ['simple', 'grouped', 'external', 'variable'];

    return {
      values : ['', ...bigCommerce, ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  unique(label = '') {
    return schemaHelper.unique(label);
  }

  userLevel() {
    const retVal = {
      values : ['system-admin', 'account-admin', 'user'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  weightUnit() {
    const retVal = {
      values : ['', 'lb', 'oz', 'kg', 'g'],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
    return retVal;
  }

  wooCommerceBackOrder() {
    const wooCommerce = ['no', 'notify', 'yes'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceCatalogVisibility() {
    const wooCommerce = ['catalog', 'hidden', 'search', 'visible'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceCategoryDisplay() {
    const wooCommerce = ['both', 'default', 'products', 'subcategories'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceCurrency() {
    const wooCommerce = [
      'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF',
      'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP',
      'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP',
      'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP',
      'INR', 'IQD', 'IRR', 'IRT', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD',
      'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO',
      'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK',
      'PHP', 'PKR', 'PLN', 'PRB', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD',
      'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STD', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD',
      'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR',
      'ZMW',
    ];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceInventoryStatus() {
    const wooCommerce = ['instock', 'onbackorder', 'outofstock'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceProductStatus() {
    const wooCommerce = ['draft', 'pending', 'private', 'publish'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceOrderStatus() {
    const marketcube = ['accept', 'reject'];
    return {
      values : ['', ...marketcube],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceOrderStoreStatus() {
    const wooCommerce = [
      'cancelled',
      'completed',
      'failed',
      'on-hold',
      'pending',
      'processing',
      'refunded',
      'trash',
    ];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceOrderFeeTaxStatus() {
    const wooCommerce = ['none', 'taxable'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }

  wooCommerceTaxStatus() {
    const wooCommerce = ['none', 'shipping', 'taxable'];
    return {
      values : ['', ...wooCommerce],
      message: 'Invalid value provided for {PATH} with value `{VALUE}`',
    };
  }
}

export default new ModelHelper();
