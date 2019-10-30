const express = require('express');


const app = express();


console.log(process.env.NODE_EVN);

if(process.env.NODE_EVN !== 'production'){
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}else{
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'))
    })
}

app.listen(3050, ()=> console.log('Listening'));