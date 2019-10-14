"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _appRootPath = _interopRequireDefault(require("app-root-path"));

var _winston = _interopRequireWildcard(require("winston"));

var level = process.env.LOG_LEVEL || "info";
var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    printf = _winston.format.printf,
    splat = _winston.format.splat,
    prettyPrint = _winston.format.prettyPrint;
var myFormat = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      label = _ref.label,
      timestamp = _ref.timestamp,
      meta = _ref.meta;
  return "".concat(timestamp, " :   ").concat(level, ":  ").concat(message, " :    ").concat(meta ? JSON.stringify(meta, null, 2) : "");
});
var logger = (0, _winston.createLogger)({
  format: combine(timestamp(), splat(), myFormat, _winston.format.colorize({
    all: true
  })),
  transports: [new _winston.transports.Console({
    level: level,
    prettyPrint: true,
    timestamp: function timestamp() {
      return new Date().toISOString();
    }
  }), new _winston.transports.File({
    filename: "".concat(_appRootPath["default"], "/logs/error.log"),
    level: "error"
  }) //  new transports.File({
  //    filename: `${appRoot}/logs/combined.log`,
  //    level: 'silly'
  //  })
  ]
});
var _default = logger;
exports["default"] = _default;