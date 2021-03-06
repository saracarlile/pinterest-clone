// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const passport = require('passport');
const session = require('express-session');
var cookieParser = require('cookie-parser');


const app = express();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = require('./config/db');



mongoose.connect(db.url, { useMongoClient: true })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));
  

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

// Set our routes
//app.use('/api', api); not sure if api routes will be used

const auth = require('./routes/auth');

const pin = require('./routes/pin');

app.use('/auth', auth);

app.use('/pin', pin);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));