const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


const config = {
  entry: path.resolve(__dirname,"src","index.js"),
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    inline: true, 
    contentBase: path.join("dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/, 
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: './',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]',
            publicPath: './',
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({filename: 'main.css'}),
  ]
};

module.exports = config;