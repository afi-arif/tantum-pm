const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports =  {
    output: {
        scriptType: 'module',
        path: path.resolve(__dirname, "public"),
        filename: '[name].js',
        publicPath: '/'
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    stats: {
        errorDetails: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [{loader: "babel-loader"}]
            },
            {
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            },
            {
                test: /\.(png|jpe?g|gif|mp4|svg|pdf)$/i,
                use: [{
                    loader: "file-loader", options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            favicon: "./src/images/favicon-16x16.png",
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
        new webpack.LoaderOptionsPlugin({
            options:{
                compilerOptions:{
                    "typeRoots": ["./src/types"]
                }
            }
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port: 5000
    }
}