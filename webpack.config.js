const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/app.jsx',
  ],
  output: {
    publicPath: '/dist',
    filename: 'main.js',
  },
  devtool: 'source-map',
  devServer: {
    // enable HMR on the server
    hot: true,

    // match the output path
    // contentBase: path.resolve(__dirname, 'dist'),

    // match the output `publicPath`
    publicPath: '/dist',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins() { // post css plugins, can be exported to postcss.config.js
              return [
                precss,
                autoprefixer,
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles SASS to CSS
        }],
      }, {
        test: /\.html$/,
        use: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader?hash=sha512&digest=hex&publicPath=/assets/&name=img/[hash].[ext]'],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        use: ['file-loader?hash=sha512&digest=hex&name=fonts/[hash].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.html'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
  ],
};
