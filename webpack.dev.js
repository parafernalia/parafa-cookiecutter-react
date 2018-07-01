import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default merge(common, {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'babel-polyfill',
		'./src/index.js',
	],
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(c|sc|sa)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { importLoaders: 1, sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: ({ resourcePath }) => [
								require('postcss-import')({ root: resourcePath }),
								require('autoprefixer')(),
							],
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: [path.resolve(__dirname, 'src', 'sass')],
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			title: 'Document',
			lang: 'pt-BR',
			appMountId: 'app',
		}),
	],
})
