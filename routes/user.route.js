const User = require('../controllers/user.controller.js');

module.exports = (router) => {
  router.post('/users', User.add);
  // router.get('/messages', message.getSentMessages);
  // router.put('/messages/:userId', user.update);
  // router.delete('/users/:userId', user.delete);
};
