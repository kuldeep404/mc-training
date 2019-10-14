"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "orderTypes", {
  enumerable: true,
  get: function get() {
    return _modules.orderTypes;
  }
});
Object.defineProperty(exports, "productTypes", {
  enumerable: true,
  get: function get() {
    return _modules.productTypes;
  }
});
Object.defineProperty(exports, "userTypes", {
  enumerable: true,
  get: function get() {
    return _modules.userTypes;
  }
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _modules = require("./modules");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  type Query {\n    getUser(userId: ID!): User\n    getProductsByOwner(userId: ID!): [Product]!\n    getProduct(productId: ID!): Product\n    getProductCore(productId: ID!): ProductCore!\n    getOrderById(orderId: ID!): Order!\n  }\n\n  type Mutation {\n    saveProduct(product: ProductInput!): ProductCore!\n    saveOrder(order: OrderInput!): Order!\n  }\n\n  type Subscription {\n    productAdded(productId: ID!): ProductCore\n    productDeleted(productId: ID!): ProductCore\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;