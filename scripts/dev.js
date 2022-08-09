import path from 'path';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import progress from 'rollup-plugin-progress';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sucrase from '@rollup/plugin-sucrase';
import json from '@rollup/plugin-json';

const PORT = 8288;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.resolve('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(`[dev]: ${devUrl}`);
}, 1000);

const options = {
  input: 'example/demo.jsx',
  output: [
    {
      file: 'example/index.js',
      format: 'umd',
      name: 'index',
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    json(),
    nodeResolve({ extensions, browser: true }),
    commonjs(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx'],
    }),
    babel({
      extensions,
      include: ['src/**/*', 'example/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    progress({ clearLine: false }),
    serve({
      port: PORT,
      contentBase: [path.resolve('example'), path.resolve('dist')],
      historyApiFallback: true, // Set to true to return index.html instead of 404
    }),
    livereload(),
  ],
};

export default options;
