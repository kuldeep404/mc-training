"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import packages
var _require = require('mongoose'),
    Schema = _require.Schema;

var SchemaHelper =
/*#__PURE__*/
function () {
  function SchemaHelper() {
    (0, _classCallCheck2["default"])(this, SchemaHelper);
  }

  (0, _createClass2["default"])(SchemaHelper, [{
    key: "baseSchema",
    value: function baseSchema() {
      var required = this.required();
      return {
        createdBy: {
          ref: 'users',
          required: required,
          type: Schema.Types.ObjectId
        },
        deletedAt: {
          trim: true,
          type: Date
        },
        deletedBy: {
          ref: 'users',
          // required,
          type: Schema.Types.ObjectId
        },
        updatedBy: {
          ref: 'users',
          required: required,
          type: Schema.Types.ObjectId
        }
      };
    }
  }, {
    key: "billingSchema",
    value: function billingSchema() {
      return _objectSpread({}, this.shippingSchema(), {
        email: {
          trim: true,
          type: String
        },
        phone: {
          trim: true,
          type: String
        }
      });
    }
  }, {
    key: "metaDataSchema",
    value: function metaDataSchema() {
      return {
        key: {
          // woo-commerce
          trim: true,
          type: String
        },
        storeMetaDataId: {
          // woo-commerce
          trim: true,
          type: Number
        },
        value: {
          // woo-commerce
          trim: true,
          type: String
        }
      };
    }
  }, {
    key: "required",
    value: function required() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (label) {
        return [true, "".concat(label, " is required")];
      }

      return [true, '{PATH} is required'];
    }
  }, {
    key: "shippingSchema",
    value: function shippingSchema() {
      return {
        addressLineOne: {
          trim: true,
          type: String
        },
        addressLineTwo: {
          trim: true,
          type: String
        },
        city: {
          trim: true,
          type: String
        },
        company: {
          trim: true,
          type: String
        },
        country: {
          // ISO code or name of the state, province or district.
          trim: true,
          type: String
        },
        firstName: {
          trim: true,
          type: String
        },
        lastName: {
          trim: true,
          type: String
        },
        postcode: {
          trim: true,
          type: String
        },
        state: {
          // ISO code or name of the state, province or district.
          trim: true,
          type: String
        }
      };
    }
  }, {
    key: "taxSchema",
    value: function taxSchema() {
      return {
        isCompound: {
          // woo-commerce
          trim: true,
          type: Boolean
        },
        label: {
          // woo-commerce
          trim: true,
          type: String
        },
        metaData: [{
          // woo-commerce
          trim: true,
          type: new Schema(this.metaDataSchema())
        }],
        rateCode: {
          // woo-commerce
          trim: true,
          type: String
        },
        shippingTaxTotal: {
          // woo-commerce
          trim: true,
          type: String
        },
        storeRateId: {
          // woo-commerce
          trim: true,
          type: String
        },
        storeTaxId: {
          // woo-commerce
          trim: true,
          type: Number
        },
        subtotal: {
          // woo-commerce - used in orderRefund.lineItems.taxes
          trim: true,
          type: String
        },
        taxTotal: {
          // woo-commerce
          trim: true,
          type: String
        },
        total: {
          // woo-commerce - used in orderRefund.lineItems.taxes
          trim: true,
          type: String
        }
      };
    }
  }, {
    key: "unique",
    value: function unique() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (label) {
        return [true, "".concat(label, " for this {PATH} already exists")];
      }

      return [true, '{PATH} must be unique'];
    }
  }]);
  return SchemaHelper;
}();

module.exports = new SchemaHelper();