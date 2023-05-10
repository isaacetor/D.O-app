const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  //...
  plugins: [
    //...
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
