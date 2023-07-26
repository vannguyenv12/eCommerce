require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const { checkOverload } = require('./helpers/check.connect');
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// DB
require('./dbs/init.mongodb');
// checkOverload();

module.exports = app;
