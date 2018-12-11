const Notification = require('../models/notification.model.js');

exports.add = (req, res) => {
  const notification = new Notification(req.body);
  notification.save()
    .then((data) => {
      res.send({ message: 'Notification successfully sent!', data });
    }).catch((err) => {
      res.status(400).send(err);
    });
};
