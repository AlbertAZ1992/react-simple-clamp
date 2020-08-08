import path from 'path';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import config from './rollup.config';

const PORT = 8288;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.resolve('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(`[dev]: ${devUrl}`);
}, 1000);

const options = {
  ...config,
  input: 'example/demo.jsx',
  output: [
    {
      file: 'example/index.js',
      format: 'umd',
      name: 'index',
    },
  ],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    ...config.plugins,
    ...[
      serve({
        port: PORT,
        contentBase: [path.resolve('example')],
        historyApiFallback: true, // Set to true to return index.html instead of 404
      }),
      livereload(),
    ],
  ],
};

export default options;
