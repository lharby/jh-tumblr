const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const srcFolder = './src/';

const configProdFE = {
    entry: {
        'app.min': srcFolder + 'app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: globImporter()
                            }
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

module.exports = [configProdFE];
