var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src/scripts/main.js'),
  dist: path.join(__dirname, 'assets/scripts')
};

module.exports = {
  entry: {
    bundle: [
      PATHS.src
    ],

    vendor: [
      '!!script!jquery/dist/jquery.min.js',
      // '!!script!foundation-sites/dist/foundation.min.js'
    ]
  },

  output: {
      path: PATHS.dist,
      filename: '[name].js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', 
      jQuery: 'jquery'
    }),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ],

  externals: {
    jquery: 'jQuery'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      { 
        test: /node_modules\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      }
    ]
  }
};