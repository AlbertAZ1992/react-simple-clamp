const path = require('path');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const config = require('./rollup.config');

const PORT = 3000;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.resolve('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(`[dev]: ${devUrl}`);
}, 1000);

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    ...[
      serve({
        port: PORT,
        contentBase: [path.resolve(__dirname, '..')],
        historyApiFallback: true, // Set to true to return index.html instead of 404
      }),
      livereload(),
    ],
  ],
};
