const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(
    dbConfig.url,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

// define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Blockbuster application.' });
});

// listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Require users routes
require('./app/routes/user.routes.js')(app);
