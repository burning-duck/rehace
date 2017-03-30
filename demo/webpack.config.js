const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'docs'),
    port: 3000,
    overlay: true
  },
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'rehace-counter-demo.js',
    path: path.resolve(__dirname, '..', 'docs')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname),
          path.resolve(__dirname, '..', 'src')
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
