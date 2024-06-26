const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},

	devtool: 'inline-source-map',

	devServer: {
		static: './dist',
		hot: true,
		watchFiles: ['src/**/*.html'],
	},
})
