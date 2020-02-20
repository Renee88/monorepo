const HtmlWebPackPlugin = require("html-webpack-plugin");
const resolve = require('path').resolve;
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('public'),
    filename: 'main.js'
  },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true,
      compress: true,
      port: 3000
    }
  };