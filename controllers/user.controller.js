const randomstring = require('randomstring');
const Notification = require('./notification.controller');
const User = require('../models/user.model.js');

exports.get = (req, res, next) => {
  User.findOne({ token: req.params.userId })
    .then((data) => {
      req.user = data;
      if (!data) {
        res.status(400).send(data);
      }
      next();
    }).catch((err) => {
      res.status(400).send(err);
    });
};


exports.add = (req, res) => {
  req.body.token = randomstring.generate(8);
  req.body.secret = randomstring.generate(16);
  const user = new User(req.body);
  user.save()
    .then((userInfo) => {
      Notification.newUser(userInfo);
      res.send({ message: 'User successfully added!' });
    }).catch((err) => {
      res.status(400).send(err);
    });
};
