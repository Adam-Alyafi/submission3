const NotificationHelper = {
  sendNotification({ title, options }) {
    // eslint-disable-next-line no-underscore-dangle
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    // eslint-disable-next-line no-underscore-dangle
    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      // eslint-disable-next-line no-underscore-dangle
      this._requestPermission();
      return;
    }

    // eslint-disable-next-line no-underscore-dangle
    this._showNotification({ title, options });
  },

  // eslint-disable-next-line no-underscore-dangle
  _checkAvailability() {
    return !!('Notification' in window);
  },

  // eslint-disable-next-line no-underscore-dangle
  _checkPermission() {
    return Notification.permission === 'granted';
  },

  // eslint-disable-next-line no-underscore-dangle
  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  // eslint-disable-next-line no-underscore-dangle
  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
