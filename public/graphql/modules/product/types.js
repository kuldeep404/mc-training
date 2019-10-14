"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productTypes = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\ntype Product {\n  id: String\n  availability: String\n  name: String\n  condition: String\n  ecommercePlatform: String\n  description: String\n  dimension: ProductDimesion\n  price: Int\n  primaryImage: String\n  storeProductId: Int\n  type: String\n  weight: Int\n  owner: User\n  provider: [User]\n  operator: [User]\n  fullFiller: [User]\n}\n\ntype ProductCore {\n  _id: String!\n  title: String!\n  vendor: String!\n  handle: String!\n  vendorId: String!\n  status: String!\n  inventoryManagement: String!\n  isTaxable: Boolean!\n}\n\ntype ProductImage {\n  name: String\n  path: String\n}\n\ntype ProductDimesion {\n  depth: Int\n  height: Int\n  width: Int\n}\n\ninput ProductInput {\n  title: String!\n  handle: String!\n  inventoryManagement: String\n  vendor: String!\n  vendorId: String!\n  status: String!\n  isTaxable: Boolean\n}\n\ntype ProductRes {\n  productId: String!\n}\n\n# type PrimaryImage {\n# ToDO its a plain obj in model\n# }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var productTypes = (0, _apolloServer.gql)(_templateObject());
exports.productTypes = productTypes;