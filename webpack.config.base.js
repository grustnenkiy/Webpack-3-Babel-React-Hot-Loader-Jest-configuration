import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: [
        './index'
    ],

    output: {
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app',
            hash: true,
            template: './index.ejs',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
}