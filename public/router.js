"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/health-check', function (req, res) {
  return res.send('OK');
});
var _default = router;
exports["default"] = _default;