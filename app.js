// include package
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
// include package

// include route
var indexRouter = require('./routes/indexRouter');
var boqRouter = require('./routes/boqRouter');
var app = express();
// include route

// config setting
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// config setting

// route
app.use('/', indexRouter);
app.use('/boq', boqRouter);
// route

module.exports = app;
