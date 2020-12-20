const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    watch: true,
    output:{
        path:path.resolve(__dirname, "build"),
        filename:"bundle.js",
        publicPath: ''
    },
    resolve:{
        extensions:[".ts",".tsx",".js",".jsx"]
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx|ts|tsx)$/,
                exclude:/node_modules/,
                use:[{loader:"babel-loader"}]
            },
            {
                test:/\.html$/,
                use:[{loader:"html-loader"}]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [ {loader: "file-loader",  options: {
                    name: '[path][name].[ext]'
                }}]
            },
            {
                test:/\.s[ac]ss$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV":JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devtool: 'inline-source-map',
    devServer:{
        historyApiFallback:true,
        port:5000
    }
}