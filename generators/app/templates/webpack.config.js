// webpack.config.js

const path = require('path');
const webpack = require('webpack');

//把 css 从 js 中独立抽离出来
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // 程序入口.
  entry: ['./src/index.js'],
  // 输出配置，包含额外选项.
  output: {
    // 输出文件.
    filename: 'bundle.js',
    // 输出路径.
    path: path.resolve(__dirname, 'dist')
  },
  // webpack 的主目录.
  context: __dirname,
  // webpack-dev-server 配置选项
  devServer: {
    // 静态文件位置
    contentBase: path.join(__dirname, 'public'),
  },
  devtool: 'source-map',
  // 这些选项确定如何处理项目中不同类型的模块
  module: {
    rules: [
      // 配置 js 后缀的文件，应该采用哪种加载器.
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      // 配置 css 后缀的文件，应该采用哪种加载器.
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  // 配置插件（插件以各种方式定制 webpack 构建过程）
  plugins: [
    // 设置存储后的使用路径.
    new ExtractTextPlugin('global.css')
  ]
};

// 模块导出
module.exports = config;
