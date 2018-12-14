const Notification = require('../models/notification.model.js');

exports.add = (req, res) => {
  req.body.from = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  req.body.to = req.user.token;
  req.body.email = req.user.email;
  const notification = new Notification(req.body);
  notification.save()
    .then(() => {
      res.send({ message: 'Notification successfully sent!' });
    }).catch((err) => {
      res.status(400).send(err);
    });
};

exports.newUser = (user) => {
  const notificationContent = {
    from: 'The server',
    to: user.token,
    email: user.email,
    title: 'Account successfully created',
    content: `Your token is ${user.token}`,
  };
  const notification = new Notification(notificationContent);
  notification.save()
    .then(() => {
      // res.send({ message: 'Notification successfully sent!' });
    }).catch(() => {
      // res.status(400).send(err);
    });
};
