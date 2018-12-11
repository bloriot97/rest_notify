const Notification = require('../controllers/notification.controller.js');

module.exports = (router) => {
  router.post('/notify', Notification.add);
  // router.get('/messages', message.getSentMessages);
  // router.put('/messages/:userId', user.update);
  // router.delete('/users/:userId', user.delete);
};
