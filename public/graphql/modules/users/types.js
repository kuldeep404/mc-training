"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userTypes = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  type User {\n  id: String!\n  email: UserEmail!\n  shopId: String!\n  firstName: String!\n  lastName: String!\n  brandName: String\n  location: String\n  roles: UserRole!\n}\n\n  type UserRole {\n    name: String!\n  }\n  # enum UserEnum {\n  #   Provider: provider\n  #   Operator: operator\n  #   Fulfiller: fullfiller\n  #   Sourcer: sourcer\n  # }\n\n  # type UserRole {\n  #   name: UserEnum\n  # }\n\n  type UserEmail {\n    address: String\n    verified: Boolean\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var userTypes = (0, _apolloServer.gql)(_templateObject());
exports.userTypes = userTypes;