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
var cptRouter = require('./routes/cptRouter');
// include route

// config setting
var app = express();
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
app.use('/cpt', cptRouter);
// route

console.log('app launch at : ' + process.env.PORT);

module.exports = app;
