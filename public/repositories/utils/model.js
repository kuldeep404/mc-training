"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// import helpers
var schemaHelper = require('./schema');

var shippingKeys = require('./key').getShipping();

var ModelHelper =
/*#__PURE__*/
function () {
  function ModelHelper() {
    (0, _classCallCheck2["default"])(this, ModelHelper);
    this.color = 'Color';
    this.material = 'Material';
    this.size = 'Size';
    this.all = 'all';
    this.deny = 'deny';
    this.flat = 'flat';
    this.lb = 'lb';
    this.manual = 'manual';
    this.shopify = 'shopify';
    this.stripe = 'stripe';
    this.pending = 'pending';
    this.invited = 'invited';
    this.review = 'Needs Review';
    this.unpaid = 'unpaid';
    this.selected = 'selected';
  }

  (0, _createClass2["default"])(ModelHelper, [{
    key: "activityType",
    value: function activityType() {
      return {
        values: ['invite', 'inviteCsv', 'order', 'paypal', 'product', 'productCsv', 'productImport', 'stripe', 'vendorCsv'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "allowedBrowsers",
    value: function allowedBrowsers() {
      var retVal = {
        values: ['mozilla', 'chrome', 'safari', 'opera', 'ie'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "allowedDays",
    value: function allowedDays() {
      var retVal = {
        values: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "allowedWebOs",
    value: function allowedWebOs() {
      var retVal = {
        values: ['windows', 'linux', 'mac'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "allowedMobileOs",
    value: function allowedMobileOs() {
      var retVal = {
        values: ['android', 'ios', 'windows'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "allowedUserRoles",
    value: function allowedUserRoles() {
      var retVal = {
        values: ['seller', 'vendor', 'system-admin'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "allowedTiers",
    value: function allowedTiers() {
      var retVal = {
        values: ['free', 'bootstrap', 'growth', 'pro'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "allowedVersions",
    value: function allowedVersions() {
      var retVal = {
        values: ['alpha', 'beta', 'live'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "advanceType",
    value: function advanceType() {
      var retVal = {
        values: ['vendor', 'productType'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "approvalType",
    value: function approvalType() {
      var retVal = {
        values: ['review', 'selected', 'all'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "baseSchema",
    value: function baseSchema() {
      return schemaHelper.baseSchema();
    }
  }, {
    key: "bigCommerceCategoryProductSort",
    value: function bigCommerceCategoryProductSort() {
      var bigCommerce = ['alpha_asc', 'alpha_desc', 'avg_customer_review', 'best_selling', 'featured', 'newest', 'price_asc', 'price_desc', 'use_store_settings'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceConfigDateLimit",
    value: function bigCommerceConfigDateLimit() {
      var bigCommerce = ['earliest', 'latest', 'range'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceConfigFileType",
    value: function bigCommerceConfigFileType() {
      var bigCommerce = ['all', 'specific'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceConfigNumberLimit",
    value: function bigCommerceConfigNumberLimit() {
      var bigCommerce = ['highest', 'lowest', 'range'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceConfigProductListShipping",
    value: function bigCommerceConfigProductListShipping() {
      var bigCommerce = ['none', 'package', 'weight'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceGiftWrappingType",
    value: function bigCommerceGiftWrappingType() {
      var bigCommerce = ['any', 'list', 'none'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceProductCondition",
    value: function bigCommerceProductCondition() {
      var bigCommerce = ['New', 'Refurbished', 'Used'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceInventoryTracking",
    value: function bigCommerceInventoryTracking() {
      var bigCommerce = ['none', 'product', 'variant'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceProductGraphType",
    value: function bigCommerceProductGraphType() {
      var bigCommerce = ['album', 'book', 'drink', 'food', 'game', 'movie', 'product', 'song', 'tv_show'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "bigCommerceProductVideoType",
    value: function bigCommerceProductVideoType() {
      var bigCommerce = ['youtube'];
      return {
        values: [''].concat(bigCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "customRule",
    value: function customRule() {
      var retVal = {
        values: ['gloabl', 'vendor'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "ecommercePlatform",
    value: function ecommercePlatform() {
      var retVal = {
        values: [this.shopify, 'bigCommerce', 'wooCommerce'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "fulfillmentService",
    value: function fulfillmentService() {
      var retVal = {
        values: ['', 'manual'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "imageSource",
    value: function imageSource() {
      return {
        values: [null, '', 'cloudinary'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "inventoryManagement",
    value: function inventoryManagement() {
      var retVal = {
        values: [null, '', this.shopify],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "inventoryPolicy",
    value: function inventoryPolicy() {
      var retVal = {
        values: ['', 'continue', 'deny'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "offerCriteria",
    value: function offerCriteria() {
      return {
        values: ['greaterThan', 'lessThan'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "optionType",
    value: function optionType() {
      var bigCommerce = ['dropdown', 'product_list', 'product_list_with_images', 'radio_buttons', 'rectangles', 'swatch'];
      var wooCommerce = ['select'];
      return {
        values: [''].concat(bigCommerce, wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "paidBy",
    value: function paidBy() {
      var retVal = {
        values: [this.stripe, 'paypal'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "paymentStatus",
    value: function paymentStatus() {
      var retVal = {
        values: ['error', 'paid', 'pending'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "priceSet",
    value: function priceSet() {
      var priceSet = {
        amount: {
          trim: true,
          type: String
        },
        currencyCode: {
          trim: true,
          type: String
        }
      };
      return {
        shopMoney: priceSet,
        presentmentMoney: priceSet
      };
    }
  }, {
    key: "pricingRule",
    value: function pricingRule() {
      var retVal = {
        values: ['global', 'vendor', 'productType', 'manual'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "reasonType",
    value: function reasonType() {
      return {
        values: ['reject', 'unreject', 'delete', 'undelete', 'resubmit'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "required",
    value: function required() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return schemaHelper.required(label);
    }
  }, {
    key: "shippingRuleType",
    value: function shippingRuleType() {
      var retVal = {
        values: [shippingKeys.destination, shippingKeys.product],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "shippingOfferType",
    value: function shippingOfferType() {
      var retVal = {
        values: [shippingKeys.destination, shippingKeys.product, shippingKeys.productPrice, shippingKeys.productQuantity],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "shippingType",
    value: function shippingType() {
      var retVal = {
        values: [shippingKeys.none, shippingKeys.flat, shippingKeys.equal, shippingKeys.vendorManage],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "shippingAllowVendor",
    value: function shippingAllowVendor() {
      var retVal = {
        values: [shippingKeys.all, shippingKeys.selected, shippingKeys.none],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "shippingVendorManageType",
    value: function shippingVendorManageType() {
      var retVal = {
        values: [shippingKeys.free, shippingKeys.fixed],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "standardType",
    value: function standardType() {
      var retVal = {
        values: ['flat', 'percentage'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "storeProductType",
    value: function storeProductType() {
      var bigCommerce = ['digital', 'physical'];
      var wooCommerce = ['simple', 'grouped', 'external', 'variable'];
      return {
        values: [''].concat(bigCommerce, wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "unique",
    value: function unique() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return schemaHelper.unique(label);
    }
  }, {
    key: "userLevel",
    value: function userLevel() {
      var retVal = {
        values: ['system-admin', 'account-admin', 'user'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "weightUnit",
    value: function weightUnit() {
      var retVal = {
        values: ['', 'lb', 'oz', 'kg', 'g'],
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
      return retVal;
    }
  }, {
    key: "wooCommerceBackOrder",
    value: function wooCommerceBackOrder() {
      var wooCommerce = ['no', 'notify', 'yes'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceCatalogVisibility",
    value: function wooCommerceCatalogVisibility() {
      var wooCommerce = ['catalog', 'hidden', 'search', 'visible'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceCategoryDisplay",
    value: function wooCommerceCategoryDisplay() {
      var wooCommerce = ['both', 'default', 'products', 'subcategories'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceCurrency",
    value: function wooCommerceCurrency() {
      var wooCommerce = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'IRT', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PRB', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STD', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceInventoryStatus",
    value: function wooCommerceInventoryStatus() {
      var wooCommerce = ['instock', 'onbackorder', 'outofstock'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceProductStatus",
    value: function wooCommerceProductStatus() {
      var wooCommerce = ['draft', 'pending', 'private', 'publish'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceOrderStatus",
    value: function wooCommerceOrderStatus() {
      var marketcube = ['accept', 'reject'];
      return {
        values: [''].concat(marketcube),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceOrderStoreStatus",
    value: function wooCommerceOrderStoreStatus() {
      var wooCommerce = ['cancelled', 'completed', 'failed', 'on-hold', 'pending', 'processing', 'refunded', 'trash'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceOrderFeeTaxStatus",
    value: function wooCommerceOrderFeeTaxStatus() {
      var wooCommerce = ['none', 'taxable'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }, {
    key: "wooCommerceTaxStatus",
    value: function wooCommerceTaxStatus() {
      var wooCommerce = ['none', 'shipping', 'taxable'];
      return {
        values: [''].concat(wooCommerce),
        message: 'Invalid value provided for {PATH} with value `{VALUE}`'
      };
    }
  }]);
  return ModelHelper;
}();

var _default = new ModelHelper();

exports["default"] = _default;