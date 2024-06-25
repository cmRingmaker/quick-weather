const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/js/index.js',
	output: {
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[hash][ext][query]',
				},
			},
		],
	},
}
