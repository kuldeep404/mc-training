"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderQueries = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _repositories = require("../../../repositories");

var _logger = _interopRequireDefault(require("../../../libs/logger"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var orderQueries = {
  getOrderById: function () {
    var _getOrderById = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(_, _ref) {
      var _id, _ref2, seller, order;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _id = _ref.orderId;
              _context.prev = 1;
              _context.next = 4;
              return _repositories.Order.findOne({
                _id: _id
              }).lean().populate({
                path: 'sellerId'
              }).exec();

            case 4:
              _ref2 = _context.sent;
              seller = _ref2.sellerId;
              order = (0, _objectWithoutProperties2["default"])(_ref2, ["sellerId"]);
              return _context.abrupt("return", _objectSpread({}, order, {
                seller: seller
              }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);

              _logger["default"].error("error finding order with id: ".concat(_id, "--err--").concat(_context.t0));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    function getOrderById(_x, _x2) {
      return _getOrderById.apply(this, arguments);
    }

    return getOrderById;
  }()
};
exports.orderQueries = orderQueries;