const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	devServer: {
		hot: true,
		compress: true,
		open: true,
		port: 8000,
		stats: {
			colors: true,
			timings: false,
			assets: false,
			chunks: false,
			modules: false,
			source: false,
			errors: false,
			errorDetails: false,
			warnings: false
		}
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('autoprefixer')({
										browsers: ['last 2 versions']
									})
								]
							}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(handlebars)$/,
				loader: "handlebars-loader"
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './src/views/index.handlebars'),
			inject: true
		  }),
		new HtmlWebpackPlugin({
			filename: 'home.html',
			template: path.resolve(__dirname, './src/views/home.handlebars'),
			inject: true
		  }),
		new HtmlWebpackPlugin({
			filename: 'search.html',
			template: path.resolve(__dirname, './src/views/search.handlebars'),
			inject: true
		  }),
		new HtmlWebpackPlugin({
			filename: 'report.html',
			template: path.resolve(__dirname, './src/views/report.handlebars'),
			inject: true
		  }),
		new HtmlWebpackPlugin({
			filename: 'documentation.html',
			template: path.resolve(__dirname, './src/views/documentation.handlebars'),
			inject: true
		  }),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	watch: true
};