var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch', // RHL patch
    'webpack-dev-server/client?http://localhost:8800',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, '/src')
    },
    {
      test: /\.(css|scss)$/,
      loaders: ['style-loader', {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]_[local]__[hash:base64:5]'
        },
        
      }],
      include: [path.join(__dirname, '/src')],
      exclude: [path.join(__dirname, '/node_modules/antd')]
    },
    // Without Object on className
    // {
    //   test: /\.(css|scss)$/,
    //   loaders: ['style-loader', 'css-loader'],
    //   // include: path.join(__dirname, '/src')
    // }]
    {
      test: /\.(css|scss)$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.join(__dirname, '/node_modules/antd'),
      exclude: path.join(__dirname, '/src')
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};