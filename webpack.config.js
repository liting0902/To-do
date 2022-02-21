var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: [path.join(__dirname, "src", "index.js")],
	output: {
		path: path.resolve(__dirname, "dist"),

		filename: "js/bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".css"],
	},
	mode: "development",
	devtool: "cheap-module-eval-source-map",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.htm"),
			filename: "index.bundle.htm",
			inject: "body",
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
		port: 9999,
		historyApiFallback: {
			index: "/index.bundle.htm",
		},
	},
};
