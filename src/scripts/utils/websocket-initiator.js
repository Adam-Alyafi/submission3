import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    // eslint-disable-next-line no-underscore-dangle
    webSocket.onmessage = this._onMessageHandler;
  },

  // eslint-disable-next-line no-underscore-dangle
  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name} is on restaurant!`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMAGE + restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
