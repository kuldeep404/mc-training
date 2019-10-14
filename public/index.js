"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServerExpress = require("apollo-server-express");

var _config = _interopRequireDefault(require("./config"));

var _Server = _interopRequireDefault(require("./Server"));

var _Database = _interopRequireDefault(require("./services/Database"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

var _graphQlFileReader = require("./graphql/graphQlFileReader");

var _logger = _interopRequireDefault(require("./libs/logger"));

var types = _interopRequireWildcard(require("./graphql/rootTypes"));

console.log("--------");
console.log(JSON.stringify(_config["default"], null, 2));
var server = new _Server["default"](_config["default"]);
server.bootstrap();
var runningServer = server.application.listen(_config["default"].port);
runningServer.on("listening",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var ann;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ann = "|| App is running at port '".concat(_config["default"].port, "' in '").concat(_config["default"].nodeEnv, "' mode ||");
          console.log('server listenning on', _config["default"].port); // Database.open({ mongoUri: config.mongoUrl }).then(async () => {
          //   console.log('db connection made....', config.port);
          //   await startApollo();
          // });

          _context.next = 4;
          return startApollo();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
runningServer.on("error", function (err) {
  _logger["default"].error("error while starting---", err);
});

function startApollo() {
  return _startApollo.apply(this, arguments);
} // publishSubscriptionData();


function _startApollo() {
  _startApollo = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var path, apolloServer;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("startApollo - apollo:");
            path = require("path").resolve(__dirname, "./**/*.graphql");

            try {
              // const typeDefsData = await loadGqlFiles(path)
              // const typeDefs = gql`
              //   ${typeDefsData}
              // `;
              apolloServer = new _apolloServerExpress.ApolloServer({
                typeDefs: (0, _toConsumableArray2["default"])(Object.values(types)),
                resolvers: _resolvers["default"],
                playground: true,
                introspection: true
              });
              apolloServer.applyMiddleware({
                app: server.application
              });
              apolloServer.installSubscriptionHandlers(runningServer);
              console.log("startApollo - apollo started now!!!!:");
            } catch (err) {
              console.error('error inloading types', err);
            }

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _startApollo.apply(this, arguments);
}