const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./api');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://alphawhoami:alpha123456@ds213896.mlab.com:13896/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function(req, res, next){
  const err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
