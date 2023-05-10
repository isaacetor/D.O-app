module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{html,js,css}'],
  swDest: 'build/sw.js',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/dirty-online\.onrender\.com/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        networkTimeoutSeconds: 10,
      },
    },
  ],
};
