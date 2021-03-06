const Notification = require('../controllers/notification.controller.js');
const User = require('../controllers/user.controller.js');

module.exports = (router) => {
  router.post('/notify/:userId', User.get, Notification.add);
  // router.get('/messages', message.getSentMessages);
  // router.put('/messages/:userId', user.update);
  // router.delete('/users/:userId', user.delete);
};
