var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve('src'),
    entry: './app.js',
    output: {
        path: path.resolve('dist'),
        //publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    module: {

        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },

            // load html by require/import
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css']
            }

        ]

    },

    resolve: {
        extensions: ['', '.js']
    },

    watch: true
}
