"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _model = _interopRequireDefault(require("../utils/model"));

var required = _model["default"].required();

var shippingType = _model["default"].shippingType();

var standardType = _model["default"].standardType();

var volumeSchema = new _mongoose.Schema({
  min: {
    type: Number,
    trim: true,
    required: required
  },
  max: {
    type: Number,
    trim: true,
    required: required
  },
  commission: {
    type: Number,
    trim: true,
    required: required
  }
}, {
  _id: false
});
var usersSchema = new _mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  subTitle: {
    type: String,
    trim: true
  },
  parentId: {
    type: String,
    trim: true
  },
  parentUserLevel: {
    type: String,
    trim: true
  },
  parentUserRole: {
    type: String,
    trim: true
  },
  claimToken: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  brandName: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: Number,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  pinCode: {
    type: String,
    trim: true
  },
  logo: {
    type: String,
    trim: true
  },
  shop: {
    type: String,
    trim: true
  },
  shopifyAccessToken: {
    type: String,
    trim: true
  },
  addedBy: {
    type: String
  },
  chargeId: {
    type: String,
    trim: true
  },
  accessKey: {
    type: String,
    trim: true
  },
  accessToken: {
    type: String,
    trim: true
  },
  languageCode: {
    type: String,
    trim: true
  },
  moneyCode: {
    type: String,
    trim: true
  },
  moneyFormat: {
    type: String,
    trim: true
  },
  weightUnit: {
    type: String,
    trim: true,
    "enum": _model["default"].weightUnit()
  },
  ecommercePlatform: {
    type: String,
    trim: true,
    "enum": _model["default"].ecommercePlatform()
  },
  commission: {
    type: Number,
    trim: true
  },
  commissionType: {
    type: String,
    trim: true,
    "enum": ['Percentage', 'Flat']
  },
  introductorySeller: {
    type: String,
    trim: true
  },
  introductorySellerName: {
    type: String,
    trim: true
  },
  paymentGateway: {
    type: String,
    trim: true,
    "enum": [_model["default"].stripe]
  },
  secretKey: {
    type: String,
    trim: true
  },
  accountId: {
    type: String,
    trim: true
  },
  publishableKey: {
    type: String,
    trim: true
  },
  planId: {
    type: String,
    trim: true
  },
  payment: {
    type: Boolean,
    required: required
  },
  dueDays: {
    type: Number,
    "default": 0
  },
  mirrorUser: {
    type: String,
    "default": ''
  },
  domain: {
    type: String,
    trim: true
  },
  defaultCommission: {
    commission: {
      type: Number,
      trim: true
    },
    min: {
      type: Number,
      trim: true
    }
  },
  email: {
    address: {
      type: String,
      lowercase: true,
      trim: true
    },
    verified: {
      type: Boolean
    }
  },
  maintenance: {
    isApp: {
      type: Boolean
    },
    isSite: {
      type: Boolean
    }
  },
  roles: {
    name: {
      type: String,
      trim: true
    }
  },
  services: {
    password: {
      bcrypt: {
        type: String
      },
      reset: {
        token: {
          type: String
        },
        when: {
          type: Date
        }
      }
    },
    email: {
      verificationTokens: {
        token: {
          type: String
        },
        when: {
          type: Date
        }
      }
    }
  },
  userLevel: {
    type: String,
    required: required,
    trim: true,
    "enum": _model["default"].userLevel()
  },
  volume: [volumeSchema],
  products: {
    max: {
      type: Number
    },
    used: {
      type: Number
    }
  },
  vendors: {
    max: {
      type: Number
    },
    associated: {
      type: Number
    }
  },
  returnPeriod: {
    type: Number,
    trim: true
  },
  isReturn: {
    type: Boolean
  },
  trialDays: {
    type: Number,
    "default": 0
  },
  plan: {
    isBranding: {
      type: Boolean
    },
    name: {
      type: String
    },
    price: {
      type: Number
    }
  },
  setting: {
    isAcceptOrder: {
      type: Boolean
    }
  },
  payoutSetting: {
    isAutoStripe: {
      type: Boolean
    },
    isAutoPaypal: {
      type: Boolean
    }
  },
  tax: {
    isTax: {
      type: Boolean
    },
    rate: {
      type: Number
    },
    type: {
      type: String
    }
  },
  paymentTerms: {
    type: {
      type: String
    },
    days: {
      type: Number
    }
  },
  shipping: {
    term: {
      type: String,
      trim: true,
      "enum": shippingType
    },
    amount: {
      type: Number,
      "default": 0
    },
    type: {
      type: String,
      trim: true,
      "default": _model["default"].flat,
      "enum": standardType
    }
  },
  style: {
    header: {
      color: {
        type: String
      },
      font: {
        type: String
      }
    },
    button: {
      color: {
        type: String
      },
      font: {
        type: String
      }
    }
  },
  footerText: {
    type: String
  },
  emailSign: {
    type: String
  },
  loginText: {
    type: String
  },
  register: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  stripeKey: {
    clientId: {
      type: String,
      trim: true
    },
    secret: {
      type: String,
      trim: true
    }
  },
  stripe: {
    accountId: {
      type: String,
      trim: true
    },
    refreshToken: {
      type: String,
      trim: true
    },
    accessToken: {
      type: String,
      trim: true
    },
    publishKey: {
      type: String,
      trim: true
    },
    isLive: {
      type: Boolean
    }
  },
  paypal: {
    emailId: {
      type: String,
      trim: true
    },
    status: {
      type: Number
    }
  },
  paypalKey: {
    clientId: {
      type: String,
      trim: true
    },
    secret: {
      type: String,
      trim: true
    },
    webhookId: {
      type: String,
      trim: true
    }
  },
  markUp: {
    price: {
      type: Number,
      trim: true
    },
    type: {
      type: String,
      "enum": _model["default"].standardType(),
      trim: true
    }
  },
  changeLogs: {
    type: Object
  },
  activatedOn: {
    type: Date
  },
  trialEndDate: {
    type: Date
  },
  billingDate: {
    type: Date
  },
  isOtp: {
    type: Boolean,
    required: required,
    "default": false
  },
  firstlogin: {
    type: Boolean,
    required: required,
    "default": true
  },
  isFirstProduct: {
    type: Boolean,
    "default": true
  },
  isFirstOrder: {
    type: Boolean,
    "default": true
  },
  isFirstInvite: {
    type: Boolean,
    "default": true
  },
  isFirstVendor: {
    type: Boolean,
    "default": true
  },
  isFirstApproval: {
    type: Boolean,
    "default": true
  },
  isFirstPublish: {
    type: Boolean,
    "default": true
  },
  isGeneralSetup: {
    type: Boolean,
    "default": true
  },
  isDiscount: {
    type: Boolean,
    "default": false
  },
  isCustomCharge: {
    type: Boolean,
    "default": false
  },
  isMarkup: {
    type: Boolean,
    "default": false
  },
  isOrderConnect: {
    type: Boolean,
    "default": false
  },
  isWebhookUpdated: {
    type: Boolean,
    "default": false
  },
  isDomainActive: {
    type: Boolean,
    "default": false
  },
  isHideMcInfo: {
    type: Boolean,
    "default": false
  },
  isReadOnly: {
    type: Boolean,
    "default": false
  },
  isDeleted: {
    type: Boolean,
    "default": false
  },
  isNewShopifyProduct: {
    type: Boolean,
    "default": false
  },
  productApproval: {
    type: String,
    "default": _model["default"].selected,
    "enum": _model["default"].approvalType(),
    trim: true
  },
  isRequiredPermission: {
    type: Boolean,
    "default": false
  },
  isProductSync: {
    type: Boolean,
    "default": false
  },
  profile: _mongoose.Schema.Types.Mixed,
  anything: _mongoose.Schema.Types.Mixed,
  // stores anything that is not defined above
  isCarrierService: {
    type: Boolean,
    "default": false
  }
}, {
  collection: 'users',
  timestamps: true
}); // index

