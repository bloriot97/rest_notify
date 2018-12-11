const mongoose = require('mongoose');
const schemas = require('../schemas/');
const Notifier = require('../notifier');


const NotificationSchema = mongoose.Schema(schemas.notification);

NotificationSchema.post('save', (doc, next) => {
  Notifier.notify(doc);
  next();
});

module.exports = mongoose.model('Notification', NotificationSchema);
