import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { HOST, PORT, DIST_PATH, SRC_PATH, ROOT_PATH, MODULES_PATH } from './config'


const isProduction = process.env.NODE_ENV === 'production'


export default {
  mode: isProduction ? 'production' : 'development',

  entry: path.resolve(SRC_PATH, './index.js'),

  resolve: {
    modules: [
      MODULES_PATH,
      SRC_PATH,
    ],
    extensions: ['.js', '.jsx', '.pcss'],
  },

  output : {
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader', 
      },
      {
        test: /\.p?css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
              }
            }
          },
          'postcss-loader',
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(DIST_PATH, './index.html'),
      template: path.resolve(SRC_PATH, './index.ejs' ),
      inject: true,
      isProduction,
    }),
    new MiniCssExtractPlugin()
  ],

  devServer: {
    contentBase: DIST_PATH,
    historyApiFallback: true,
    host: HOST,
    port: PORT
  }
}