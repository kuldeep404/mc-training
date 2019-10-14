import io from 'socket.io-client';
import { pubSub } from '../graphql/modules';
import config from '../config';

let socket = null;
const baseSocketUrl = config.socketUrl;

// for establishing socket connection
function createWSConnection() {
  if (!socket) {
    socket = io(baseSocketUrl, {
      transports: ['websocket'],
      // query: {
      //   token: 'user-management-server',
      // },
    });
  }
  return socket;
}

// for publishing the data
export const publishSubscriptionData = () => {
  if (socket === null) {
    socket = createWSConnection();
    // socket.on('connect', () => console.log('ws connection established for client'));
    // socket.on('connect_error', err => console.log('ws connection Failed', err));

    // get notifications update
    socket.on('getNotificationsUpdate', (data) => {
      if (data) {
        pubSub.publish('viewNotifications', { viewNotifications: data });
      }
    });

    // get tags status
    socket.on('getNotificationTagUpdate', (data) => {
      if (data) { console.log('data in sockett!!!!!!!', data);
        pubSub.publish('getNotificationTagUpdate', { getNotificationTags: data });
        if (data.updatedMessagecount) {
          pubSub.publish('viewNotifications',
          { viewNotifications: { userId: data.userId, ...data.updatedMessagecount } });
        }
      }
    });
  }
};

