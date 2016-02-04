var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: {
        bundle: [
            './src/index.js'
        ]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.css$/,  loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.scss/,  loader: ExtractTextPlugin.extract("style", "css!sass") },
            { test: /\.woff(2)?(\?.+)?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?.+)?$/, loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: 'dist',
        filename: '[name]-[hash].js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
};