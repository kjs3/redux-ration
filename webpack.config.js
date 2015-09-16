var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer!sass?sourceMap') },
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/bundle.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
