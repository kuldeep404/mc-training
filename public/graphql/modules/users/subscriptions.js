"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _subscriptions = _interopRequireDefault(require("../../subscriptions"));

var _default = {
  roleAdded: {
    subscribe: function subscribe() {
      return _subscriptions["default"].asyncIterator('roleAdded');
    }
  },
  // userUpdated: {
  //     subscribe: () => pubsub.asyncIterator('userUpdated')
  // },
  roleDeleted: {
    subscribe: function subscribe() {
      return _subscriptions["default"].asyncIterator('roleDeleted');
    }
  }
};
exports["default"] = _default;