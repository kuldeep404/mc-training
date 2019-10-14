"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _constants = require("../libs/constants");

if (process.env.NODE_ENV === _constants.EnvVars.TEST) {
  _dotenv["default"].config({
    path: '.env.test'
  });
} else {
  _dotenv["default"].config();
}

var _default = {
  apiPrefix: process.env.API_PREFIX || '/api',
  mongoUrl: process.env.MONGO_URL,
  nodeEnv: process.env.NODE_ENV,
  oktaUri: process.env.OKTA_URL,
  oktaClientId: process.env.OKTA_CLIENT_ID,
  port: process.env.PORT,
  socketUrl: process.env.SOCKET_URL,
  roleManagerServiceUrl: process.env.ROLE_MANAGER_SERVICE_URL
};
exports["default"] = _default;