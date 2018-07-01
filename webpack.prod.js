import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import MinifyPlugin from 'babel-minify-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'

export default merge(common, {
	entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(c|sc|sa)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: ({ resourcePath }) => [
								require('postcss-import')({ root: resourcePath }),
								require('autoprefixer')(),
								require('cssnano')(),
							],
						},
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: [path.resolve(__dirname, 'src', 'sass')],
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new CleanWebpackPlugin(['dist']),
		new MinifyPlugin(),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
		}),
		new MiniCssExtractPlugin({ filename: '[name]-[contenthash:8].css' }),
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			title: 'Document',
			lang: 'pt-BR',
			appMountId: 'app',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
	],
})
