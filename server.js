const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(logger('dev'));

module.exports = app;