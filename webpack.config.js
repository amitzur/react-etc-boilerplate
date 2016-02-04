var HtmlWebpackPlugin = require('html-webpack-plugin');


var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        bundle: [
            './src/index.js'
        ]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.css$/,  loader: "style!css?modules&sourceMap" },
            { test: /\.scss/,  loaders: ["style", "css?modules&sourceMap", "sass?sourceMap"] },
            { test: /\.woff(2)?(\?.+)?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?.+)?$/, loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: 'dist',
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        })
    ],
    devServer: {
        colors: true,
        inline: true,
        hot: true
    }
};