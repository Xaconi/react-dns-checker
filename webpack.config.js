const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = (env) => {
	const currentPath = path.join(__dirname);
	const basePath = currentPath + '/.env';
	const envPath = basePath + '.' + env.ENVIRONMENT;
	const finalPath = fs.existsSync(envPath) ? envPath : basePath;
	const fileEnv = dotenv.config({ path: finalPath }).parsed;

	const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
		return prev;
	}, {});

	return {
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js",
		},
		resolve: {
			extensions: [".js", ".jsx", ".css"],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
					loader: "babel-loader",
					},
				},
				{
					test: /\.html$/,
					use: [
					{
						loader: "html-loader",
					},
					],
				},
				{ 
					test: /\.css$/, 
					loader: "style-loader!css-loader"
				},
				{
					test: /\.svg$/,
					use: [
					  {
						loader: 'svg-url-loader',
						options: {
						  limit: 10000,
						},
					  },
					],
				},
				{
					test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
					  {
						loader: 'file-loader',
						options: {
						  name: '[name].[ext]',
						  outputPath: 'fonts/'
						}
					  }
					]
				}
			],
		},
		plugins: [
			new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
			}),
			new webpack.DefinePlugin(envKeys)
		],
	}
};
