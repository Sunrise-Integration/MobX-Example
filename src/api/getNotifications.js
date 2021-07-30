import {notifications} from './notification';

export const getCurrentNotifications = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(notifications);
    }, 1000);
  });
};

export const getNewNotifications = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: 'new',
        description: 'Hey! Im a new notification',
      });
    }, 1000);
  });
};
