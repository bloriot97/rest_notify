const express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://mongo:27017');

const app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
