const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './app.js',
	},
	output: {
		path: path.resolve(__dirname, './app'),
		filename: '[name].min.js',
	},
	module: {
		loaders: [
			{
				test: /\.(scss)$/,
				loader: ExtractTextPlugin.extract({
					fallBackLoader:'style-loader',
					loader:'css-loader!sass-loader'
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].min.css',
			allChunks: true,
		}),
	],
	watch: true,
};
