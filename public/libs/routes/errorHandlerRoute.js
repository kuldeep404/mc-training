"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var _default = function _default() {
  var stack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (err, req, res, next) {
    return res.status(err.status).json({
      message: "error"
    });
  };
};

exports["default"] = _default;