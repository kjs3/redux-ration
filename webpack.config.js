var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer!sass?sourceMap') },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css')
  ]
};
