import browserSync from 'browser-sync'

browserSync({
	server: {
		port: 4000,
		ui: { port: 4001 },
		server: { baseDir: 'dist' },
	},
	files: ['src/css/*.css', 'src/*.html'],
})
