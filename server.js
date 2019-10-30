const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3050, ()=> console.log('Listening'));