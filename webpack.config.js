const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: 'css/styles.css'
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/scripts.js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						'css-loader', 
						'postcss-loader', 
						'sass-loader'
					],
					publicPath: '../'
				})
			},
			{
				test: /\.css$/,
				use: extractPlugin.extract({
					use: [
						{
							loader: 'css-loader'
						}
					]
				})
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				]
			},
			{
				test: require.resolve('jquery'),
				use: [{
					loader: 'expose-loader',
					options: '$'
				}]
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						interpolate: true,
						minimize: false
					}
				}
			},
			{
				test: /\.(jpe?g|png|svg|gif|mp4)$/,
				include: [
					path.resolve(__dirname, 'src/img')
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/'
						}
					},
					'image-webpack-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff)$/,
				include: path.resolve(__dirname, 'src/fonts'),
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]',
						publicPath: '../'
					}
				}
			}
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	// ...
		// }),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			Popper: ['popper.js', 'default'],
			'window.jQuery': 'jquery',
			Util: 'exports-loader?Util!bootstrap/js/dist/util',
			Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown'
		}),
		extractPlugin,
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: 'src/about.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'contacts.html',
			template: 'src/contacts.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'investment.html',
			template: 'src/investment.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'presentations.html',
			template: 'src/presentations.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'press.html',
			template: 'src/press.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'products.html',
			template: 'src/products.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'article.html',
			template: 'src/article.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'product.html',
			template: 'src/product.html',
			minify: false
		}),
		new HtmlWebpackPlugin({
			filename: '404.html',
			template: 'src/404.html',
			minify: false
		}),
		new CleanWebpackPlugin(['dist'])
	],
	devServer: {
		proxy: {
			"/ideal-pharma": {
				target: "http://localhost"
			}
		}
	}
};