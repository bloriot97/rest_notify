const router = require('express').Router();

require('./notification.route.js')(router);
require('./user.route.js')(router);

module.exports = router;
