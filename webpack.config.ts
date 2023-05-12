import { InjectManifest } from 'workbox-webpack-plugin';


module.exports = {
  //...
  plugins: [
    //...
    new InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js',
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/],
    }),
  ],
};

