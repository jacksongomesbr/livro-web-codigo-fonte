var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        }),
        new ngAnnotatePlugin({ add: true }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            /*{test: /\.css$/, loader: 'style!css', exclude: /node_modules/},*/
            {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css?minimize!autoprefixer' },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
