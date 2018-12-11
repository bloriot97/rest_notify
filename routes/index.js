const router = require('express').Router();

require('./notification.route.js')(router);

router.get('/', (req, res) => {
  res.status(200).send('Test');
});


module.exports = router;
