"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderTypes = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  input OrderInput {\n    sellerId: String!\n    shop: String!\n    shopifyOrderId: String!\n    orderNumber: String! \n  }\n\n  type Order {\n    id: String!\n    seller: User!\n    shop: String!\n    shopifyOrderId: String!\n    orderNumber: String!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var orderTypes = (0, _apolloServer.gql)(_templateObject());
exports.orderTypes = orderTypes;