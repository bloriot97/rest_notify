const Notification = require('../models/notification.model.js');

exports.add = (req, res) => {
  req.body.from = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const notification = new Notification(req.body);
  notification.save()
    .then((data) => {
      res.send({ message: 'Notification successfully sent!', data });
    }).catch((err) => {
      res.status(400).send(err);
    });
};
