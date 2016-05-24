var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: './imageloaderhtml.js',
  entry: './ImageLoader.js',
    // entry: './ImageLoaderParallel.js',
    //entry: './ImageLoaderSerial.js',
    // entry: '.ImageLoaderNone.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                  presets: ['es2015'],
              }
             }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};