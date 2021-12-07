module.exports = {
	pwa: {
		name: 'Studio Ghibli Search',
		themeColor: '#109CEB',
		msTileColor: '#000000',
		workboxOptions: {
			exclude: [/\.map$/, /manifest\.json$/, 'index.html']
		}
	}
}