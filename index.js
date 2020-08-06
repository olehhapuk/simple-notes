const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const api = require('./api');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(helmet());

app.use('/api', api);

app.use((req, res, next) => {
  const error = new Error('Not found');
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const newError = new Error(error);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.json({
    code: statusCode,
    error: newError,
    stack: error.stack,
  });
});

const port = process.env.APP_PORT || 5000;
app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
