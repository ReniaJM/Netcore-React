const webpack= require('webpack');
const path= require('path');

const APP_DIR = path.resolve(__dirname, '');
const BUILD_DIR = path.resolve(__dirname,'build');


const config ={
    entry: APP_DIR + '/app.js',
    output:{
        path:BUILD_DIR,
        filename: 'bungle.js'
    }};


module.exports = config;