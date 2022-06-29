module.exports = {
  pwa: {
    name: 'Studio Ghibli Search',
    themeColor: '#109CEB',
    msTileColor: '#ffffff',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html'],
    },
    iconPaths: {
      appleTouchIcon: 'public/img/icons/logo.png',
      msTileImage: 'public/img/icons/logo.png',
    },
  },
};
