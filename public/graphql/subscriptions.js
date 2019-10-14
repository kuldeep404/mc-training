"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pubSub = void 0;

var _graphqlSubscriptions = require("graphql-subscriptions");

// You can publish changes from anywhere as long as you include this file and call pubsub.publish(...)
var pubSub = new _graphqlSubscriptions.PubSub();
exports.pubSub = pubSub;