usersSchema.index({
  shop: 1
});
usersSchema.index({
  brandName: 1,
  'roles.name': 1,
  userLevel: 1,
  isDeleted: 1
});
usersSchema.index({
  domain: 1
}, {
  unique: true,
  partialFilterExpression: {
    domain: {
      $exists: true
    }
  }
});
/**
 * Statics
 */

usersSchema.statics = {
  /**
   * Find user by id
   *
   * @param {ObjectId} id
   * @api private
   */
  load: function load(_id) {
    return this.findOne({
      _id: _id
    }) // .populate('username', 'title vendorId')
    .exec();
  },

  /**
   * Find user row by data
   *
   * @param {Object} data
   * @api private
   */
  loadOne: function loadOne(data) {
    return this.findOne(data) // .populate('username', 'title vendorId')
    .exec();
  }
};
usersSchema.pre('save', true, function (next, done) {
  var self = this;

  if (self.accountId) {
    _mongoose["default"].models.Users.findOne({
      accountId: self.accountId
    }, function (err, user) {
      if (err) {
        done(err);
      } else if (user) {
        self.invalidate('accountId', 'Stripe Account must be unique');
        done(new Error('Stripe Account must be unique'));
      } else {
        done();
      }
    });
  } else {
    done();
  }

  next();
});

var _default = (0, _mongoose.model)('Users', usersSchema);

exports["default"] = _default;