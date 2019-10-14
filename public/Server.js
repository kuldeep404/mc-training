"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _morganBody = _interopRequireDefault(require("morgan-body"));

var _router = _interopRequireDefault(require("./router"));

var _routes = require("./libs/routes");

var _constants = require("./libs/constants");

var Server =
/*#__PURE__*/
function () {
  function Server(coreConfig) {
    (0, _classCallCheck2["default"])(this, Server);
    this.coreConfig = coreConfig;
    this.app = new _express["default"]();
  }

  (0, _createClass2["default"])(Server, [{
    key: "bootstrap",
    value: function () {
      var _bootstrap = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initHelmet();
                this.initCompress();
                this.initCookieParser();
                this.initCors();
                this.initJsonParser();
                this.initMethodOverride();
                this.initLogger();
                this.setupRoutes();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bootstrap() {
        return _bootstrap.apply(this, arguments);
      }

      return bootstrap;
    }()
  }, {
    key: "initCompress",
    value: function initCompress() {
      this.app.use((0, _compression["default"])());
    }
  }, {
    key: "initCookieParser",
    value: function initCookieParser() {
      this.app.use((0, _cookieParser["default"])());
    }
  }, {
    key: "initCors",
    value: function initCors() {
      //TODO: need to add proper CORS
      // const corsOptions = {
      //   origin: '*',
      //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      // };
      this.app.use((0, _cors["default"])());
    }
  }, {
    key: "initHelmet",
    value: function initHelmet() {
      this.app.use((0, _helmet["default"])());
    }
  }, {
    key: "initJsonParser",
    value: function initJsonParser() {
      this.app.use(_bodyParser["default"].json());
      this.app.use(_bodyParser["default"].urlencoded({
        extended: true
      }));
    }
  }, {
    key: "initLogger",
    value: function initLogger() {
      if (this.coreConfig.nodeEnv !== _constants.EnvVars.TEST) {
        (0, _morganBody["default"])(this.app);
      }
    }
  }, {
    key: "initMethodOverride",
    value: function initMethodOverride() {
      this.app.use((0, _methodOverride["default"])());
    }
  }, {
    key: "setupRoutes",
    value: function setupRoutes() {
      var apiPrefix = this.coreConfig.apiPrefix;
      this.app.use(apiPrefix, _router["default"]); //this.app.use(notFoundRoute);

      this.app.use((0, _routes.errorHandlerRoute)());
    }
  }, {
    key: "application",
    get: function get() {
      return this.app;
    }
  }]);
  return Server;
}();

exports["default"] = Server;