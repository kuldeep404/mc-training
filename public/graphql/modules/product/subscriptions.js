"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSubscriptions = void 0;

var _subscriptions = require("../../subscriptions");

var productSubscriptions = {
  productAdded: {
    subscribe: function subscribe() {
      console.log('hiting subsription');
      return _subscriptions.pubSub.asyncIterator('productAdded');
    }
  },
  productDeleted: {
    subscribe: function subscribe() {
      return _subscriptions.pubSub.asyncIterator('productDeleted');
    }
  }
};
exports.productSubscriptions = productSubscriptions;