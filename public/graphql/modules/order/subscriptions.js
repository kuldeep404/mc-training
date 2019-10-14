"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  roleAdded: {
    subscribe: function subscribe() {
      return pubsub.asyncIterator('roleAdded');
    }
  },
  // userUpdated: {
  //     subscribe: () => pubsub.asyncIterator('userUpdated')
  // },
  roleDeleted: {
    subscribe: function subscribe() {
      return pubsub.asyncIterator('roleDeleted');
    }
  }
};
exports["default"] = _default;