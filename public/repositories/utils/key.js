"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var KeyHelper =
/*#__PURE__*/
function () {
  function KeyHelper() {
    (0, _classCallCheck2["default"])(this, KeyHelper);
  }

  (0, _createClass2["default"])(KeyHelper, [{
    key: "getEnvironment",

    /**
     * @desc To get environment keys
     */
    value: function getEnvironment() {
      return {
        dev: 'dev',
        local: 'local',
        preProd: 'preprod',
        prod: 'prod',
        test: 'test'
      };
    }
    /**
     * @desc To get feature and feature error keys
     */

  }, {
    key: "getFeature",
    value: function getFeature() {
      return {
        error: {
          hideFeature: 'hideFeature',
          needPlanUpgrade: 'needPlanUpgrade',
          roleNotAllowed: 'roleNotAllowed'
        },
        feature: {
          advance: 'advance',
          advanceVendorCustomProfile: 'advanceVendorCustomProfile',
          advanceVendorProfile: 'advanceVendorProfile',
          basicShipping: 'basicShipping',
          commission: 'commission',
          customFields: 'customFields',
          global: 'global',
          muteNotification: 'muteNotification',
          payment: 'payment',
          "return": 'return',
          shipping: 'shipping',
          term: 'term',
          vendorManageShipping: 'vendorManageShipping'
        }
      };
    }
    /**
     * @desc To get mapper keys
     */

  }, {
    key: "getMapper",
    value: function getMapper() {
      return {
        action: 'action',
        defaults: 'defaults',
        destination: 'destination',
        each: 'each',
        item: 'item',
        items: 'items',
        source: 'source',
        type: 'type'
      };
    }
    /**
     * @desc To get plan keys
     */

  }, {
    key: "getPlan",
    value: function getPlan() {
      return {
        bootstrap: 'bootstrap',
        free: 'free',
        growth: 'growth',
        pro: 'pro'
      };
    }
    /**
     * @desc To get product keys
     */

  }, {
    key: "getProduct",
    value: function getProduct() {
      return {
        status: {
          approved: 'Approved',
          deleted: 'Deleted',
          "new": 'New',
          partial: 'Partially Approved',
          rejected: 'Rejected',
          review: 'Needs Review',
          reviewed: 'Reviewed'
        }
      };
    }
    /**
     * @desc To get shipping keys
     */

  }, {
    key: "getShipping",
    value: function getShipping() {
      return {
        all: 'all',
        destination: 'destination',
        equal: 'equal',
        fixed: 'fixed',
        flat: 'flat',
        free: 'free',
        none: 'none',
        product: 'product',
        productPrice: 'productPrice',
        productQuantity: 'productQuantity',
        selected: 'selected',
        serviceName: 'MarketCube Custom Shipping Rate Provider',
        vendorManage: 'vendorManage'
      };
    }
    /**
     * @desc To get user keys
     */

  }, {
    key: "getUser",
    value: function getUser() {
      return {
        accountAdminLevel: 'account-admin',
        sellerRole: 'seller',
        systemAdminLevel: 'system-admin',
        systemAdminRole: 'systemAdmin',
        vendorRole: 'vendor'
      };
    }
    /**
     * @desc To get version keys
     */

  }, {
    key: "getVersion",
    value: function getVersion() {
      return {
        alpha: 'alpha',
        beta: 'beta',
        live: 'live'
      };
    }
  }]);
  return KeyHelper;
}();

module.exports = new KeyHelper();