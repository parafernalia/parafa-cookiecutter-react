import path from 'path'

export default {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash:8].js',
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'eslint-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(png|svg|jpe?g|gif|ico)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]',
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]',
					},
				},
			},
		],
	},
	resolve: { extensions: ['.js', '.json', '.jsx', '.css'] },
	target: 'web',
}
