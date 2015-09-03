var path = require('path');
var webpack = require('webpack');
var AssetsPlugin         = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(ROOT_PATH, "assets/js/entry"),
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: "[name]-[hash].js",
        publicPath:  "/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'] },
            {
              // test for both js and jsx
              test: /\.jsx?$/,

              // use babel loader with Stage 1 features
              loader: 'babel?stage=1',

              // operate only on our app directory
              include: path.resolve(ROOT_PATH, 'assets/js')
            }
        ]
    },
    // devtool: 'source-map',
    plugins: [
       assetsPluginInstance
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //       warnings: false
    //     }
    //   })
    ]
};
