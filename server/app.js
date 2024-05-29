const express = require('express');
// const deleteHeaders = require("./middleware/deleteHeaders");
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const indexRouteApi = require('./routes/index.routes');
const removeHeader = require('./middleware/removeHeader');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(removeHeader);

app.use('/api', indexRouteApi);

app.listen(3000, () => {
  console.log(`Салямалекум на 3000 порту`);
});

module.exports = app;
