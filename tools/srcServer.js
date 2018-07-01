import browserSync from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.dev'

const bundler = webpack(config)

browserSync({
	single: true,
	server: {
		port: 3000,
		ui: { port: 3001 },
		baseDir: 'src',
		middleware: [
			webpackDevMiddleware(bundler, {
				publicPath: config.output.publicPath,
				noInfo: true,
				quiet: false,
				stats: {
					assets: false,
					colors: true,
					version: false,
					hash: false,
					timings: false,
					chunks: false,
					chunkModules: false,
				},
			}),
			webpackHotMiddleware(bundler),
		],
	},
	files: ['src/css/*.css', 'src/*.html'],
})
