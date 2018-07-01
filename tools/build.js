/* eslint-disable no-console */
import webpack from 'webpack'
import chalk from 'chalk'
import config from '../webpack.prod'

process.env.NODE_ENV = 'production'

console.log(
	chalk.blue('Generating minified bundle. This will take a moment...')
)

webpack(config).run((error, stats) => {
	if (error) {
		// so a fatal error occurred. Stop here.
		console.log(chalk.red(error))
		return 1
	}

	const jsonStats = stats.toJson()

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(chalk.red(error)))
	}

	if (jsonStats.hasWarnings) {
		console.log(chalk.yellow('Webpack generated the following warnings: '))
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
	}

	console.log(`Webpack stats: ${stats}`)

	// if we got this far, the build succeeded.
	console.log(
		chalk.green(
			'Your app is compiled in production mode in /dist. Run "npm run open:dist" to check the build.'
		)
	)

	return 0
})
