"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});
Object.defineProperty(exports, "ProductCore", {
  enumerable: true,
  get: function get() {
    return _product["default"];
  }
});
Object.defineProperty(exports, "Product", {
  enumerable: true,
  get: function get() {
    return _product2["default"];
  }
});
Object.defineProperty(exports, "Order", {
  enumerable: true,
  get: function get() {
    return _order["default"];
  }
});

var _user = _interopRequireDefault(require("./user/user"));

var _product = _interopRequireDefault(require("./productCore/product"));

var _product2 = _interopRequireDefault(require("./product/product"));

var _order = _interopRequireDefault(require("./order/order"));