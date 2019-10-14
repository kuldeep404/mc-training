"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = _interopRequireDefault(require("../libs/logger"));

var Database =
/*#__PURE__*/
function () {
  function Database() {
    (0, _classCallCheck2["default"])(this, Database);
  }

  (0, _createClass2["default"])(Database, null, [{
    key: "open",
    value: function open(_ref) {
      var mongoUri = _ref.mongoUri;
      return new Promise(function (resolve, reject) {
        var options = {
          autoIndex: true,
          // Build indexes
          bufferMaxEntries: 0,
          keepAlive: 1,
          poolSize: 10,
          // Maintain up to 10 socket connections
          reconnectInterval: 500,
          // Reconnect every 500ms
          reconnectTries: Number.MAX_VALUE,
          // Never stop trying to reconnect
          useNewUrlParser: true,
          useUnifiedTopology: true
        };

        _mongoose["default"].connect(mongoUri, options);

        _mongoose["default"].connection.on("connected", function () {
          console.log('connection made to db!!!!!!');

          _logger["default"].info('connected to mongo client!');

          resolve();
        });

        _mongoose["default"].connection.on("error", function (err) {
          console.log('connection not made to db!!!!!!'); // throw new Error(`unable to connect to database: ${mongoUri}`);

          reject(err);
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      _mongoose["default"].disconnect();
    }
  }]);
  return Database;
}();

exports["default"] = Database;