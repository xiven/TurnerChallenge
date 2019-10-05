// load in the environment vars
require('dotenv').config({ silent: true });
const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(helmet());
app.use(express.json({ extended: false }));
app.use((req, res, next) => {
  const apiKey = req.get('API-Key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    res.status(401).json({ error: 'Not Authorized' });
  } else {
    next();
  }
});

// Define Routes
app.use('/api/titles', require('./routes/titles'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

module.exports = app;
