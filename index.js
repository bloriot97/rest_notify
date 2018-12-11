const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./routes');
const db = require('./db');
const Notifier = require('./notifier');


// DB setup
db.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  Notifier.notify('Test', 'Ping');
  res.send('pong');
});

app.use('/', routes);

app.listen(3000);


module.exports = app; // for testing
