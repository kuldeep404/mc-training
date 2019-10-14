"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _socket = _interopRequireDefault(require("socket.io-client"));

var _subscriptions = require("../graphql/subscriptions");

var _config = _interopRequireDefault(require("../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var socket = null;
var baseSocketUrl = _config["default"].socketUrl; // for establishing socket connection

function createWSConnection() {
  if (!socket) {
    socket = (0, _socket["default"])(baseSocketUrl, {
      transports: ['websocket'] // query: {
      //   token: 'user-management-server',
      // },

    });
  }

  return socket;
} // for publishing the data


var publishSubscriptionData = function publishSubscriptionData() {
  if (socket === null) {
    socket = createWSConnection(); // socket.on('connect', () => console.log('ws connection established for client'));
    // socket.on('connect_error', err => console.log('ws connection Failed', err));
    // get notifications update

    socket.on('getNotificationsUpdate', function (data) {
      if (data) {
        _subscriptions.pubSub.publish('viewNotifications', {
          viewNotifications: data
        });
      }
    }); // get tags status

    socket.on('getNotificationTagUpdate', function (data) {
      if (data) {
        console.log('data in sockett!!!!!!!', data);

        _subscriptions.pubSub.publish('getNotificationTagUpdate', {
          getNotificationTags: data
        });

        if (data.updatedMessagecount) {
          _subscriptions.pubSub.publish('viewNotifications', {
            viewNotifications: _objectSpread({
              userId: data.userId
            }, data.updatedMessagecount)
          });
        }
      }
    });
  }
};

var _default = publishSubscriptionData;
exports["default"] = _default;