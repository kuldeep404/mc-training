"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userQueries = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _repositories = require("../../../repositories");

var _logger = _interopRequireDefault(require("../../../libs/logger"));

var userQueries = {
  getUser: function () {
    var _getUser = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(_, _ref) {
      var userId, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = _ref.userId;
              _context.prev = 1;
              _context.next = 4;
              return _repositories.User.load(userId);

            case 4:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              _logger["default"].error("error finding user with id: ".concat(userId));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    function getUser(_x, _x2) {
      return _getUser.apply(this, arguments);
    }

    return getUser;
  }()
};
exports.userQueries = userQueries;