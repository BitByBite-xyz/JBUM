export const CHANGE_NOTIFICATION_STATUS = 'CHANGE_NOTIFICATION_STATUS';

export const changeNotificationStatus = status => ({
  type: CHANGE_NOTIFICATION_STATUS,
  status,
});
