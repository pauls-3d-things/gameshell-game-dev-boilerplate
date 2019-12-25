var path = require('path');
// const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var entries = {};

entries.app = ["./src/app/index.ts"]

module.exports = {
    entry: entries,
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loaders: ['ts-loader'],
                exclude: /node_modules/,
                include: /src/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.min.js"
    },
    devtool: "eval",
    devServer: {
        contentBase: "dist/",
        port: 8081,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080/api/',
        //         secure: false
        //     }
        // }
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            checkSyntacticErrors: true
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: './' // inside dist/
            },
            {
                from: 'src/package.json',
                to: './' // inside dist/
            }
        ])
    ]
};