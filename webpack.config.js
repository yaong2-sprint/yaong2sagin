const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

module.exports = {
  // webpack은 mode에 따라 내장 최적화
  mode: prod ? 'production' : 'development', // 'production' or "development" or "none"
  // 소스 맵 생성 여부 및 방법 설정
  devtool: prod ? 'none' : 'eval-source-map', // https://brightparagon.wordpress.com/2018/06/27/webpack-v4-development-configuration/
  entry: './src/main.js',
  output: {
    filename: 'static/js/main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `./index.html` }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port,
    hot: true,
    publicPath: '/',
  },
};
