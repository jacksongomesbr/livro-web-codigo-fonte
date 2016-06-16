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
            template: path.join(__dirname, '/src/index.html'),
            inject: 'head',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
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
            {test: /\.html$/, loaders: [
            "html?" + JSON.stringify({
                attrs: ["img:src", "img:ng-src"]
            })
            ], exclude: /node_modules/},
            {test: /\.js$/, loader: 'ng-annotate', exclude: /node_modules/},
            /*{test: /\.css$/, loader: 'style!css', exclude: /node_modules/},*/
            {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css?minimize!autoprefixer' },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/fonts/[hash].[ext]'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[hash].[ext]'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/fonts/[hash].[ext]'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/icons/[hash].[ext]'},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=assets/images/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
};
