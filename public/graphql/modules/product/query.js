"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productQueries = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _repositories = require("../../../repositories");

var _logger = _interopRequireDefault(require("../../../libs/logger"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var productQueries = {
  getProduct: function () {
    var _getProduct = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(_, _ref) {
      var productId, _ref2, owner, product;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productId = _ref.productId;
              _context.prev = 1;
              _context.next = 4;
              return _repositories.ProductCore.findOne({
                _id: productId
              }).lean().populate({
                path: 'ownerId'
              }).exec();

            case 4:
              _ref2 = _context.sent;
              owner = _ref2.ownerId;
              product = (0, _objectWithoutProperties2["default"])(_ref2, ["ownerId"]);
              return _context.abrupt("return", _objectSpread({}, product, {
                owner: owner
              }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);

              _logger["default"].error("error finding product with id: ".concat(productId), _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    function getProduct(_x, _x2) {
      return _getProduct.apply(this, arguments);
    }

    return getProduct;
  }(),
  getProductCore: function () {
    var _getProductCore = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(_, _ref3) {
      var productId, product;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              productId = _ref3.productId;
              _context2.prev = 1;
              _context2.next = 4;
              return _repositories.Product.findOne({
                _id: productId
              });

            case 4:
              product = _context2.sent;
              return _context2.abrupt("return", product);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);

              _logger["default"].error("error finding product with id: ".concat(productId, " "), _context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    function getProductCore(_x3, _x4) {
      return _getProductCore.apply(this, arguments);
    }

    return getProductCore;
  }(),
  getProductsByOwner: function () {
    var _getProductsByOwner = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(_, _ref4) {
      var ownerId, selectedProducts, _products;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ownerId = _ref4.userId;
              _context3.prev = 1;
              _context3.next = 4;
              return _repositories.ProductCore.find({
                ownerId: ownerId
              }).lean().populate({
                path: 'ownerId'
              }).exec();

            case 4:
              selectedProducts = _context3.sent;
              _products = selectedProducts.map(function (product) {
                return _objectSpread({}, product, {
                  owner: _objectSpread({}, product.ownerId)
                });
              });
              return _context3.abrupt("return", _products);

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);

              _logger["default"].error("error finding products with userId: ".concat(products), _context3.t0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    function getProductsByOwner(_x5, _x6) {
      return _getProductsByOwner.apply(this, arguments);
    }

    return getProductsByOwner;
  }()
};
exports.productQueries = productQueries;